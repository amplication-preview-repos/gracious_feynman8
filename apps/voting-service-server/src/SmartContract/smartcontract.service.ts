import { Injectable } from "@nestjs/common";
import { CallFunctionInput } from "../smartContract/CallFunctionInput";
import { ContractResponse } from "../smartContract/ContractResponse";
import { DeployContractInput } from "../smartContract/DeployContractInput";

@Injectable()
export class SmartContractService {
  constructor() {}
  async CallFunction(args: CallFunctionInput): Promise<ContractResponse> {
    throw new Error("Not implemented");
  }
  async DeployContract(args: DeployContractInput): Promise<ContractResponse> {
    throw new Error("Not implemented");
  }
}
