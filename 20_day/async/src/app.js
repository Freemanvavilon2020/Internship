import request from 'superagent';

window.onload = function () {
  request
    .post('/login')
    .send({ username: 'Manny' }) // sends a JSON post body
    .set('X-API-Key', 'foobar')
    .set('accept', 'json')
    .end((err, res) => {
      if (err) {
        alert(err);
      } else {
        let respData = JSON.parse(res.text);
        document.getElementById('result-div').innerHTML = respData.msg;
      }
    });
};
