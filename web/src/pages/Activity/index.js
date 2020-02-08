import React, { Component } from 'react'
import { FaHeart, FaRegHeart, FaReply } from 'react-icons/fa'
import { IoIosSettings } from 'react-icons/io'
import { Container, ButtonRandom, ButtonFavorite, ButtonReply, ButtonConfig } from './styles'
import api_boredapi from '../../services/api_boredapi'
import api_localhost from '../../services/api_localhost'
import qs from 'qs'
import { Link } from 'react-router-dom'

class Activity extends Component{  
    state = {
        activity : '',
        type: false,
        typeChoice: false,
        Participants: '',
        key: '',
        random: false,
        favorite: false,
        config: false,
    }

    handleRandom = async e =>{
        e.preventDefault();

        const {typeChoice} = this.state
        const url = typeChoice ? '/activity?type=' + typeChoice.toLowerCase() : '/activity'
        const response = await api_boredapi.get(url)

        const response2 = await api_localhost.get(`/activity/${response.data.key}`)
        if(response2.data.data.key_activity){
            this.setState({
                favorite: true,
            })
        }else{
            this.setState({
                favorite: false,
            })
        }

        this.setState({
            activity : response.data.activity,
            type: response.data.type,
            key: response.data.key,
            random: true,
            config: false,
            
        })
    }

    handleFavorite = async e =>{
        e.preventDefault();
        const data = { key_activity: this.state.key }

        const response = await api_localhost.get(`/activity/${data.key_activity}`)        
        if(response.data.data.key_activity){
            await api_localhost.delete(`/activity/${data.key_activity}`)
            this.setState({
                favorite: false,
            })
        }else{
            await api_localhost.post(`/activity`,qs.stringify(data)).then((res)=>{console.log(data)})
            this.setState({
                favorite: true,
            })
        }
    }

    handleConfig = e =>{
        e.preventDefault();
        const {config} = this.state
        if(config){
            this.setState({config:false})
        }else{
            this.setState({config:true})
        }
    }

    handleChange = e => {
        this.setState({
            typeChoice: e.target.value
        });
    }
    
    render(){
        const {activity, type, typeChoice, random, favorite, config} = this.state
        const types = ['Education','Recreational','Social','Diy','Charity','Cooking','Relaxation','Music','Busywork']
        return(
            <Container>                
                <h1>Activity</h1>
                <br />
                <form onSubmit={this.handleRandom}>
                    <ButtonRandom className="btn waves-effect waves-light">Random activity</ButtonRandom>
                </form>
                <br />
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
                    <div className="col l6 m6 s6">
                        <div className="right-align">
                            <form onSubmit={this.handleConfig}>
                                <ButtonConfig >
                                    <IoIosSettings size={25}/>
                                </ButtonConfig>
                            </form>
                        </div>
                    </div>
                </div>
                {config && (
                    <>                    
                    <h2>Choose a type</h2>
                    <div className="row">
                        <div className="col l5 m5 s5"></div>
                        <div className="col l7 m7 s7">
                            <div className="left-align">
                                {types.map(typeradio=>(
                                    <p>
                                    <label>
                                        <input className="with-gap" name="types" type="radio" value={typeradio} checked={typeChoice === typeradio} onClick={this.handleChange}/>
                                        <span>{typeradio}</span>
                                    </label>
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="divider"></div>
                    </>
                    )} 
                {random && (
                <>
                    <h2>{activity}</h2>
                    <div className="container">
                        <div className="divider"></div>
                    </div>
                    <h3>{type}</h3>
                    <br />
                    <form onSubmit={this.handleFavorite}>
                        <ButtonFavorite>
                            {favorite ? (
                                <FaHeart size={25}/>
                            ) : (
                                <FaRegHeart size={25}/>
                            )}
                        </ButtonFavorite>
                    </form>
                    <br />
                </>
                )}
            </Container>
        )
    }
}

export default Activity