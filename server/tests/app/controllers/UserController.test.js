import UserController from '../../../app/controllers/UserController';
import UserModel from '../../../app/models/UserModel';

describe('UserController', () => {
  let userController;
  const users = [
    { id: 1, skill_ids: [1, 2, 3], experience_id: 3, stance_id: 3 },  //  score: 70
    { id: 2, skill_ids: [1, 2, 3], experience_id: 1, stance_id: 2 },  // score: 100
    { id: 3, skill_ids: [1, 2, 3], experience_id: 3, stance_id: 3 }  // score: 40
  ];

  beforeEach(() => {
    UserModel.fetchAll = jest.fn(() => users);
    
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
      const skill_ids = [4, 5, 6];
      const experience_id = 2;
      const stance_id = 1;

      const expectedScore = 0;

      const score = userController.getScore(user, skill_ids, experience_id, stance_id);

      expect(score).toBe(expectedScore);
    });

    it('experience_idのみが違った場合、正しい結果を返すか', () => {
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

    it('stance_idのみが違った場合、正しい結果を返すか', () => {
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
      const skillWeight = 40 / 3;
      const user = {
        skill_ids: [1, 2, 3],
        experience_id: 1,
        stance_id: 2
      };
      const skill_ids = [1, 2, 4];
      const experience_id = 2;
      const stance_id = 1;

      const score = userController.getScore(user, skill_ids, experience_id, stance_id);

      expect(score).not.toBe(100 - skillWeight);
    });
  });


  describe("search", () => {
    it("スコア順にソートされた状態でユーザー情報を返すか", async () => {
      // prepare
      const skill_ids = [1, 2, 3];
      const experience_id = 1;
      const stance_id = 2;
      const expectedUsers = [
        {user: { id: 1, skill_ids: [1, 2, 3], experience_id: 1, stance_id: 2, score: 100 }, score: 100 },
        { user: { id: 1, skill_ids: [1, 2, 3], experience_id: 3, stance_id: 3, score: 70 }, score: 70 },
        { user: { id: 3, skill_ids: [1, 2, 3], experience_id: 3, stance_id: 3, score: 40 }, score: 40 },
      ];


      // act
      const result = await userController.search(skill_ids, experience_id, stance_id);
      expect(result).toEqual(expectedUsers);
    })
  })
});
