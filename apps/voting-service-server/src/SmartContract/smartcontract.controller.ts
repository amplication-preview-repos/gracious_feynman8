import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { SmartContractService } from "./smartcontract.service";
import { DeployContractInput } from "../smartContract/DeployContractInput";
import { ContractResponse } from "../smartContract/ContractResponse";

@swagger.ApiTags("smartContracts")
@common.Controller("smartContracts")
export class SmartContractController {
  constructor(protected readonly service: SmartContractService) {}

  @common.Post("/call")
  @swagger.ApiOkResponse({
    type: ContractResponse
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CallFunction(
    @common.Body()
    body: DeployContractInput
  ): Promise<ContractResponse> {
        return this.service.CallFunction(body);
      }

  @common.Post("/deploy")
  @swagger.ApiOkResponse({
    type: ContractResponse
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async DeployContract(
    @common.Body()
    body: DeployContractInput
  ): Promise<ContractResponse> {
        return this.service.DeployContract(body);
      }
}
