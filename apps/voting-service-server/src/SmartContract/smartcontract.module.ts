import { Module } from "@nestjs/common";
import { SmartContractService } from "./smartcontract.service";
import { SmartContractController } from "./smartcontract.controller";
import { SmartContractResolver } from "./smartcontract.resolver";

@Module({
  controllers: [SmartContractController],
  providers: [SmartContractService, SmartContractResolver],
  exports: [SmartContractService],
})
export class SmartContractModule {}
