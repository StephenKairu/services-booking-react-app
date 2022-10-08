import React from "react";


 const ImgCard = ({image}) => {

    const [likeActive, setLikeActive] = useState(false)

    function liked () {
        if(likeActive) {
            setLikeActive(false)
        } else{
            setLikeActive(true)
        }
    }
    
    return (
        <div className="image-div" key={image.id}>
              <img src={image.src.large} />
              <button onClick={liked} className={[likeActive ? 'activated-heart': null, 'btn'].join(' ')} >Like &#x2661;</button>
        </div>
         )
}


export default ImgCard;