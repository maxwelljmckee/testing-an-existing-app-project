const EventEmitter = require('events');
const { expect } = require('chai');
const { getBodyFromRequest } = require('../get-body-from-request');
describe("The getBodyFromRequest function", () => {
  let fakeReq = null;

  beforeEach(() => {
    fakeReq = new EventEmitter();
  });

  it('returns an empty string for no body', done => {
    const bodyPromise = getBodyFromRequest(fakeReq);
    fakeReq.emit('end');

    bodyPromise.then(body => {
      if (!body) done();
      else done(`failed: returned ${body}`)
    }) 
  });

  it('returns the data read from the stream', done => {
    const bodyPromise = getBodyFromRequest(fakeReq);
    fakeReq.emit('data', 'beep');
    fakeReq.emit('data', 'boop');
    fakeReq.emit('end');

    bodyPromise.then(body => {
      if (body = 'beepboop') done();
      else done(`failed: returned ${body}`)
    })
  });
});
