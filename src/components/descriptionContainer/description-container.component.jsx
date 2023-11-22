import React from 'react';
import Description from '../description/description.component';
// import './components/image/descriptionImage.styles.css'
import './description-container.styles.css'
const DescriptionContainer = () => {
  const info = [
    {
      id: 0,
      header: 'Enjoy on your TV',
      paragraph: 'Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.',
      tvImage: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png",
      tvVideo: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v",
      reverseOrder: false,
      applyConditionalStyle: false,
      addDownloadContainer: false
    },

    {
      id: 1,
      header: "Download your shows to watch offline",
      paragraph: "Save your favorites easily and always have something to watch.",
      tvImage: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg",
      reverseOrder: true,
      applyConditionalStyle: false,
      addDownloadContainer: true
    },

    {
      id: 2,
      header: "Watch everywhere",
      paragraph: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
      tvImage: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png",
      tvVideo: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v",
      reverseOrder: false,
      applyConditionalStyle: true,
      addDownloadContainer: false
    },

    {
      id: 3,
      header: "Create profiles for kids",
      paragraph: "Send kids on adventures with their favorite characters in a space made just for them—free with your membership.",
      tvImage: "https://occ-0-7269-2705.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABejKYujIIDQciqmGJJ8BtXkYKKTi5jiqexltvN1YmvXYIfX8B9CYwooUSIzOKneblRFthZAFsYLMgKMyNfeHwk16DmEkpIIcb6A3.png?r=f55",
      reverseOrder: true,
      applyConditionalStyle: false,
      addDownloadContainer: false
    }
  ];

  return (
    <div>
      <div className="description-containerr">
        {
          info.map(inf => {
            return (
              <Description key={inf.id} reverseOrder={inf.reverseOrder} header={inf.header} paragraph={inf.paragraph} tvImage={inf.tvImage} tvVideo={inf.tvVideo} applyConditionalStyle={inf.applyConditionalStyle} addDownloadContainer={inf.addDownloadContainer} />
            )
          })
        }
      </div>
    </div>
  );
};

export default DescriptionContainer;