import * as chai from "chai";
import * as sinon from "sinon";
import * as assert from "assert";
import {displayEnv} from "../lib";
var expect = chai.expect;
let should = chai.should();

describe("Expect env vars to be displayed",()=> {
  it("should return the var defined in process and not in .env file",() =>{
      process.env.some_var="some_val"
      let res = displayEnv({some_var:"other_val"});
      res["some_var"].should.eql("some_val");
  })
});
