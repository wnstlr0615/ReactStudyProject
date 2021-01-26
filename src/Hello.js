import React,{Component} from 'react';
class Hello extends Component{
    static  defaultProps={
        name:'이름없음',
    };
    render(){
        const {color, isSpecial, name}=this.props;
        return(
            <div style={{color}}>{isSpecial&&<b>*</b>}
            안녕하세요 {name}
            </div>
        );
    }
}


/*function Hello({color, name, isSpecial}) {
    return <div style = {{
            color
        }} > 
        {
        //isSpecial ? <b>*</b>:null 방법 1
        isSpecial && <b>*</b>
        }
        안녕하세요 {
        name
    } </div>;
}*/
/*Hello.defaultProps={
    name:'이름없음'
};*/
export default Hello;