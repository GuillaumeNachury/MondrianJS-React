/**
 * MondrianJS-React  Wrapper class
 * Provides an Mondrian init entry point and a React Wrapper.
 * 
 * @author: Guillaume Nachury
 */
import React, {Component, Fragment} from 'react';
import {Mondrian} from 'mondrianjs';


export default class Wrapper{

    constructor(){
        this.RemoteComponent = () => {throw new Error("Call init() prior to use the RemoteComponent")};
    }


    init(settings){
        const {defaultLoader, ...mondrianSettings} = settings;
        this.mondrian = new Mondrian(mondrianSettings);
        this.defaultLoader = defaultLoader;

        this.RemoteComponent = (props)=> React.createElement(RemoteComponent, {loader:this.defaultLoader, mondrian:this.mondrian, ...props});

    }

}

class RemoteComponent extends Component{

    constructor(props){
        super(props);
        this.state = {
            loaded : false,
            cmp : undefined
        }
    }

    componentDidMount(){
        const {identifier, selector, endpointName, mondrian} = this.props;
        mondrian.load({identifier, selector, endpointName})
        .then(cmp => {
            this.setState({loaded:true, cmp})
        } )
        .catch(err => console.log(err)) 
    }

    render(){
        const {identifier, selector, endpointName, mondrian, loader, ...otherProps} = this.props;
        return this.state.loaded ? React.createElement(this.state.cmp, otherProps) : (loader ? loader : Fragment);
    }
}






