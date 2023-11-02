'use strict';

// PetiteVue.createApp({}).mount();

let target = document.getElementById('target');
let cropper = new Cropper(target, {
  aspectRatio: 1 // アスペクト比を1に設定（正方形）
});

let button = document.getElementById('button');
let fileInput = document.getElementById('id_img'); // ファイル選択用のinput要素

let data;

fileInput.addEventListener('change', function (event) {
  const selectedFile = event.target.files[0];

  if (selectedFile) {
    const reader = new FileReader();

    reader.onload = function (e) {
      const clipLink = document.getElementById('clip_link');
      window.location.href = clipLink.href;
      // 画像が読み込まれたら、そのデータをトリミング対象として表示
      target.src = e.target.result;
      cropper.replace(e.target.result); // トリミングを適用
    };

    reader.readAsDataURL(selectedFile);
  }
});

button.addEventListener('click', function () {
  let canvas = cropper.getCroppedCanvas();
  data = canvas.toDataURL();

  let preview = document.getElementById('preview');
  preview.src = data;
});

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
  // for (let i = 0; i < maxPredictions; i++) {
  //   // and class labels
  //   labelContainer.appendChild(document.createElement('div'));
  // }
}

document.getElementById('recommend_btn').addEventListener('click', async () => {
  await init();

  const img = document.createElement('img');
  const img2 = document.getElementById('uploaded-image2');
  const allowedAspectRatio = 1;

  // reader.onload = function (e) {
  img.src = data;
  img2.src = data;
  img.onload = async function () {
    const prediction = await model.predict(img);

    // 画像の幅と高さを取得
    const width = img.width;
    const height = img.height;

    // アスペクト比を計算
    // const aspectRatio = width / height;

    // if (Math.abs(aspectRatio - allowedAspectRatio) > 0.01) {
    //   // アスペクト比が許容範囲外の場合にエラーメッセージを表示
    //   alert(
    //     '写真のアスペクト比が正方形ではありません。正方形の写真を選択してください。'
    //   );
    //   return; // アップロードを中止
    // }
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];

    // 配列をシャッフルする関数
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }

    // 配列をシャッフル
    shuffleArray(numbers);

    // 最初の6つの要素を取得
    const random1 = numbers[0];
    const random2 = numbers[1];
    const random3 = numbers[2];
    const random4 = numbers[3];
    const random5 = numbers[4];
    const random6 = numbers[5];

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

      // 0から8までの数値を格納した配列を作成

      const ary = [
        'icon_car/mazuda3.png',
        'icon_car/sakura.png',
        'icon_car/aura.png',
        'icon_car/carolla.png',
        'icon_car/is2.png',
        'icon_car/haria-.png',
        'icon_car/cx-30_2.png',
        'icon_car/serena.png',
        'icon_car/mazuda2.png'
      ];
      const ary_URL = [
        './se2.html#anser2',
        './se2.html#anser13',
        './se2.html#anser24',
        './se2.html#anser25',
        './se2.html#anser27',
        './se2.html#anser16',
        './se2.html#anser11',
        './se2.html#anser30',
        './se2.html#anser7'
      ];

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
        imgElement[0].src = ary[random1];
        imgElement[1].src = ary[random2];
        imgElement[2].src = ary[random3];
        imgElement[3].src = ary[random4];
        imgElement[4].src = ary[random5];
        imgElement[5].src = ary[random6];

        aElement[0].href = ary_URL[random1];
        aElement[1].href = ary_URL[random2];
        aElement[2].href = ary_URL[random3];
        aElement[3].href = ary_URL[random4];
        aElement[4].href = ary_URL[random5];
        aElement[5].href = ary_URL[random6];
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

        aElement[0].href = './se2.html#anser21';
        aElement[1].href = './se2.html#anser20';
        aElement[2].href = './se2.html#anser19';
        aElement[3].href = './se2.html#anser18';
        aElement[4].href = './se2.html#anser17';
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

  // reader.readAsDataURL(selectedFile);
});
