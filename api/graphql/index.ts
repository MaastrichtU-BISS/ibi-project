import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type AggregateComment = {
  __typename?: 'AggregateComment';
  _count?: Maybe<CommentCountAggregateOutputType>;
  count?: Maybe<CommentCountAggregateOutputType>;
  _min?: Maybe<CommentMinAggregateOutputType>;
  min?: Maybe<CommentMinAggregateOutputType>;
  _max?: Maybe<CommentMaxAggregateOutputType>;
  max?: Maybe<CommentMaxAggregateOutputType>;
};

export type AggregatePost = {
  __typename?: 'AggregatePost';
  _count?: Maybe<PostCountAggregateOutputType>;
  count?: Maybe<PostCountAggregateOutputType>;
  _min?: Maybe<PostMinAggregateOutputType>;
  min?: Maybe<PostMinAggregateOutputType>;
  _max?: Maybe<PostMaxAggregateOutputType>;
  max?: Maybe<PostMaxAggregateOutputType>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _count?: Maybe<UserCountAggregateOutputType>;
  count?: Maybe<UserCountAggregateOutputType>;
  _min?: Maybe<UserMinAggregateOutputType>;
  min?: Maybe<UserMinAggregateOutputType>;
  _max?: Maybe<UserMaxAggregateOutputType>;
  max?: Maybe<UserMaxAggregateOutputType>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  count: Scalars['Int'];
};

export type Comment = {
  __typename?: 'Comment';
  id: Scalars['String'];
  post: Post;
  postId: Scalars['String'];
  comment: Scalars['String'];
};

export type CommentCountAggregateOutputType = {
  __typename?: 'CommentCountAggregateOutputType';
  id: Scalars['Int'];
  postId: Scalars['Int'];
  comment: Scalars['Int'];
  _all: Scalars['Int'];
};

export type CommentCreateInput = {
  id?: Maybe<Scalars['String']>;
  comment: Scalars['String'];
  post: PostCreateNestedOneWithoutCommentsInput;
};

export type CommentCreateManyInput = {
  id?: Maybe<Scalars['String']>;
  postId: Scalars['String'];
  comment: Scalars['String'];
};

export type CommentCreateManyPostInput = {
  id?: Maybe<Scalars['String']>;
  comment: Scalars['String'];
};

export type CommentCreateManyPostInputEnvelope = {
  data: Array<CommentCreateManyPostInput>;
};

export type CommentCreateNestedManyWithoutPostInput = {
  create?: Maybe<Array<CommentCreateWithoutPostInput>>;
  connectOrCreate?: Maybe<Array<CommentCreateOrConnectWithoutPostInput>>;
  createMany?: Maybe<CommentCreateManyPostInputEnvelope>;
  connect?: Maybe<Array<CommentWhereUniqueInput>>;
};

export type CommentCreateOrConnectWithoutPostInput = {
  where: CommentWhereUniqueInput;
  create: CommentUncheckedCreateWithoutPostInput;
};

export type CommentCreateWithoutPostInput = {
  id?: Maybe<Scalars['String']>;
  comment: Scalars['String'];
};

export type CommentListRelationFilter = {
  every?: Maybe<CommentWhereInput>;
  some?: Maybe<CommentWhereInput>;
  none?: Maybe<CommentWhereInput>;
};

export type CommentMaxAggregateOutputType = {
  __typename?: 'CommentMaxAggregateOutputType';
  id?: Maybe<Scalars['String']>;
  postId?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
};

export type CommentMinAggregateOutputType = {
  __typename?: 'CommentMinAggregateOutputType';
  id?: Maybe<Scalars['String']>;
  postId?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
};

export type CommentOrderByInput = {
  id?: Maybe<SortOrder>;
  postId?: Maybe<SortOrder>;
  comment?: Maybe<SortOrder>;
};

export enum CommentScalarFieldEnum {
  Id = 'id',
  PostId = 'postId',
  Comment = 'comment'
}

export type CommentScalarWhereInput = {
  AND?: Maybe<Array<CommentScalarWhereInput>>;
  OR?: Maybe<Array<CommentScalarWhereInput>>;
  NOT?: Maybe<Array<CommentScalarWhereInput>>;
  id?: Maybe<StringFilter>;
  postId?: Maybe<StringFilter>;
  comment?: Maybe<StringFilter>;
};

