const PopOutWindow = () => {
    const handlePicInPic = async () => {
      // console.log('handlePicInPic ');
      // const player = document.querySelector('#vidmaincontainer');
      const player = document.querySelector('html');
  
      // Open a Picture-in-Picture window.
  
      if (!!player) {
        let height = 640;
        if (player.clientHeight > player.clientWidth) {
          height = player.clientHeight < 640 ? player.clientHeight : 640;
        } else {
          height = player.clientWidth < 640 ? player.clientWidth : 640;
        }
        //@ts-ignore
        const pipWindow = await documentPictureInPicture.requestWindow({
          width: 240, //player.clientWidth > 250 ? 250 : player.clientWidth,
          height: height,
        });
  
        console.log('pipwindow ===> ', pipWindow);
  
        pipWindow.ispipwindow = true;
        //@ts-ignore
        // document.querySelector('#main-header')?.style.display = 'none';
        // //@ts-ignore
        // document.querySelector('#main-footer')?.style.display = 'none';
        // //@ts-ignore
        // document.querySelector('#vidContainer')?.style.display = 'none';
        // //@ts-ignore
        // document.querySelector('.screen-share-video')?.style.display = 'none';
        // //@ts-ignore
        // // document.querySelector('.share-screen-wrapper')?.className ='h-full mysharescreenwrapper';
  
        // //@ts-ignore
        // document.querySelector('#vidContainer')?.style.flexDirection = 'column';
  
        //@ts-ignore
        // document
        //   .querySelector('#main-area')
        //   ?.classList.replace('fullWidthMainArea', 'replaceit');
        // //@ts-ignore
        // document
        //   .querySelector('#main-area')
        //   ?.classList.replace('share-screen-wrapper', 'replaceit2');
        //@ts-ignore
        // document
        //   .querySelector('.transition-left-panel')
        //   ?.classList?.replace('opacity-100', 'opacity-0');
  
        // //@ts-ignore
        // document
        //   .querySelector('.transition-right-panel')
        //   ?.classList?.replace('opacity-100', 'opacity-0');
        // document.querySelector('.transition-left-panel')?.style.display = 'none';
  
        // await new Promise((resolve)=>{
        //     setTimeout(()=>{return resolve("hello")},5000)
        // })
        const urlSearchParams = new URLSearchParams(window.location.search);
        const accessToken = urlSearchParams.get('access_token');
        if (accessToken) {
          pipWindow.access_token = accessToken;
        }
  
        // Copy style sheets over from the initial document
        // so that the player looks the same.
        // [...document.styleSheets].forEach((styleSheet) => {
        //   try {
        //     const cssRules = [...styleSheet.cssRules]
        //       .map((rule) => rule.cssText)
        //       .join('');
        //     const style = document.createElement('style');
  
        //     style.textContent = cssRules;
        //     pipWindow.document.head.appendChild(style);
        //   } catch (e) {
        //     const link = document.createElement('link');
  
        //     link.rel = 'stylesheet';
        //     link.type = styleSheet.type;
        //     // @ts-ignore
        //     link.media = styleSheet.media;
        //     // @ts-ignore
        //     link.href = styleSheet.href;
        //     pipWindow.document.head.appendChild(link);
        //   }
        // });
  
        // // Copy script sheets over from the initial document
        // // so that the player looks the same.
        // [...document.scripts].forEach((script) => {
        //   try {
        //     const scrpt = document.createElement('script');
        //     scrpt.src=script.src;
        //     // link.rel = 'stylesheet';
        //     // link.type = styleSheet.type;
        //     // // @ts-ignore
        //     // link.media = styleSheet.media;
        //     // // @ts-ignore
        //     // link.href = styleSheet.href;
        //     pipWindow.document.head.appendChild(scrpt);
        //   } catch (e) {
        //     console.log('catch')
        //   }
        // });
  
        //@ts-ignore
        document.querySelector('#handlepicinpic').style.display = 'flex';
  
        await new Promise((resolve) => {
          setTimeout(() => {
            return resolve('hello');
          }, 1000);
        });
  
        // Move the player to the Picture-in-Picture window.
        // pipWindow.document.body.append()
  
        setTimeout(() => {
          console.log('click');
          //@ts-ignore
          pipWindow.document.body.append(player);
          // document.getElementById('handlepicinpic')?.click();
        }, 1000);
  
        // pipWindow.document.body.append(player);
  
        // Move the player back when the Picture-in-Picture window closes.
        //@ts-ignore
        pipWindow.addEventListener('pagehide', (event) => {
          // const playerContainer = document.querySelector('#playerContainer');
          // const pipButton = document.getElementById('pipButton');
          const pipPlayer = event.target.querySelector('body>html');
          // document=event.target;
          document.append(pipPlayer);
          //@ts-ignore
          // document.append(playerContainer);
          //@ts-ignore
          // document.querySelector('#main-header')?.style.display = 'flex';
          // //@ts-ignore
          // document.querySelector('#main-footer')?.style.display = 'flex';
          // //@ts-ignore
          // document.querySelector('#handlepicinpic')?.style.display = 'none';
  
          // //@ts-ignore
          // document.querySelector('.screen-share-video')?.style.display = 'flex';
  
          // //@ts-ignore
          // document.querySelector('.mysharescreenwrapper')?.className =
          //   'middle-fullscreen-wrapper share-screen-wrapper is-share-screen-running verticalsWebcamsActivated';
  
          // //@ts-ignore
          // document
          //   .querySelector('#main-area')
          //   ?.classList.replace('replaceit', 'fullWidthMainArea');
  
          // //@ts-ignore
          // document
          //   .querySelector('#main-area')
          //   ?.classList.replace('replaceit2', 'share-screen-wrapper');
  
          // //@ts-ignore
          // document.querySelector('.transition-left-panel')?.style.display =
          //   'flex';
  
          // if (playerContainer) playerContainer.append(pipPlayer);
          pipWindow.close();
        });
      }
    };
  
    return (
      <>
        {'documentPictureInPicture' in window ? (
          <div className="dark-mode mt-1">
            <button onClick={handlePicInPic}>
              <div className="moon w-8 h-8 rounded-full flex items-center justify-center">
                <i
                  className={`icomoon-picInpic primaryColor dark:text-darkText text-[14px] lg:text-[16px]`}
                />
                PopOutWindow
              </div>
            </button>
          </div>
        ) : null}
      </>
    );
  };
  
  export default PopOutWindow;