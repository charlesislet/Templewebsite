import React, { useEffect } from 'react';
import './天后.css';
import pic1 from '../Image/天后宮/天后360.jpg'
import pic2 from '../Image/天后宮/天后360_1.jpg'
import pic3 from '../Image/天后宮/天后360_2.jpg'
import pic4 from '../Image/天后宮/天后360_3.jpg'
import pic5 from '../Image/天后宮/天后360_4.jpg'
import pic6 from '../Image/天后宮/天后360_5.jpg'
import pic7 from '../Image/天后宮/天后360_6.jpg'
import pic8 from '../Image/天后宮/天后360_7.jpg'
import pic9 from '../Image/天后宮/天后360_8.jpg'
import pic10 from '../Image/天后宮/天后360_9.jpg'
import ReactPannellum, { addScene, addHotSpot, getAllScenes, getCurrentScene}  from "react-pannellum";
import SimpleBreadcrumbs from '../components/Breadcrumbs';

const callback = () => {
  console.log("Add a new scene");
};
export default class Tien360 extends React.Component {
    render() {
        addScene(
            "stairway",
            {
              title: "階梯",
              autoLoad: true,
              type: "equirectangular",
              imageSource: pic2,
              hotSpots: [
                {
                  pitch: -30,
                  yaw: 180,
                  type: "scene",
                  text: "入口",
                  sceneId: "entrance",
                },
                {
                  pitch: 10,
                  yaw: 35,
                  type: "scene",
                  text: "三川殿右側",
                  sceneId: "corridorright",
                },
                {
                  pitch: 10,
                  yaw: -35,
                  type: "scene",
                  text: "三川殿左側",
                  sceneId: "corridorleft",
                },
              ],
            },
          );
        addScene(
          "corridorright",
          {
            title: "三川殿右側",
            autoLoad: true,
            type: "equirectangular",
            imageSource: pic3,
            hotSpots: [
              {
                pitch: 0,
                yaw: 180,
                type: "scene",
                text: "階梯",
                sceneId: "stairway",
              },
              {
                pitch: 0,
                yaw: 0,
                type: "scene",
                text: "中庭右側",
                sceneId: "squareright",
              },
            ],
          },
        )
        addScene(
          "squareright",
          {
            title: "中庭右側",
            autoLoad: true,
            type: "equirectangular",
            imageSource: pic4,
            hotSpots: [
              {
                pitch: 0,
                yaw: 180,
                type: "scene",
                text: "三川殿右側",
                sceneId: "corridorright",
              },
              {
                pitch: 0,
                yaw: 0,
                type: "scene",
                text: "三川殿右側",
                sceneId: "mainright",
              },
            ],
          },
        )
        addScene(
          "mainright",
          {
            title: "正殿右側",
            autoLoad: true,
            type: "equirectangular",
            imageSource: pic5,
            hotSpots: [
              {
                pitch: 0,
                yaw: 180,
                type: "scene",
                text: "中庭右側",
                sceneId: "squareright",
              },
              {
                pitch: 0,
                yaw: 0,
                type: "scene",
                text: "清風閣右側",
                sceneId: "backright",
              },
            ],
          },
        )
        addScene(
          "backright",
          {
            title: "清風閣右側",
            autoLoad: true,
            type: "equirectangular",
            imageSource: pic6,
            hotSpots: [
              {
                pitch: 0,
                yaw: 180,
                type: "scene",
                text: "正殿右側",
                sceneId: "mainright",
              },
              {
                pitch: 0,
                yaw: -90,
                type: "scene",
                text: "清風閣",
                sceneId: "backmiddle",
              },
            ],
          },
        )
        addScene(
          "backmiddle",
          {
            title: "清風閣",
            autoLoad: true,
            type: "equirectangular",
            imageSource: pic7,
            hotSpots: [
              {
                pitch: 0,
                yaw: 90,
                type: "scene",
                text: "清風閣右側",
                sceneId: "backright",
              },
              {
                pitch: 0,
                yaw: -90,
                type: "scene",
                text: "清風閣左側",
                sceneId: "backleft",
              },
            ],
          },
        )
        addScene(
          "backleft",
          {
            title: "清風閣左側",
            autoLoad: true,
            type: "equirectangular",
            imageSource: pic8,
            hotSpots: [
              {
                pitch: 0,
                yaw: 90,
                type: "scene",
                text: "清風閣",
                sceneId: "backmiddle",
              },
              {
                pitch: 0,
                yaw: 180,
                type: "scene",
                text: "正殿左側",
                sceneId: "mainleft",
              },
            ],
          },
        )
        addScene(
          "mainleft",
          {
            title: "正殿左側",
            autoLoad: true,
            type: "equirectangular",
            imageSource: pic9,
            hotSpots: [
              {
                pitch: 0,
                yaw: 35,
                type: "scene",
                text: "清風閣左側",
                sceneId: "backleft",
              },
              {
                pitch: 0,
                yaw: 180,
                type: "scene",
                text: "三川殿左側",
                sceneId: "corridorleft",
              },
            ],
          },
        )
        addScene(
          "corridorleft",
          {
            title: "三川殿左側",
            autoLoad: true,
            type: "equirectangular",
            imageSource: pic10,
            hotSpots: [
              {
                pitch: 0,
                yaw: 0,
                type: "scene",
                text: "正殿左側",
                sceneId: "middleleft",
              },
              {
                pitch: 0,
                yaw: 180,
                type: "scene",
                text: "階梯",
                sceneId: "stairway",
              },
            ],
          },
        )
        return(
        <>
        <div className="header-tien">
            <div className="main-info-tien">
                <h1>天后宮</h1>
            </div>
        </div>
        <div className='container'>
            <SimpleBreadcrumbs/>
        <ReactPannellum
          id="1"
          title='入口'
          sceneId="entrance"
          imageSource= {pic1}
          config={{
            autoLoad: true,
            hotSpots: [
            {
                pitch: 5,
                yaw: 3,
                type: "scene",
                text: "階梯",
                sceneId: "stairway",
            },
            // {
            //     pitch: 0.4,
            //     yaw: 252.6,
            //     type: "info",
            //     text: "Art Museum Drive",
            // },
        ],
        }}
        style={{
            width: "100%",
            height: "90vh",
        }}
        />
        </div>
        </>
        );
    }
}

