'use strict';

// PetiteVue.createApp({}).mount();

const URL = 'https://teachablemachine.withgoogle.com/models/SxdQ09Kyr/';

let model, labelContainer, maxPredictions;

// Load the image model
async function init() {
  const modelURL = URL + 'model.json';
  const metadataURL = URL + 'metadata.json';

  // load the model and metadata
  model = await tmImage.load(modelURL, metadataURL);
  maxPredictions = model.getTotalClasses();

  // append elements to the DOM
  labelContainer = document.getElementById('label-container');
  for (let i = 0; i < maxPredictions; i++) {
    // and class labels
    labelContainer.appendChild(document.createElement('div'));
  }
}

async function onFileSelected(event) {
  await init();
  const selectedFile = event.target.files[0];
  const img = document.createElement('img');
  const img2 = document.getElementById('uploaded-image2');
  const allowedAspectRatio = 1;

  const reader = new FileReader();
  reader.onload = function (e) {
    img.src = e.target.result;
    img2.src = e.target.result;
    img.onload = async function () {
      const prediction = await model.predict(img);

      // 画像の幅と高さを取得
      const width = img.width;
      const height = img.height;

      // アスペクト比を計算
      const aspectRatio = width / height;

      if (Math.abs(aspectRatio - allowedAspectRatio) > 0.01) {
        // アスペクト比が許容範囲外の場合にエラーメッセージを表示
        alert(
          '写真のアスペクト比が正方形ではありません。正方形の写真を選択してください。'
        );
        return; // アップロードを中止
      }

      for (let i = 0; i < maxPredictions; i++) {
        const classPrediction =
          prediction[i].className + ': ' + prediction[i].probability.toFixed(2);

        // Create a new element to display the prediction
        const predictionElement = document.createElement('div');
        predictionElement.innerHTML = classPrediction;

        // Get the values for class1 and class2
        const class1Value = prediction[0].probability;
        const class2Value = prediction[1].probability;
        const class3Value = prediction[2].probability;
        const class4Value = prediction[3].probability;
        // Compare the values and display the appropriate symbol
        // if (
        //   class1Value > class2Value &&
        //   class1Value > class3Value &&
        //   class1Value > class4Value
        // ) {
        //   predictionElement.innerHTML = ' ◯'; // Display ◯ if class1 is the highest probability
        // } else if (
        //   class2Value > class1Value &&
        //   class2Value > class3Value &&
        //   class2Value > class4Value
        // ) {
        //   predictionElement.innerHTML = ' 1'; // Display 1 if class2 is the highest probability
        // } else if (
        //   class3Value > class1Value &&
        //   class3Value > class2Value &&
        //   class3Value > class4Value
        // ) {
        //   predictionElement.innerHTML = ' 2'; // Display 2 if class3 is the highest probability
        // } else if (
        //   class4Value > class1Value &&
        //   class4Value > class2Value &&
        //   class4Value > class3Value
        // ) {
        //   predictionElement.innerHTML = ' 3'; // Display 3 if class4 is the highest probability
        // } else {
        //   predictionElement.innerHTML = ' ×'; // Display × if no class has the highest probability
        // }

        // Append the prediction element to the label container
        labelContainer.appendChild(predictionElement);

        const imgElement = document.getElementsByClassName('uploaded-image');
        const aElement = document.getElementsByClassName('uploaded-a');
        if (
          class1Value > class2Value &&
          class1Value > class3Value &&
          class1Value > class4Value
        ) {
          imgElement[0].src = 'icon_car/lapan.png';
          imgElement[1].src = 'icon_car/boon.jpg';
          imgElement[2].src = 'icon_car/hasura-.jpg';
          imgElement[3].src = 'icon_car/mini_slc.png';
          imgElement[4].src = 'icon_car/stepwagon.png';
          imgElement[5].src = 'icon_car/fiat_slc.png';

          aElement[0].href = './se2.html#anser3';
          aElement[1].href = './se2.html#anser1';
          aElement[2].href = './se2.html#anser5';
          aElement[3].href = './se2.html#anser6';
          aElement[4].href = './se2.html#anser23';
          aElement[5].href = './se2.html#anser9';
        } else if (
          class2Value > class1Value &&
          class2Value > class3Value &&
          class2Value > class4Value
        ) {
          imgElement[0].src = 'icon_car/mazuda3.png';
          imgElement[1].src = 'icon_car/sakura.png';
          imgElement[2].src = 'icon_car/aura.png';
          imgElement[3].src = 'icon_car/carolla.png';
          imgElement[4].src = 'icon_car/is2.png';
          imgElement[5].src = 'icon_car/haria-.png';

          aElement[0].href = './se2.html#anser2';
          aElement[1].href = './se2.html#anser13';
          aElement[2].href = './se2.html#anser24';
          aElement[3].href = './se2.html#anser25';
          aElement[4].href = './se2.html#anser27';
          aElement[5].href = './se2.html#anser16';
          // Display 1 if class2 is the highest probability
        } else if (
          class3Value > class1Value &&
          class3Value > class2Value &&
          class3Value > class4Value
        ) {
          imgElement[0].src = 'icon_car/yaris.png';
          imgElement[1].src = 'icon_car/jasuty.png';
          imgElement[2].src = 'icon_car/inpuressa.png';
          imgElement[3].src = 'icon_car/foresuta-.png';
          imgElement[4].src = 'icon_car/s4.png';
          imgElement[5].src = 'icon_car/voxy.png';

          aElement[0].href = './se2.html#anser2';
          aElement[1].href = './se2.html#anser13';
          aElement[2].href = './se2.html#anser24';
          aElement[3].href = './se2.html#anser25';
          aElement[4].href = './se2.html#anser27';
          aElement[5].href = './se2.html#anser12'; // Display 2 if class3 is the highest probability
        } else {
          imgElement[0].src = 'icon_car/fit.jpg';
          imgElement[1].src = 'icon_car/delica.png';
          imgElement[2].src = 'icon_car/visel.png';
          imgElement[3].src = 'icon_car/civic.png';
          imgElement[4].src = 'icon_car/freed.png';
          imgElement[5].src = 'icon_car/sienta.png';

          aElement[0].href = './se2.html#anser8';
          aElement[1].href = './se2.html#anser15';
          aElement[2].href = './se2.html#anser28';
          aElement[3].href = './se2.html#anser14';
          aElement[4].href = './se2.html#anser22';
          aElement[5].href = './se2.html#anser4';
        }
        const resultLink = document.getElementById('result_link');
        window.location.href = resultLink.href;
      }
    };
  };

  reader.readAsDataURL(selectedFile);
}
