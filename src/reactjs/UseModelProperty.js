export default
function useModelProperty(model, propertyName){
    const [value, setValue]=React.useState(model[propertyName]);
    
    function observerACB(){setValue(model[propertyName]);}
    function wasCreatedACB(){
        model.addObserver(observerACB); 
        return function isTakenDownACB(){model.removeObserver(observerACB);}                           
    }

    React.useEffect(wasCreatedACB, [model]) ;
    return value;
}
    