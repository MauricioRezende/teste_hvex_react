import React, { Component } from 'react'
import { Container, ButtonReply } from './styles'
import { Link } from 'react-router-dom'
import { FaReply, FaHeart, FaRegHeart } from 'react-icons/fa'
import api_boredapi from '../../services/api_boredapi'
import api_localhost from '../../services/api_localhost'
import { ButtonFavorite } from '../Activity/styles'
import * as _ from "lodash";

class Favorite extends Component{
    state = {
        data:[],
        loading: true,
        error: false
    }
    
    async componentDidMount (){       
        const response = await api_localhost.get(`/activity`)
        console.log(response.data.status)
        if(response.data.status != "error"){
            await response.data.data.map(async test =>{
                const response = await api_boredapi.get(`/activity?key=${test.key_activity}`)
                const {data} = this.state
                const data_ = {
                    data__: [...data,response.data],
                }
                this.setState({
                    data: data_.data__,
                    loading: false
                })
            })
        }else{
            this.setState({error: true})
        }
    }

    handleFavorite = async (e,data2) =>{
        e.preventDefault()
        console.log(data2)
        await api_localhost.delete(`/activity/${data2}`)
        
        
        const i = this.state.data.findIndex(x => x.key === data2)
        const list = [...this.state.data]
        list.splice(i,1)

        this.setState({
            data: list,
        })
    }

    render(){
        const { data, loading, error } = this.state
        return(
            <Container>
                <h1>Favorites</h1>
                <div className="row">
                    <div className="col l6 m6 s6">
                        <div className="left-align">
                            <ButtonReply>
                                <Link to="/">
                                    <FaReply size={20}/>
                                </Link>
                            </ButtonReply>
                        </div>
                    </div>
                </div>
                {loading && (
                    !error &&(
                        <h5>Carregando...</h5>  
                    )
                )}
                {data.map(test=>(
                    <div className="row" key={test.key}>
                        <div className="col l10 m10 s10">
                            <div className="left-align">
                                <div>{test.activity} / {test.type}</div>
                            </div>
                        </div>
                        <div className="col l2 m2 s2">
                            <div className="rigth-align">
                                <form  >
                                    <ButtonFavorite onClick={(event) => this.handleFavorite(event,test.key)}>
                                        <FaHeart size={25}/>
                                    </ButtonFavorite>
                                </form>
                            </div>
                        </div>
                        <div className="col l12 m12 s12 divider"></div>
                    </div>
                ))}
            </Container>
        )
    }
}

export default Favorite