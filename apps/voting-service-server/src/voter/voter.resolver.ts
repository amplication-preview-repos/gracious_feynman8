import * as graphql from "@nestjs/graphql";
import { VoterResolverBase } from "./base/voter.resolver.base";
import { Voter } from "./base/Voter";
import { VoterService } from "./voter.service";

@graphql.Resolver(() => Voter)
export class VoterResolver extends VoterResolverBase {
  constructor(protected readonly service: VoterService) {
    super(service);
  }
}