export type CommentScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<CommentScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<CommentScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<CommentScalarWhereWithAggregatesInput>>;
  id?: Maybe<StringWithAggregatesFilter>;
  postId?: Maybe<StringWithAggregatesFilter>;
  comment?: Maybe<StringWithAggregatesFilter>;
};

export type CommentUncheckedCreateInput = {
  id?: Maybe<Scalars['String']>;
  postId: Scalars['String'];
  comment: Scalars['String'];
};

export type CommentUncheckedCreateNestedManyWithoutPostInput = {
  create?: Maybe<Array<CommentCreateWithoutPostInput>>;
  connectOrCreate?: Maybe<Array<CommentCreateOrConnectWithoutPostInput>>;
  createMany?: Maybe<CommentCreateManyPostInputEnvelope>;
  connect?: Maybe<Array<CommentWhereUniqueInput>>;
};

export type CommentUncheckedCreateWithoutPostInput = {
  id?: Maybe<Scalars['String']>;
  comment: Scalars['String'];
};

export type CommentUncheckedUpdateInput = {
  postId?: Maybe<StringFieldUpdateOperationsInput>;
  comment?: Maybe<StringFieldUpdateOperationsInput>;
};

export type CommentUncheckedUpdateManyInput = {
  postId?: Maybe<StringFieldUpdateOperationsInput>;
  comment?: Maybe<StringFieldUpdateOperationsInput>;
};

export type CommentUncheckedUpdateManyWithoutCommentsInput = {
  comment?: Maybe<StringFieldUpdateOperationsInput>;
};

export type CommentUncheckedUpdateManyWithoutPostInput = {
  create?: Maybe<Array<CommentCreateWithoutPostInput>>;
  connectOrCreate?: Maybe<Array<CommentCreateOrConnectWithoutPostInput>>;
  upsert?: Maybe<Array<CommentUpsertWithWhereUniqueWithoutPostInput>>;
  createMany?: Maybe<CommentCreateManyPostInputEnvelope>;
  connect?: Maybe<Array<CommentWhereUniqueInput>>;
  set?: Maybe<Array<CommentWhereUniqueInput>>;
  disconnect?: Maybe<Array<CommentWhereUniqueInput>>;
  delete?: Maybe<Array<CommentWhereUniqueInput>>;
  update?: Maybe<Array<CommentUpdateWithWhereUniqueWithoutPostInput>>;
  updateMany?: Maybe<Array<CommentUpdateManyWithWhereWithoutPostInput>>;
  deleteMany?: Maybe<Array<CommentScalarWhereInput>>;
};

export type CommentUncheckedUpdateWithoutPostInput = {
  comment?: Maybe<StringFieldUpdateOperationsInput>;
};

export type CommentUpdateInput = {
  comment?: Maybe<StringFieldUpdateOperationsInput>;
  post?: Maybe<PostUpdateOneRequiredWithoutCommentsInput>;
};

export type CommentUpdateManyMutationInput = {
  comment?: Maybe<StringFieldUpdateOperationsInput>;
};

export type CommentUpdateManyWithWhereWithoutPostInput = {
  where: CommentScalarWhereInput;
  data: CommentUncheckedUpdateManyWithoutCommentsInput;
};

export type CommentUpdateManyWithoutPostInput = {
  create?: Maybe<Array<CommentCreateWithoutPostInput>>;
  connectOrCreate?: Maybe<Array<CommentCreateOrConnectWithoutPostInput>>;
  upsert?: Maybe<Array<CommentUpsertWithWhereUniqueWithoutPostInput>>;
  createMany?: Maybe<CommentCreateManyPostInputEnvelope>;
  connect?: Maybe<Array<CommentWhereUniqueInput>>;
  set?: Maybe<Array<CommentWhereUniqueInput>>;
  disconnect?: Maybe<Array<CommentWhereUniqueInput>>;
  delete?: Maybe<Array<CommentWhereUniqueInput>>;
  update?: Maybe<Array<CommentUpdateWithWhereUniqueWithoutPostInput>>;
  updateMany?: Maybe<Array<CommentUpdateManyWithWhereWithoutPostInput>>;
  deleteMany?: Maybe<Array<CommentScalarWhereInput>>;
};

