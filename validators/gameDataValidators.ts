import Validator from "../utils/Validator.ts";
import {
  CreateGameDataReq,
  GetGameDataReq,
  UpdateGameDataReq,
} from "../ts/api/gameData.ts";

export default {
  get: ({ id, sessionId }: Partial<GetGameDataReq>) => ({
    id: new Validator(id)
      .skipNextIf(!id)
      .is("string")
      .custom(() => {
        if (!id && !sessionId) return "Either id or sessionId is required";
      }),
    sessionId: new Validator(sessionId)
      .skipNextIf(!sessionId)
      .is("string")
      .custom(() => {
        if (!id && !sessionId) return "Either id or sessionId is required";
      }),
  }),
  create: ({ sessionId }: Partial<CreateGameDataReq>) => ({
    sessionId: new Validator(sessionId).exists().is("string"),
  }),
  update: ({ id, money }: Partial<UpdateGameDataReq>) => ({
    id: new Validator(id).exists().is("string"),
    money: new Validator(money).exists().is("number"),
  }),
};
