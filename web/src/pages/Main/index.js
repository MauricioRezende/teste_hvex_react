import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from './styles'

export default function Main() {
    return (
        <div className="row">
            <br />
            <div className="col l12 m12 s12">
                <Link to="/activity">
                    <Button>
                        Random activity
                    </Button>
                </Link>
            </div>
            <div className="col l12 m12 s12">
                <Link to="/favorites">
                    <Button>
                        My favorites
                    </Button>
                </Link>
            </div>
        </div>
  );
}
