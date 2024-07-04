import { Module } from "@nestjs/common";
import { ElectionModuleBase } from "./base/election.module.base";
import { ElectionService } from "./election.service";
import { ElectionController } from "./election.controller";
import { ElectionResolver } from "./election.resolver";

@Module({
  imports: [ElectionModuleBase],
  controllers: [ElectionController],
  providers: [ElectionService, ElectionResolver],
  exports: [ElectionService],
})
export class ElectionModule {}
