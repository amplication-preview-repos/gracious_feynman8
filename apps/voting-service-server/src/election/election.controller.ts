import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ElectionService } from "./election.service";
import { ElectionControllerBase } from "./base/election.controller.base";

@swagger.ApiTags("elections")
@common.Controller("elections")
export class ElectionController extends ElectionControllerBase {
  constructor(protected readonly service: ElectionService) {
    super(service);
  }
}
