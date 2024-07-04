import * as graphql from "@nestjs/graphql";
import { ElectionResolverBase } from "./base/election.resolver.base";
import { Election } from "./base/Election";
import { ElectionService } from "./election.service";

@graphql.Resolver(() => Election)
export class ElectionResolver extends ElectionResolverBase {
  constructor(protected readonly service: ElectionService) {
    super(service);
  }
}