// const Tien360 = () => {
//     const callback = () => {
//         console.log("Add a new scene");
//     };
//     useEffect(() => {
//       addScene(
//         "house",
//         {
//           title: "Spring House or Dairy",
//           autoLoad: true,
//           hfov: 110,
//           yaw: 5,
//           type: "equirectangular",
//           imageSource: pic2,
//           hotSpots: [
//             {
//               pitch: -0.6,
//               yaw: 37.1,
//               type: "scene",
//               text: "Mason Circle",
//               sceneId: "circle",
//               targetYaw: -23,
//               targetPitch: 2,
//             },
//           ],
//         },
//         callback
//       );
//       addHotSpot(
//                     {
//                       pitch: 5,
//                       yaw: 3,
//                       type: "scene",
//                       text: "Baltimore Museum of Art",
//                       sceneId: "house",
//                     },
//                     "circle",
//                     {
//                       pitch: 5,
//                       yaw: 3,
//                       type: "scene",
//                       text: "Baltimore Museum of Art",
//                       sceneId: "circle",
//                     },
//                     "house"
//                   );
//     }, []);
  
//     const onPanoramaLoaded = () => {
//       console.log("Panorama loaded");
//     };
  
//     return (
//       <div>
//         <ReactPannellum
//           id="pannellum"
//           sceneId="circle"
//           imageSource={pic1}
//           config={{
//             autoLoad: true,
//             hotSpots: [
//               {
//                 pitch: 5,
//                 yaw: 3,
//                 type: "scene",
//                 text: "階梯",
//                 sceneId: "house",
//               },
//               {
//                 pitch: 0.4,
//                 yaw: 252.6,
//                 type: "info",
//                 text: "Art Museum Drive",
//               },
//             ],
//           }}
//           style={{
//             width: "100%",
//             height: "90vh",
//           }}
//           onPanoramaLoaded={onPanoramaLoaded}
//         />
//       </div>
//     );
//   };
  
//   export default Tien360;


