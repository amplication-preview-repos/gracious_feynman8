import * as graphql from "@nestjs/graphql";
import { CallFunctionInput } from "../smartContract/CallFunctionInput";
import { ContractResponse } from "../smartContract/ContractResponse";
import { DeployContractInput } from "../smartContract/DeployContractInput";
import { SmartContractService } from "./smartcontract.service";

export class SmartContractResolver {
  constructor(protected readonly service: SmartContractService) {}

  @graphql.Mutation(() => ContractResponse)
  async CallFunction(
    @graphql.Args()
    args: CallFunctionInput
  ): Promise<ContractResponse> {
    return this.service.CallFunction(args);
  }

  @graphql.Mutation(() => ContractResponse)
  async DeployContract(
    @graphql.Args()
    args: DeployContractInput
  ): Promise<ContractResponse> {
    return this.service.DeployContract(args);
  }
}
