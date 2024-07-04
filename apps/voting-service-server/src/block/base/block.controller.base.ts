/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { BlockService } from "../block.service";
import { BlockCreateInput } from "./BlockCreateInput";
import { Block } from "./Block";
import { BlockFindManyArgs } from "./BlockFindManyArgs";
import { BlockWhereUniqueInput } from "./BlockWhereUniqueInput";
import { BlockUpdateInput } from "./BlockUpdateInput";

export class BlockControllerBase {
  constructor(protected readonly service: BlockService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Block })
  async createBlock(@common.Body() data: BlockCreateInput): Promise<Block> {
    return await this.service.createBlock({
      data: data,
      select: {
        createdAt: true,
        hash: true,
        id: true,
        previousHash: true,
        timestamp: true,
        transactionData: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Block] })
  @ApiNestedQuery(BlockFindManyArgs)
  async blocks(@common.Req() request: Request): Promise<Block[]> {
    const args = plainToClass(BlockFindManyArgs, request.query);
    return this.service.blocks({
      ...args,
      select: {
        createdAt: true,
        hash: true,
        id: true,
        previousHash: true,
        timestamp: true,
        transactionData: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Block })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async block(
    @common.Param() params: BlockWhereUniqueInput
  ): Promise<Block | null> {
    const result = await this.service.block({
      where: params,
      select: {
        createdAt: true,
        hash: true,
        id: true,
        previousHash: true,
        timestamp: true,
        transactionData: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Block })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateBlock(
    @common.Param() params: BlockWhereUniqueInput,
    @common.Body() data: BlockUpdateInput
  ): Promise<Block | null> {
    try {
      return await this.service.updateBlock({
        where: params,
        data: data,
        select: {
          createdAt: true,
          hash: true,
          id: true,
          previousHash: true,
          timestamp: true,
          transactionData: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Block })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteBlock(
    @common.Param() params: BlockWhereUniqueInput
  ): Promise<Block | null> {
    try {
      return await this.service.deleteBlock({
        where: params,
        select: {
          createdAt: true,
          hash: true,
          id: true,
          previousHash: true,
          timestamp: true,
          transactionData: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
