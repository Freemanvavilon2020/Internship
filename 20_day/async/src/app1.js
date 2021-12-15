import request from 'superagent';

window.onload = function () {
  getAllData();
};

function getAllData() {
  request
    .post('/data1')
    .send({ inData: 0 }) // sends a JSON post body
    .set('X-API-Key', 'foobar')
    .set('accept', 'json')
    .end((err, res) => {
      if (err) {
        alert(err);
      } else {
        let respData = JSON.parse(res.text);
        let result1 = respData.data;

        request
          .post('/data2')
          .send({ inData: result1 }) // sends a JSON post body
          .set('X-API-Key', 'foobar')
          .set('accept', 'json')
          .end((err, res) => {
            if (err) {
              alert(err);
            } else {
              let respData = JSON.parse(res.text);
              let result2 = respData.data;

              request
                .post('/data3')
                .send({ inData: result2 }) // sends a JSON post body
                .set('X-API-Key', 'foobar')
                .set('accept', 'json')
                .end((err, res) => {
                  if (err) {
                    alert(err);
                  } else {
                    let respData = JSON.parse(res.text);
                    let result3 = respData.data;

                    request
                      .post('/data4')
                      .send({ inData: result3 }) // sends a JSON post body
                      .set('X-API-Key', 'foobar')
                      .set('accept', 'json')
                      .end((err, res) => {
                        if (err) {
                          alert(err);
                        } else {
                          let respData = JSON.parse(res.text);
                          let result4 = respData.data;

                          document.getElementById('result-div').innerHTML =
                            'Server`s data: ' + result4;
                        }
                      });
                  }
                });
            }
          });
      }
    });
}