export type CommentUpdateWithWhereUniqueWithoutPostInput = {
  where: CommentWhereUniqueInput;
  data: CommentUncheckedUpdateWithoutPostInput;
};

export type CommentUpdateWithoutPostInput = {
  comment?: Maybe<StringFieldUpdateOperationsInput>;
};

export type CommentUpsertWithWhereUniqueWithoutPostInput = {
  where: CommentWhereUniqueInput;
  update: CommentUncheckedUpdateWithoutPostInput;
  create: CommentUncheckedCreateWithoutPostInput;
};

export type CommentWhereInput = {
  AND?: Maybe<Array<CommentWhereInput>>;
  OR?: Maybe<Array<CommentWhereInput>>;
  NOT?: Maybe<Array<CommentWhereInput>>;
  id?: Maybe<StringFilter>;
  post?: Maybe<PostWhereInput>;
  postId?: Maybe<StringFilter>;
  comment?: Maybe<StringFilter>;
};

export type CommentWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};


export type Mutation = {
  __typename?: 'Mutation';
  createOnePost: Post;
  updateOnePost: Post;
  deleteOnePost?: Maybe<Post>;
  upsertOnePost?: Maybe<Post>;
  deleteManyPost?: Maybe<BatchPayload>;
  updateManyPost?: Maybe<BatchPayload>;
  createOneComment: Comment;
  updateOneComment: Comment;
  deleteOneComment?: Maybe<Comment>;
  upsertOneComment?: Maybe<Comment>;
  deleteManyComment?: Maybe<BatchPayload>;
  updateManyComment?: Maybe<BatchPayload>;
  createOneUser: User;
  updateOneUser: User;
  deleteOneUser?: Maybe<User>;
  upsertOneUser?: Maybe<User>;
  deleteManyUser?: Maybe<BatchPayload>;
  updateManyUser?: Maybe<BatchPayload>;
  _extend_?: Maybe<Scalars['String']>;
};


export type MutationCreateOnePostArgs = {
  data: PostCreateInput;
};


export type MutationUpdateOnePostArgs = {
  where: PostWhereUniqueInput;
  data: PostUpdateInput;
};


export type MutationDeleteOnePostArgs = {
  where: PostWhereUniqueInput;
};


export type MutationUpsertOnePostArgs = {
  where: PostWhereUniqueInput;
  create: PostCreateInput;
  update: PostUpdateInput;
};


export type MutationDeleteManyPostArgs = {
  where?: Maybe<PostWhereInput>;
};


export type MutationUpdateManyPostArgs = {
  where?: Maybe<PostWhereInput>;
  data?: Maybe<PostUpdateManyMutationInput>;
};


export type MutationCreateOneCommentArgs = {
  data: CommentCreateInput;
};


export type MutationUpdateOneCommentArgs = {
  where: CommentWhereUniqueInput;
  data: CommentUpdateInput;
};


export type MutationDeleteOneCommentArgs = {
  where: CommentWhereUniqueInput;
};


export type MutationUpsertOneCommentArgs = {
  where: CommentWhereUniqueInput;
  create: CommentCreateInput;
  update: CommentUpdateInput;
};


export type MutationDeleteManyCommentArgs = {
  where?: Maybe<CommentWhereInput>;
};


export type MutationUpdateManyCommentArgs = {
  where?: Maybe<CommentWhereInput>;
  data?: Maybe<CommentUpdateManyMutationInput>;
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};


export type MutationUpdateOneUserArgs = {
  where: UserWhereUniqueInput;
  data: UserUpdateInput;
};


export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationUpsertOneUserArgs = {
  where: UserWhereUniqueInput;
  create: UserCreateInput;
  update: UserUpdateInput;
};


export type MutationDeleteManyUserArgs = {
  where?: Maybe<UserWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  where?: Maybe<UserWhereInput>;
  data?: Maybe<UserUpdateManyMutationInput>;
};

export type NestedIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
};

export type NestedIntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
};

export type NestedStringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
};

export type NestedStringNullableFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
};

export type NestedStringNullableWithAggregatesFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableWithAggregatesFilter>;
  _count?: Maybe<NestedIntNullableFilter>;
  count?: Maybe<NestedIntNullableFilter>;
  _min?: Maybe<NestedStringNullableFilter>;
  min?: Maybe<NestedStringNullableFilter>;
  _max?: Maybe<NestedStringNullableFilter>;
  max?: Maybe<NestedStringNullableFilter>;
};

export type NestedStringWithAggregatesFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringWithAggregatesFilter>;
  _count?: Maybe<NestedIntFilter>;
  count?: Maybe<NestedIntFilter>;
  _min?: Maybe<NestedStringFilter>;
  min?: Maybe<NestedStringFilter>;
  _max?: Maybe<NestedStringFilter>;
  max?: Maybe<NestedStringFilter>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type Post = {
  __typename?: 'Post';
  id: Scalars['String'];
  slug: Scalars['String'];
  title: Scalars['String'];
  body: Scalars['String'];
  comments: Array<Comment>;
  user: User;
  userId: Scalars['String'];
  _count?: Maybe<PostCountOutputType>;
};


export type PostCommentsArgs = {
  where?: Maybe<CommentWhereInput>;
  orderBy?: Maybe<CommentOrderByInput>;
  cursor?: Maybe<CommentWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<CommentScalarFieldEnum>;
};

export type PostCountAggregateOutputType = {
  __typename?: 'PostCountAggregateOutputType';
  id: Scalars['Int'];
  slug: Scalars['Int'];
  title: Scalars['Int'];
  body: Scalars['Int'];
  userId: Scalars['Int'];
  _all: Scalars['Int'];
};

export type PostCountOutputType = {
  __typename?: 'PostCountOutputType';
  comments: Scalars['Int'];
};

export type PostCreateInput = {
  id?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  title: Scalars['String'];
  body: Scalars['String'];
  comments?: Maybe<CommentCreateNestedManyWithoutPostInput>;
  user: UserCreateNestedOneWithoutPostsInput;
};

export type PostCreateManyInput = {
  id?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  title: Scalars['String'];
  body: Scalars['String'];
  userId: Scalars['String'];
};

export type PostCreateManyUserInput = {
  id?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  title: Scalars['String'];
  body: Scalars['String'];
};

export type PostCreateManyUserInputEnvelope = {
  data: Array<PostCreateManyUserInput>;
};

export type PostCreateNestedManyWithoutUserInput = {
  create?: Maybe<Array<PostCreateWithoutUserInput>>;
  connectOrCreate?: Maybe<Array<PostCreateOrConnectWithoutUserInput>>;
  createMany?: Maybe<PostCreateManyUserInputEnvelope>;
  connect?: Maybe<Array<PostWhereUniqueInput>>;
};

export type PostCreateNestedOneWithoutCommentsInput = {
  create?: Maybe<PostUncheckedCreateWithoutCommentsInput>;
  connectOrCreate?: Maybe<PostCreateOrConnectWithoutCommentsInput>;
  connect?: Maybe<PostWhereUniqueInput>;
};

export type PostCreateOrConnectWithoutCommentsInput = {
  where: PostWhereUniqueInput;
  create: PostUncheckedCreateWithoutCommentsInput;
};

export type PostCreateOrConnectWithoutUserInput = {
  where: PostWhereUniqueInput;
  create: PostUncheckedCreateWithoutUserInput;
};

export type PostCreateWithoutCommentsInput = {
  id?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  title: Scalars['String'];
  body: Scalars['String'];
  user: UserCreateNestedOneWithoutPostsInput;
};

export type PostCreateWithoutUserInput = {
  id?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  title: Scalars['String'];
  body: Scalars['String'];
  comments?: Maybe<CommentCreateNestedManyWithoutPostInput>;
};

export type PostListRelationFilter = {
  every?: Maybe<PostWhereInput>;
  some?: Maybe<PostWhereInput>;
  none?: Maybe<PostWhereInput>;
};

