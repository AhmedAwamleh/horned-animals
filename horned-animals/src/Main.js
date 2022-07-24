import React from "react";
import HornedBeasts from "./horned-beast";


const arr= [{
    "_id": 1,
    "image_url": "https://leviathyn.com/wp-content/uploads/2015/06/beastman.jpgt",
    "title": "lesedwards",
    "description": "wallpaper for lesedwards",
    "keyword": "lesedwards",
    "horns": 1
  },

  {
    "_id": 2,
    "image_url": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/36f6c38a-ce3c-410c-87c9-08386d8be756/d6ubp34-f825f6cb-f977-4c51-a000-ab9c254bcd97.png/v1/fill/w_1018,h_785,q_70,strp/horned_beast_by_anghorkheng_d6ubp34-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTIzNSIsInBhdGgiOiJcL2ZcLzM2ZjZjMzhhLWNlM2MtNDEwYy04N2M5LTA4Mzg2ZDhiZTc1NlwvZDZ1YnAzNC1mODI1ZjZjYi1mOTc3LTRjNTEtYTAwMC1hYjljMjU0YmNkOTcucG5nIiwid2lkdGgiOiI8PTE2MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.rNHIPZbHKfwZUg8Yvwm78C7-BHMZ0cTlQ7pCEnXRfDs",
    "title": "goats",
    "description": "goats horned beast ",
    "keyword": "rhino",
    "horns": 2
  },

  {
    "_id": 3,
    "image_url": "https://images-cdn.9gag.com/photo/agLDDQr_700b.jpg",
    "title": "skull beast",
    "description": "skull horned beast",
    "keyword": "unicorn",
    "horns": 3
}]



class Main extends React.Component {
    render() {
    return (
        <>
            <HornedBeasts  imgUrl={arr[0].image_url} title={arr[0].title} description={arr[0].description} />
            <HornedBeasts  imgUrl={arr[1].image_url} title={arr[1].title} description={arr[1].description} />
            <HornedBeasts  imgUrl={arr[2].image_url} title={arr[2].title} description={arr[2].description} />
        </>
    );
}
}

export default Main;