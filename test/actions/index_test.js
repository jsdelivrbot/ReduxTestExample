import { expect } from '../test_helper';
import { SAVE_COMMENT } from '../../src/actions/types';
import { saveComment } from '../../src/actions';

describe('actions', () => {
  describe('saveContent', () => {
    let dispatchedAction;
    const comment = 'New Comment';
    beforeEach(() => {
      dispatchedAction = saveComment(comment);
    })

    it('has the correct type', () => {
      expect(dispatchedAction.type).to.equal(SAVE_COMMENT);
    });

    it('has the correct payload', () => {
      expect(dispatchedAction.payload).to.equal(comment);
    });
  });
});