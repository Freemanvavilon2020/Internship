import request from 'superagent';

window.onload = function () {
  getAllData();
};

function getAllData() {
  data1Promise().
    then(data2Promise).
    then(data3Promise).
    then(data4Promise).
    then(writeToPage).
    catch(handleError);
}

function data1Promise() {
  return new Promise((resolve, reject) => {
    request
      .post('/data1')
      .send({ inData: 1 }) // sends a JSON post body
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
  document.getElementById('result-div').innerHTML = 'App2`s data: ' + msg;
}

function handleError(err) {
  alert(`Houston, We have problem: ${err}!`);
}