export type PostMaxAggregateOutputType = {
  __typename?: 'PostMaxAggregateOutputType';
  id?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type PostMinAggregateOutputType = {
  __typename?: 'PostMinAggregateOutputType';
  id?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type PostOrderByInput = {
  id?: Maybe<SortOrder>;
  slug?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  body?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type PostRelationFilter = {
  is?: Maybe<PostWhereInput>;
  isNot?: Maybe<PostWhereInput>;
};

export enum PostScalarFieldEnum {
  Id = 'id',
  Slug = 'slug',
  Title = 'title',
  Body = 'body',
  UserId = 'userId'
}

export type PostScalarWhereInput = {
  AND?: Maybe<Array<PostScalarWhereInput>>;
  OR?: Maybe<Array<PostScalarWhereInput>>;
  NOT?: Maybe<Array<PostScalarWhereInput>>;
  id?: Maybe<StringFilter>;
  slug?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
  body?: Maybe<StringFilter>;
  userId?: Maybe<StringFilter>;
};

export type PostScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<PostScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<PostScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<PostScalarWhereWithAggregatesInput>>;
  id?: Maybe<StringWithAggregatesFilter>;
  slug?: Maybe<StringWithAggregatesFilter>;
  title?: Maybe<StringWithAggregatesFilter>;
  body?: Maybe<StringWithAggregatesFilter>;
  userId?: Maybe<StringWithAggregatesFilter>;
};

export type PostUncheckedCreateInput = {
  id?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  title: Scalars['String'];
  body: Scalars['String'];
  userId: Scalars['String'];
  comments?: Maybe<CommentUncheckedCreateNestedManyWithoutPostInput>;
};

export type PostUncheckedCreateNestedManyWithoutUserInput = {
  create?: Maybe<Array<PostCreateWithoutUserInput>>;
  connectOrCreate?: Maybe<Array<PostCreateOrConnectWithoutUserInput>>;
  createMany?: Maybe<PostCreateManyUserInputEnvelope>;
  connect?: Maybe<Array<PostWhereUniqueInput>>;
};

export type PostUncheckedCreateWithoutCommentsInput = {
  id?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  title: Scalars['String'];
  body: Scalars['String'];
  userId: Scalars['String'];
};

export type PostUncheckedCreateWithoutUserInput = {
  id?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  title: Scalars['String'];
  body: Scalars['String'];
  comments?: Maybe<CommentUncheckedCreateNestedManyWithoutPostInput>;
};

export type PostUncheckedUpdateInput = {
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  body?: Maybe<StringFieldUpdateOperationsInput>;
  userId?: Maybe<StringFieldUpdateOperationsInput>;
  comments?: Maybe<CommentUncheckedUpdateManyWithoutPostInput>;
};

export type PostUncheckedUpdateManyInput = {
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  body?: Maybe<StringFieldUpdateOperationsInput>;
  userId?: Maybe<StringFieldUpdateOperationsInput>;
};

export type PostUncheckedUpdateManyWithoutPostsInput = {
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  body?: Maybe<StringFieldUpdateOperationsInput>;
};

export type PostUncheckedUpdateManyWithoutUserInput = {
  create?: Maybe<Array<PostCreateWithoutUserInput>>;
  connectOrCreate?: Maybe<Array<PostCreateOrConnectWithoutUserInput>>;
  upsert?: Maybe<Array<PostUpsertWithWhereUniqueWithoutUserInput>>;
  createMany?: Maybe<PostCreateManyUserInputEnvelope>;
  connect?: Maybe<Array<PostWhereUniqueInput>>;
  set?: Maybe<Array<PostWhereUniqueInput>>;
  disconnect?: Maybe<Array<PostWhereUniqueInput>>;
  delete?: Maybe<Array<PostWhereUniqueInput>>;
  update?: Maybe<Array<PostUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<PostUpdateManyWithWhereWithoutUserInput>>;
  deleteMany?: Maybe<Array<PostScalarWhereInput>>;
};

export type PostUncheckedUpdateWithoutCommentsInput = {
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  body?: Maybe<StringFieldUpdateOperationsInput>;
  userId?: Maybe<StringFieldUpdateOperationsInput>;
};

export type PostUncheckedUpdateWithoutUserInput = {
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  body?: Maybe<StringFieldUpdateOperationsInput>;
  comments?: Maybe<CommentUncheckedUpdateManyWithoutPostInput>;
};

export type PostUpdateInput = {
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  body?: Maybe<StringFieldUpdateOperationsInput>;
  comments?: Maybe<CommentUpdateManyWithoutPostInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutPostsInput>;
};

export type PostUpdateManyMutationInput = {
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  body?: Maybe<StringFieldUpdateOperationsInput>;
};

export type PostUpdateManyWithWhereWithoutUserInput = {
  where: PostScalarWhereInput;
  data: PostUncheckedUpdateManyWithoutPostsInput;
};

export type PostUpdateManyWithoutUserInput = {
  create?: Maybe<Array<PostCreateWithoutUserInput>>;
  connectOrCreate?: Maybe<Array<PostCreateOrConnectWithoutUserInput>>;
  upsert?: Maybe<Array<PostUpsertWithWhereUniqueWithoutUserInput>>;
  createMany?: Maybe<PostCreateManyUserInputEnvelope>;
  connect?: Maybe<Array<PostWhereUniqueInput>>;
  set?: Maybe<Array<PostWhereUniqueInput>>;
  disconnect?: Maybe<Array<PostWhereUniqueInput>>;
  delete?: Maybe<Array<PostWhereUniqueInput>>;
  update?: Maybe<Array<PostUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<PostUpdateManyWithWhereWithoutUserInput>>;
  deleteMany?: Maybe<Array<PostScalarWhereInput>>;
};

export type PostUpdateOneRequiredWithoutCommentsInput = {
  create?: Maybe<PostUncheckedCreateWithoutCommentsInput>;
  connectOrCreate?: Maybe<PostCreateOrConnectWithoutCommentsInput>;
  upsert?: Maybe<PostUpsertWithoutCommentsInput>;
  connect?: Maybe<PostWhereUniqueInput>;
  update?: Maybe<PostUncheckedUpdateWithoutCommentsInput>;
};

export type PostUpdateWithWhereUniqueWithoutUserInput = {
  where: PostWhereUniqueInput;
  data: PostUncheckedUpdateWithoutUserInput;
};

export type PostUpdateWithoutCommentsInput = {
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  body?: Maybe<StringFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutPostsInput>;
};

export type PostUpdateWithoutUserInput = {
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  body?: Maybe<StringFieldUpdateOperationsInput>;
  comments?: Maybe<CommentUpdateManyWithoutPostInput>;
};

export type PostUpsertWithWhereUniqueWithoutUserInput = {
  where: PostWhereUniqueInput;
  update: PostUncheckedUpdateWithoutUserInput;
  create: PostUncheckedCreateWithoutUserInput;
};

export type PostUpsertWithoutCommentsInput = {
  update: PostUncheckedUpdateWithoutCommentsInput;
  create: PostUncheckedCreateWithoutCommentsInput;
};

export type PostWhereInput = {
  AND?: Maybe<Array<PostWhereInput>>;
  OR?: Maybe<Array<PostWhereInput>>;
  NOT?: Maybe<Array<PostWhereInput>>;
  id?: Maybe<StringFilter>;
  slug?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
  body?: Maybe<StringFilter>;
  comments?: Maybe<CommentListRelationFilter>;
  user?: Maybe<UserWhereInput>;
  userId?: Maybe<StringFilter>;
};

export type PostWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  findUniquePost?: Maybe<Post>;
  findFirstPost?: Maybe<Post>;
  findManyPost?: Maybe<Array<Post>>;
  findManyPostCount: Scalars['Int'];
  aggregatePost?: Maybe<AggregatePost>;
  findUniqueComment?: Maybe<Comment>;
  findFirstComment?: Maybe<Comment>;
  findManyComment?: Maybe<Array<Comment>>;
  findManyCommentCount: Scalars['Int'];
  aggregateComment?: Maybe<AggregateComment>;
  findUniqueUser?: Maybe<User>;
  findFirstUser?: Maybe<User>;
  findManyUser?: Maybe<Array<User>>;
  findManyUserCount: Scalars['Int'];
  aggregateUser?: Maybe<AggregateUser>;
  _extend_?: Maybe<Scalars['String']>;
};


export type QueryFindUniquePostArgs = {
  where: PostWhereUniqueInput;
};


export type QueryFindFirstPostArgs = {
  where?: Maybe<PostWhereInput>;
  orderBy?: Maybe<Array<PostOrderByInput>>;
  cursor?: Maybe<PostWhereUniqueInput>;
  distinct?: Maybe<PostScalarFieldEnum>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryFindManyPostArgs = {
  where?: Maybe<PostWhereInput>;
  orderBy?: Maybe<Array<PostOrderByInput>>;
  cursor?: Maybe<PostWhereUniqueInput>;
  distinct?: Maybe<PostScalarFieldEnum>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryFindManyPostCountArgs = {
  where?: Maybe<PostWhereInput>;
  orderBy?: Maybe<Array<PostOrderByInput>>;
  cursor?: Maybe<PostWhereUniqueInput>;
  distinct?: Maybe<PostScalarFieldEnum>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryAggregatePostArgs = {
  where?: Maybe<PostWhereInput>;
  orderBy?: Maybe<Array<PostOrderByInput>>;
  cursor?: Maybe<PostWhereUniqueInput>;
  distinct?: Maybe<PostScalarFieldEnum>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryFindUniqueCommentArgs = {
  where: CommentWhereUniqueInput;
};


export type QueryFindFirstCommentArgs = {
  where?: Maybe<CommentWhereInput>;
  orderBy?: Maybe<Array<CommentOrderByInput>>;
  cursor?: Maybe<CommentWhereUniqueInput>;
  distinct?: Maybe<CommentScalarFieldEnum>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryFindManyCommentArgs = {
  where?: Maybe<CommentWhereInput>;
  orderBy?: Maybe<Array<CommentOrderByInput>>;
  cursor?: Maybe<CommentWhereUniqueInput>;
  distinct?: Maybe<CommentScalarFieldEnum>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryFindManyCommentCountArgs = {
  where?: Maybe<CommentWhereInput>;
  orderBy?: Maybe<Array<CommentOrderByInput>>;
  cursor?: Maybe<CommentWhereUniqueInput>;
  distinct?: Maybe<CommentScalarFieldEnum>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryAggregateCommentArgs = {
  where?: Maybe<CommentWhereInput>;
  orderBy?: Maybe<Array<CommentOrderByInput>>;
  cursor?: Maybe<CommentWhereUniqueInput>;
  distinct?: Maybe<CommentScalarFieldEnum>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryFindUniqueUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryFindFirstUserArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<Array<UserOrderByInput>>;
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<UserScalarFieldEnum>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryFindManyUserArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<Array<UserOrderByInput>>;
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<UserScalarFieldEnum>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryFindManyUserCountArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<Array<UserOrderByInput>>;
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<UserScalarFieldEnum>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryAggregateUserArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<Array<UserOrderByInput>>;
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<UserScalarFieldEnum>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type StringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringFilter>;
};

export type StringNullableFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringNullableFilter>;
};

export type StringNullableWithAggregatesFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringNullableWithAggregatesFilter>;
  _count?: Maybe<NestedIntNullableFilter>;
  count?: Maybe<NestedIntNullableFilter>;
  _min?: Maybe<NestedStringNullableFilter>;
  min?: Maybe<NestedStringNullableFilter>;
  _max?: Maybe<NestedStringNullableFilter>;
  max?: Maybe<NestedStringNullableFilter>;
};

export type StringWithAggregatesFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringWithAggregatesFilter>;
  _count?: Maybe<NestedIntFilter>;
  count?: Maybe<NestedIntFilter>;
  _min?: Maybe<NestedStringFilter>;
  min?: Maybe<NestedStringFilter>;
  _max?: Maybe<NestedStringFilter>;
  max?: Maybe<NestedStringFilter>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['String'];
  email: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  posts: Array<Post>;
  _count?: Maybe<UserCountOutputType>;
};


export type UserPostsArgs = {
  where?: Maybe<PostWhereInput>;
  orderBy?: Maybe<PostOrderByInput>;
  cursor?: Maybe<PostWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<PostScalarFieldEnum>;
};

export type UserCountAggregateOutputType = {
  __typename?: 'UserCountAggregateOutputType';
  id: Scalars['Int'];
  email: Scalars['Int'];
  name: Scalars['Int'];
  username: Scalars['Int'];
  _all: Scalars['Int'];
};

export type UserCountOutputType = {
  __typename?: 'UserCountOutputType';
  posts: Scalars['Int'];
};

export type UserCreateInput = {
  id?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  posts?: Maybe<PostCreateNestedManyWithoutUserInput>;
};

export type UserCreateManyInput = {
  id?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type UserCreateNestedOneWithoutPostsInput = {
  create?: Maybe<UserUncheckedCreateWithoutPostsInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutPostsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateOrConnectWithoutPostsInput = {
  where: UserWhereUniqueInput;
  create: UserUncheckedCreateWithoutPostsInput;
};

export type UserCreateWithoutPostsInput = {
  id?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type UserMaxAggregateOutputType = {
  __typename?: 'UserMaxAggregateOutputType';
  id?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type UserMinAggregateOutputType = {
  __typename?: 'UserMinAggregateOutputType';
  id?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type UserOrderByInput = {
  id?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  username?: Maybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: Maybe<UserWhereInput>;
  isNot?: Maybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  Id = 'id',
  Email = 'email',
  Name = 'name',
  Username = 'username'
}

export type UserScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<UserScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<UserScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<UserScalarWhereWithAggregatesInput>>;
  id?: Maybe<StringWithAggregatesFilter>;
  email?: Maybe<StringWithAggregatesFilter>;
  name?: Maybe<StringNullableWithAggregatesFilter>;
  username?: Maybe<StringNullableWithAggregatesFilter>;
};

export type UserUncheckedCreateInput = {
  id?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  posts?: Maybe<PostUncheckedCreateNestedManyWithoutUserInput>;
};

export type UserUncheckedCreateWithoutPostsInput = {
  id?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type UserUncheckedUpdateInput = {
  email?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  username?: Maybe<NullableStringFieldUpdateOperationsInput>;
  posts?: Maybe<PostUncheckedUpdateManyWithoutUserInput>;
};

export type UserUncheckedUpdateManyInput = {
  email?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  username?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUncheckedUpdateWithoutPostsInput = {
  email?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  username?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateInput = {
  email?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  username?: Maybe<NullableStringFieldUpdateOperationsInput>;
  posts?: Maybe<PostUpdateManyWithoutUserInput>;
};

export type UserUpdateManyMutationInput = {
  email?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  username?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateOneRequiredWithoutPostsInput = {
  create?: Maybe<UserUncheckedCreateWithoutPostsInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutPostsInput>;
  upsert?: Maybe<UserUpsertWithoutPostsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  update?: Maybe<UserUncheckedUpdateWithoutPostsInput>;
};

export type UserUpdateWithoutPostsInput = {
  email?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  username?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutPostsInput = {
  update: UserUncheckedUpdateWithoutPostsInput;
  create: UserUncheckedCreateWithoutPostsInput;
};

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
  id?: Maybe<StringFilter>;
  email?: Maybe<StringFilter>;
  name?: Maybe<StringNullableFilter>;
  username?: Maybe<StringNullableFilter>;
  posts?: Maybe<PostListRelationFilter>;
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type FindManyPostQueryVariables = Exact<{ [key: string]: never; }>;


export type FindManyPostQuery = { __typename?: 'Query', findManyPost?: Maybe<Array<{ __typename?: 'Post', id: string, title: string }>> };


export const FindManyPostDocument = gql`
    query findManyPost {
  findManyPost {
    id
    title
  }
}
    `;

/**
 * __useFindManyPostQuery__
 *
 * To run a query within a React component, call `useFindManyPostQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindManyPostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindManyPostQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindManyPostQuery(baseOptions?: Apollo.QueryHookOptions<FindManyPostQuery, FindManyPostQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindManyPostQuery, FindManyPostQueryVariables>(FindManyPostDocument, options);
      }
export function useFindManyPostLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindManyPostQuery, FindManyPostQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindManyPostQuery, FindManyPostQueryVariables>(FindManyPostDocument, options);
        }
export type FindManyPostQueryHookResult = ReturnType<typeof useFindManyPostQuery>;
export type FindManyPostLazyQueryHookResult = ReturnType<typeof useFindManyPostLazyQuery>;
export type FindManyPostQueryResult = Apollo.QueryResult<FindManyPostQuery, FindManyPostQueryVariables>;