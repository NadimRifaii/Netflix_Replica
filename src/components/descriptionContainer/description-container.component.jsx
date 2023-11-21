import React from 'react';
import Description from '../description/description.component';
// import './components/image/descriptionImage.styles.css'
const DescriptionContainer = () => {
  const info = [
    {
      id: 0,
      header: 'Enjoy on your TV',
      paragraph: 'Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.',
      tvImage: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png",
      tvVideo: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v",
      reverseOrder: false,
      applyConditionalStyle: false
    },

    {
        id: 1,
        header: "Download your shows to watch offline",
        paragraph: "Save your favorites easily and always have something to watch.",
        tvImage: "./tv2.jpg",
        reverseOrder: true,
        applyConditionalStyle: false
    },

    {
        id: 2,
        header: "Watch everywhere",
        paragraph: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
        tvImage: "./tv3.png",
        tvVideo: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v",
        reverseOrder : false,
        applyConditionalStyle: true
    },

    {
        id: 3,
        header: "Create profiles for kids",
        paragraph: "Send kids on adventures with their favorite characters in a space made just for them—free with your membership.",
        tvImage: "./tv4.png",
        reverseOrder: true,
        applyConditionalStyle: true
    }
  ];

  return (
    <div>
      {
        info.map(inf => {
          return (
            <Description key={inf.id} reverseOrder={inf.reverseOrder} header={inf.header} paragraph={inf.paragraph} tvImage={inf.tvImage} tvVideo={inf.tvVideo} applyConditionalStyle={inf.applyConditionalStyle} />
          )
        })
      }
    </div>
  );
};

export default DescriptionContainer;