import { Module } from "@nestjs/common";
import { VoterModuleBase } from "./base/voter.module.base";
import { VoterService } from "./voter.service";
import { VoterController } from "./voter.controller";
import { VoterResolver } from "./voter.resolver";

@Module({
  imports: [VoterModuleBase],
  controllers: [VoterController],
  providers: [VoterService, VoterResolver],
  exports: [VoterService],
})
export class VoterModule {}
