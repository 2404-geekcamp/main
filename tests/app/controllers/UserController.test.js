import UserController from '../../../app/controllers/UserController';

describe('UserController', () => {
  let userController;

  beforeEach(() => {
    userController = new UserController();
  });

  describe('getScore', () => {
    it('すべての項目が完全に一致する場合、返り値として100.0を返すか', () => {
      const user = {
        skill_ids: [1, 2, 3],
        experience_id: 1,
        stance_id: 2
      };
      const skill_ids = [1, 2, 3];
      const experience_id = 1;
      const stance_id = 2;

      const expectedScore = 100;

      const score = userController.getScore(user, skill_ids, experience_id, stance_id);

      expect(score).toBe(expectedScore);
    });

    it('すべての項目が完全に一致しない場合、返り値として0.0を返すか', () => {
      const user = {
        skill_ids: [1, 2, 3],
        experience_id: 1,
        stance_id: 2
      };
      const skill_ids = [1, 2, 4];
      const experience_id = 1;
      const stance_id = 2;

      const expectedScore = 90;

      const score = userController.getScore(user, skill_ids, experience_id, stance_id);

      expect(score).toBe(expectedScore);
    });

    it('should return the correct score when experience ID does not match', () => {
      const user = {
        skill_ids: [1, 2, 3],
        experience_id: 1,
        stance_id: 2
      };
      const skill_ids = [1, 2, 3];
      const experience_id = 2;
      const stance_id = 2;

      const expectedScore = 70;

      const score = userController.getScore(user, skill_ids, experience_id, stance_id);

      expect(score).toBe(expectedScore);
    });

    it('should return the correct score when stance ID does not match', () => {
      const user = {
        skill_ids: [1, 2, 3],
        experience_id: 1,
        stance_id: 2
      };
      const skill_ids = [1, 2, 3];
      const experience_id = 1;
      const stance_id = 1;

      const expectedScore = 70;

      const score = userController.getScore(user, skill_ids, experience_id, stance_id);

      expect(score).toBe(expectedScore);
    });

    it('skillWeight が無限小数になるパターンの場合、結果は四捨五入された値となるか', () => {
      const user = {
        skill_ids: [1, 2, 3],
        experience_id: 1,
        stance_id: 2
      };
      const skill_ids = [1, 2, 4];
      const experience_id = 2;
      const stance_id = 1;

      const expectedScore = 50;

      const score = userController.getScore(user, skill_ids, experience_id, stance_id);

      expect(score).toBe(expectedScore);
    });
  });
});
