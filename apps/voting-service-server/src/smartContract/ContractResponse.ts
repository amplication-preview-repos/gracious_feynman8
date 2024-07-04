import { ObjectType, Field } from "@nestjs/graphql";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../types";

@ObjectType("ContractResponseObject")
class ContractResponse {
    @Field(() => GraphQLJSON)
    result!: InputJsonValue;
}

export { ContractResponse as ContractResponse };