import request from 'superagent';

window.onload = async function () {
  await getAllData();
};

async function getAllData() {
  try {
    let result1 = await data1Promise();
    let result2 = await data2Promise(result1);
    let result3 = await data3Promise(result2);
    let result4 = await data4Promise(result3);
    writeToPage(result4);
  } catch (err) {
    handleError(err);
  }
}

function data1Promise() {
  return new Promise((resolve, reject) => {
    request
      .post('/data1')
      // .post('/data255') // For error
      .send({ inData: 10 }) // sends a JSON post body
      .set('X-API-Key', 'foobar')
      .set('accept', 'json')
      .end((err, res) => {
        if (err) {
          reject(err);
        } else {
          let respData = JSON.parse(res.text);
          resolve(respData.data);
        }
      });
  });
}

function data2Promise(result1) {
  return new Promise((resolve, reject) => {
    request
      .post('/data2')
      .send({ inData: result1 }) // sends a JSON post body
      .set('X-API-Key', 'foobar')
      .set('accept', 'json')
      .end((err, res) => {
        if (err) {
          reject(err);
        } else {
          let respData = JSON.parse(res.text);
          resolve(respData.data);
        }
      });
  });
}

function data3Promise(result2) {
  return new Promise((resolve, reject) => {
    request
      .post('/data3')
      .send({ inData: result2 }) // sends a JSON post body
      .set('X-API-Key', 'foobar')
      .set('accept', 'json')
      .end((err, res) => {
        if (err) {
          reject(err);
        } else {
          let respData = JSON.parse(res.text);
          resolve(respData.data);
        }
      });
  });
}

function data4Promise(result3) {
  return new Promise((resolve, reject) => {
    request
      .post('/data4')
      .send({ inData: result3 }) // sends a JSON post body
      .set('X-API-Key', 'foobar')
      .set('accept', 'json')
      .end((err, res) => {
        if (err) {
          reject(err);
        } else {
          let respData = JSON.parse(res.text);
          resolve(respData.data);
        }
      });
  });
}

function writeToPage(msg) {
  document.getElementById('result-div').innerHTML = 'App3`s data: ' + msg;
}

function handleError(err) {
  alert(`Houston, We have problem: ${err}!`);
}
