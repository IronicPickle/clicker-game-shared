import Validator from "../utils/Validator.ts";
import { CreateSessionReq, GetSessionReq } from "../ts/api/session.ts";

export default {
  get: ({ id }: Partial<GetSessionReq>) => ({
    id: new Validator(id).exists().is("string"),
  }),
  create: ({ displayName }: Partial<CreateSessionReq>) => ({
    displayName: new Validator(displayName)
      .exists()
      .is("string")
      .length.greaterThanOrEqualTo(5)
      .length.lessThanOrEqualTo(50),
  }),
};
