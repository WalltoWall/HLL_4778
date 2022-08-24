export type Maybe<T> = T | undefined
export type InputMaybe<T> = T | undefined
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]: Maybe<T[SubKey]>
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string
	String: string
	Boolean: boolean
	Int: number
	Float: number
	Date: unknown
	JSON: unknown
	PrismicStructuredText: any
}

export type BooleanQueryOperatorInput = {
	eq?: InputMaybe<Scalars["Boolean"]>
	in?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>
	ne?: InputMaybe<Scalars["Boolean"]>
	nin?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>
}

export type DateQueryOperatorInput = {
	eq?: InputMaybe<Scalars["Date"]>
	gt?: InputMaybe<Scalars["Date"]>
	gte?: InputMaybe<Scalars["Date"]>
	in?: InputMaybe<Array<InputMaybe<Scalars["Date"]>>>
	lt?: InputMaybe<Scalars["Date"]>
	lte?: InputMaybe<Scalars["Date"]>
	ne?: InputMaybe<Scalars["Date"]>
	nin?: InputMaybe<Array<InputMaybe<Scalars["Date"]>>>
}

export type Directory = Node & {
	__typename?: "Directory"
	absolutePath: Scalars["String"]
	accessTime: Scalars["Date"]
	atime: Scalars["Date"]
	atimeMs: Scalars["Float"]
	base: Scalars["String"]
	birthTime: Scalars["Date"]
	/** @deprecated Use `birthTime` instead */
	birthtime?: Maybe<Scalars["Date"]>
	/** @deprecated Use `birthTime` instead */
	birthtimeMs?: Maybe<Scalars["Float"]>
	changeTime: Scalars["Date"]
	children: Array<Node>
	ctime: Scalars["Date"]
	ctimeMs: Scalars["Float"]
	dev: Scalars["Int"]
	dir: Scalars["String"]
	ext: Scalars["String"]
	extension: Scalars["String"]
	gid: Scalars["Int"]
	id: Scalars["ID"]
	ino: Scalars["Float"]
	internal: Internal
	mode: Scalars["Int"]
	modifiedTime: Scalars["Date"]
	mtime: Scalars["Date"]
	mtimeMs: Scalars["Float"]
	name: Scalars["String"]
	nlink: Scalars["Int"]
	parent?: Maybe<Node>
	prettySize: Scalars["String"]
	rdev: Scalars["Int"]
	relativeDirectory: Scalars["String"]
	relativePath: Scalars["String"]
	root: Scalars["String"]
	size: Scalars["Int"]
	sourceInstanceName: Scalars["String"]
	uid: Scalars["Int"]
}

export type DirectoryAccessTimeArgs = {
	difference?: InputMaybe<Scalars["String"]>
	formatString?: InputMaybe<Scalars["String"]>
	fromNow?: InputMaybe<Scalars["Boolean"]>
	locale?: InputMaybe<Scalars["String"]>
}

export type DirectoryAtimeArgs = {
	difference?: InputMaybe<Scalars["String"]>
	formatString?: InputMaybe<Scalars["String"]>
	fromNow?: InputMaybe<Scalars["Boolean"]>
	locale?: InputMaybe<Scalars["String"]>
}

export type DirectoryBirthTimeArgs = {
	difference?: InputMaybe<Scalars["String"]>
	formatString?: InputMaybe<Scalars["String"]>
	fromNow?: InputMaybe<Scalars["Boolean"]>
	locale?: InputMaybe<Scalars["String"]>
}

export type DirectoryChangeTimeArgs = {
	difference?: InputMaybe<Scalars["String"]>
	formatString?: InputMaybe<Scalars["String"]>
	fromNow?: InputMaybe<Scalars["Boolean"]>
	locale?: InputMaybe<Scalars["String"]>
}

export type DirectoryCtimeArgs = {
	difference?: InputMaybe<Scalars["String"]>
	formatString?: InputMaybe<Scalars["String"]>
	fromNow?: InputMaybe<Scalars["Boolean"]>
	locale?: InputMaybe<Scalars["String"]>
}

export type DirectoryModifiedTimeArgs = {
	difference?: InputMaybe<Scalars["String"]>
	formatString?: InputMaybe<Scalars["String"]>
	fromNow?: InputMaybe<Scalars["Boolean"]>
	locale?: InputMaybe<Scalars["String"]>
}

export type DirectoryMtimeArgs = {
	difference?: InputMaybe<Scalars["String"]>
	formatString?: InputMaybe<Scalars["String"]>
	fromNow?: InputMaybe<Scalars["Boolean"]>
	locale?: InputMaybe<Scalars["String"]>
}

export type DirectoryConnection = {
	__typename?: "DirectoryConnection"
	distinct: Array<Scalars["String"]>
	edges: Array<DirectoryEdge>
	group: Array<DirectoryGroupConnection>
	max?: Maybe<Scalars["Float"]>
	min?: Maybe<Scalars["Float"]>
	nodes: Array<Directory>
	pageInfo: PageInfo
	sum?: Maybe<Scalars["Float"]>
	totalCount: Scalars["Int"]
}

export type DirectoryConnectionDistinctArgs = {
	field: DirectoryFieldsEnum
}

export type DirectoryConnectionGroupArgs = {
	field: DirectoryFieldsEnum
	limit?: InputMaybe<Scalars["Int"]>
	skip?: InputMaybe<Scalars["Int"]>
}

export type DirectoryConnectionMaxArgs = {
	field: DirectoryFieldsEnum
}

export type DirectoryConnectionMinArgs = {
	field: DirectoryFieldsEnum
}

export type DirectoryConnectionSumArgs = {
	field: DirectoryFieldsEnum
}

export type DirectoryEdge = {
	__typename?: "DirectoryEdge"
	next?: Maybe<Directory>
	node: Directory
	previous?: Maybe<Directory>
}

export enum DirectoryFieldsEnum {
	AbsolutePath = "absolutePath",
	AccessTime = "accessTime",
	Atime = "atime",
	AtimeMs = "atimeMs",
	Base = "base",
	BirthTime = "birthTime",
	Birthtime = "birthtime",
	BirthtimeMs = "birthtimeMs",
	ChangeTime = "changeTime",
	Children = "children",
	ChildrenChildren = "children___children",
	ChildrenChildrenChildren = "children___children___children",
	ChildrenChildrenChildrenChildren = "children___children___children___children",
	ChildrenChildrenChildrenId = "children___children___children___id",
	ChildrenChildrenId = "children___children___id",
	ChildrenChildrenInternalContent = "children___children___internal___content",
	ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
	ChildrenChildrenInternalContentFilePath = "children___children___internal___contentFilePath",
	ChildrenChildrenInternalDescription = "children___children___internal___description",
	ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
	ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
	ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
	ChildrenChildrenInternalOwner = "children___children___internal___owner",
	ChildrenChildrenInternalType = "children___children___internal___type",
	ChildrenChildrenParentChildren = "children___children___parent___children",
	ChildrenChildrenParentId = "children___children___parent___id",
	ChildrenId = "children___id",
	ChildrenInternalContent = "children___internal___content",
	ChildrenInternalContentDigest = "children___internal___contentDigest",
	ChildrenInternalContentFilePath = "children___internal___contentFilePath",
	ChildrenInternalDescription = "children___internal___description",
	ChildrenInternalFieldOwners = "children___internal___fieldOwners",
	ChildrenInternalIgnoreType = "children___internal___ignoreType",
	ChildrenInternalMediaType = "children___internal___mediaType",
	ChildrenInternalOwner = "children___internal___owner",
	ChildrenInternalType = "children___internal___type",
	ChildrenParentChildren = "children___parent___children",
	ChildrenParentChildrenChildren = "children___parent___children___children",
	ChildrenParentChildrenId = "children___parent___children___id",
	ChildrenParentId = "children___parent___id",
	ChildrenParentInternalContent = "children___parent___internal___content",
	ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
	ChildrenParentInternalContentFilePath = "children___parent___internal___contentFilePath",
	ChildrenParentInternalDescription = "children___parent___internal___description",
	ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
	ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
	ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
	ChildrenParentInternalOwner = "children___parent___internal___owner",
	ChildrenParentInternalType = "children___parent___internal___type",
	ChildrenParentParentChildren = "children___parent___parent___children",
	ChildrenParentParentId = "children___parent___parent___id",
	Ctime = "ctime",
	CtimeMs = "ctimeMs",
	Dev = "dev",
	Dir = "dir",
	Ext = "ext",
	Extension = "extension",
	Gid = "gid",
	Id = "id",
	Ino = "ino",
	InternalContent = "internal___content",
	InternalContentDigest = "internal___contentDigest",
	InternalContentFilePath = "internal___contentFilePath",
	InternalDescription = "internal___description",
	InternalFieldOwners = "internal___fieldOwners",
	InternalIgnoreType = "internal___ignoreType",
	InternalMediaType = "internal___mediaType",
	InternalOwner = "internal___owner",
	InternalType = "internal___type",
	Mode = "mode",
	ModifiedTime = "modifiedTime",
	Mtime = "mtime",
	MtimeMs = "mtimeMs",
	Name = "name",
	Nlink = "nlink",
	ParentChildren = "parent___children",
	ParentChildrenChildren = "parent___children___children",
	ParentChildrenChildrenChildren = "parent___children___children___children",
	ParentChildrenChildrenId = "parent___children___children___id",
	ParentChildrenId = "parent___children___id",
	ParentChildrenInternalContent = "parent___children___internal___content",
	ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
	ParentChildrenInternalContentFilePath = "parent___children___internal___contentFilePath",
	ParentChildrenInternalDescription = "parent___children___internal___description",
	ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
	ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
	ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
	ParentChildrenInternalOwner = "parent___children___internal___owner",
	ParentChildrenInternalType = "parent___children___internal___type",
	ParentChildrenParentChildren = "parent___children___parent___children",
	ParentChildrenParentId = "parent___children___parent___id",
	ParentId = "parent___id",
	ParentInternalContent = "parent___internal___content",
	ParentInternalContentDigest = "parent___internal___contentDigest",
	ParentInternalContentFilePath = "parent___internal___contentFilePath",
	ParentInternalDescription = "parent___internal___description",
	ParentInternalFieldOwners = "parent___internal___fieldOwners",
	ParentInternalIgnoreType = "parent___internal___ignoreType",
	ParentInternalMediaType = "parent___internal___mediaType",
	ParentInternalOwner = "parent___internal___owner",
	ParentInternalType = "parent___internal___type",
	ParentParentChildren = "parent___parent___children",
	ParentParentChildrenChildren = "parent___parent___children___children",
	ParentParentChildrenId = "parent___parent___children___id",
	ParentParentId = "parent___parent___id",
	ParentParentInternalContent = "parent___parent___internal___content",
	ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
	ParentParentInternalContentFilePath = "parent___parent___internal___contentFilePath",
	ParentParentInternalDescription = "parent___parent___internal___description",
	ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
	ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
	ParentParentInternalMediaType = "parent___parent___internal___mediaType",
	ParentParentInternalOwner = "parent___parent___internal___owner",
	ParentParentInternalType = "parent___parent___internal___type",
	ParentParentParentChildren = "parent___parent___parent___children",
	ParentParentParentId = "parent___parent___parent___id",
	PrettySize = "prettySize",
	Rdev = "rdev",
	RelativeDirectory = "relativeDirectory",
	RelativePath = "relativePath",
	Root = "root",
	Size = "size",
	SourceInstanceName = "sourceInstanceName",
	Uid = "uid",
}

export type DirectoryFilterInput = {
	absolutePath?: InputMaybe<StringQueryOperatorInput>
	accessTime?: InputMaybe<DateQueryOperatorInput>
	atime?: InputMaybe<DateQueryOperatorInput>
	atimeMs?: InputMaybe<FloatQueryOperatorInput>
	base?: InputMaybe<StringQueryOperatorInput>
	birthTime?: InputMaybe<DateQueryOperatorInput>
	birthtime?: InputMaybe<DateQueryOperatorInput>
	birthtimeMs?: InputMaybe<FloatQueryOperatorInput>
	changeTime?: InputMaybe<DateQueryOperatorInput>
	children?: InputMaybe<NodeFilterListInput>
	ctime?: InputMaybe<DateQueryOperatorInput>
	ctimeMs?: InputMaybe<FloatQueryOperatorInput>
	dev?: InputMaybe<IntQueryOperatorInput>
	dir?: InputMaybe<StringQueryOperatorInput>
	ext?: InputMaybe<StringQueryOperatorInput>
	extension?: InputMaybe<StringQueryOperatorInput>
	gid?: InputMaybe<IntQueryOperatorInput>
	id?: InputMaybe<StringQueryOperatorInput>
	ino?: InputMaybe<FloatQueryOperatorInput>
	internal?: InputMaybe<InternalFilterInput>
	mode?: InputMaybe<IntQueryOperatorInput>
	modifiedTime?: InputMaybe<DateQueryOperatorInput>
	mtime?: InputMaybe<DateQueryOperatorInput>
	mtimeMs?: InputMaybe<FloatQueryOperatorInput>
	name?: InputMaybe<StringQueryOperatorInput>
	nlink?: InputMaybe<IntQueryOperatorInput>
	parent?: InputMaybe<NodeFilterInput>
	prettySize?: InputMaybe<StringQueryOperatorInput>
	rdev?: InputMaybe<IntQueryOperatorInput>
	relativeDirectory?: InputMaybe<StringQueryOperatorInput>
	relativePath?: InputMaybe<StringQueryOperatorInput>
	root?: InputMaybe<StringQueryOperatorInput>
	size?: InputMaybe<IntQueryOperatorInput>
	sourceInstanceName?: InputMaybe<StringQueryOperatorInput>
	uid?: InputMaybe<IntQueryOperatorInput>
}

export type DirectoryGroupConnection = {
	__typename?: "DirectoryGroupConnection"
	distinct: Array<Scalars["String"]>
	edges: Array<DirectoryEdge>
	field: Scalars["String"]
	fieldValue?: Maybe<Scalars["String"]>
	group: Array<DirectoryGroupConnection>
	max?: Maybe<Scalars["Float"]>
	min?: Maybe<Scalars["Float"]>
	nodes: Array<Directory>
	pageInfo: PageInfo
	sum?: Maybe<Scalars["Float"]>
	totalCount: Scalars["Int"]
}

export type DirectoryGroupConnectionDistinctArgs = {
	field: DirectoryFieldsEnum
}

export type DirectoryGroupConnectionGroupArgs = {
	field: DirectoryFieldsEnum
	limit?: InputMaybe<Scalars["Int"]>
	skip?: InputMaybe<Scalars["Int"]>
}

export type DirectoryGroupConnectionMaxArgs = {
	field: DirectoryFieldsEnum
}

export type DirectoryGroupConnectionMinArgs = {
	field: DirectoryFieldsEnum
}

export type DirectoryGroupConnectionSumArgs = {
	field: DirectoryFieldsEnum
}

export type DirectorySortInput = {
	fields?: InputMaybe<Array<InputMaybe<DirectoryFieldsEnum>>>
	order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type File = Node & {
	__typename?: "File"
	absolutePath: Scalars["String"]
	accessTime: Scalars["Date"]
	atime: Scalars["Date"]
	atimeMs: Scalars["Float"]
	base: Scalars["String"]
	birthTime: Scalars["Date"]
	/** @deprecated Use `birthTime` instead */
	birthtime?: Maybe<Scalars["Date"]>
	/** @deprecated Use `birthTime` instead */
	birthtimeMs?: Maybe<Scalars["Float"]>
	changeTime: Scalars["Date"]
	children: Array<Node>
	ctime: Scalars["Date"]
	ctimeMs: Scalars["Float"]
	dev: Scalars["Int"]
	dir: Scalars["String"]
	ext: Scalars["String"]
	extension: Scalars["String"]
	gid: Scalars["Int"]
	id: Scalars["ID"]
	ino: Scalars["Float"]
	internal: Internal
	mode: Scalars["Int"]
	modifiedTime: Scalars["Date"]
	mtime: Scalars["Date"]
	mtimeMs: Scalars["Float"]
	name: Scalars["String"]
	nlink: Scalars["Int"]
	parent?: Maybe<Node>
	prettySize: Scalars["String"]
	rdev: Scalars["Int"]
	relativeDirectory: Scalars["String"]
	relativePath: Scalars["String"]
	root: Scalars["String"]
	size: Scalars["Int"]
	sourceInstanceName: Scalars["String"]
	uid: Scalars["Int"]
}

export type FileAccessTimeArgs = {
	difference?: InputMaybe<Scalars["String"]>
	formatString?: InputMaybe<Scalars["String"]>
	fromNow?: InputMaybe<Scalars["Boolean"]>
	locale?: InputMaybe<Scalars["String"]>
}

export type FileAtimeArgs = {
	difference?: InputMaybe<Scalars["String"]>
	formatString?: InputMaybe<Scalars["String"]>
	fromNow?: InputMaybe<Scalars["Boolean"]>
	locale?: InputMaybe<Scalars["String"]>
}

export type FileBirthTimeArgs = {
	difference?: InputMaybe<Scalars["String"]>
	formatString?: InputMaybe<Scalars["String"]>
	fromNow?: InputMaybe<Scalars["Boolean"]>
	locale?: InputMaybe<Scalars["String"]>
}

export type FileChangeTimeArgs = {
	difference?: InputMaybe<Scalars["String"]>
	formatString?: InputMaybe<Scalars["String"]>
	fromNow?: InputMaybe<Scalars["Boolean"]>
	locale?: InputMaybe<Scalars["String"]>
}

export type FileCtimeArgs = {
	difference?: InputMaybe<Scalars["String"]>
	formatString?: InputMaybe<Scalars["String"]>
	fromNow?: InputMaybe<Scalars["Boolean"]>
	locale?: InputMaybe<Scalars["String"]>
}

export type FileModifiedTimeArgs = {
	difference?: InputMaybe<Scalars["String"]>
	formatString?: InputMaybe<Scalars["String"]>
	fromNow?: InputMaybe<Scalars["Boolean"]>
	locale?: InputMaybe<Scalars["String"]>
}

export type FileMtimeArgs = {
	difference?: InputMaybe<Scalars["String"]>
	formatString?: InputMaybe<Scalars["String"]>
	fromNow?: InputMaybe<Scalars["Boolean"]>
	locale?: InputMaybe<Scalars["String"]>
}

export type FileConnection = {
	__typename?: "FileConnection"
	distinct: Array<Scalars["String"]>
	edges: Array<FileEdge>
	group: Array<FileGroupConnection>
	max?: Maybe<Scalars["Float"]>
	min?: Maybe<Scalars["Float"]>
	nodes: Array<File>
	pageInfo: PageInfo
	sum?: Maybe<Scalars["Float"]>
	totalCount: Scalars["Int"]
}

export type FileConnectionDistinctArgs = {
	field: FileFieldsEnum
}

export type FileConnectionGroupArgs = {
	field: FileFieldsEnum
	limit?: InputMaybe<Scalars["Int"]>
	skip?: InputMaybe<Scalars["Int"]>
}

export type FileConnectionMaxArgs = {
	field: FileFieldsEnum
}

export type FileConnectionMinArgs = {
	field: FileFieldsEnum
}

export type FileConnectionSumArgs = {
	field: FileFieldsEnum
}

export type FileEdge = {
	__typename?: "FileEdge"
	next?: Maybe<File>
	node: File
	previous?: Maybe<File>
}

export enum FileFieldsEnum {
	AbsolutePath = "absolutePath",
	AccessTime = "accessTime",
	Atime = "atime",
	AtimeMs = "atimeMs",
	Base = "base",
	BirthTime = "birthTime",
	Birthtime = "birthtime",
	BirthtimeMs = "birthtimeMs",
	ChangeTime = "changeTime",
	Children = "children",
	ChildrenChildren = "children___children",
	ChildrenChildrenChildren = "children___children___children",
	ChildrenChildrenChildrenChildren = "children___children___children___children",
	ChildrenChildrenChildrenId = "children___children___children___id",
	ChildrenChildrenId = "children___children___id",
	ChildrenChildrenInternalContent = "children___children___internal___content",
	ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
	ChildrenChildrenInternalContentFilePath = "children___children___internal___contentFilePath",
	ChildrenChildrenInternalDescription = "children___children___internal___description",
	ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
	ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
	ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
	ChildrenChildrenInternalOwner = "children___children___internal___owner",
	ChildrenChildrenInternalType = "children___children___internal___type",
	ChildrenChildrenParentChildren = "children___children___parent___children",
	ChildrenChildrenParentId = "children___children___parent___id",
	ChildrenId = "children___id",
	ChildrenInternalContent = "children___internal___content",
	ChildrenInternalContentDigest = "children___internal___contentDigest",
	ChildrenInternalContentFilePath = "children___internal___contentFilePath",
	ChildrenInternalDescription = "children___internal___description",
	ChildrenInternalFieldOwners = "children___internal___fieldOwners",
	ChildrenInternalIgnoreType = "children___internal___ignoreType",
	ChildrenInternalMediaType = "children___internal___mediaType",
	ChildrenInternalOwner = "children___internal___owner",
	ChildrenInternalType = "children___internal___type",
	ChildrenParentChildren = "children___parent___children",
	ChildrenParentChildrenChildren = "children___parent___children___children",
	ChildrenParentChildrenId = "children___parent___children___id",
	ChildrenParentId = "children___parent___id",
	ChildrenParentInternalContent = "children___parent___internal___content",
	ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
	ChildrenParentInternalContentFilePath = "children___parent___internal___contentFilePath",
	ChildrenParentInternalDescription = "children___parent___internal___description",
	ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
	ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
	ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
	ChildrenParentInternalOwner = "children___parent___internal___owner",
	ChildrenParentInternalType = "children___parent___internal___type",
	ChildrenParentParentChildren = "children___parent___parent___children",
	ChildrenParentParentId = "children___parent___parent___id",
	Ctime = "ctime",
	CtimeMs = "ctimeMs",
	Dev = "dev",
	Dir = "dir",
	Ext = "ext",
	Extension = "extension",
	Gid = "gid",
	Id = "id",
	Ino = "ino",
	InternalContent = "internal___content",
	InternalContentDigest = "internal___contentDigest",
	InternalContentFilePath = "internal___contentFilePath",
	InternalDescription = "internal___description",
	InternalFieldOwners = "internal___fieldOwners",
	InternalIgnoreType = "internal___ignoreType",
	InternalMediaType = "internal___mediaType",
	InternalOwner = "internal___owner",
	InternalType = "internal___type",
	Mode = "mode",
	ModifiedTime = "modifiedTime",
	Mtime = "mtime",
	MtimeMs = "mtimeMs",
	Name = "name",
	Nlink = "nlink",
	ParentChildren = "parent___children",
	ParentChildrenChildren = "parent___children___children",
	ParentChildrenChildrenChildren = "parent___children___children___children",
	ParentChildrenChildrenId = "parent___children___children___id",
	ParentChildrenId = "parent___children___id",
	ParentChildrenInternalContent = "parent___children___internal___content",
	ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
	ParentChildrenInternalContentFilePath = "parent___children___internal___contentFilePath",
	ParentChildrenInternalDescription = "parent___children___internal___description",
	ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
	ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
	ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
	ParentChildrenInternalOwner = "parent___children___internal___owner",
	ParentChildrenInternalType = "parent___children___internal___type",
	ParentChildrenParentChildren = "parent___children___parent___children",
	ParentChildrenParentId = "parent___children___parent___id",
	ParentId = "parent___id",
	ParentInternalContent = "parent___internal___content",
	ParentInternalContentDigest = "parent___internal___contentDigest",
	ParentInternalContentFilePath = "parent___internal___contentFilePath",
	ParentInternalDescription = "parent___internal___description",
	ParentInternalFieldOwners = "parent___internal___fieldOwners",
	ParentInternalIgnoreType = "parent___internal___ignoreType",
	ParentInternalMediaType = "parent___internal___mediaType",
	ParentInternalOwner = "parent___internal___owner",
	ParentInternalType = "parent___internal___type",
	ParentParentChildren = "parent___parent___children",
	ParentParentChildrenChildren = "parent___parent___children___children",
	ParentParentChildrenId = "parent___parent___children___id",
	ParentParentId = "parent___parent___id",
	ParentParentInternalContent = "parent___parent___internal___content",
	ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
	ParentParentInternalContentFilePath = "parent___parent___internal___contentFilePath",
	ParentParentInternalDescription = "parent___parent___internal___description",
	ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
	ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
	ParentParentInternalMediaType = "parent___parent___internal___mediaType",
	ParentParentInternalOwner = "parent___parent___internal___owner",
	ParentParentInternalType = "parent___parent___internal___type",
	ParentParentParentChildren = "parent___parent___parent___children",
	ParentParentParentId = "parent___parent___parent___id",
	PrettySize = "prettySize",
	Rdev = "rdev",
	RelativeDirectory = "relativeDirectory",
	RelativePath = "relativePath",
	Root = "root",
	Size = "size",
	SourceInstanceName = "sourceInstanceName",
	Uid = "uid",
}

export type FileFilterInput = {
	absolutePath?: InputMaybe<StringQueryOperatorInput>
	accessTime?: InputMaybe<DateQueryOperatorInput>
	atime?: InputMaybe<DateQueryOperatorInput>
	atimeMs?: InputMaybe<FloatQueryOperatorInput>
	base?: InputMaybe<StringQueryOperatorInput>
	birthTime?: InputMaybe<DateQueryOperatorInput>
	birthtime?: InputMaybe<DateQueryOperatorInput>
	birthtimeMs?: InputMaybe<FloatQueryOperatorInput>
	changeTime?: InputMaybe<DateQueryOperatorInput>
	children?: InputMaybe<NodeFilterListInput>
	ctime?: InputMaybe<DateQueryOperatorInput>
	ctimeMs?: InputMaybe<FloatQueryOperatorInput>
	dev?: InputMaybe<IntQueryOperatorInput>
	dir?: InputMaybe<StringQueryOperatorInput>
	ext?: InputMaybe<StringQueryOperatorInput>
	extension?: InputMaybe<StringQueryOperatorInput>
	gid?: InputMaybe<IntQueryOperatorInput>
	id?: InputMaybe<StringQueryOperatorInput>
	ino?: InputMaybe<FloatQueryOperatorInput>
	internal?: InputMaybe<InternalFilterInput>
	mode?: InputMaybe<IntQueryOperatorInput>
	modifiedTime?: InputMaybe<DateQueryOperatorInput>
	mtime?: InputMaybe<DateQueryOperatorInput>
	mtimeMs?: InputMaybe<FloatQueryOperatorInput>
	name?: InputMaybe<StringQueryOperatorInput>
	nlink?: InputMaybe<IntQueryOperatorInput>
	parent?: InputMaybe<NodeFilterInput>
	prettySize?: InputMaybe<StringQueryOperatorInput>
	rdev?: InputMaybe<IntQueryOperatorInput>
	relativeDirectory?: InputMaybe<StringQueryOperatorInput>
	relativePath?: InputMaybe<StringQueryOperatorInput>
	root?: InputMaybe<StringQueryOperatorInput>
	size?: InputMaybe<IntQueryOperatorInput>
	sourceInstanceName?: InputMaybe<StringQueryOperatorInput>
	uid?: InputMaybe<IntQueryOperatorInput>
}

export type FileGroupConnection = {
	__typename?: "FileGroupConnection"
	distinct: Array<Scalars["String"]>
	edges: Array<FileEdge>
	field: Scalars["String"]
	fieldValue?: Maybe<Scalars["String"]>
	group: Array<FileGroupConnection>
	max?: Maybe<Scalars["Float"]>
	min?: Maybe<Scalars["Float"]>
	nodes: Array<File>
	pageInfo: PageInfo
	sum?: Maybe<Scalars["Float"]>
	totalCount: Scalars["Int"]
}

export type FileGroupConnectionDistinctArgs = {
	field: FileFieldsEnum
}

export type FileGroupConnectionGroupArgs = {
	field: FileFieldsEnum
	limit?: InputMaybe<Scalars["Int"]>
	skip?: InputMaybe<Scalars["Int"]>
}

export type FileGroupConnectionMaxArgs = {
	field: FileFieldsEnum
}

export type FileGroupConnectionMinArgs = {
	field: FileFieldsEnum
}

export type FileGroupConnectionSumArgs = {
	field: FileFieldsEnum
}

export type FileSortInput = {
	fields?: InputMaybe<Array<InputMaybe<FileFieldsEnum>>>
	order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type FloatQueryOperatorInput = {
	eq?: InputMaybe<Scalars["Float"]>
	gt?: InputMaybe<Scalars["Float"]>
	gte?: InputMaybe<Scalars["Float"]>
	in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>
	lt?: InputMaybe<Scalars["Float"]>
	lte?: InputMaybe<Scalars["Float"]>
	ne?: InputMaybe<Scalars["Float"]>
	nin?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>
}

export enum GatsbyImageFormat {
	Auto = "AUTO",
	Avif = "AVIF",
	Jpg = "JPG",
	NoChange = "NO_CHANGE",
	Png = "PNG",
	Webp = "WEBP",
}

export enum GatsbyImageLayout {
	Constrained = "CONSTRAINED",
	Fixed = "FIXED",
	FullWidth = "FULL_WIDTH",
}

export enum GatsbyImagePlaceholder {
	Blurred = "BLURRED",
	DominantColor = "DOMINANT_COLOR",
	None = "NONE",
	TracedSvg = "TRACED_SVG",
}

export type IdQueryOperatorInput = {
	eq?: InputMaybe<Scalars["ID"]>
	in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
	ne?: InputMaybe<Scalars["ID"]>
	nin?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>
}

export type ImgixFixed = {
	__typename?: "ImgixFixed"
	base64: Scalars["String"]
	height: Scalars["Int"]
	sizes: Scalars["String"]
	src: Scalars["String"]
	srcSet: Scalars["String"]
	srcSetWebp: Scalars["String"]
	srcWebp: Scalars["String"]
	width: Scalars["Int"]
}

export type ImgixFixedFilterInput = {
	base64?: InputMaybe<StringQueryOperatorInput>
	height?: InputMaybe<IntQueryOperatorInput>
	sizes?: InputMaybe<StringQueryOperatorInput>
	src?: InputMaybe<StringQueryOperatorInput>
	srcSet?: InputMaybe<StringQueryOperatorInput>
	srcSetWebp?: InputMaybe<StringQueryOperatorInput>
	srcWebp?: InputMaybe<StringQueryOperatorInput>
	width?: InputMaybe<IntQueryOperatorInput>
}

export type ImgixFluid = {
	__typename?: "ImgixFluid"
	aspectRatio: Scalars["Float"]
	base64: Scalars["String"]
	sizes: Scalars["String"]
	src: Scalars["String"]
	srcSet: Scalars["String"]
	srcSetWebp: Scalars["String"]
	srcWebp: Scalars["String"]
}

export type ImgixFluidFilterInput = {
	aspectRatio?: InputMaybe<FloatQueryOperatorInput>
	base64?: InputMaybe<StringQueryOperatorInput>
	sizes?: InputMaybe<StringQueryOperatorInput>
	src?: InputMaybe<StringQueryOperatorInput>
	srcSet?: InputMaybe<StringQueryOperatorInput>
	srcSetWebp?: InputMaybe<StringQueryOperatorInput>
	srcWebp?: InputMaybe<StringQueryOperatorInput>
}

export type ImgixParamsInput = {
	/** Alias for `pdfAnnotation`. */
	annotation?: InputMaybe<Scalars["Boolean"]>
	/** Specifies an aspect ratio to maintain when resizing and cropping the image. [See docs](https://docs.imgix.com/apis/url/size/ar). */
	ar?: InputMaybe<Scalars["String"]>
	/** Applies automatic enhancements to images. [See docs](https://docs.imgix.com/apis/url/auto). */
	auto?: InputMaybe<Scalars["String"]>
	/** Alias for `blend`. */
	b?: InputMaybe<Scalars["String"]>
	/** Alias for `blendAlign`. */
	ba?: InputMaybe<Scalars["String"]>
	/** Alias for `blendAlpha`. */
	balph?: InputMaybe<Scalars["Int"]>
	/** Alias for `blendCrop`. */
	bc?: InputMaybe<Scalars["String"]>
	/** Alias for `blendFit`. */
	bf?: InputMaybe<Scalars["String"]>
	/** Colors the background of padded and partially-transparent images. Default: `fff`. [See docs](https://docs.imgix.com/apis/url/bg). */
	bg?: InputMaybe<Scalars["String"]>
	/** Alias for `blendH`. */
	bh?: InputMaybe<Scalars["Float"]>
	/** Specifies the location of the blend image. [See docs](https://docs.imgix.com/apis/url/blending/blend). */
	blend?: InputMaybe<Scalars["String"]>
	/** Changes the blend alignment relative to the parent image. [See docs](https://docs.imgix.com/apis/url/blending/blend-align). */
	blendAlign?: InputMaybe<Scalars["String"]>
	/** Changes the alpha of the blend image. Default: `100`. [See docs](https://docs.imgix.com/apis/url/blending/blend-alpha). */
	blendAlpha?: InputMaybe<Scalars["Int"]>
	/** Alias for `blendColor`. */
	blendClr?: InputMaybe<Scalars["String"]>
	/** Specifies a color to use when applying the blend. [See docs](https://docs.imgix.com/apis/url/blending/blend-color). */
	blendColor?: InputMaybe<Scalars["String"]>
	/** Specifies the type of crop for blend images. [See docs](https://docs.imgix.com/apis/url/blending/blend-crop). */
	blendCrop?: InputMaybe<Scalars["String"]>
	/** Specifies the fit mode for blend images. Default: `clip`. [See docs](https://docs.imgix.com/apis/url/blending/blend-fit). */
	blendFit?: InputMaybe<Scalars["String"]>
	/** Adjusts the height of the blend image. [See docs](https://docs.imgix.com/apis/url/blending/blend-h). */
	blendH?: InputMaybe<Scalars["Float"]>
	/** Sets the blend mode for a blend image. Default: `overlay`. [See docs](https://docs.imgix.com/apis/url/blending/blend-mode). */
	blendMode?: InputMaybe<Scalars["String"]>
	/** Applies padding to the blend image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/blending/blend-pad). */
	blendPad?: InputMaybe<Scalars["Int"]>
	/** Adjusts the size of the blend image. [See docs](https://docs.imgix.com/apis/url/blending/blend-size). */
	blendSize?: InputMaybe<Scalars["String"]>
	/** Adjusts the width of the blend image. [See docs](https://docs.imgix.com/apis/url/blending/blend-w). */
	blendW?: InputMaybe<Scalars["Float"]>
	/** Adjusts the x-offset of the blend image relative to its parent. Default: `0`. [See docs](https://docs.imgix.com/apis/url/blending/blend-x). */
	blendX?: InputMaybe<Scalars["Int"]>
	/** Adjusts the y-offset of the blend image relative to its parent. Default: `0`. [See docs](https://docs.imgix.com/apis/url/blending/blend-y). */
	blendY?: InputMaybe<Scalars["Int"]>
	/** Alias for `blendAlign`. */
	blendalign?: InputMaybe<Scalars["String"]>
	/** Alias for `blendAlpha`. */
	blendalpha?: InputMaybe<Scalars["Int"]>
	/** Alias for `blendColor`. */
	blendclr?: InputMaybe<Scalars["String"]>
	/** Alias for `blendColor`. */
	blendcolor?: InputMaybe<Scalars["String"]>
	/** Alias for `blendCrop`. */
	blendcrop?: InputMaybe<Scalars["String"]>
	/** Alias for `blendFit`. */
	blendfit?: InputMaybe<Scalars["String"]>
	/** Alias for `blendH`. */
	blendh?: InputMaybe<Scalars["Float"]>
	/** Alias for `blendMode`. */
	blendmode?: InputMaybe<Scalars["String"]>
	/** Alias for `blendPad`. */
	blendpad?: InputMaybe<Scalars["Int"]>
	/** Alias for `blendSize`. */
	blendsize?: InputMaybe<Scalars["String"]>
	/** Alias for `blendW`. */
	blendw?: InputMaybe<Scalars["Float"]>
	/** Alias for `blendX`. */
	blendx?: InputMaybe<Scalars["Int"]>
	/** Alias for `blendY`. */
	blendy?: InputMaybe<Scalars["Int"]>
	/** Applies a gaussian blur to an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/stylize/blur). */
	blur?: InputMaybe<Scalars["Int"]>
	/** Alias for `blendMode`. */
	bm?: InputMaybe<Scalars["String"]>
	/** Applies a border to an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border). */
	border?: InputMaybe<Scalars["String"]>
	/** Sets bottom border of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-bottom). */
	borderBottom?: InputMaybe<Scalars["Int"]>
	/** Sets left border of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-left). */
	borderLeft?: InputMaybe<Scalars["Int"]>
	/** Sets the outer radius of the image's border in pixels. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-radius). */
	borderRadius?: InputMaybe<Scalars["String"]>
	/** Sets the inner radius of the image's border in pixels. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-radius-inner). */
	borderRadiusInner?: InputMaybe<Scalars["String"]>
	/** Sets right border of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-right). */
	borderRight?: InputMaybe<Scalars["Int"]>
	/** Sets top border of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-top). */
	borderTop?: InputMaybe<Scalars["Int"]>
	/** Alias for `blendPad`. */
	bp?: InputMaybe<Scalars["Int"]>
	/** Adjusts the brightness of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/bri). */
	bri?: InputMaybe<Scalars["Int"]>
	/** Alias for `blendSize`. */
	bs?: InputMaybe<Scalars["String"]>
	/** Alias for `blendW`. */
	bw?: InputMaybe<Scalars["Float"]>
	/** Alias for `blendX`. */
	bx?: InputMaybe<Scalars["Int"]>
	/** Alias for `blendY`. */
	by?: InputMaybe<Scalars["Int"]>
	/** Sets one or more Client-Hints headers. [See docs](https://docs.imgix.com/apis/url/format/ch). */
	ch?: InputMaybe<Scalars["String"]>
	/** Specifies the output chroma subsampling rate. Default: `420`. [See docs](https://docs.imgix.com/apis/url/format/chromasub). */
	chromasub?: InputMaybe<Scalars["Int"]>
	/** Limits the number of unique colors in an image. [See docs](https://docs.imgix.com/apis/url/format/colorquant). */
	colorquant?: InputMaybe<Scalars["Int"]>
	/** Specifies how many colors to include in a palette-extraction response. Default: `6`. [See docs](https://docs.imgix.com/apis/url/color-palette/colors). */
	colors?: InputMaybe<Scalars["Int"]>
	/** Adjusts the contrast of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/con). */
	con?: InputMaybe<Scalars["Int"]>
	/** Specifies the radius value for a rounded corner mask. [See docs](https://docs.imgix.com/apis/url/mask/corner-radius). */
	cornerRadius?: InputMaybe<Scalars["String"]>
	/** Specifies how to crop an image. [See docs](https://docs.imgix.com/apis/url/size/crop). */
	crop?: InputMaybe<Scalars["String"]>
	/** Specifies the color space of the output image. [See docs](https://docs.imgix.com/apis/url/format/cs). */
	cs?: InputMaybe<Scalars["String"]>
	/** Forces a URL to use send-file in its response. [See docs](https://docs.imgix.com/apis/url/format/dl). */
	dl?: InputMaybe<Scalars["String"]>
	/** Sets the DPI value in the EXIF header. [See docs](https://docs.imgix.com/apis/url/format/dpi). */
	dpi?: InputMaybe<Scalars["Int"]>
	/** Adjusts the device-pixel ratio of the output image. Default: `1`. [See docs](https://docs.imgix.com/apis/url/dpr). */
	dpr?: InputMaybe<Scalars["Float"]>
	/** Applies a duotone effect to the source image. [See docs](https://docs.imgix.com/apis/url/stylize/duotone). */
	duotone?: InputMaybe<Scalars["String"]>
	/** Changes the alpha of the duotone effect atop the source image. Default: `100`. [See docs](https://docs.imgix.com/apis/url/stylize/duotone-alpha). */
	duotoneAlpha?: InputMaybe<Scalars["Int"]>
	/** Adjusts the exposure of the output image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/exp). */
	exp?: InputMaybe<Scalars["Int"]>
	/** A Unix timestamp specifying a UTC time. Requests made to this URL after that time will output a 404 status code. [See docs](https://docs.imgix.com/apis/url/expires). */
	expires?: InputMaybe<Scalars["String"]>
	/** Alias for `fit`. */
	f?: InputMaybe<Scalars["String"]>
	/** Selects a face to crop to. [See docs](https://docs.imgix.com/apis/url/face-detection/faceindex). */
	faceindex?: InputMaybe<Scalars["Int"]>
	/** Adjusts padding around a selected face. Default: `1`. [See docs](https://docs.imgix.com/apis/url/face-detection/facepad). */
	facepad?: InputMaybe<Scalars["Float"]>
	/** Specifies that face data should be included in output when combined with `fm=json`. [See docs](https://docs.imgix.com/apis/url/face-detection/faces). */
	faces?: InputMaybe<Scalars["Int"]>
	/** Determines how to fill in additional space created by the fit setting. [See docs](https://docs.imgix.com/apis/url/fill/fill). */
	fill?: InputMaybe<Scalars["String"]>
	/** Sets the fill color for images with additional space created by the fit setting. Default: `fff`. [See docs](https://docs.imgix.com/apis/url/fill/fill-color). */
	fillColor?: InputMaybe<Scalars["String"]>
	/** Alias for `fillColor`. */
	fillcolor?: InputMaybe<Scalars["String"]>
	/** Specifies how to map the source image to the output image dimensions. Default: `clip`. [See docs](https://docs.imgix.com/apis/url/size/fit). */
	fit?: InputMaybe<Scalars["String"]>
	/** Flips an image on a specified axis. [See docs](https://docs.imgix.com/apis/url/rotation/flip). */
	flip?: InputMaybe<Scalars["String"]>
	/** Changes the format of the output image. [See docs](https://docs.imgix.com/apis/url/format/fm). */
	fm?: InputMaybe<Scalars["String"]>
	/** Displays crosshairs identifying the location of the set focal point. Default: `false`. [See docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-debug). */
	fpDebug?: InputMaybe<Scalars["Boolean"]>
	/** Sets the relative horizontal value for the focal point of an image. [See docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-x). */
	fpX?: InputMaybe<Scalars["Float"]>
	/** Sets the relative vertical value for the focal point of an image. [See docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-y). */
	fpY?: InputMaybe<Scalars["Float"]>
	/** Sets the relative zoom value for the focal point of an image. [See docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-z). */
	fpZ?: InputMaybe<Scalars["Float"]>
	/** Adjusts the gamma of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/gam). */
	gam?: InputMaybe<Scalars["Int"]>
	/** Sets grid colors for the transparency checkerboard grid. */
	gridColors?: InputMaybe<Scalars["String"]>
	/** Sets grid size for the transparency checkerboard grid. */
	gridSize?: InputMaybe<Scalars["Int"]>
	/** Adjusts the height of the output image. [See docs](https://docs.imgix.com/apis/url/size/h). */
	h?: InputMaybe<Scalars["Float"]>
	/** Alias for `h`. */
	height?: InputMaybe<Scalars["Float"]>
	/** Adjusts the highlights of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/high). */
	high?: InputMaybe<Scalars["Int"]>
	/** Applies a half-tone effect to the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/stylize/htn). */
	htn?: InputMaybe<Scalars["Int"]>
	/** Adjusts the hue of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/hue). */
	hue?: InputMaybe<Scalars["Int"]>
	/** Alias for `invert`. */
	inv?: InputMaybe<Scalars["Boolean"]>
	/** Inverts the colors on the source image. Default: `false`. [See docs](https://docs.imgix.com/apis/url/adjustment/invert). */
	invert?: InputMaybe<Scalars["Boolean"]>
	/** Determine if IPTC data should be passed for JPEG images. */
	iptc?: InputMaybe<Scalars["String"]>
	/** Specifies that the output image should be a lossless variant. Default: `false`. [See docs](https://docs.imgix.com/apis/url/format/lossless). */
	lossless?: InputMaybe<Scalars["Boolean"]>
	/** Alias for `mark`. */
	m?: InputMaybe<Scalars["String"]>
	/** Alias for `markAlign`. */
	ma?: InputMaybe<Scalars["String"]>
	/** Alias for `markAlpha`. */
	malph?: InputMaybe<Scalars["Int"]>
	/** Specifies the location of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark). */
	mark?: InputMaybe<Scalars["String"]>
	/** Changes the watermark alignment relative to the parent image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-align). */
	markAlign?: InputMaybe<Scalars["String"]>
	/** Changes the alpha of the watermark image. Default: `100`. [See docs](https://docs.imgix.com/apis/url/watermark/mark-alpha). */
	markAlpha?: InputMaybe<Scalars["Int"]>
	/** Changes base URL of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-base). */
	markBase?: InputMaybe<Scalars["String"]>
	/** Specifies the fit mode for watermark images. Default: `clip`. [See docs](https://docs.imgix.com/apis/url/watermark/mark-fit). */
	markFit?: InputMaybe<Scalars["String"]>
	/** Adjusts the height of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-h). */
	markH?: InputMaybe<Scalars["Float"]>
	/** Applies padding to the watermark image. Default: `5`. [See docs](https://docs.imgix.com/apis/url/watermark/mark-pad). */
	markPad?: InputMaybe<Scalars["Int"]>
	/** Rotates a watermark or tiled watermarks by a specified number of degrees. Default: `0`. [See docs](https://docs.imgix.com/apis/url/watermark/mark-rot). */
	markRot?: InputMaybe<Scalars["Float"]>
	/** Adjusts the scale of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-scale). */
	markScale?: InputMaybe<Scalars["Int"]>
	/** Adds tiled watermark. [See docs](https://docs.imgix.com/apis/url/watermark/mark-tile). */
	markTile?: InputMaybe<Scalars["String"]>
	/** Adjusts the width of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-w). */
	markW?: InputMaybe<Scalars["Float"]>
	/** Adjusts the x-offset of the watermark image relative to its parent. [See docs](https://docs.imgix.com/apis/url/watermark/mark-x). */
	markX?: InputMaybe<Scalars["Int"]>
	/** Adjusts the y-offset of the watermark image relative to its parent. [See docs](https://docs.imgix.com/apis/url/watermark/mark-y). */
	markY?: InputMaybe<Scalars["Int"]>
	/** Alias for `markAlign`. */
	markalign?: InputMaybe<Scalars["String"]>
	/** Alias for `markAlpha`. */
	markalpha?: InputMaybe<Scalars["Int"]>
	/** Alias for `markBase`. */
	markbase?: InputMaybe<Scalars["String"]>
	/** Alias for `markFit`. */
	markfit?: InputMaybe<Scalars["String"]>
	/** Alias for `markH`. */
	markh?: InputMaybe<Scalars["Float"]>
	/** Alias for `markPad`. */
	markpad?: InputMaybe<Scalars["Int"]>
	/** Alias for `markScale`. */
	markscale?: InputMaybe<Scalars["Int"]>
	/** Alias for `markTile`. */
	marktile?: InputMaybe<Scalars["String"]>
	/** Alias for `markW`. */
	markw?: InputMaybe<Scalars["Float"]>
	/** Alias for `markX`. */
	markx?: InputMaybe<Scalars["Int"]>
	/** Alias for `markY`. */
	marky?: InputMaybe<Scalars["Int"]>
	/** Defines the type of mask and specifies the URL if that type is selected. [See docs](https://docs.imgix.com/apis/url/mask). */
	mask?: InputMaybe<Scalars["String"]>
	/** Colors the background of the transparent mask area of images. Default: `fff`. [See docs](https://docs.imgix.com/apis/url/mask/mask-bg). */
	maskBg?: InputMaybe<Scalars["String"]>
	/** Alias for `maskBg`. */
	maskbg?: InputMaybe<Scalars["String"]>
	/** Specifies the maximum height of the output image in pixels. [See docs](https://docs.imgix.com/apis/url/size/max-height). */
	maxH?: InputMaybe<Scalars["Int"]>
	/** Alias for `maxH`. */
	maxHeight?: InputMaybe<Scalars["Int"]>
	/** Specifies the maximum width of the output image in pixels. [See docs](https://docs.imgix.com/apis/url/size/max-width). */
	maxW?: InputMaybe<Scalars["Int"]>
	/** Alias for `maxW`. */
	maxWidth?: InputMaybe<Scalars["Int"]>
	/** Alias for `markBase`. */
	mb?: InputMaybe<Scalars["String"]>
	/** Alias for `markFit`. */
	mf?: InputMaybe<Scalars["String"]>
	/** Alias for `markH`. */
	mh?: InputMaybe<Scalars["Float"]>
	/** Specifies the minimum height of the output image in pixels. [See docs](https://docs.imgix.com/apis/url/size/min-height). */
	minH?: InputMaybe<Scalars["Int"]>
	/** Alias for `minH`. */
	minHeight?: InputMaybe<Scalars["Int"]>
	/** Specifies the minimum width of the output image in pixels. [See docs](https://docs.imgix.com/apis/url/size/min-width). */
	minW?: InputMaybe<Scalars["Int"]>
	/** Alias for `minW`. */
	minWidth?: InputMaybe<Scalars["Int"]>
	/** Alias for `monochrome`. */
	mono?: InputMaybe<Scalars["String"]>
	/** Applies a monochrome effect to the source image. [See docs](https://docs.imgix.com/apis/url/stylize/monochrome). */
	monochrome?: InputMaybe<Scalars["String"]>
	/** Alias for `markPad`. */
	mp?: InputMaybe<Scalars["Int"]>
	/** Alias for `markScale`. */
	ms?: InputMaybe<Scalars["Int"]>
	/** Alias for `markTile`. */
	mtile?: InputMaybe<Scalars["String"]>
	/** Alias for `markW`. */
	mw?: InputMaybe<Scalars["Float"]>
	/** Alias for `markX`. */
	mx?: InputMaybe<Scalars["Int"]>
	/** Alias for `markY`. */
	my?: InputMaybe<Scalars["Int"]>
	/** Reduces the noise in an image. Default: `20`. [See docs](https://docs.imgix.com/apis/url/noise-reduction/nr). */
	nr?: InputMaybe<Scalars["Int"]>
	/** Provides a threshold by which to sharpen an image. Default: `20`. [See docs](https://docs.imgix.com/apis/url/noise-reduction/nrs). */
	nrs?: InputMaybe<Scalars["Int"]>
	/** Alias for `orient`. */
	or?: InputMaybe<Scalars["Int"]>
	/** Changes the image orientation. [See docs](https://docs.imgix.com/apis/url/rotation/orient). */
	orient?: InputMaybe<Scalars["Int"]>
	/** Pads an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad). */
	pad?: InputMaybe<Scalars["Int"]>
	/** Sets bottom padding of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad-bottom). */
	padBottom?: InputMaybe<Scalars["Int"]>
	/** Sets left padding of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad-left). */
	padLeft?: InputMaybe<Scalars["Int"]>
	/** Sets right padding of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad-right). */
	padRight?: InputMaybe<Scalars["Int"]>
	/** Sets top padding of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad-top). */
	padTop?: InputMaybe<Scalars["Int"]>
	/** Selects a page from a PDF for display. Default: `1`. [See docs](https://docs.imgix.com/apis/url/pdf/page). */
	page?: InputMaybe<Scalars["Int"]>
	/** Specifies an output format for palette-extraction. [See docs](https://docs.imgix.com/apis/url/color-palette/palette). */
	palette?: InputMaybe<Scalars["String"]>
	/** Enables or disables PDF annotation. Default: `true`. [See docs](https://docs.imgix.com/apis/url/pdf/pdf-annotation). */
	pdfAnnotation?: InputMaybe<Scalars["Boolean"]>
	/** Specifies a CSS prefix for all classes in palette-extraction. Default: `image`. [See docs](https://docs.imgix.com/apis/url/color-palette/prefix). */
	prefix?: InputMaybe<Scalars["String"]>
	/** Applies a pixelation effect to an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/stylize/px). */
	px?: InputMaybe<Scalars["Int"]>
	/** Adjusts the quality of an output image. Default: `75`. [See docs](https://docs.imgix.com/apis/url/format/q). */
	q?: InputMaybe<Scalars["Int"]>
	/** Crops an image to a specified rectangle. [See docs](https://docs.imgix.com/apis/url/size/rect). */
	rect?: InputMaybe<Scalars["String"]>
	/** Rotates an image by a specified number of degrees. Default: `0`. [See docs](https://docs.imgix.com/apis/url/rotation/rot). */
	rot?: InputMaybe<Scalars["Float"]>
	/** Adjusts the saturation of an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/sat). */
	sat?: InputMaybe<Scalars["Int"]>
	/** Applies a sepia effect to an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/stylize/sepia). */
	sepia?: InputMaybe<Scalars["Int"]>
	/** Adjusts the highlights of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/shad). */
	shad?: InputMaybe<Scalars["Float"]>
	/** Adjusts the sharpness of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/sharp). */
	sharp?: InputMaybe<Scalars["Float"]>
	/** Alias for `txt`. */
	t?: InputMaybe<Scalars["String"]>
	/** Alias for `txtAlign`. */
	ta?: InputMaybe<Scalars["String"]>
	/** Alias for `txtColor`. */
	tc?: InputMaybe<Scalars["String"]>
	/** Alias for `txtClip`. */
	tcl?: InputMaybe<Scalars["String"]>
	/** Alias for `txtFont`. */
	tf?: InputMaybe<Scalars["String"]>
	/** Alias for `txtLine`. */
	tl?: InputMaybe<Scalars["Int"]>
	/** Alias for `txtPad`. */
	tp?: InputMaybe<Scalars["Int"]>
	/** Adds checkerboard behind images which support transparency. [See docs](https://docs.imgix.com/apis/url/fill/transparency). */
	transparency?: InputMaybe<Scalars["String"]>
	/** Trims the source image. [See docs](https://docs.imgix.com/apis/url/trim/trim). */
	trim?: InputMaybe<Scalars["String"]>
	/** Specifies a trim color on a trim operation. [See docs](https://docs.imgix.com/apis/url/trim/trim-color). */
	trimColor?: InputMaybe<Scalars["String"]>
	/** Specifies the mean difference on a trim operation. Default: `11`. [See docs](https://docs.imgix.com/apis/url/trim/trim-md). */
	trimMd?: InputMaybe<Scalars["Float"]>
	/** Pads the area of the source image before trimming. Default: `0`. [See docs](https://docs.imgix.com/apis/url/trim/trim-pad). */
	trimPad?: InputMaybe<Scalars["Int"]>
	/** Specifies the standard deviation on a trim operation. Default: `10`. [See docs](https://docs.imgix.com/apis/url/trim/trim-sd). */
	trimSd?: InputMaybe<Scalars["Float"]>
	/** Specifies the tolerance on a trim operation. Default: `0`. [See docs](https://docs.imgix.com/apis/url/trim/trim-tol). */
	trimTol?: InputMaybe<Scalars["Float"]>
	/** Alias for `trimColor`. */
	trimcolor?: InputMaybe<Scalars["String"]>
	/** Alias for `trimMd`. */
	trimmd?: InputMaybe<Scalars["Float"]>
	/** Alias for `trimPad`. */
	trimpad?: InputMaybe<Scalars["Int"]>
	/** Alias for `trimSd`. */
	trimsd?: InputMaybe<Scalars["Float"]>
	/** Alias for `trimTol`. */
	trimtol?: InputMaybe<Scalars["Float"]>
	/** Alias for `txtShad`. */
	tsh?: InputMaybe<Scalars["Float"]>
	/** Alias for `txtSize`. */
	tsz?: InputMaybe<Scalars["Int"]>
	/** Alias for `txtTrack`. */
	tt?: InputMaybe<Scalars["Int"]>
	/** Sets the text string to render. [See docs](https://docs.imgix.com/apis/url/text/txt). */
	txt?: InputMaybe<Scalars["String"]>
	/** Sets the vertical and horizontal alignment of rendered text relative to the base image. [See docs](https://docs.imgix.com/apis/url/text/txt-align). */
	txtAlign?: InputMaybe<Scalars["String"]>
	/** Sets the clipping properties of rendered text. Default: `end`. [See docs](https://docs.imgix.com/apis/url/text/txt-clip). */
	txtClip?: InputMaybe<Scalars["String"]>
	/** Alias for `txtColor`. */
	txtClr?: InputMaybe<Scalars["String"]>
	/** Specifies the color of rendered text. [See docs](https://docs.imgix.com/apis/url/text/txt-color). */
	txtColor?: InputMaybe<Scalars["String"]>
	/** Specifies the fit approach for rendered text. [See docs](https://docs.imgix.com/apis/url/text/txt-fit). */
	txtFit?: InputMaybe<Scalars["String"]>
	/** Selects a font for rendered text. [See docs](https://docs.imgix.com/apis/url/text/txt-font). */
	txtFont?: InputMaybe<Scalars["String"]>
	/** Sets the leading (line spacing) for rendered text. Only works on the multi-line text endpoint. Default: `0`. [See docs](https://docs.imgix.com/apis/url/typesetting/txt-lead). */
	txtLead?: InputMaybe<Scalars["Int"]>
	/** Controls the level of ligature substitution. [See docs](https://docs.imgix.com/apis/url/text/txt-lig). */
	txtLig?: InputMaybe<Scalars["Int"]>
	/** Outlines the rendered text with a specified color. Default: `0`. [See docs](https://docs.imgix.com/apis/url/text/txt-line). */
	txtLine?: InputMaybe<Scalars["Int"]>
	/** Alias for `txtLineColor`. */
	txtLineClr?: InputMaybe<Scalars["String"]>
	/** Specifies a text outline color. Default: `fff`. [See docs](https://docs.imgix.com/apis/url/text/txt-line-color). */
	txtLineColor?: InputMaybe<Scalars["String"]>
	/** Specifies the padding (in device-independent pixels) between a textbox and the edges of the base image. [See docs](https://docs.imgix.com/apis/url/text/txt-pad). */
	txtPad?: InputMaybe<Scalars["Int"]>
	/** Applies a shadow to rendered text. Default: `0`. [See docs](https://docs.imgix.com/apis/url/text/txt-shad). */
	txtShad?: InputMaybe<Scalars["Float"]>
	/** Sets the font size of rendered text. Default: `12`. [See docs](https://docs.imgix.com/apis/url/text/txt-size). */
	txtSize?: InputMaybe<Scalars["Int"]>
	/** Sets the tracking (letter spacing) for rendered text. Only works on the multi-line text endpoint. Default: `0`. [See docs](https://docs.imgix.com/apis/url/typesetting/txt-track). */
	txtTrack?: InputMaybe<Scalars["Int"]>
	/** Sets the width of rendered text. [See docs](https://docs.imgix.com/apis/url/text/txt-width). */
	txtWidth?: InputMaybe<Scalars["Int"]>
	/** Sets the horizontal (x) position of the text in pixels relative to the left edge of the base image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/text/txt-x). */
	txtX?: InputMaybe<Scalars["Int"]>
	/** Sets the vertical (y) position of the text in pixels relative to the top edge of the base image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/text/txt-y). */
	txtY?: InputMaybe<Scalars["Int"]>
	/** Alias for `txtAlign`. */
	txtalign?: InputMaybe<Scalars["String"]>
	/** Alias for `txtClip`. */
	txtclip?: InputMaybe<Scalars["String"]>
	/** Alias for `txtColor`. */
	txtclr?: InputMaybe<Scalars["String"]>
	/** Alias for `txtColor`. */
	txtcolor?: InputMaybe<Scalars["String"]>
	/** Alias for `txtFit`. */
	txtfit?: InputMaybe<Scalars["String"]>
	/** Alias for `txtFont`. */
	txtfont?: InputMaybe<Scalars["String"]>
	/** Alias for `txtLead`. */
	txtlead?: InputMaybe<Scalars["Int"]>
	/** Alias for `txtLig`. */
	txtlig?: InputMaybe<Scalars["Int"]>
	/** Alias for `txtLine`. */
	txtline?: InputMaybe<Scalars["Int"]>
	/** Alias for `txtLineColor`. */
	txtlineclr?: InputMaybe<Scalars["String"]>
	/** Alias for `txtLineColor`. */
	txtlinecolor?: InputMaybe<Scalars["String"]>
	/** Alias for `txtPad`. */
	txtpad?: InputMaybe<Scalars["Int"]>
	/** Alias for `txtShad`. */
	txtshad?: InputMaybe<Scalars["Float"]>
	/** Alias for `txtSize`. */
	txtsize?: InputMaybe<Scalars["Int"]>
	/** Alias for `txtTrack`. */
	txttrack?: InputMaybe<Scalars["Int"]>
	/** Alias for `txtWidth`. */
	txtwidth?: InputMaybe<Scalars["Int"]>
	/** Alias for `txtX`. */
	txtx?: InputMaybe<Scalars["Int"]>
	/** Alias for `txtY`. */
	txty?: InputMaybe<Scalars["Int"]>
	/** Sharpens the source image using an unsharp mask. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/usm). */
	usm?: InputMaybe<Scalars["Int"]>
	/** Specifies the radius for an unsharp mask operation. Default: `2.5`. [See docs](https://docs.imgix.com/apis/url/adjustment/usmrad). */
	usmrad?: InputMaybe<Scalars["Float"]>
	/** Adjusts the vibrance of an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/vib). */
	vib?: InputMaybe<Scalars["Int"]>
	/** Adjusts the width of the output image. [See docs](https://docs.imgix.com/apis/url/size/w). */
	w?: InputMaybe<Scalars["Float"]>
	/** Alias for `w`. */
	width?: InputMaybe<Scalars["Float"]>
}

export enum ImgixPlaceholder {
	Blurred = "BLURRED",
	DominantColor = "DOMINANT_COLOR",
	None = "NONE",
}

export type IntQueryOperatorInput = {
	eq?: InputMaybe<Scalars["Int"]>
	gt?: InputMaybe<Scalars["Int"]>
	gte?: InputMaybe<Scalars["Int"]>
	in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
	lt?: InputMaybe<Scalars["Int"]>
	lte?: InputMaybe<Scalars["Int"]>
	ne?: InputMaybe<Scalars["Int"]>
	nin?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
}

export type Internal = {
	__typename?: "Internal"
	content?: Maybe<Scalars["String"]>
	contentDigest: Scalars["String"]
	contentFilePath?: Maybe<Scalars["String"]>
	description?: Maybe<Scalars["String"]>
	fieldOwners?: Maybe<Array<Maybe<Scalars["String"]>>>
	ignoreType?: Maybe<Scalars["Boolean"]>
	mediaType?: Maybe<Scalars["String"]>
	owner: Scalars["String"]
	type: Scalars["String"]
}

export type InternalFilterInput = {
	content?: InputMaybe<StringQueryOperatorInput>
	contentDigest?: InputMaybe<StringQueryOperatorInput>
	contentFilePath?: InputMaybe<StringQueryOperatorInput>
	description?: InputMaybe<StringQueryOperatorInput>
	fieldOwners?: InputMaybe<StringQueryOperatorInput>
	ignoreType?: InputMaybe<BooleanQueryOperatorInput>
	mediaType?: InputMaybe<StringQueryOperatorInput>
	owner?: InputMaybe<StringQueryOperatorInput>
	type?: InputMaybe<StringQueryOperatorInput>
}

export type JsonQueryOperatorInput = {
	eq?: InputMaybe<Scalars["JSON"]>
	glob?: InputMaybe<Scalars["JSON"]>
	in?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>
	ne?: InputMaybe<Scalars["JSON"]>
	nin?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>
	regex?: InputMaybe<Scalars["JSON"]>
}

/** Node Interface */
export type Node = {
	children: Array<Node>
	id: Scalars["ID"]
	internal: Internal
	parent?: Maybe<Node>
}

export type NodeFilterInput = {
	children?: InputMaybe<NodeFilterListInput>
	id?: InputMaybe<StringQueryOperatorInput>
	internal?: InputMaybe<InternalFilterInput>
	parent?: InputMaybe<NodeFilterInput>
}

export type NodeFilterListInput = {
	elemMatch?: InputMaybe<NodeFilterInput>
}

export type PageInfo = {
	__typename?: "PageInfo"
	currentPage: Scalars["Int"]
	hasNextPage: Scalars["Boolean"]
	hasPreviousPage: Scalars["Boolean"]
	itemCount: Scalars["Int"]
	pageCount: Scalars["Int"]
	perPage?: Maybe<Scalars["Int"]>
	totalCount: Scalars["Int"]
}

export type PrismicAllDocumentTypes =
	| PrismicEvent
	| PrismicNavigation
	| PrismicPage
	| PrismicSettings
	| PrismicSponsor
	| PrismicSponsorsList
	| PrismicSubmissionType
	| PrismicVideoSubmission

export type PrismicAlternateLanguageType = {
	__typename?: "PrismicAlternateLanguageType"
	document?: Maybe<PrismicAllDocumentTypes>
	id?: Maybe<Scalars["ID"]>
	lang?: Maybe<Scalars["String"]>
	raw?: Maybe<Scalars["JSON"]>
	type?: Maybe<Scalars["String"]>
	uid?: Maybe<Scalars["String"]>
}

export type PrismicAlternateLanguageTypeFilterInput = {
	id?: InputMaybe<IdQueryOperatorInput>
	lang?: InputMaybe<StringQueryOperatorInput>
	raw?: InputMaybe<JsonQueryOperatorInput>
	type?: InputMaybe<StringQueryOperatorInput>
	uid?: InputMaybe<StringQueryOperatorInput>
}

export type PrismicAlternateLanguageTypeFilterListInput = {
	elemMatch?: InputMaybe<PrismicAlternateLanguageTypeFilterInput>
}

export type PrismicEmbedType = Node & {
	__typename?: "PrismicEmbedType"
	children: Array<Node>
	id: Scalars["ID"]
	internal: Internal
	parent?: Maybe<Node>
}

export type PrismicEmbedTypeConnection = {
	__typename?: "PrismicEmbedTypeConnection"
	distinct: Array<Scalars["String"]>
	edges: Array<PrismicEmbedTypeEdge>
	group: Array<PrismicEmbedTypeGroupConnection>
	max?: Maybe<Scalars["Float"]>
	min?: Maybe<Scalars["Float"]>
	nodes: Array<PrismicEmbedType>
	pageInfo: PageInfo
	sum?: Maybe<Scalars["Float"]>
	totalCount: Scalars["Int"]
}

export type PrismicEmbedTypeConnectionDistinctArgs = {
	field: PrismicEmbedTypeFieldsEnum
}

export type PrismicEmbedTypeConnectionGroupArgs = {
	field: PrismicEmbedTypeFieldsEnum
	limit?: InputMaybe<Scalars["Int"]>
	skip?: InputMaybe<Scalars["Int"]>
}

export type PrismicEmbedTypeConnectionMaxArgs = {
	field: PrismicEmbedTypeFieldsEnum
}

export type PrismicEmbedTypeConnectionMinArgs = {
	field: PrismicEmbedTypeFieldsEnum
}

export type PrismicEmbedTypeConnectionSumArgs = {
	field: PrismicEmbedTypeFieldsEnum
}

export type PrismicEmbedTypeEdge = {
	__typename?: "PrismicEmbedTypeEdge"
	next?: Maybe<PrismicEmbedType>
	node: PrismicEmbedType
	previous?: Maybe<PrismicEmbedType>
}

export enum PrismicEmbedTypeFieldsEnum {
	Children = "children",
	ChildrenChildren = "children___children",
	ChildrenChildrenChildren = "children___children___children",
	ChildrenChildrenChildrenChildren = "children___children___children___children",
	ChildrenChildrenChildrenId = "children___children___children___id",
	ChildrenChildrenId = "children___children___id",
	ChildrenChildrenInternalContent = "children___children___internal___content",
	ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
	ChildrenChildrenInternalContentFilePath = "children___children___internal___contentFilePath",
	ChildrenChildrenInternalDescription = "children___children___internal___description",
	ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
	ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
	ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
	ChildrenChildrenInternalOwner = "children___children___internal___owner",
	ChildrenChildrenInternalType = "children___children___internal___type",
	ChildrenChildrenParentChildren = "children___children___parent___children",
	ChildrenChildrenParentId = "children___children___parent___id",
	ChildrenId = "children___id",
	ChildrenInternalContent = "children___internal___content",
	ChildrenInternalContentDigest = "children___internal___contentDigest",
	ChildrenInternalContentFilePath = "children___internal___contentFilePath",
	ChildrenInternalDescription = "children___internal___description",
	ChildrenInternalFieldOwners = "children___internal___fieldOwners",
	ChildrenInternalIgnoreType = "children___internal___ignoreType",
	ChildrenInternalMediaType = "children___internal___mediaType",
	ChildrenInternalOwner = "children___internal___owner",
	ChildrenInternalType = "children___internal___type",
	ChildrenParentChildren = "children___parent___children",
	ChildrenParentChildrenChildren = "children___parent___children___children",
	ChildrenParentChildrenId = "children___parent___children___id",
	ChildrenParentId = "children___parent___id",
	ChildrenParentInternalContent = "children___parent___internal___content",
	ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
	ChildrenParentInternalContentFilePath = "children___parent___internal___contentFilePath",
	ChildrenParentInternalDescription = "children___parent___internal___description",
	ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
	ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
	ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
	ChildrenParentInternalOwner = "children___parent___internal___owner",
	ChildrenParentInternalType = "children___parent___internal___type",
	ChildrenParentParentChildren = "children___parent___parent___children",
	ChildrenParentParentId = "children___parent___parent___id",
	Id = "id",
	InternalContent = "internal___content",
	InternalContentDigest = "internal___contentDigest",
	InternalContentFilePath = "internal___contentFilePath",
	InternalDescription = "internal___description",
	InternalFieldOwners = "internal___fieldOwners",
	InternalIgnoreType = "internal___ignoreType",
	InternalMediaType = "internal___mediaType",
	InternalOwner = "internal___owner",
	InternalType = "internal___type",
	ParentChildren = "parent___children",
	ParentChildrenChildren = "parent___children___children",
	ParentChildrenChildrenChildren = "parent___children___children___children",
	ParentChildrenChildrenId = "parent___children___children___id",
	ParentChildrenId = "parent___children___id",
	ParentChildrenInternalContent = "parent___children___internal___content",
	ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
	ParentChildrenInternalContentFilePath = "parent___children___internal___contentFilePath",
	ParentChildrenInternalDescription = "parent___children___internal___description",
	ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
	ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
	ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
	ParentChildrenInternalOwner = "parent___children___internal___owner",
	ParentChildrenInternalType = "parent___children___internal___type",
	ParentChildrenParentChildren = "parent___children___parent___children",
	ParentChildrenParentId = "parent___children___parent___id",
	ParentId = "parent___id",
	ParentInternalContent = "parent___internal___content",
	ParentInternalContentDigest = "parent___internal___contentDigest",
	ParentInternalContentFilePath = "parent___internal___contentFilePath",
	ParentInternalDescription = "parent___internal___description",
	ParentInternalFieldOwners = "parent___internal___fieldOwners",
	ParentInternalIgnoreType = "parent___internal___ignoreType",
	ParentInternalMediaType = "parent___internal___mediaType",
	ParentInternalOwner = "parent___internal___owner",
	ParentInternalType = "parent___internal___type",
	ParentParentChildren = "parent___parent___children",
	ParentParentChildrenChildren = "parent___parent___children___children",
	ParentParentChildrenId = "parent___parent___children___id",
	ParentParentId = "parent___parent___id",
	ParentParentInternalContent = "parent___parent___internal___content",
	ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
	ParentParentInternalContentFilePath = "parent___parent___internal___contentFilePath",
	ParentParentInternalDescription = "parent___parent___internal___description",
	ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
	ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
	ParentParentInternalMediaType = "parent___parent___internal___mediaType",
	ParentParentInternalOwner = "parent___parent___internal___owner",
	ParentParentInternalType = "parent___parent___internal___type",
	ParentParentParentChildren = "parent___parent___parent___children",
	ParentParentParentId = "parent___parent___parent___id",
}

export type PrismicEmbedTypeFilterInput = {
	children?: InputMaybe<NodeFilterListInput>
	id?: InputMaybe<StringQueryOperatorInput>
	internal?: InputMaybe<InternalFilterInput>
	parent?: InputMaybe<NodeFilterInput>
}

export type PrismicEmbedTypeGroupConnection = {
	__typename?: "PrismicEmbedTypeGroupConnection"
	distinct: Array<Scalars["String"]>
	edges: Array<PrismicEmbedTypeEdge>
	field: Scalars["String"]
	fieldValue?: Maybe<Scalars["String"]>
	group: Array<PrismicEmbedTypeGroupConnection>
	max?: Maybe<Scalars["Float"]>
	min?: Maybe<Scalars["Float"]>
	nodes: Array<PrismicEmbedType>
	pageInfo: PageInfo
	sum?: Maybe<Scalars["Float"]>
	totalCount: Scalars["Int"]
}

export type PrismicEmbedTypeGroupConnectionDistinctArgs = {
	field: PrismicEmbedTypeFieldsEnum
}

export type PrismicEmbedTypeGroupConnectionGroupArgs = {
	field: PrismicEmbedTypeFieldsEnum
	limit?: InputMaybe<Scalars["Int"]>
	skip?: InputMaybe<Scalars["Int"]>
}

export type PrismicEmbedTypeGroupConnectionMaxArgs = {
	field: PrismicEmbedTypeFieldsEnum
}

export type PrismicEmbedTypeGroupConnectionMinArgs = {
	field: PrismicEmbedTypeFieldsEnum
}

export type PrismicEmbedTypeGroupConnectionSumArgs = {
	field: PrismicEmbedTypeFieldsEnum
}

export type PrismicEmbedTypeSortInput = {
	fields?: InputMaybe<Array<InputMaybe<PrismicEmbedTypeFieldsEnum>>>
	order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type PrismicEvent = Node & {
	__typename?: "PrismicEvent"
	_previewable: Scalars["ID"]
	alternate_languages: Array<PrismicAlternateLanguageType>
	children: Array<Node>
	data: PrismicEventDataType
	dataRaw: Scalars["JSON"]
	first_publication_date: Scalars["Date"]
	href: Scalars["String"]
	id: Scalars["ID"]
	internal: Internal
	lang: Scalars["String"]
	last_publication_date: Scalars["Date"]
	parent?: Maybe<Node>
	prismicId: Scalars["ID"]
	tags: Array<Scalars["String"]>
	type: Scalars["String"]
	uid: Scalars["String"]
	url?: Maybe<Scalars["String"]>
}

export type PrismicEventFirst_Publication_DateArgs = {
	difference?: InputMaybe<Scalars["String"]>
	formatString?: InputMaybe<Scalars["String"]>
	fromNow?: InputMaybe<Scalars["Boolean"]>
	locale?: InputMaybe<Scalars["String"]>
}

export type PrismicEventLast_Publication_DateArgs = {
	difference?: InputMaybe<Scalars["String"]>
	formatString?: InputMaybe<Scalars["String"]>
	fromNow?: InputMaybe<Scalars["Boolean"]>
	locale?: InputMaybe<Scalars["String"]>
}

export type PrismicEventConnection = {
	__typename?: "PrismicEventConnection"
	distinct: Array<Scalars["String"]>
	edges: Array<PrismicEventEdge>
	group: Array<PrismicEventGroupConnection>
	max?: Maybe<Scalars["Float"]>
	min?: Maybe<Scalars["Float"]>
	nodes: Array<PrismicEvent>
	pageInfo: PageInfo
	sum?: Maybe<Scalars["Float"]>
	totalCount: Scalars["Int"]
}

export type PrismicEventConnectionDistinctArgs = {
	field: PrismicEventFieldsEnum
}

export type PrismicEventConnectionGroupArgs = {
	field: PrismicEventFieldsEnum
	limit?: InputMaybe<Scalars["Int"]>
	skip?: InputMaybe<Scalars["Int"]>
}

export type PrismicEventConnectionMaxArgs = {
	field: PrismicEventFieldsEnum
}

export type PrismicEventConnectionMinArgs = {
	field: PrismicEventFieldsEnum
}

export type PrismicEventConnectionSumArgs = {
	field: PrismicEventFieldsEnum
}

export type PrismicEventDataBodyAnchor = PrismicSliceType & {
	__typename?: "PrismicEventDataBodyAnchor"
	id: Scalars["ID"]
	primary: PrismicEventDataBodyAnchorPrimary
	slice_label?: Maybe<Scalars["String"]>
	slice_type: Scalars["String"]
}

export type PrismicEventDataBodyAnchorPrimary = {
	__typename?: "PrismicEventDataBodyAnchorPrimary"
	anchor?: Maybe<Scalars["String"]>
}

export type PrismicEventDataBodyCallToAction = PrismicSliceType & {
	__typename?: "PrismicEventDataBodyCallToAction"
	id: Scalars["ID"]
	primary: PrismicEventDataBodyCallToActionPrimary
	slice_label?: Maybe<Scalars["String"]>
	slice_type: Scalars["String"]
}

export type PrismicEventDataBodyCallToActionCard = PrismicSliceType & {
	__typename?: "PrismicEventDataBodyCallToActionCard"
	id: Scalars["ID"]
	primary: PrismicEventDataBodyCallToActionCardPrimary
	slice_label?: Maybe<Scalars["String"]>
	slice_type: Scalars["String"]
}

export type PrismicEventDataBodyCallToActionCardPrimary = {
	__typename?: "PrismicEventDataBodyCallToActionCardPrimary"
	button_link?: Maybe<PrismicLinkType>
	button_text?: Maybe<Scalars["String"]>
	color?: Maybe<Scalars["String"]>
	text?: Maybe<PrismicStructuredTextType>
}

export type PrismicEventDataBodyCallToActionPrimary = {
	__typename?: "PrismicEventDataBodyCallToActionPrimary"
	button_link?: Maybe<PrismicLinkType>
	button_text?: Maybe<Scalars["String"]>
	heading?: Maybe<PrismicStructuredTextType>
}

export type PrismicEventDataBodyFeaturedPeople = PrismicSliceType & {
	__typename?: "PrismicEventDataBodyFeaturedPeople"
	id: Scalars["ID"]
	items: Array<PrismicEventDataBodyFeaturedPeopleItem>
	primary: PrismicEventDataBodyFeaturedPeoplePrimary
	slice_label?: Maybe<Scalars["String"]>
	slice_type: Scalars["String"]
}

export type PrismicEventDataBodyFeaturedPeopleItem = {
	__typename?: "PrismicEventDataBodyFeaturedPeopleItem"
	bio?: Maybe<PrismicStructuredTextType>
	headshot?: Maybe<PrismicEventDataBodyFeaturedPeopleItemsHeadshotImageType>
	instagram_handle?: Maybe<Scalars["String"]>
	instagram_profile_url?: Maybe<PrismicLinkType>
	name?: Maybe<PrismicStructuredTextType>
	pronouns?: Maybe<PrismicStructuredTextType>
	title1?: Maybe<PrismicStructuredTextType>
	website_label?: Maybe<Scalars["String"]>
	website_url?: Maybe<PrismicLinkType>
}

export type PrismicEventDataBodyFeaturedPeopleItemsHeadshotImageType = {
	__typename?: "PrismicEventDataBodyFeaturedPeopleItemsHeadshotImageType"
	alt?: Maybe<Scalars["String"]>
	copyright?: Maybe<Scalars["String"]>
	dimensions?: Maybe<PrismicImageDimensionsType>
	/** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
	fixed?: Maybe<ImgixFixed>
	/** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
	fluid?: Maybe<ImgixFluid>
	gatsbyImageData?: Maybe<Scalars["JSON"]>
	localFile?: Maybe<File>
	/** A plain imgix URL with the URL and params applied. */
	url?: Maybe<Scalars["String"]>
}

export type PrismicEventDataBodyFeaturedPeopleItemsHeadshotImageTypeFixedArgs =
	{
		height?: InputMaybe<Scalars["Int"]>
		imgixParams?: InputMaybe<ImgixParamsInput>
		placeholderImgixParams?: InputMaybe<ImgixParamsInput>
		quality?: InputMaybe<Scalars["Int"]>
		width?: InputMaybe<Scalars["Int"]>
	}

export type PrismicEventDataBodyFeaturedPeopleItemsHeadshotImageTypeFluidArgs =
	{
		imgixParams?: InputMaybe<ImgixParamsInput>
		maxHeight?: InputMaybe<Scalars["Int"]>
		maxWidth?: InputMaybe<Scalars["Int"]>
		placeholderImgixParams?: InputMaybe<ImgixParamsInput>
		srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
	}

export type PrismicEventDataBodyFeaturedPeopleItemsHeadshotImageTypeGatsbyImageDataArgs =
	{
		aspectRatio?: InputMaybe<Scalars["Float"]>
		backgroundColor?: InputMaybe<Scalars["String"]>
		breakpoints?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
		height?: InputMaybe<Scalars["Int"]>
		imgixParams?: InputMaybe<ImgixParamsInput>
		layout?: InputMaybe<GatsbyImageLayout>
		outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>
		placeholder?: InputMaybe<ImgixPlaceholder>
		placeholderImgixParams?: InputMaybe<ImgixParamsInput>
		sizes?: InputMaybe<Scalars["String"]>
		srcSetMaxWidth?: InputMaybe<Scalars["Int"]>
		srcSetMinWidth?: InputMaybe<Scalars["Int"]>
		width?: InputMaybe<Scalars["Int"]>
		widthTolerance?: InputMaybe<Scalars["Float"]>
	}

export type PrismicEventDataBodyFeaturedPeopleItemsHeadshotImageTypeUrlArgs = {
	imgixParams?: InputMaybe<ImgixParamsInput>
}

export type PrismicEventDataBodyFeaturedPeoplePrimary = {
	__typename?: "PrismicEventDataBodyFeaturedPeoplePrimary"
	color?: Maybe<Scalars["String"]>
	heading?: Maybe<PrismicStructuredTextType>
	subheading?: Maybe<PrismicStructuredTextType>
}

export type PrismicEventDataBodyImageCallToAction = PrismicSliceType & {
	__typename?: "PrismicEventDataBodyImageCallToAction"
	id: Scalars["ID"]
	primary: PrismicEventDataBodyImageCallToActionPrimary
	slice_label?: Maybe<Scalars["String"]>
	slice_type: Scalars["String"]
}

export type PrismicEventDataBodyImageCallToActionPrimary = {
	__typename?: "PrismicEventDataBodyImageCallToActionPrimary"
	button_link?: Maybe<PrismicLinkType>
	button_text?: Maybe<Scalars["String"]>
	color?: Maybe<Scalars["String"]>
	image?: Maybe<PrismicEventDataBodyImageCallToActionPrimaryImageImageType>
	image_side?: Maybe<Scalars["String"]>
	text?: Maybe<PrismicStructuredTextType>
}

export type PrismicEventDataBodyImageCallToActionPrimaryImageImageType = {
	__typename?: "PrismicEventDataBodyImageCallToActionPrimaryImageImageType"
	alt?: Maybe<Scalars["String"]>
	copyright?: Maybe<Scalars["String"]>
	dimensions?: Maybe<PrismicImageDimensionsType>
	/** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
	fixed?: Maybe<ImgixFixed>
	/** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
	fluid?: Maybe<ImgixFluid>
	gatsbyImageData?: Maybe<Scalars["JSON"]>
	localFile?: Maybe<File>
	/** A plain imgix URL with the URL and params applied. */
	url?: Maybe<Scalars["String"]>
}

export type PrismicEventDataBodyImageCallToActionPrimaryImageImageTypeFixedArgs =
	{
		height?: InputMaybe<Scalars["Int"]>
		imgixParams?: InputMaybe<ImgixParamsInput>
		placeholderImgixParams?: InputMaybe<ImgixParamsInput>
		quality?: InputMaybe<Scalars["Int"]>
		width?: InputMaybe<Scalars["Int"]>
	}

export type PrismicEventDataBodyImageCallToActionPrimaryImageImageTypeFluidArgs =
	{
		imgixParams?: InputMaybe<ImgixParamsInput>
		maxHeight?: InputMaybe<Scalars["Int"]>
		maxWidth?: InputMaybe<Scalars["Int"]>
		placeholderImgixParams?: InputMaybe<ImgixParamsInput>
		srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
	}

export type PrismicEventDataBodyImageCallToActionPrimaryImageImageTypeGatsbyImageDataArgs =
	{
		aspectRatio?: InputMaybe<Scalars["Float"]>
		backgroundColor?: InputMaybe<Scalars["String"]>
		breakpoints?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
		height?: InputMaybe<Scalars["Int"]>
		imgixParams?: InputMaybe<ImgixParamsInput>
		layout?: InputMaybe<GatsbyImageLayout>
		outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>
		placeholder?: InputMaybe<ImgixPlaceholder>
		placeholderImgixParams?: InputMaybe<ImgixParamsInput>
		sizes?: InputMaybe<Scalars["String"]>
		srcSetMaxWidth?: InputMaybe<Scalars["Int"]>
		srcSetMinWidth?: InputMaybe<Scalars["Int"]>
		width?: InputMaybe<Scalars["Int"]>
		widthTolerance?: InputMaybe<Scalars["Float"]>
	}

export type PrismicEventDataBodyImageCallToActionPrimaryImageImageTypeUrlArgs =
	{
		imgixParams?: InputMaybe<ImgixParamsInput>
	}

export type PrismicEventDataBodyIntroduction = PrismicSliceType & {
	__typename?: "PrismicEventDataBodyIntroduction"
	id: Scalars["ID"]
	primary: PrismicEventDataBodyIntroductionPrimary
	slice_label?: Maybe<Scalars["String"]>
	slice_type: Scalars["String"]
}

export type PrismicEventDataBodyIntroductionPrimary = {
	__typename?: "PrismicEventDataBodyIntroductionPrimary"
	color?: Maybe<Scalars["String"]>
	heading?: Maybe<PrismicStructuredTextType>
	text?: Maybe<PrismicStructuredTextType>
}

export type PrismicEventDataBodyNewsletterForm = PrismicSliceType & {
	__typename?: "PrismicEventDataBodyNewsletterForm"
	id: Scalars["ID"]
	primary: PrismicEventDataBodyNewsletterFormPrimary
	slice_label?: Maybe<Scalars["String"]>
	slice_type: Scalars["String"]
}

export type PrismicEventDataBodyNewsletterFormPrimary = {
	__typename?: "PrismicEventDataBodyNewsletterFormPrimary"
	color?: Maybe<Scalars["String"]>
	heading?: Maybe<PrismicStructuredTextType>
	placeholder_text?: Maybe<Scalars["String"]>
}

export type PrismicEventDataBodyPrideCalendar = PrismicSliceType & {
	__typename?: "PrismicEventDataBodyPrideCalendar"
	id: Scalars["ID"]
	items: Array<PrismicEventDataBodyPrideCalendarItem>
	primary: PrismicEventDataBodyPrideCalendarPrimary
	slice_label?: Maybe<Scalars["String"]>
	slice_type: Scalars["String"]
}

export type PrismicEventDataBodyPrideCalendarItem = {
	__typename?: "PrismicEventDataBodyPrideCalendarItem"
	event_description?: Maybe<PrismicStructuredTextType>
	event_end?: Maybe<Scalars["Date"]>
	event_link?: Maybe<PrismicLinkType>
	event_start?: Maybe<Scalars["Date"]>
	event_title?: Maybe<PrismicStructuredTextType>
	event_video_url?: Maybe<Scalars["String"]>
	image?: Maybe<PrismicEventDataBodyPrideCalendarItemsImageImageType>
}

export type PrismicEventDataBodyPrideCalendarItemEvent_EndArgs = {
	difference?: InputMaybe<Scalars["String"]>
	formatString?: InputMaybe<Scalars["String"]>
	fromNow?: InputMaybe<Scalars["Boolean"]>
	locale?: InputMaybe<Scalars["String"]>
}

export type PrismicEventDataBodyPrideCalendarItemEvent_StartArgs = {
	difference?: InputMaybe<Scalars["String"]>
	formatString?: InputMaybe<Scalars["String"]>
	fromNow?: InputMaybe<Scalars["Boolean"]>
	locale?: InputMaybe<Scalars["String"]>
}

export type PrismicEventDataBodyPrideCalendarItemsImageImageType = {
	__typename?: "PrismicEventDataBodyPrideCalendarItemsImageImageType"
	alt?: Maybe<Scalars["String"]>
	copyright?: Maybe<Scalars["String"]>
	dimensions?: Maybe<PrismicImageDimensionsType>
	/** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
	fixed?: Maybe<ImgixFixed>
	/** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
	fluid?: Maybe<ImgixFluid>
	gatsbyImageData?: Maybe<Scalars["JSON"]>
	localFile?: Maybe<File>
	/** A plain imgix URL with the URL and params applied. */
	url?: Maybe<Scalars["String"]>
}

export type PrismicEventDataBodyPrideCalendarItemsImageImageTypeFixedArgs = {
	height?: InputMaybe<Scalars["Int"]>
	imgixParams?: InputMaybe<ImgixParamsInput>
	placeholderImgixParams?: InputMaybe<ImgixParamsInput>
	quality?: InputMaybe<Scalars["Int"]>
	width?: InputMaybe<Scalars["Int"]>
}

export type PrismicEventDataBodyPrideCalendarItemsImageImageTypeFluidArgs = {
	imgixParams?: InputMaybe<ImgixParamsInput>
	maxHeight?: InputMaybe<Scalars["Int"]>
	maxWidth?: InputMaybe<Scalars["Int"]>
	placeholderImgixParams?: InputMaybe<ImgixParamsInput>
	srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
}

export type PrismicEventDataBodyPrideCalendarItemsImageImageTypeGatsbyImageDataArgs =
	{
		aspectRatio?: InputMaybe<Scalars["Float"]>
		backgroundColor?: InputMaybe<Scalars["String"]>
		breakpoints?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
		height?: InputMaybe<Scalars["Int"]>
		imgixParams?: InputMaybe<ImgixParamsInput>
		layout?: InputMaybe<GatsbyImageLayout>
		outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>
		placeholder?: InputMaybe<ImgixPlaceholder>
		placeholderImgixParams?: InputMaybe<ImgixParamsInput>
		sizes?: InputMaybe<Scalars["String"]>
		srcSetMaxWidth?: InputMaybe<Scalars["Int"]>
		srcSetMinWidth?: InputMaybe<Scalars["Int"]>
		width?: InputMaybe<Scalars["Int"]>
		widthTolerance?: InputMaybe<Scalars["Float"]>
	}

export type PrismicEventDataBodyPrideCalendarItemsImageImageTypeUrlArgs = {
	imgixParams?: InputMaybe<ImgixParamsInput>
}

export type PrismicEventDataBodyPrideCalendarPrimary = {
	__typename?: "PrismicEventDataBodyPrideCalendarPrimary"
	color?: Maybe<Scalars["String"]>
	text?: Maybe<PrismicStructuredTextType>
}

export type PrismicEventDataBodyRichText = PrismicSliceType & {
	__typename?: "PrismicEventDataBodyRichText"
	id: Scalars["ID"]
	primary: PrismicEventDataBodyRichTextPrimary
	slice_label?: Maybe<Scalars["String"]>
	slice_type: Scalars["String"]
}

export type PrismicEventDataBodyRichTextPrimary = {
	__typename?: "PrismicEventDataBodyRichTextPrimary"
	button_link?: Maybe<PrismicLinkType>
	button_text?: Maybe<Scalars["String"]>
	color?: Maybe<Scalars["String"]>
	text?: Maybe<PrismicStructuredTextType>
}

export type PrismicEventDataBodySlicesType =
	| PrismicEventDataBodyAnchor
	| PrismicEventDataBodyCallToAction
	| PrismicEventDataBodyCallToActionCard
	| PrismicEventDataBodyFeaturedPeople
	| PrismicEventDataBodyImageCallToAction
	| PrismicEventDataBodyIntroduction
	| PrismicEventDataBodyNewsletterForm
	| PrismicEventDataBodyPrideCalendar
	| PrismicEventDataBodyRichText
	| PrismicEventDataBodyTextAndVideo
	| PrismicEventDataBodyTwoColumnText
	| PrismicEventDataBodyVideo
	| PrismicEventDataBodyVideoGallery
	| PrismicEventDataBodyVideoHero

export type PrismicEventDataBodyTextAndVideo = PrismicSliceType & {
	__typename?: "PrismicEventDataBodyTextAndVideo"
	id: Scalars["ID"]
	primary: PrismicEventDataBodyTextAndVideoPrimary
	slice_label?: Maybe<Scalars["String"]>
	slice_type: Scalars["String"]
}

export type PrismicEventDataBodyTextAndVideoPrimary = {
	__typename?: "PrismicEventDataBodyTextAndVideoPrimary"
	color?: Maybe<Scalars["String"]>
	text?: Maybe<PrismicStructuredTextType>
	thumbnail_side?: Maybe<Scalars["String"]>
	video_thumbnail?: Maybe<PrismicEventDataBodyTextAndVideoPrimaryVideoThumbnailImageType>
	video_url?: Maybe<Scalars["String"]>
}

export type PrismicEventDataBodyTextAndVideoPrimaryVideoThumbnailImageType = {
	__typename?: "PrismicEventDataBodyTextAndVideoPrimaryVideoThumbnailImageType"
	alt?: Maybe<Scalars["String"]>
	copyright?: Maybe<Scalars["String"]>
	dimensions?: Maybe<PrismicImageDimensionsType>
	/** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
	fixed?: Maybe<ImgixFixed>
	/** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
	fluid?: Maybe<ImgixFluid>
	gatsbyImageData?: Maybe<Scalars["JSON"]>
	localFile?: Maybe<File>
	/** A plain imgix URL with the URL and params applied. */
	url?: Maybe<Scalars["String"]>
}

export type PrismicEventDataBodyTextAndVideoPrimaryVideoThumbnailImageTypeFixedArgs =
	{
		height?: InputMaybe<Scalars["Int"]>
		imgixParams?: InputMaybe<ImgixParamsInput>
		placeholderImgixParams?: InputMaybe<ImgixParamsInput>
		quality?: InputMaybe<Scalars["Int"]>
		width?: InputMaybe<Scalars["Int"]>
	}

export type PrismicEventDataBodyTextAndVideoPrimaryVideoThumbnailImageTypeFluidArgs =
	{
		imgixParams?: InputMaybe<ImgixParamsInput>
		maxHeight?: InputMaybe<Scalars["Int"]>
		maxWidth?: InputMaybe<Scalars["Int"]>
		placeholderImgixParams?: InputMaybe<ImgixParamsInput>
		srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
	}

export type PrismicEventDataBodyTextAndVideoPrimaryVideoThumbnailImageTypeGatsbyImageDataArgs =
	{
		aspectRatio?: InputMaybe<Scalars["Float"]>
		backgroundColor?: InputMaybe<Scalars["String"]>
		breakpoints?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
		height?: InputMaybe<Scalars["Int"]>
		imgixParams?: InputMaybe<ImgixParamsInput>
		layout?: InputMaybe<GatsbyImageLayout>
		outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>
		placeholder?: InputMaybe<ImgixPlaceholder>
		placeholderImgixParams?: InputMaybe<ImgixParamsInput>
		sizes?: InputMaybe<Scalars["String"]>
		srcSetMaxWidth?: InputMaybe<Scalars["Int"]>
		srcSetMinWidth?: InputMaybe<Scalars["Int"]>
		width?: InputMaybe<Scalars["Int"]>
		widthTolerance?: InputMaybe<Scalars["Float"]>
	}

export type PrismicEventDataBodyTextAndVideoPrimaryVideoThumbnailImageTypeUrlArgs =
	{
		imgixParams?: InputMaybe<ImgixParamsInput>
	}

export type PrismicEventDataBodyTwoColumnText = PrismicSliceType & {
	__typename?: "PrismicEventDataBodyTwoColumnText"
	id: Scalars["ID"]
	primary: PrismicEventDataBodyTwoColumnTextPrimary
	slice_label?: Maybe<Scalars["String"]>
	slice_type: Scalars["String"]
}

export type PrismicEventDataBodyTwoColumnTextPrimary = {
	__typename?: "PrismicEventDataBodyTwoColumnTextPrimary"
	button_link?: Maybe<PrismicLinkType>
	button_side?: Maybe<Scalars["String"]>
	button_text?: Maybe<Scalars["String"]>
	color?: Maybe<Scalars["String"]>
	left_text?: Maybe<PrismicStructuredTextType>
	right_text?: Maybe<PrismicStructuredTextType>
}

export type PrismicEventDataBodyVideo = PrismicSliceType & {
	__typename?: "PrismicEventDataBodyVideo"
	id: Scalars["ID"]
	primary: PrismicEventDataBodyVideoPrimary
	slice_label?: Maybe<Scalars["String"]>
	slice_type: Scalars["String"]
}

export type PrismicEventDataBodyVideoGallery = PrismicSliceType & {
	__typename?: "PrismicEventDataBodyVideoGallery"
	id: Scalars["ID"]
	primary: PrismicEventDataBodyVideoGalleryPrimary
	slice_label?: Maybe<Scalars["String"]>
	slice_type: Scalars["String"]
}

export type PrismicEventDataBodyVideoGalleryPrimary = {
	__typename?: "PrismicEventDataBodyVideoGalleryPrimary"
	color?: Maybe<Scalars["String"]>
	text?: Maybe<PrismicStructuredTextType>
	video_submission_type?: Maybe<PrismicLinkType>
}

export type PrismicEventDataBodyVideoHero = PrismicSliceType & {
	__typename?: "PrismicEventDataBodyVideoHero"
	id: Scalars["ID"]
	primary: PrismicEventDataBodyVideoHeroPrimary
	slice_label?: Maybe<Scalars["String"]>
	slice_type: Scalars["String"]
}

export type PrismicEventDataBodyVideoHeroPrimary = {
	__typename?: "PrismicEventDataBodyVideoHeroPrimary"
	text?: Maybe<PrismicStructuredTextType>
	video_thumbnail?: Maybe<PrismicEventDataBodyVideoHeroPrimaryVideoThumbnailImageType>
	video_url?: Maybe<Scalars["String"]>
}

export type PrismicEventDataBodyVideoHeroPrimaryVideoThumbnailImageType = {
	__typename?: "PrismicEventDataBodyVideoHeroPrimaryVideoThumbnailImageType"
	alt?: Maybe<Scalars["String"]>
	copyright?: Maybe<Scalars["String"]>
	dimensions?: Maybe<PrismicImageDimensionsType>
	/** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
	fixed?: Maybe<ImgixFixed>
	/** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
	fluid?: Maybe<ImgixFluid>
	gatsbyImageData?: Maybe<Scalars["JSON"]>
	localFile?: Maybe<File>
	/** A plain imgix URL with the URL and params applied. */
	url?: Maybe<Scalars["String"]>
}

export type PrismicEventDataBodyVideoHeroPrimaryVideoThumbnailImageTypeFixedArgs =
	{
		height?: InputMaybe<Scalars["Int"]>
		imgixParams?: InputMaybe<ImgixParamsInput>
		placeholderImgixParams?: InputMaybe<ImgixParamsInput>
		quality?: InputMaybe<Scalars["Int"]>
		width?: InputMaybe<Scalars["Int"]>
	}

export type PrismicEventDataBodyVideoHeroPrimaryVideoThumbnailImageTypeFluidArgs =
	{
		imgixParams?: InputMaybe<ImgixParamsInput>
		maxHeight?: InputMaybe<Scalars["Int"]>
		maxWidth?: InputMaybe<Scalars["Int"]>
		placeholderImgixParams?: InputMaybe<ImgixParamsInput>
		srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
	}

export type PrismicEventDataBodyVideoHeroPrimaryVideoThumbnailImageTypeGatsbyImageDataArgs =
	{
		aspectRatio?: InputMaybe<Scalars["Float"]>
		backgroundColor?: InputMaybe<Scalars["String"]>
		breakpoints?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
		height?: InputMaybe<Scalars["Int"]>
		imgixParams?: InputMaybe<ImgixParamsInput>
		layout?: InputMaybe<GatsbyImageLayout>
		outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>
		placeholder?: InputMaybe<ImgixPlaceholder>
		placeholderImgixParams?: InputMaybe<ImgixParamsInput>
		sizes?: InputMaybe<Scalars["String"]>
		srcSetMaxWidth?: InputMaybe<Scalars["Int"]>
		srcSetMinWidth?: InputMaybe<Scalars["Int"]>
		width?: InputMaybe<Scalars["Int"]>
		widthTolerance?: InputMaybe<Scalars["Float"]>
	}

export type PrismicEventDataBodyVideoHeroPrimaryVideoThumbnailImageTypeUrlArgs =
	{
		imgixParams?: InputMaybe<ImgixParamsInput>
	}

export type PrismicEventDataBodyVideoPrimary = {
	__typename?: "PrismicEventDataBodyVideoPrimary"
	thumbnail?: Maybe<PrismicEventDataBodyVideoPrimaryThumbnailImageType>
	video_url?: Maybe<Scalars["String"]>
}

export type PrismicEventDataBodyVideoPrimaryThumbnailImageType = {
	__typename?: "PrismicEventDataBodyVideoPrimaryThumbnailImageType"
	alt?: Maybe<Scalars["String"]>
	copyright?: Maybe<Scalars["String"]>
	dimensions?: Maybe<PrismicImageDimensionsType>
	/** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
	fixed?: Maybe<ImgixFixed>
	/** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
	fluid?: Maybe<ImgixFluid>
	gatsbyImageData?: Maybe<Scalars["JSON"]>
	localFile?: Maybe<File>
	/** A plain imgix URL with the URL and params applied. */
	url?: Maybe<Scalars["String"]>
}

export type PrismicEventDataBodyVideoPrimaryThumbnailImageTypeFixedArgs = {
	height?: InputMaybe<Scalars["Int"]>
	imgixParams?: InputMaybe<ImgixParamsInput>
	placeholderImgixParams?: InputMaybe<ImgixParamsInput>
	quality?: InputMaybe<Scalars["Int"]>
	width?: InputMaybe<Scalars["Int"]>
}

export type PrismicEventDataBodyVideoPrimaryThumbnailImageTypeFluidArgs = {
	imgixParams?: InputMaybe<ImgixParamsInput>
	maxHeight?: InputMaybe<Scalars["Int"]>
	maxWidth?: InputMaybe<Scalars["Int"]>
	placeholderImgixParams?: InputMaybe<ImgixParamsInput>
	srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
}

export type PrismicEventDataBodyVideoPrimaryThumbnailImageTypeGatsbyImageDataArgs =
	{
		aspectRatio?: InputMaybe<Scalars["Float"]>
		backgroundColor?: InputMaybe<Scalars["String"]>
		breakpoints?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
		height?: InputMaybe<Scalars["Int"]>
		imgixParams?: InputMaybe<ImgixParamsInput>
		layout?: InputMaybe<GatsbyImageLayout>
		outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>
		placeholder?: InputMaybe<ImgixPlaceholder>
		placeholderImgixParams?: InputMaybe<ImgixParamsInput>
		sizes?: InputMaybe<Scalars["String"]>
		srcSetMaxWidth?: InputMaybe<Scalars["Int"]>
		srcSetMinWidth?: InputMaybe<Scalars["Int"]>
		width?: InputMaybe<Scalars["Int"]>
		widthTolerance?: InputMaybe<Scalars["Float"]>
	}

export type PrismicEventDataBodyVideoPrimaryThumbnailImageTypeUrlArgs = {
	imgixParams?: InputMaybe<ImgixParamsInput>
}

export type PrismicEventDataType = {
	__typename?: "PrismicEventDataType"
	body: Array<PrismicEventDataBodySlicesType>
	date?: Maybe<Scalars["Date"]>
	description?: Maybe<PrismicStructuredTextType>
	illustration?: Maybe<Scalars["String"]>
	title?: Maybe<PrismicStructuredTextType>
	type?: Maybe<Scalars["String"]>
}

export type PrismicEventDataTypeDateArgs = {
	difference?: InputMaybe<Scalars["String"]>
	formatString?: InputMaybe<Scalars["String"]>
	fromNow?: InputMaybe<Scalars["Boolean"]>
	locale?: InputMaybe<Scalars["String"]>
}

export type PrismicEventDataTypeFilterInput = {
	date?: InputMaybe<DateQueryOperatorInput>
	description?: InputMaybe<PrismicStructuredTextTypeFilterInput>
	illustration?: InputMaybe<StringQueryOperatorInput>
	title?: InputMaybe<PrismicStructuredTextTypeFilterInput>
	type?: InputMaybe<StringQueryOperatorInput>
}

export type PrismicEventEdge = {
	__typename?: "PrismicEventEdge"
	next?: Maybe<PrismicEvent>
	node: PrismicEvent
	previous?: Maybe<PrismicEvent>
}

export enum PrismicEventFieldsEnum {
	Previewable = "_previewable",
	AlternateLanguages = "alternate_languages",
	AlternateLanguagesId = "alternate_languages___id",
	AlternateLanguagesLang = "alternate_languages___lang",
	AlternateLanguagesRaw = "alternate_languages___raw",
	AlternateLanguagesType = "alternate_languages___type",
	AlternateLanguagesUid = "alternate_languages___uid",
	Children = "children",
	ChildrenChildren = "children___children",
	ChildrenChildrenChildren = "children___children___children",
	ChildrenChildrenChildrenChildren = "children___children___children___children",
	ChildrenChildrenChildrenId = "children___children___children___id",
	ChildrenChildrenId = "children___children___id",
	ChildrenChildrenInternalContent = "children___children___internal___content",
	ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
	ChildrenChildrenInternalContentFilePath = "children___children___internal___contentFilePath",
	ChildrenChildrenInternalDescription = "children___children___internal___description",
	ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
	ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
	ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
	ChildrenChildrenInternalOwner = "children___children___internal___owner",
	ChildrenChildrenInternalType = "children___children___internal___type",
	ChildrenChildrenParentChildren = "children___children___parent___children",
	ChildrenChildrenParentId = "children___children___parent___id",
	ChildrenId = "children___id",
	ChildrenInternalContent = "children___internal___content",
	ChildrenInternalContentDigest = "children___internal___contentDigest",
	ChildrenInternalContentFilePath = "children___internal___contentFilePath",
	ChildrenInternalDescription = "children___internal___description",
	ChildrenInternalFieldOwners = "children___internal___fieldOwners",
	ChildrenInternalIgnoreType = "children___internal___ignoreType",
	ChildrenInternalMediaType = "children___internal___mediaType",
	ChildrenInternalOwner = "children___internal___owner",
	ChildrenInternalType = "children___internal___type",
	ChildrenParentChildren = "children___parent___children",
	ChildrenParentChildrenChildren = "children___parent___children___children",
	ChildrenParentChildrenId = "children___parent___children___id",
	ChildrenParentId = "children___parent___id",
	ChildrenParentInternalContent = "children___parent___internal___content",
	ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
	ChildrenParentInternalContentFilePath = "children___parent___internal___contentFilePath",
	ChildrenParentInternalDescription = "children___parent___internal___description",
	ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
	ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
	ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
	ChildrenParentInternalOwner = "children___parent___internal___owner",
	ChildrenParentInternalType = "children___parent___internal___type",
	ChildrenParentParentChildren = "children___parent___parent___children",
	ChildrenParentParentId = "children___parent___parent___id",
	DataRaw = "dataRaw",
	DataDate = "data___date",
	DataDescriptionHtml = "data___description___html",
	DataDescriptionRaw = "data___description___raw",
	DataDescriptionRichText = "data___description___richText",
	DataDescriptionText = "data___description___text",
	DataIllustration = "data___illustration",
	DataTitleHtml = "data___title___html",
	DataTitleRaw = "data___title___raw",
	DataTitleRichText = "data___title___richText",
	DataTitleText = "data___title___text",
	DataType = "data___type",
	FirstPublicationDate = "first_publication_date",
	Href = "href",
	Id = "id",
	InternalContent = "internal___content",
	InternalContentDigest = "internal___contentDigest",
	InternalContentFilePath = "internal___contentFilePath",
	InternalDescription = "internal___description",
	InternalFieldOwners = "internal___fieldOwners",
	InternalIgnoreType = "internal___ignoreType",
	InternalMediaType = "internal___mediaType",
	InternalOwner = "internal___owner",
	InternalType = "internal___type",
	Lang = "lang",
	LastPublicationDate = "last_publication_date",
	ParentChildren = "parent___children",
	ParentChildrenChildren = "parent___children___children",
	ParentChildrenChildrenChildren = "parent___children___children___children",
	ParentChildrenChildrenId = "parent___children___children___id",
	ParentChildrenId = "parent___children___id",
	ParentChildrenInternalContent = "parent___children___internal___content",
	ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
	ParentChildrenInternalContentFilePath = "parent___children___internal___contentFilePath",
	ParentChildrenInternalDescription = "parent___children___internal___description",
	ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
	ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
	ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
	ParentChildrenInternalOwner = "parent___children___internal___owner",
	ParentChildrenInternalType = "parent___children___internal___type",
	ParentChildrenParentChildren = "parent___children___parent___children",
	ParentChildrenParentId = "parent___children___parent___id",
	ParentId = "parent___id",
	ParentInternalContent = "parent___internal___content",
	ParentInternalContentDigest = "parent___internal___contentDigest",
	ParentInternalContentFilePath = "parent___internal___contentFilePath",
	ParentInternalDescription = "parent___internal___description",
	ParentInternalFieldOwners = "parent___internal___fieldOwners",
	ParentInternalIgnoreType = "parent___internal___ignoreType",
	ParentInternalMediaType = "parent___internal___mediaType",
	ParentInternalOwner = "parent___internal___owner",
	ParentInternalType = "parent___internal___type",
	ParentParentChildren = "parent___parent___children",
	ParentParentChildrenChildren = "parent___parent___children___children",
	ParentParentChildrenId = "parent___parent___children___id",
	ParentParentId = "parent___parent___id",
	ParentParentInternalContent = "parent___parent___internal___content",
	ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
	ParentParentInternalContentFilePath = "parent___parent___internal___contentFilePath",
	ParentParentInternalDescription = "parent___parent___internal___description",
	ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
	ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
	ParentParentInternalMediaType = "parent___parent___internal___mediaType",
	ParentParentInternalOwner = "parent___parent___internal___owner",
	ParentParentInternalType = "parent___parent___internal___type",
	ParentParentParentChildren = "parent___parent___parent___children",
	ParentParentParentId = "parent___parent___parent___id",
	PrismicId = "prismicId",
	Tags = "tags",
	Type = "type",
	Uid = "uid",
	Url = "url",
}

export type PrismicEventFilterInput = {
	_previewable?: InputMaybe<IdQueryOperatorInput>
	alternate_languages?: InputMaybe<PrismicAlternateLanguageTypeFilterListInput>
	children?: InputMaybe<NodeFilterListInput>
	data?: InputMaybe<PrismicEventDataTypeFilterInput>
	dataRaw?: InputMaybe<JsonQueryOperatorInput>
	first_publication_date?: InputMaybe<DateQueryOperatorInput>
	href?: InputMaybe<StringQueryOperatorInput>
	id?: InputMaybe<StringQueryOperatorInput>
	internal?: InputMaybe<InternalFilterInput>
	lang?: InputMaybe<StringQueryOperatorInput>
	last_publication_date?: InputMaybe<DateQueryOperatorInput>
	parent?: InputMaybe<NodeFilterInput>
	prismicId?: InputMaybe<IdQueryOperatorInput>
	tags?: InputMaybe<StringQueryOperatorInput>
	type?: InputMaybe<StringQueryOperatorInput>
	uid?: InputMaybe<StringQueryOperatorInput>
	url?: InputMaybe<StringQueryOperatorInput>
}

export type PrismicEventGroupConnection = {
	__typename?: "PrismicEventGroupConnection"
	distinct: Array<Scalars["String"]>
	edges: Array<PrismicEventEdge>
	field: Scalars["String"]
	fieldValue?: Maybe<Scalars["String"]>
	group: Array<PrismicEventGroupConnection>
	max?: Maybe<Scalars["Float"]>
	min?: Maybe<Scalars["Float"]>
	nodes: Array<PrismicEvent>
	pageInfo: PageInfo
	sum?: Maybe<Scalars["Float"]>
	totalCount: Scalars["Int"]
}

export type PrismicEventGroupConnectionDistinctArgs = {
	field: PrismicEventFieldsEnum
}

export type PrismicEventGroupConnectionGroupArgs = {
	field: PrismicEventFieldsEnum
	limit?: InputMaybe<Scalars["Int"]>
	skip?: InputMaybe<Scalars["Int"]>
}

export type PrismicEventGroupConnectionMaxArgs = {
	field: PrismicEventFieldsEnum
}

export type PrismicEventGroupConnectionMinArgs = {
	field: PrismicEventFieldsEnum
}

export type PrismicEventGroupConnectionSumArgs = {
	field: PrismicEventFieldsEnum
}

export type PrismicEventSortInput = {
	fields?: InputMaybe<Array<InputMaybe<PrismicEventFieldsEnum>>>
	order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type PrismicGeoPointType = {
	__typename?: "PrismicGeoPointType"
	latitude: Scalars["Float"]
	longitude: Scalars["Float"]
}

export type PrismicImageDimensionsType = {
	__typename?: "PrismicImageDimensionsType"
	height: Scalars["Int"]
	width: Scalars["Int"]
}

export type PrismicImageDimensionsTypeFilterInput = {
	height?: InputMaybe<IntQueryOperatorInput>
	width?: InputMaybe<IntQueryOperatorInput>
}

export type PrismicImageThumbnailType = {
	__typename?: "PrismicImageThumbnailType"
	alt?: Maybe<Scalars["String"]>
	copyright?: Maybe<Scalars["String"]>
	dimensions?: Maybe<PrismicImageDimensionsType>
	/** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
	fixed?: Maybe<ImgixFixed>
	/** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
	fluid?: Maybe<ImgixFluid>
	gatsbyImageData?: Maybe<Scalars["JSON"]>
	localFile?: Maybe<File>
	/** A plain imgix URL with the URL and params applied. */
	url?: Maybe<Scalars["String"]>
}

export type PrismicImageThumbnailTypeFixedArgs = {
	height?: InputMaybe<Scalars["Int"]>
	imgixParams?: InputMaybe<ImgixParamsInput>
	placeholderImgixParams?: InputMaybe<ImgixParamsInput>
	quality?: InputMaybe<Scalars["Int"]>
	width?: InputMaybe<Scalars["Int"]>
}

export type PrismicImageThumbnailTypeFluidArgs = {
	imgixParams?: InputMaybe<ImgixParamsInput>
	maxHeight?: InputMaybe<Scalars["Int"]>
	maxWidth?: InputMaybe<Scalars["Int"]>
	placeholderImgixParams?: InputMaybe<ImgixParamsInput>
	srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
}

export type PrismicImageThumbnailTypeGatsbyImageDataArgs = {
	aspectRatio?: InputMaybe<Scalars["Float"]>
	backgroundColor?: InputMaybe<Scalars["String"]>
	breakpoints?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
	height?: InputMaybe<Scalars["Int"]>
	imgixParams?: InputMaybe<ImgixParamsInput>
	layout?: InputMaybe<GatsbyImageLayout>
	outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>
	placeholder?: InputMaybe<ImgixPlaceholder>
	placeholderImgixParams?: InputMaybe<ImgixParamsInput>
	sizes?: InputMaybe<Scalars["String"]>
	srcSetMaxWidth?: InputMaybe<Scalars["Int"]>
	srcSetMinWidth?: InputMaybe<Scalars["Int"]>
	width?: InputMaybe<Scalars["Int"]>
	widthTolerance?: InputMaybe<Scalars["Float"]>
}

export type PrismicImageThumbnailTypeUrlArgs = {
	imgixParams?: InputMaybe<ImgixParamsInput>
}

export type PrismicLinkType = {
	__typename?: "PrismicLinkType"
	document?: Maybe<PrismicAllDocumentTypes>
	id?: Maybe<Scalars["ID"]>
	isBroken?: Maybe<Scalars["Boolean"]>
	lang?: Maybe<Scalars["String"]>
	link_type?: Maybe<PrismicLinkTypeEnum>
	localFile?: Maybe<File>
	raw?: Maybe<Scalars["JSON"]>
	size?: Maybe<Scalars["Int"]>
	slug?: Maybe<Scalars["String"]>
	tags?: Maybe<Array<Maybe<Scalars["String"]>>>
	target?: Maybe<Scalars["String"]>
	type?: Maybe<Scalars["String"]>
	uid?: Maybe<Scalars["String"]>
	url?: Maybe<Scalars["String"]>
}

export enum PrismicLinkTypeEnum {
	Any = "Any",
	Document = "Document",
	Media = "Media",
	Web = "Web",
}

export type PrismicLinkTypeEnumQueryOperatorInput = {
	eq?: InputMaybe<PrismicLinkTypeEnum>
	in?: InputMaybe<Array<InputMaybe<PrismicLinkTypeEnum>>>
	ne?: InputMaybe<PrismicLinkTypeEnum>
	nin?: InputMaybe<Array<InputMaybe<PrismicLinkTypeEnum>>>
}

export type PrismicLinkTypeFilterInput = {
	id?: InputMaybe<IdQueryOperatorInput>
	isBroken?: InputMaybe<BooleanQueryOperatorInput>
	lang?: InputMaybe<StringQueryOperatorInput>
	link_type?: InputMaybe<PrismicLinkTypeEnumQueryOperatorInput>
	localFile?: InputMaybe<FileFilterInput>
	raw?: InputMaybe<JsonQueryOperatorInput>
	size?: InputMaybe<IntQueryOperatorInput>
	slug?: InputMaybe<StringQueryOperatorInput>
	tags?: InputMaybe<StringQueryOperatorInput>
	target?: InputMaybe<StringQueryOperatorInput>
	type?: InputMaybe<StringQueryOperatorInput>
	uid?: InputMaybe<StringQueryOperatorInput>
	url?: InputMaybe<StringQueryOperatorInput>
}

export type PrismicNavigation = Node & {
	__typename?: "PrismicNavigation"
	_previewable: Scalars["ID"]
	alternate_languages: Array<PrismicAlternateLanguageType>
	children: Array<Node>
	data: PrismicNavigationDataType
	dataRaw: Scalars["JSON"]
	first_publication_date: Scalars["Date"]
	href: Scalars["String"]
	id: Scalars["ID"]
	internal: Internal
	lang: Scalars["String"]
	last_publication_date: Scalars["Date"]
	parent?: Maybe<Node>
	prismicId: Scalars["ID"]
	tags: Array<Scalars["String"]>
	type: Scalars["String"]
	uid: Scalars["String"]
	url?: Maybe<Scalars["String"]>
}

export type PrismicNavigationFirst_Publication_DateArgs = {
	difference?: InputMaybe<Scalars["String"]>
	formatString?: InputMaybe<Scalars["String"]>
	fromNow?: InputMaybe<Scalars["Boolean"]>
	locale?: InputMaybe<Scalars["String"]>
}

export type PrismicNavigationLast_Publication_DateArgs = {
	difference?: InputMaybe<Scalars["String"]>
	formatString?: InputMaybe<Scalars["String"]>
	fromNow?: InputMaybe<Scalars["Boolean"]>
	locale?: InputMaybe<Scalars["String"]>
}

export type PrismicNavigationConnection = {
	__typename?: "PrismicNavigationConnection"
	distinct: Array<Scalars["String"]>
	edges: Array<PrismicNavigationEdge>
	group: Array<PrismicNavigationGroupConnection>
	max?: Maybe<Scalars["Float"]>
	min?: Maybe<Scalars["Float"]>
	nodes: Array<PrismicNavigation>
	pageInfo: PageInfo
	sum?: Maybe<Scalars["Float"]>
	totalCount: Scalars["Int"]
}

export type PrismicNavigationConnectionDistinctArgs = {
	field: PrismicNavigationFieldsEnum
}

export type PrismicNavigationConnectionGroupArgs = {
	field: PrismicNavigationFieldsEnum
	limit?: InputMaybe<Scalars["Int"]>
	skip?: InputMaybe<Scalars["Int"]>
}

export type PrismicNavigationConnectionMaxArgs = {
	field: PrismicNavigationFieldsEnum
}

export type PrismicNavigationConnectionMinArgs = {
	field: PrismicNavigationFieldsEnum
}

export type PrismicNavigationConnectionSumArgs = {
	field: PrismicNavigationFieldsEnum
}

export type PrismicNavigationDataNavItems = {
	__typename?: "PrismicNavigationDataNavItems"
	label?: Maybe<PrismicStructuredTextType>
	link?: Maybe<PrismicLinkType>
}

export type PrismicNavigationDataNavItemsFilterInput = {
	label?: InputMaybe<PrismicStructuredTextTypeFilterInput>
	link?: InputMaybe<PrismicLinkTypeFilterInput>
}

export type PrismicNavigationDataNavItemsFilterListInput = {
	elemMatch?: InputMaybe<PrismicNavigationDataNavItemsFilterInput>
}

export type PrismicNavigationDataType = {
	__typename?: "PrismicNavigationDataType"
	nav_items?: Maybe<Array<Maybe<PrismicNavigationDataNavItems>>>
	title?: Maybe<PrismicStructuredTextType>
}

export type PrismicNavigationDataTypeFilterInput = {
	nav_items?: InputMaybe<PrismicNavigationDataNavItemsFilterListInput>
	title?: InputMaybe<PrismicStructuredTextTypeFilterInput>
}

export type PrismicNavigationEdge = {
	__typename?: "PrismicNavigationEdge"
	next?: Maybe<PrismicNavigation>
	node: PrismicNavigation
	previous?: Maybe<PrismicNavigation>
}

export enum PrismicNavigationFieldsEnum {
	Previewable = "_previewable",
	AlternateLanguages = "alternate_languages",
	AlternateLanguagesId = "alternate_languages___id",
	AlternateLanguagesLang = "alternate_languages___lang",
	AlternateLanguagesRaw = "alternate_languages___raw",
	AlternateLanguagesType = "alternate_languages___type",
	AlternateLanguagesUid = "alternate_languages___uid",
	Children = "children",
	ChildrenChildren = "children___children",
	ChildrenChildrenChildren = "children___children___children",
	ChildrenChildrenChildrenChildren = "children___children___children___children",
	ChildrenChildrenChildrenId = "children___children___children___id",
	ChildrenChildrenId = "children___children___id",
	ChildrenChildrenInternalContent = "children___children___internal___content",
	ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
	ChildrenChildrenInternalContentFilePath = "children___children___internal___contentFilePath",
	ChildrenChildrenInternalDescription = "children___children___internal___description",
	ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
	ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
	ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
	ChildrenChildrenInternalOwner = "children___children___internal___owner",
	ChildrenChildrenInternalType = "children___children___internal___type",
	ChildrenChildrenParentChildren = "children___children___parent___children",
	ChildrenChildrenParentId = "children___children___parent___id",
	ChildrenId = "children___id",
	ChildrenInternalContent = "children___internal___content",
	ChildrenInternalContentDigest = "children___internal___contentDigest",
	ChildrenInternalContentFilePath = "children___internal___contentFilePath",
	ChildrenInternalDescription = "children___internal___description",
	ChildrenInternalFieldOwners = "children___internal___fieldOwners",
	ChildrenInternalIgnoreType = "children___internal___ignoreType",
	ChildrenInternalMediaType = "children___internal___mediaType",
	ChildrenInternalOwner = "children___internal___owner",
	ChildrenInternalType = "children___internal___type",
	ChildrenParentChildren = "children___parent___children",
	ChildrenParentChildrenChildren = "children___parent___children___children",
	ChildrenParentChildrenId = "children___parent___children___id",
	ChildrenParentId = "children___parent___id",
	ChildrenParentInternalContent = "children___parent___internal___content",
	ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
	ChildrenParentInternalContentFilePath = "children___parent___internal___contentFilePath",
	ChildrenParentInternalDescription = "children___parent___internal___description",
	ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
	ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
	ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
	ChildrenParentInternalOwner = "children___parent___internal___owner",
	ChildrenParentInternalType = "children___parent___internal___type",
	ChildrenParentParentChildren = "children___parent___parent___children",
	ChildrenParentParentId = "children___parent___parent___id",
	DataRaw = "dataRaw",
	DataNavItems = "data___nav_items",
	DataNavItemsLabelHtml = "data___nav_items___label___html",
	DataNavItemsLabelRaw = "data___nav_items___label___raw",
	DataNavItemsLabelRichText = "data___nav_items___label___richText",
	DataNavItemsLabelText = "data___nav_items___label___text",
	DataNavItemsLinkId = "data___nav_items___link___id",
	DataNavItemsLinkIsBroken = "data___nav_items___link___isBroken",
	DataNavItemsLinkLang = "data___nav_items___link___lang",
	DataNavItemsLinkLinkType = "data___nav_items___link___link_type",
	DataNavItemsLinkRaw = "data___nav_items___link___raw",
	DataNavItemsLinkSize = "data___nav_items___link___size",
	DataNavItemsLinkSlug = "data___nav_items___link___slug",
	DataNavItemsLinkTags = "data___nav_items___link___tags",
	DataNavItemsLinkTarget = "data___nav_items___link___target",
	DataNavItemsLinkType = "data___nav_items___link___type",
	DataNavItemsLinkUid = "data___nav_items___link___uid",
	DataNavItemsLinkUrl = "data___nav_items___link___url",
	DataTitleHtml = "data___title___html",
	DataTitleRaw = "data___title___raw",
	DataTitleRichText = "data___title___richText",
	DataTitleText = "data___title___text",
	FirstPublicationDate = "first_publication_date",
	Href = "href",
	Id = "id",
	InternalContent = "internal___content",
	InternalContentDigest = "internal___contentDigest",
	InternalContentFilePath = "internal___contentFilePath",
	InternalDescription = "internal___description",
	InternalFieldOwners = "internal___fieldOwners",
	InternalIgnoreType = "internal___ignoreType",
	InternalMediaType = "internal___mediaType",
	InternalOwner = "internal___owner",
	InternalType = "internal___type",
	Lang = "lang",
	LastPublicationDate = "last_publication_date",
	ParentChildren = "parent___children",
	ParentChildrenChildren = "parent___children___children",
	ParentChildrenChildrenChildren = "parent___children___children___children",
	ParentChildrenChildrenId = "parent___children___children___id",
	ParentChildrenId = "parent___children___id",
	ParentChildrenInternalContent = "parent___children___internal___content",
	ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
	ParentChildrenInternalContentFilePath = "parent___children___internal___contentFilePath",
	ParentChildrenInternalDescription = "parent___children___internal___description",
	ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
	ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
	ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
	ParentChildrenInternalOwner = "parent___children___internal___owner",
	ParentChildrenInternalType = "parent___children___internal___type",
	ParentChildrenParentChildren = "parent___children___parent___children",
	ParentChildrenParentId = "parent___children___parent___id",
	ParentId = "parent___id",
	ParentInternalContent = "parent___internal___content",
	ParentInternalContentDigest = "parent___internal___contentDigest",
	ParentInternalContentFilePath = "parent___internal___contentFilePath",
	ParentInternalDescription = "parent___internal___description",
	ParentInternalFieldOwners = "parent___internal___fieldOwners",
	ParentInternalIgnoreType = "parent___internal___ignoreType",
	ParentInternalMediaType = "parent___internal___mediaType",
	ParentInternalOwner = "parent___internal___owner",
	ParentInternalType = "parent___internal___type",
	ParentParentChildren = "parent___parent___children",
	ParentParentChildrenChildren = "parent___parent___children___children",
	ParentParentChildrenId = "parent___parent___children___id",
	ParentParentId = "parent___parent___id",
	ParentParentInternalContent = "parent___parent___internal___content",
	ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
	ParentParentInternalContentFilePath = "parent___parent___internal___contentFilePath",
	ParentParentInternalDescription = "parent___parent___internal___description",
	ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
	ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
	ParentParentInternalMediaType = "parent___parent___internal___mediaType",
	ParentParentInternalOwner = "parent___parent___internal___owner",
	ParentParentInternalType = "parent___parent___internal___type",
	ParentParentParentChildren = "parent___parent___parent___children",
	ParentParentParentId = "parent___parent___parent___id",
	PrismicId = "prismicId",
	Tags = "tags",
	Type = "type",
	Uid = "uid",
	Url = "url",
}

export type PrismicNavigationFilterInput = {
	_previewable?: InputMaybe<IdQueryOperatorInput>
	alternate_languages?: InputMaybe<PrismicAlternateLanguageTypeFilterListInput>
	children?: InputMaybe<NodeFilterListInput>
	data?: InputMaybe<PrismicNavigationDataTypeFilterInput>
	dataRaw?: InputMaybe<JsonQueryOperatorInput>
	first_publication_date?: InputMaybe<DateQueryOperatorInput>
	href?: InputMaybe<StringQueryOperatorInput>
	id?: InputMaybe<StringQueryOperatorInput>
	internal?: InputMaybe<InternalFilterInput>
	lang?: InputMaybe<StringQueryOperatorInput>
	last_publication_date?: InputMaybe<DateQueryOperatorInput>
	parent?: InputMaybe<NodeFilterInput>
	prismicId?: InputMaybe<IdQueryOperatorInput>
	tags?: InputMaybe<StringQueryOperatorInput>
	type?: InputMaybe<StringQueryOperatorInput>
	uid?: InputMaybe<StringQueryOperatorInput>
	url?: InputMaybe<StringQueryOperatorInput>
}

export type PrismicNavigationGroupConnection = {
	__typename?: "PrismicNavigationGroupConnection"
	distinct: Array<Scalars["String"]>
	edges: Array<PrismicNavigationEdge>
	field: Scalars["String"]
	fieldValue?: Maybe<Scalars["String"]>
	group: Array<PrismicNavigationGroupConnection>
	max?: Maybe<Scalars["Float"]>
	min?: Maybe<Scalars["Float"]>
	nodes: Array<PrismicNavigation>
	pageInfo: PageInfo
	sum?: Maybe<Scalars["Float"]>
	totalCount: Scalars["Int"]
}

export type PrismicNavigationGroupConnectionDistinctArgs = {
	field: PrismicNavigationFieldsEnum
}

export type PrismicNavigationGroupConnectionGroupArgs = {
	field: PrismicNavigationFieldsEnum
	limit?: InputMaybe<Scalars["Int"]>
	skip?: InputMaybe<Scalars["Int"]>
}

export type PrismicNavigationGroupConnectionMaxArgs = {
	field: PrismicNavigationFieldsEnum
}

export type PrismicNavigationGroupConnectionMinArgs = {
	field: PrismicNavigationFieldsEnum
}

export type PrismicNavigationGroupConnectionSumArgs = {
	field: PrismicNavigationFieldsEnum
}

export type PrismicNavigationSortInput = {
	fields?: InputMaybe<Array<InputMaybe<PrismicNavigationFieldsEnum>>>
	order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type PrismicPage = Node & {
	__typename?: "PrismicPage"
	_previewable: Scalars["ID"]
	alternate_languages: Array<PrismicAlternateLanguageType>
	children: Array<Node>
	data: PrismicPageDataType
	dataRaw: Scalars["JSON"]
	first_publication_date: Scalars["Date"]
	href: Scalars["String"]
	id: Scalars["ID"]
	internal: Internal
	lang: Scalars["String"]
	last_publication_date: Scalars["Date"]
	parent?: Maybe<Node>
	prismicId: Scalars["ID"]
	tags: Array<Scalars["String"]>
	type: Scalars["String"]
	uid: Scalars["String"]
	url?: Maybe<Scalars["String"]>
}

export type PrismicPageFirst_Publication_DateArgs = {
	difference?: InputMaybe<Scalars["String"]>
	formatString?: InputMaybe<Scalars["String"]>
	fromNow?: InputMaybe<Scalars["Boolean"]>
	locale?: InputMaybe<Scalars["String"]>
}

export type PrismicPageLast_Publication_DateArgs = {
	difference?: InputMaybe<Scalars["String"]>
	formatString?: InputMaybe<Scalars["String"]>
	fromNow?: InputMaybe<Scalars["Boolean"]>
	locale?: InputMaybe<Scalars["String"]>
}

export type PrismicPageConnection = {
	__typename?: "PrismicPageConnection"
	distinct: Array<Scalars["String"]>
	edges: Array<PrismicPageEdge>
	group: Array<PrismicPageGroupConnection>
	max?: Maybe<Scalars["Float"]>
	min?: Maybe<Scalars["Float"]>
	nodes: Array<PrismicPage>
	pageInfo: PageInfo
	sum?: Maybe<Scalars["Float"]>
	totalCount: Scalars["Int"]
}

export type PrismicPageConnectionDistinctArgs = {
	field: PrismicPageFieldsEnum
}

export type PrismicPageConnectionGroupArgs = {
	field: PrismicPageFieldsEnum
	limit?: InputMaybe<Scalars["Int"]>
	skip?: InputMaybe<Scalars["Int"]>
}

export type PrismicPageConnectionMaxArgs = {
	field: PrismicPageFieldsEnum
}

export type PrismicPageConnectionMinArgs = {
	field: PrismicPageFieldsEnum
}

export type PrismicPageConnectionSumArgs = {
	field: PrismicPageFieldsEnum
}

export type PrismicPageDataBodyAnchor = PrismicSliceType & {
	__typename?: "PrismicPageDataBodyAnchor"
	id: Scalars["ID"]
	primary: PrismicPageDataBodyAnchorPrimary
	slice_label?: Maybe<Scalars["String"]>
	slice_type: Scalars["String"]
}

export type PrismicPageDataBodyAnchorPrimary = {
	__typename?: "PrismicPageDataBodyAnchorPrimary"
	anchor?: Maybe<Scalars["String"]>
}

export type PrismicPageDataBodyCallToAction = PrismicSliceType & {
	__typename?: "PrismicPageDataBodyCallToAction"
	id: Scalars["ID"]
	primary: PrismicPageDataBodyCallToActionPrimary
	slice_label?: Maybe<Scalars["String"]>
	slice_type: Scalars["String"]
}

export type PrismicPageDataBodyCallToActionCard = PrismicSliceType & {
	__typename?: "PrismicPageDataBodyCallToActionCard"
	id: Scalars["ID"]
	primary: PrismicPageDataBodyCallToActionCardPrimary
	slice_label?: Maybe<Scalars["String"]>
	slice_type: Scalars["String"]
}

export type PrismicPageDataBodyCallToActionCardPrimary = {
	__typename?: "PrismicPageDataBodyCallToActionCardPrimary"
	button_link?: Maybe<PrismicLinkType>
	button_text?: Maybe<Scalars["String"]>
	color?: Maybe<Scalars["String"]>
	text?: Maybe<PrismicStructuredTextType>
}

export type PrismicPageDataBodyCallToActionPrimary = {
	__typename?: "PrismicPageDataBodyCallToActionPrimary"
	button_link?: Maybe<PrismicLinkType>
	button_text?: Maybe<Scalars["String"]>
	heading?: Maybe<PrismicStructuredTextType>
}

export type PrismicPageDataBodyFeaturedPeople = PrismicSliceType & {
	__typename?: "PrismicPageDataBodyFeaturedPeople"
	id: Scalars["ID"]
	items: Array<PrismicPageDataBodyFeaturedPeopleItem>
	primary: PrismicPageDataBodyFeaturedPeoplePrimary
	slice_label?: Maybe<Scalars["String"]>
	slice_type: Scalars["String"]
}

export type PrismicPageDataBodyFeaturedPeopleItem = {
	__typename?: "PrismicPageDataBodyFeaturedPeopleItem"
	bio?: Maybe<PrismicStructuredTextType>
	headshot?: Maybe<PrismicPageDataBodyFeaturedPeopleItemsHeadshotImageType>
	instagram_handle?: Maybe<Scalars["String"]>
	instagram_profile_url?: Maybe<PrismicLinkType>
	name?: Maybe<PrismicStructuredTextType>
	pronouns?: Maybe<PrismicStructuredTextType>
	title1?: Maybe<PrismicStructuredTextType>
	website_label?: Maybe<Scalars["String"]>
	website_url?: Maybe<PrismicLinkType>
}

export type PrismicPageDataBodyFeaturedPeopleItemsHeadshotImageType = {
	__typename?: "PrismicPageDataBodyFeaturedPeopleItemsHeadshotImageType"
	alt?: Maybe<Scalars["String"]>
	copyright?: Maybe<Scalars["String"]>
	dimensions?: Maybe<PrismicImageDimensionsType>
	/** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
	fixed?: Maybe<ImgixFixed>
	/** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
	fluid?: Maybe<ImgixFluid>
	gatsbyImageData?: Maybe<Scalars["JSON"]>
	localFile?: Maybe<File>
	/** A plain imgix URL with the URL and params applied. */
	url?: Maybe<Scalars["String"]>
}

export type PrismicPageDataBodyFeaturedPeopleItemsHeadshotImageTypeFixedArgs = {
	height?: InputMaybe<Scalars["Int"]>
	imgixParams?: InputMaybe<ImgixParamsInput>
	placeholderImgixParams?: InputMaybe<ImgixParamsInput>
	quality?: InputMaybe<Scalars["Int"]>
	width?: InputMaybe<Scalars["Int"]>
}

export type PrismicPageDataBodyFeaturedPeopleItemsHeadshotImageTypeFluidArgs = {
	imgixParams?: InputMaybe<ImgixParamsInput>
	maxHeight?: InputMaybe<Scalars["Int"]>
	maxWidth?: InputMaybe<Scalars["Int"]>
	placeholderImgixParams?: InputMaybe<ImgixParamsInput>
	srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
}

export type PrismicPageDataBodyFeaturedPeopleItemsHeadshotImageTypeGatsbyImageDataArgs =
	{
		aspectRatio?: InputMaybe<Scalars["Float"]>
		backgroundColor?: InputMaybe<Scalars["String"]>
		breakpoints?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
		height?: InputMaybe<Scalars["Int"]>
		imgixParams?: InputMaybe<ImgixParamsInput>
		layout?: InputMaybe<GatsbyImageLayout>
		outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>
		placeholder?: InputMaybe<ImgixPlaceholder>
		placeholderImgixParams?: InputMaybe<ImgixParamsInput>
		sizes?: InputMaybe<Scalars["String"]>
		srcSetMaxWidth?: InputMaybe<Scalars["Int"]>
		srcSetMinWidth?: InputMaybe<Scalars["Int"]>
		width?: InputMaybe<Scalars["Int"]>
		widthTolerance?: InputMaybe<Scalars["Float"]>
	}

export type PrismicPageDataBodyFeaturedPeopleItemsHeadshotImageTypeUrlArgs = {
	imgixParams?: InputMaybe<ImgixParamsInput>
}

export type PrismicPageDataBodyFeaturedPeoplePrimary = {
	__typename?: "PrismicPageDataBodyFeaturedPeoplePrimary"
	color?: Maybe<Scalars["String"]>
	heading?: Maybe<PrismicStructuredTextType>
	subheading?: Maybe<PrismicStructuredTextType>
}

export type PrismicPageDataBodyFilterableEvents = PrismicSliceType & {
	__typename?: "PrismicPageDataBodyFilterableEvents"
	id: Scalars["ID"]
	items: Array<PrismicPageDataBodyFilterableEventsItem>
	slice_label?: Maybe<Scalars["String"]>
	slice_type: Scalars["String"]
}

export type PrismicPageDataBodyFilterableEventsItem = {
	__typename?: "PrismicPageDataBodyFilterableEventsItem"
	color?: Maybe<Scalars["String"]>
	event?: Maybe<PrismicLinkType>
}

export type PrismicPageDataBodyGradientText = PrismicSliceType & {
	__typename?: "PrismicPageDataBodyGradientText"
	id: Scalars["ID"]
	primary: PrismicPageDataBodyGradientTextPrimary
	slice_label?: Maybe<Scalars["String"]>
	slice_type: Scalars["String"]
}

export type PrismicPageDataBodyGradientTextPrimary = {
	__typename?: "PrismicPageDataBodyGradientTextPrimary"
	button_link?: Maybe<PrismicLinkType>
	button_link_text?: Maybe<Scalars["String"]>
	text?: Maybe<PrismicStructuredTextType>
}

export type PrismicPageDataBodyImageCallToAction = PrismicSliceType & {
	__typename?: "PrismicPageDataBodyImageCallToAction"
	id: Scalars["ID"]
	primary: PrismicPageDataBodyImageCallToActionPrimary
	slice_label?: Maybe<Scalars["String"]>
	slice_type: Scalars["String"]
}

export type PrismicPageDataBodyImageCallToActionPrimary = {
	__typename?: "PrismicPageDataBodyImageCallToActionPrimary"
	button_link?: Maybe<PrismicLinkType>
	button_text?: Maybe<Scalars["String"]>
	color?: Maybe<Scalars["String"]>
	image?: Maybe<PrismicPageDataBodyImageCallToActionPrimaryImageImageType>
	image_side?: Maybe<Scalars["String"]>
	text?: Maybe<PrismicStructuredTextType>
}

export type PrismicPageDataBodyImageCallToActionPrimaryImageImageType = {
	__typename?: "PrismicPageDataBodyImageCallToActionPrimaryImageImageType"
	alt?: Maybe<Scalars["String"]>
	copyright?: Maybe<Scalars["String"]>
	dimensions?: Maybe<PrismicImageDimensionsType>
	/** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
	fixed?: Maybe<ImgixFixed>
	/** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
	fluid?: Maybe<ImgixFluid>
	gatsbyImageData?: Maybe<Scalars["JSON"]>
	localFile?: Maybe<File>
	/** A plain imgix URL with the URL and params applied. */
	url?: Maybe<Scalars["String"]>
}

export type PrismicPageDataBodyImageCallToActionPrimaryImageImageTypeFixedArgs =
	{
		height?: InputMaybe<Scalars["Int"]>
		imgixParams?: InputMaybe<ImgixParamsInput>
		placeholderImgixParams?: InputMaybe<ImgixParamsInput>
		quality?: InputMaybe<Scalars["Int"]>
		width?: InputMaybe<Scalars["Int"]>
	}

export type PrismicPageDataBodyImageCallToActionPrimaryImageImageTypeFluidArgs =
	{
		imgixParams?: InputMaybe<ImgixParamsInput>
		maxHeight?: InputMaybe<Scalars["Int"]>
		maxWidth?: InputMaybe<Scalars["Int"]>
		placeholderImgixParams?: InputMaybe<ImgixParamsInput>
		srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
	}

export type PrismicPageDataBodyImageCallToActionPrimaryImageImageTypeGatsbyImageDataArgs =
	{
		aspectRatio?: InputMaybe<Scalars["Float"]>
		backgroundColor?: InputMaybe<Scalars["String"]>
		breakpoints?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
		height?: InputMaybe<Scalars["Int"]>
		imgixParams?: InputMaybe<ImgixParamsInput>
		layout?: InputMaybe<GatsbyImageLayout>
		outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>
		placeholder?: InputMaybe<ImgixPlaceholder>
		placeholderImgixParams?: InputMaybe<ImgixParamsInput>
		sizes?: InputMaybe<Scalars["String"]>
		srcSetMaxWidth?: InputMaybe<Scalars["Int"]>
		srcSetMinWidth?: InputMaybe<Scalars["Int"]>
		width?: InputMaybe<Scalars["Int"]>
		widthTolerance?: InputMaybe<Scalars["Float"]>
	}

export type PrismicPageDataBodyImageCallToActionPrimaryImageImageTypeUrlArgs = {
	imgixParams?: InputMaybe<ImgixParamsInput>
}

export type PrismicPageDataBodyIntroduction = PrismicSliceType & {
	__typename?: "PrismicPageDataBodyIntroduction"
	id: Scalars["ID"]
	primary: PrismicPageDataBodyIntroductionPrimary
	slice_label?: Maybe<Scalars["String"]>
	slice_type: Scalars["String"]
}

export type PrismicPageDataBodyIntroductionPrimary = {
	__typename?: "PrismicPageDataBodyIntroductionPrimary"
	color?: Maybe<Scalars["String"]>
	heading?: Maybe<PrismicStructuredTextType>
	text?: Maybe<PrismicStructuredTextType>
}

export type PrismicPageDataBodyNewsletterForm = PrismicSliceType & {
	__typename?: "PrismicPageDataBodyNewsletterForm"
	id: Scalars["ID"]
	primary: PrismicPageDataBodyNewsletterFormPrimary
	slice_label?: Maybe<Scalars["String"]>
	slice_type: Scalars["String"]
}

export type PrismicPageDataBodyNewsletterFormPrimary = {
	__typename?: "PrismicPageDataBodyNewsletterFormPrimary"
	color?: Maybe<Scalars["String"]>
	heading?: Maybe<PrismicStructuredTextType>
	placeholder_text?: Maybe<Scalars["String"]>
}

export type PrismicPageDataBodyPrideCalendar = PrismicSliceType & {
	__typename?: "PrismicPageDataBodyPrideCalendar"
	id: Scalars["ID"]
	items: Array<PrismicPageDataBodyPrideCalendarItem>
	primary: PrismicPageDataBodyPrideCalendarPrimary
	slice_label?: Maybe<Scalars["String"]>
	slice_type: Scalars["String"]
}

export type PrismicPageDataBodyPrideCalendarItem = {
	__typename?: "PrismicPageDataBodyPrideCalendarItem"
	event_description?: Maybe<PrismicStructuredTextType>
	event_end?: Maybe<Scalars["Date"]>
	event_link?: Maybe<PrismicLinkType>
	event_start?: Maybe<Scalars["Date"]>
	event_title?: Maybe<PrismicStructuredTextType>
	event_video_url?: Maybe<Scalars["String"]>
	image?: Maybe<PrismicPageDataBodyPrideCalendarItemsImageImageType>
}

export type PrismicPageDataBodyPrideCalendarItemEvent_EndArgs = {
	difference?: InputMaybe<Scalars["String"]>
	formatString?: InputMaybe<Scalars["String"]>
	fromNow?: InputMaybe<Scalars["Boolean"]>
	locale?: InputMaybe<Scalars["String"]>
}

export type PrismicPageDataBodyPrideCalendarItemEvent_StartArgs = {
	difference?: InputMaybe<Scalars["String"]>
	formatString?: InputMaybe<Scalars["String"]>
	fromNow?: InputMaybe<Scalars["Boolean"]>
	locale?: InputMaybe<Scalars["String"]>
}

export type PrismicPageDataBodyPrideCalendarItemsImageImageType = {
	__typename?: "PrismicPageDataBodyPrideCalendarItemsImageImageType"
	alt?: Maybe<Scalars["String"]>
	copyright?: Maybe<Scalars["String"]>
	dimensions?: Maybe<PrismicImageDimensionsType>
	/** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
	fixed?: Maybe<ImgixFixed>
	/** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
	fluid?: Maybe<ImgixFluid>
	gatsbyImageData?: Maybe<Scalars["JSON"]>
	localFile?: Maybe<File>
	/** A plain imgix URL with the URL and params applied. */
	url?: Maybe<Scalars["String"]>
}

export type PrismicPageDataBodyPrideCalendarItemsImageImageTypeFixedArgs = {
	height?: InputMaybe<Scalars["Int"]>
	imgixParams?: InputMaybe<ImgixParamsInput>
	placeholderImgixParams?: InputMaybe<ImgixParamsInput>
	quality?: InputMaybe<Scalars["Int"]>
	width?: InputMaybe<Scalars["Int"]>
}

export type PrismicPageDataBodyPrideCalendarItemsImageImageTypeFluidArgs = {
	imgixParams?: InputMaybe<ImgixParamsInput>
	maxHeight?: InputMaybe<Scalars["Int"]>
	maxWidth?: InputMaybe<Scalars["Int"]>
	placeholderImgixParams?: InputMaybe<ImgixParamsInput>
	srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
}

export type PrismicPageDataBodyPrideCalendarItemsImageImageTypeGatsbyImageDataArgs =
	{
		aspectRatio?: InputMaybe<Scalars["Float"]>
		backgroundColor?: InputMaybe<Scalars["String"]>
		breakpoints?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
		height?: InputMaybe<Scalars["Int"]>
		imgixParams?: InputMaybe<ImgixParamsInput>
		layout?: InputMaybe<GatsbyImageLayout>
		outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>
		placeholder?: InputMaybe<ImgixPlaceholder>
		placeholderImgixParams?: InputMaybe<ImgixParamsInput>
		sizes?: InputMaybe<Scalars["String"]>
		srcSetMaxWidth?: InputMaybe<Scalars["Int"]>
		srcSetMinWidth?: InputMaybe<Scalars["Int"]>
		width?: InputMaybe<Scalars["Int"]>
		widthTolerance?: InputMaybe<Scalars["Float"]>
	}

export type PrismicPageDataBodyPrideCalendarItemsImageImageTypeUrlArgs = {
	imgixParams?: InputMaybe<ImgixParamsInput>
}

export type PrismicPageDataBodyPrideCalendarPrimary = {
	__typename?: "PrismicPageDataBodyPrideCalendarPrimary"
	color?: Maybe<Scalars["String"]>
	text?: Maybe<PrismicStructuredTextType>
}

export type PrismicPageDataBodyRichText = PrismicSliceType & {
	__typename?: "PrismicPageDataBodyRichText"
	id: Scalars["ID"]
	primary: PrismicPageDataBodyRichTextPrimary
	slice_label?: Maybe<Scalars["String"]>
	slice_type: Scalars["String"]
}

export type PrismicPageDataBodyRichTextPrimary = {
	__typename?: "PrismicPageDataBodyRichTextPrimary"
	button_link?: Maybe<PrismicLinkType>
	button_text?: Maybe<Scalars["String"]>
	color?: Maybe<Scalars["String"]>
	text?: Maybe<PrismicStructuredTextType>
}

export type PrismicPageDataBodySlicesType =
	| PrismicPageDataBodyAnchor
	| PrismicPageDataBodyCallToAction
	| PrismicPageDataBodyCallToActionCard
	| PrismicPageDataBodyFeaturedPeople
	| PrismicPageDataBodyFilterableEvents
	| PrismicPageDataBodyGradientText
	| PrismicPageDataBodyImageCallToAction
	| PrismicPageDataBodyIntroduction
	| PrismicPageDataBodyNewsletterForm
	| PrismicPageDataBodyPrideCalendar
	| PrismicPageDataBodyRichText
	| PrismicPageDataBodySponsors
	| PrismicPageDataBodyTextAndVideo
	| PrismicPageDataBodyTwoColumnText
	| PrismicPageDataBodyVideo
	| PrismicPageDataBodyVideoGallery
	| PrismicPageDataBodyVideoHero

export type PrismicPageDataBodySponsors = PrismicSliceType & {
	__typename?: "PrismicPageDataBodySponsors"
	id: Scalars["ID"]
	primary: PrismicPageDataBodySponsorsPrimary
	slice_label?: Maybe<Scalars["String"]>
	slice_type: Scalars["String"]
}

export type PrismicPageDataBodySponsorsPrimary = {
	__typename?: "PrismicPageDataBodySponsorsPrimary"
	heading?: Maybe<PrismicStructuredTextType>
	sponsor_list?: Maybe<PrismicLinkType>
	subheading?: Maybe<PrismicStructuredTextType>
}

export type PrismicPageDataBodyTextAndVideo = PrismicSliceType & {
	__typename?: "PrismicPageDataBodyTextAndVideo"
	id: Scalars["ID"]
	primary: PrismicPageDataBodyTextAndVideoPrimary
	slice_label?: Maybe<Scalars["String"]>
	slice_type: Scalars["String"]
}

export type PrismicPageDataBodyTextAndVideoPrimary = {
	__typename?: "PrismicPageDataBodyTextAndVideoPrimary"
	color?: Maybe<Scalars["String"]>
	text?: Maybe<PrismicStructuredTextType>
	thumbnail_side?: Maybe<Scalars["String"]>
	video_thumbnail?: Maybe<PrismicPageDataBodyTextAndVideoPrimaryVideoThumbnailImageType>
	video_url?: Maybe<Scalars["String"]>
}

export type PrismicPageDataBodyTextAndVideoPrimaryVideoThumbnailImageType = {
	__typename?: "PrismicPageDataBodyTextAndVideoPrimaryVideoThumbnailImageType"
	alt?: Maybe<Scalars["String"]>
	copyright?: Maybe<Scalars["String"]>
	dimensions?: Maybe<PrismicImageDimensionsType>
	/** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
	fixed?: Maybe<ImgixFixed>
	/** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
	fluid?: Maybe<ImgixFluid>
	gatsbyImageData?: Maybe<Scalars["JSON"]>
	localFile?: Maybe<File>
	/** A plain imgix URL with the URL and params applied. */
	url?: Maybe<Scalars["String"]>
}

export type PrismicPageDataBodyTextAndVideoPrimaryVideoThumbnailImageTypeFixedArgs =
	{
		height?: InputMaybe<Scalars["Int"]>
		imgixParams?: InputMaybe<ImgixParamsInput>
		placeholderImgixParams?: InputMaybe<ImgixParamsInput>
		quality?: InputMaybe<Scalars["Int"]>
		width?: InputMaybe<Scalars["Int"]>
	}

export type PrismicPageDataBodyTextAndVideoPrimaryVideoThumbnailImageTypeFluidArgs =
	{
		imgixParams?: InputMaybe<ImgixParamsInput>
		maxHeight?: InputMaybe<Scalars["Int"]>
		maxWidth?: InputMaybe<Scalars["Int"]>
		placeholderImgixParams?: InputMaybe<ImgixParamsInput>
		srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
	}

export type PrismicPageDataBodyTextAndVideoPrimaryVideoThumbnailImageTypeGatsbyImageDataArgs =
	{
		aspectRatio?: InputMaybe<Scalars["Float"]>
		backgroundColor?: InputMaybe<Scalars["String"]>
		breakpoints?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
		height?: InputMaybe<Scalars["Int"]>
		imgixParams?: InputMaybe<ImgixParamsInput>
		layout?: InputMaybe<GatsbyImageLayout>
		outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>
		placeholder?: InputMaybe<ImgixPlaceholder>
		placeholderImgixParams?: InputMaybe<ImgixParamsInput>
		sizes?: InputMaybe<Scalars["String"]>
		srcSetMaxWidth?: InputMaybe<Scalars["Int"]>
		srcSetMinWidth?: InputMaybe<Scalars["Int"]>
		width?: InputMaybe<Scalars["Int"]>
		widthTolerance?: InputMaybe<Scalars["Float"]>
	}

export type PrismicPageDataBodyTextAndVideoPrimaryVideoThumbnailImageTypeUrlArgs =
	{
		imgixParams?: InputMaybe<ImgixParamsInput>
	}

export type PrismicPageDataBodyTwoColumnText = PrismicSliceType & {
	__typename?: "PrismicPageDataBodyTwoColumnText"
	id: Scalars["ID"]
	primary: PrismicPageDataBodyTwoColumnTextPrimary
	slice_label?: Maybe<Scalars["String"]>
	slice_type: Scalars["String"]
}

export type PrismicPageDataBodyTwoColumnTextPrimary = {
	__typename?: "PrismicPageDataBodyTwoColumnTextPrimary"
	button_link?: Maybe<PrismicLinkType>
	button_side?: Maybe<Scalars["String"]>
	button_text?: Maybe<Scalars["String"]>
	color?: Maybe<Scalars["String"]>
	left_text?: Maybe<PrismicStructuredTextType>
	right_text?: Maybe<PrismicStructuredTextType>
}

export type PrismicPageDataBodyVideo = PrismicSliceType & {
	__typename?: "PrismicPageDataBodyVideo"
	id: Scalars["ID"]
	primary: PrismicPageDataBodyVideoPrimary
	slice_label?: Maybe<Scalars["String"]>
	slice_type: Scalars["String"]
}

export type PrismicPageDataBodyVideoGallery = PrismicSliceType & {
	__typename?: "PrismicPageDataBodyVideoGallery"
	id: Scalars["ID"]
	primary: PrismicPageDataBodyVideoGalleryPrimary
	slice_label?: Maybe<Scalars["String"]>
	slice_type: Scalars["String"]
}

export type PrismicPageDataBodyVideoGalleryPrimary = {
	__typename?: "PrismicPageDataBodyVideoGalleryPrimary"
	color?: Maybe<Scalars["String"]>
	text?: Maybe<PrismicStructuredTextType>
	video_submission_type?: Maybe<PrismicLinkType>
}

export type PrismicPageDataBodyVideoHero = PrismicSliceType & {
	__typename?: "PrismicPageDataBodyVideoHero"
	id: Scalars["ID"]
	primary: PrismicPageDataBodyVideoHeroPrimary
	slice_label?: Maybe<Scalars["String"]>
	slice_type: Scalars["String"]
}

export type PrismicPageDataBodyVideoHeroPrimary = {
	__typename?: "PrismicPageDataBodyVideoHeroPrimary"
	text?: Maybe<PrismicStructuredTextType>
	video_thumbnail?: Maybe<PrismicPageDataBodyVideoHeroPrimaryVideoThumbnailImageType>
	video_url?: Maybe<Scalars["String"]>
}

export type PrismicPageDataBodyVideoHeroPrimaryVideoThumbnailImageType = {
	__typename?: "PrismicPageDataBodyVideoHeroPrimaryVideoThumbnailImageType"
	alt?: Maybe<Scalars["String"]>
	copyright?: Maybe<Scalars["String"]>
	dimensions?: Maybe<PrismicImageDimensionsType>
	/** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
	fixed?: Maybe<ImgixFixed>
	/** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
	fluid?: Maybe<ImgixFluid>
	gatsbyImageData?: Maybe<Scalars["JSON"]>
	localFile?: Maybe<File>
	/** A plain imgix URL with the URL and params applied. */
	url?: Maybe<Scalars["String"]>
}

export type PrismicPageDataBodyVideoHeroPrimaryVideoThumbnailImageTypeFixedArgs =
	{
		height?: InputMaybe<Scalars["Int"]>
		imgixParams?: InputMaybe<ImgixParamsInput>
		placeholderImgixParams?: InputMaybe<ImgixParamsInput>
		quality?: InputMaybe<Scalars["Int"]>
		width?: InputMaybe<Scalars["Int"]>
	}

export type PrismicPageDataBodyVideoHeroPrimaryVideoThumbnailImageTypeFluidArgs =
	{
		imgixParams?: InputMaybe<ImgixParamsInput>
		maxHeight?: InputMaybe<Scalars["Int"]>
		maxWidth?: InputMaybe<Scalars["Int"]>
		placeholderImgixParams?: InputMaybe<ImgixParamsInput>
		srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
	}

export type PrismicPageDataBodyVideoHeroPrimaryVideoThumbnailImageTypeGatsbyImageDataArgs =
	{
		aspectRatio?: InputMaybe<Scalars["Float"]>
		backgroundColor?: InputMaybe<Scalars["String"]>
		breakpoints?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
		height?: InputMaybe<Scalars["Int"]>
		imgixParams?: InputMaybe<ImgixParamsInput>
		layout?: InputMaybe<GatsbyImageLayout>
		outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>
		placeholder?: InputMaybe<ImgixPlaceholder>
		placeholderImgixParams?: InputMaybe<ImgixParamsInput>
		sizes?: InputMaybe<Scalars["String"]>
		srcSetMaxWidth?: InputMaybe<Scalars["Int"]>
		srcSetMinWidth?: InputMaybe<Scalars["Int"]>
		width?: InputMaybe<Scalars["Int"]>
		widthTolerance?: InputMaybe<Scalars["Float"]>
	}

export type PrismicPageDataBodyVideoHeroPrimaryVideoThumbnailImageTypeUrlArgs =
	{
		imgixParams?: InputMaybe<ImgixParamsInput>
	}

export type PrismicPageDataBodyVideoPrimary = {
	__typename?: "PrismicPageDataBodyVideoPrimary"
	thumbnail?: Maybe<PrismicPageDataBodyVideoPrimaryThumbnailImageType>
	video_url?: Maybe<Scalars["String"]>
}

export type PrismicPageDataBodyVideoPrimaryThumbnailImageType = {
	__typename?: "PrismicPageDataBodyVideoPrimaryThumbnailImageType"
	alt?: Maybe<Scalars["String"]>
	copyright?: Maybe<Scalars["String"]>
	dimensions?: Maybe<PrismicImageDimensionsType>
	/** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
	fixed?: Maybe<ImgixFixed>
	/** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
	fluid?: Maybe<ImgixFluid>
	gatsbyImageData?: Maybe<Scalars["JSON"]>
	localFile?: Maybe<File>
	/** A plain imgix URL with the URL and params applied. */
	url?: Maybe<Scalars["String"]>
}

export type PrismicPageDataBodyVideoPrimaryThumbnailImageTypeFixedArgs = {
	height?: InputMaybe<Scalars["Int"]>
	imgixParams?: InputMaybe<ImgixParamsInput>
	placeholderImgixParams?: InputMaybe<ImgixParamsInput>
	quality?: InputMaybe<Scalars["Int"]>
	width?: InputMaybe<Scalars["Int"]>
}

export type PrismicPageDataBodyVideoPrimaryThumbnailImageTypeFluidArgs = {
	imgixParams?: InputMaybe<ImgixParamsInput>
	maxHeight?: InputMaybe<Scalars["Int"]>
	maxWidth?: InputMaybe<Scalars["Int"]>
	placeholderImgixParams?: InputMaybe<ImgixParamsInput>
	srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
}

export type PrismicPageDataBodyVideoPrimaryThumbnailImageTypeGatsbyImageDataArgs =
	{
		aspectRatio?: InputMaybe<Scalars["Float"]>
		backgroundColor?: InputMaybe<Scalars["String"]>
		breakpoints?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
		height?: InputMaybe<Scalars["Int"]>
		imgixParams?: InputMaybe<ImgixParamsInput>
		layout?: InputMaybe<GatsbyImageLayout>
		outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>
		placeholder?: InputMaybe<ImgixPlaceholder>
		placeholderImgixParams?: InputMaybe<ImgixParamsInput>
		sizes?: InputMaybe<Scalars["String"]>
		srcSetMaxWidth?: InputMaybe<Scalars["Int"]>
		srcSetMinWidth?: InputMaybe<Scalars["Int"]>
		width?: InputMaybe<Scalars["Int"]>
		widthTolerance?: InputMaybe<Scalars["Float"]>
	}

export type PrismicPageDataBodyVideoPrimaryThumbnailImageTypeUrlArgs = {
	imgixParams?: InputMaybe<ImgixParamsInput>
}

export type PrismicPageDataType = {
	__typename?: "PrismicPageDataType"
	body: Array<PrismicPageDataBodySlicesType>
	meta_description?: Maybe<Scalars["String"]>
	meta_title?: Maybe<Scalars["String"]>
	redirect_is_permanent?: Maybe<Scalars["Boolean"]>
	redirect_to?: Maybe<PrismicLinkType>
	title?: Maybe<PrismicStructuredTextType>
}

export type PrismicPageDataTypeFilterInput = {
	meta_description?: InputMaybe<StringQueryOperatorInput>
	meta_title?: InputMaybe<StringQueryOperatorInput>
	redirect_is_permanent?: InputMaybe<BooleanQueryOperatorInput>
	redirect_to?: InputMaybe<PrismicLinkTypeFilterInput>
	title?: InputMaybe<PrismicStructuredTextTypeFilterInput>
}

export type PrismicPageEdge = {
	__typename?: "PrismicPageEdge"
	next?: Maybe<PrismicPage>
	node: PrismicPage
	previous?: Maybe<PrismicPage>
}

export enum PrismicPageFieldsEnum {
	Previewable = "_previewable",
	AlternateLanguages = "alternate_languages",
	AlternateLanguagesId = "alternate_languages___id",
	AlternateLanguagesLang = "alternate_languages___lang",
	AlternateLanguagesRaw = "alternate_languages___raw",
	AlternateLanguagesType = "alternate_languages___type",
	AlternateLanguagesUid = "alternate_languages___uid",
	Children = "children",
	ChildrenChildren = "children___children",
	ChildrenChildrenChildren = "children___children___children",
	ChildrenChildrenChildrenChildren = "children___children___children___children",
	ChildrenChildrenChildrenId = "children___children___children___id",
	ChildrenChildrenId = "children___children___id",
	ChildrenChildrenInternalContent = "children___children___internal___content",
	ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
	ChildrenChildrenInternalContentFilePath = "children___children___internal___contentFilePath",
	ChildrenChildrenInternalDescription = "children___children___internal___description",
	ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
	ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
	ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
	ChildrenChildrenInternalOwner = "children___children___internal___owner",
	ChildrenChildrenInternalType = "children___children___internal___type",
	ChildrenChildrenParentChildren = "children___children___parent___children",
	ChildrenChildrenParentId = "children___children___parent___id",
	ChildrenId = "children___id",
	ChildrenInternalContent = "children___internal___content",
	ChildrenInternalContentDigest = "children___internal___contentDigest",
	ChildrenInternalContentFilePath = "children___internal___contentFilePath",
	ChildrenInternalDescription = "children___internal___description",
	ChildrenInternalFieldOwners = "children___internal___fieldOwners",
	ChildrenInternalIgnoreType = "children___internal___ignoreType",
	ChildrenInternalMediaType = "children___internal___mediaType",
	ChildrenInternalOwner = "children___internal___owner",
	ChildrenInternalType = "children___internal___type",
	ChildrenParentChildren = "children___parent___children",
	ChildrenParentChildrenChildren = "children___parent___children___children",
	ChildrenParentChildrenId = "children___parent___children___id",
	ChildrenParentId = "children___parent___id",
	ChildrenParentInternalContent = "children___parent___internal___content",
	ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
	ChildrenParentInternalContentFilePath = "children___parent___internal___contentFilePath",
	ChildrenParentInternalDescription = "children___parent___internal___description",
	ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
	ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
	ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
	ChildrenParentInternalOwner = "children___parent___internal___owner",
	ChildrenParentInternalType = "children___parent___internal___type",
	ChildrenParentParentChildren = "children___parent___parent___children",
	ChildrenParentParentId = "children___parent___parent___id",
	DataRaw = "dataRaw",
	DataMetaDescription = "data___meta_description",
	DataMetaTitle = "data___meta_title",
	DataRedirectIsPermanent = "data___redirect_is_permanent",
	DataRedirectToId = "data___redirect_to___id",
	DataRedirectToIsBroken = "data___redirect_to___isBroken",
	DataRedirectToLang = "data___redirect_to___lang",
	DataRedirectToLinkType = "data___redirect_to___link_type",
	DataRedirectToLocalFileAbsolutePath = "data___redirect_to___localFile___absolutePath",
	DataRedirectToLocalFileAccessTime = "data___redirect_to___localFile___accessTime",
	DataRedirectToLocalFileAtime = "data___redirect_to___localFile___atime",
	DataRedirectToLocalFileAtimeMs = "data___redirect_to___localFile___atimeMs",
	DataRedirectToLocalFileBase = "data___redirect_to___localFile___base",
	DataRedirectToLocalFileBirthTime = "data___redirect_to___localFile___birthTime",
	DataRedirectToLocalFileBirthtime = "data___redirect_to___localFile___birthtime",
	DataRedirectToLocalFileBirthtimeMs = "data___redirect_to___localFile___birthtimeMs",
	DataRedirectToLocalFileChangeTime = "data___redirect_to___localFile___changeTime",
	DataRedirectToLocalFileChildren = "data___redirect_to___localFile___children",
	DataRedirectToLocalFileCtime = "data___redirect_to___localFile___ctime",
	DataRedirectToLocalFileCtimeMs = "data___redirect_to___localFile___ctimeMs",
	DataRedirectToLocalFileDev = "data___redirect_to___localFile___dev",
	DataRedirectToLocalFileDir = "data___redirect_to___localFile___dir",
	DataRedirectToLocalFileExt = "data___redirect_to___localFile___ext",
	DataRedirectToLocalFileExtension = "data___redirect_to___localFile___extension",
	DataRedirectToLocalFileGid = "data___redirect_to___localFile___gid",
	DataRedirectToLocalFileId = "data___redirect_to___localFile___id",
	DataRedirectToLocalFileIno = "data___redirect_to___localFile___ino",
	DataRedirectToLocalFileMode = "data___redirect_to___localFile___mode",
	DataRedirectToLocalFileModifiedTime = "data___redirect_to___localFile___modifiedTime",
	DataRedirectToLocalFileMtime = "data___redirect_to___localFile___mtime",
	DataRedirectToLocalFileMtimeMs = "data___redirect_to___localFile___mtimeMs",
	DataRedirectToLocalFileName = "data___redirect_to___localFile___name",
	DataRedirectToLocalFileNlink = "data___redirect_to___localFile___nlink",
	DataRedirectToLocalFilePrettySize = "data___redirect_to___localFile___prettySize",
	DataRedirectToLocalFileRdev = "data___redirect_to___localFile___rdev",
	DataRedirectToLocalFileRelativeDirectory = "data___redirect_to___localFile___relativeDirectory",
	DataRedirectToLocalFileRelativePath = "data___redirect_to___localFile___relativePath",
	DataRedirectToLocalFileRoot = "data___redirect_to___localFile___root",
	DataRedirectToLocalFileSize = "data___redirect_to___localFile___size",
	DataRedirectToLocalFileSourceInstanceName = "data___redirect_to___localFile___sourceInstanceName",
	DataRedirectToLocalFileUid = "data___redirect_to___localFile___uid",
	DataRedirectToRaw = "data___redirect_to___raw",
	DataRedirectToSize = "data___redirect_to___size",
	DataRedirectToSlug = "data___redirect_to___slug",
	DataRedirectToTags = "data___redirect_to___tags",
	DataRedirectToTarget = "data___redirect_to___target",
	DataRedirectToType = "data___redirect_to___type",
	DataRedirectToUid = "data___redirect_to___uid",
	DataRedirectToUrl = "data___redirect_to___url",
	DataTitleHtml = "data___title___html",
	DataTitleRaw = "data___title___raw",
	DataTitleRichText = "data___title___richText",
	DataTitleText = "data___title___text",
	FirstPublicationDate = "first_publication_date",
	Href = "href",
	Id = "id",
	InternalContent = "internal___content",
	InternalContentDigest = "internal___contentDigest",
	InternalContentFilePath = "internal___contentFilePath",
	InternalDescription = "internal___description",
	InternalFieldOwners = "internal___fieldOwners",
	InternalIgnoreType = "internal___ignoreType",
	InternalMediaType = "internal___mediaType",
	InternalOwner = "internal___owner",
	InternalType = "internal___type",
	Lang = "lang",
	LastPublicationDate = "last_publication_date",
	ParentChildren = "parent___children",
	ParentChildrenChildren = "parent___children___children",
	ParentChildrenChildrenChildren = "parent___children___children___children",
	ParentChildrenChildrenId = "parent___children___children___id",
	ParentChildrenId = "parent___children___id",
	ParentChildrenInternalContent = "parent___children___internal___content",
	ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
	ParentChildrenInternalContentFilePath = "parent___children___internal___contentFilePath",
	ParentChildrenInternalDescription = "parent___children___internal___description",
	ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
	ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
	ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
	ParentChildrenInternalOwner = "parent___children___internal___owner",
	ParentChildrenInternalType = "parent___children___internal___type",
	ParentChildrenParentChildren = "parent___children___parent___children",
	ParentChildrenParentId = "parent___children___parent___id",
	ParentId = "parent___id",
	ParentInternalContent = "parent___internal___content",
	ParentInternalContentDigest = "parent___internal___contentDigest",
	ParentInternalContentFilePath = "parent___internal___contentFilePath",
	ParentInternalDescription = "parent___internal___description",
	ParentInternalFieldOwners = "parent___internal___fieldOwners",
	ParentInternalIgnoreType = "parent___internal___ignoreType",
	ParentInternalMediaType = "parent___internal___mediaType",
	ParentInternalOwner = "parent___internal___owner",
	ParentInternalType = "parent___internal___type",
	ParentParentChildren = "parent___parent___children",
	ParentParentChildrenChildren = "parent___parent___children___children",
	ParentParentChildrenId = "parent___parent___children___id",
	ParentParentId = "parent___parent___id",
	ParentParentInternalContent = "parent___parent___internal___content",
	ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
	ParentParentInternalContentFilePath = "parent___parent___internal___contentFilePath",
	ParentParentInternalDescription = "parent___parent___internal___description",
	ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
	ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
	ParentParentInternalMediaType = "parent___parent___internal___mediaType",
	ParentParentInternalOwner = "parent___parent___internal___owner",
	ParentParentInternalType = "parent___parent___internal___type",
	ParentParentParentChildren = "parent___parent___parent___children",
	ParentParentParentId = "parent___parent___parent___id",
	PrismicId = "prismicId",
	Tags = "tags",
	Type = "type",
	Uid = "uid",
	Url = "url",
}

export type PrismicPageFilterInput = {
	_previewable?: InputMaybe<IdQueryOperatorInput>
	alternate_languages?: InputMaybe<PrismicAlternateLanguageTypeFilterListInput>
	children?: InputMaybe<NodeFilterListInput>
	data?: InputMaybe<PrismicPageDataTypeFilterInput>
	dataRaw?: InputMaybe<JsonQueryOperatorInput>
	first_publication_date?: InputMaybe<DateQueryOperatorInput>
	href?: InputMaybe<StringQueryOperatorInput>
	id?: InputMaybe<StringQueryOperatorInput>
	internal?: InputMaybe<InternalFilterInput>
	lang?: InputMaybe<StringQueryOperatorInput>
	last_publication_date?: InputMaybe<DateQueryOperatorInput>
	parent?: InputMaybe<NodeFilterInput>
	prismicId?: InputMaybe<IdQueryOperatorInput>
	tags?: InputMaybe<StringQueryOperatorInput>
	type?: InputMaybe<StringQueryOperatorInput>
	uid?: InputMaybe<StringQueryOperatorInput>
	url?: InputMaybe<StringQueryOperatorInput>
}

export type PrismicPageGroupConnection = {
	__typename?: "PrismicPageGroupConnection"
	distinct: Array<Scalars["String"]>
	edges: Array<PrismicPageEdge>
	field: Scalars["String"]
	fieldValue?: Maybe<Scalars["String"]>
	group: Array<PrismicPageGroupConnection>
	max?: Maybe<Scalars["Float"]>
	min?: Maybe<Scalars["Float"]>
	nodes: Array<PrismicPage>
	pageInfo: PageInfo
	sum?: Maybe<Scalars["Float"]>
	totalCount: Scalars["Int"]
}

export type PrismicPageGroupConnectionDistinctArgs = {
	field: PrismicPageFieldsEnum
}

export type PrismicPageGroupConnectionGroupArgs = {
	field: PrismicPageFieldsEnum
	limit?: InputMaybe<Scalars["Int"]>
	skip?: InputMaybe<Scalars["Int"]>
}

export type PrismicPageGroupConnectionMaxArgs = {
	field: PrismicPageFieldsEnum
}

export type PrismicPageGroupConnectionMinArgs = {
	field: PrismicPageFieldsEnum
}

export type PrismicPageGroupConnectionSumArgs = {
	field: PrismicPageFieldsEnum
}

export type PrismicPageSortInput = {
	fields?: InputMaybe<Array<InputMaybe<PrismicPageFieldsEnum>>>
	order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type PrismicSettings = Node & {
	__typename?: "PrismicSettings"
	_previewable: Scalars["ID"]
	alternate_languages: Array<PrismicAlternateLanguageType>
	children: Array<Node>
	data: PrismicSettingsDataType
	dataRaw: Scalars["JSON"]
	first_publication_date: Scalars["Date"]
	href: Scalars["String"]
	id: Scalars["ID"]
	internal: Internal
	lang: Scalars["String"]
	last_publication_date: Scalars["Date"]
	parent?: Maybe<Node>
	prismicId: Scalars["ID"]
	tags: Array<Scalars["String"]>
	type: Scalars["String"]
	url?: Maybe<Scalars["String"]>
}

export type PrismicSettingsFirst_Publication_DateArgs = {
	difference?: InputMaybe<Scalars["String"]>
	formatString?: InputMaybe<Scalars["String"]>
	fromNow?: InputMaybe<Scalars["Boolean"]>
	locale?: InputMaybe<Scalars["String"]>
}

export type PrismicSettingsLast_Publication_DateArgs = {
	difference?: InputMaybe<Scalars["String"]>
	formatString?: InputMaybe<Scalars["String"]>
	fromNow?: InputMaybe<Scalars["Boolean"]>
	locale?: InputMaybe<Scalars["String"]>
}

export type PrismicSettingsConnection = {
	__typename?: "PrismicSettingsConnection"
	distinct: Array<Scalars["String"]>
	edges: Array<PrismicSettingsEdge>
	group: Array<PrismicSettingsGroupConnection>
	max?: Maybe<Scalars["Float"]>
	min?: Maybe<Scalars["Float"]>
	nodes: Array<PrismicSettings>
	pageInfo: PageInfo
	sum?: Maybe<Scalars["Float"]>
	totalCount: Scalars["Int"]
}

export type PrismicSettingsConnectionDistinctArgs = {
	field: PrismicSettingsFieldsEnum
}

export type PrismicSettingsConnectionGroupArgs = {
	field: PrismicSettingsFieldsEnum
	limit?: InputMaybe<Scalars["Int"]>
	skip?: InputMaybe<Scalars["Int"]>
}

export type PrismicSettingsConnectionMaxArgs = {
	field: PrismicSettingsFieldsEnum
}

export type PrismicSettingsConnectionMinArgs = {
	field: PrismicSettingsFieldsEnum
}

export type PrismicSettingsConnectionSumArgs = {
	field: PrismicSettingsFieldsEnum
}

export type PrismicSettingsDataOpenGraphImageImageType = {
	__typename?: "PrismicSettingsDataOpenGraphImageImageType"
	alt?: Maybe<Scalars["String"]>
	copyright?: Maybe<Scalars["String"]>
	dimensions?: Maybe<PrismicImageDimensionsType>
	/** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
	fixed?: Maybe<ImgixFixed>
	/** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
	fluid?: Maybe<ImgixFluid>
	gatsbyImageData?: Maybe<Scalars["JSON"]>
	localFile?: Maybe<File>
	/** A plain imgix URL with the URL and params applied. */
	url?: Maybe<Scalars["String"]>
}

export type PrismicSettingsDataOpenGraphImageImageTypeFixedArgs = {
	height?: InputMaybe<Scalars["Int"]>
	imgixParams?: InputMaybe<ImgixParamsInput>
	placeholderImgixParams?: InputMaybe<ImgixParamsInput>
	quality?: InputMaybe<Scalars["Int"]>
	width?: InputMaybe<Scalars["Int"]>
}

export type PrismicSettingsDataOpenGraphImageImageTypeFluidArgs = {
	imgixParams?: InputMaybe<ImgixParamsInput>
	maxHeight?: InputMaybe<Scalars["Int"]>
	maxWidth?: InputMaybe<Scalars["Int"]>
	placeholderImgixParams?: InputMaybe<ImgixParamsInput>
	srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
}

export type PrismicSettingsDataOpenGraphImageImageTypeGatsbyImageDataArgs = {
	aspectRatio?: InputMaybe<Scalars["Float"]>
	backgroundColor?: InputMaybe<Scalars["String"]>
	breakpoints?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
	height?: InputMaybe<Scalars["Int"]>
	imgixParams?: InputMaybe<ImgixParamsInput>
	layout?: InputMaybe<GatsbyImageLayout>
	outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>
	placeholder?: InputMaybe<ImgixPlaceholder>
	placeholderImgixParams?: InputMaybe<ImgixParamsInput>
	sizes?: InputMaybe<Scalars["String"]>
	srcSetMaxWidth?: InputMaybe<Scalars["Int"]>
	srcSetMinWidth?: InputMaybe<Scalars["Int"]>
	width?: InputMaybe<Scalars["Int"]>
	widthTolerance?: InputMaybe<Scalars["Float"]>
}

export type PrismicSettingsDataOpenGraphImageImageTypeUrlArgs = {
	imgixParams?: InputMaybe<ImgixParamsInput>
}

export type PrismicSettingsDataOpenGraphImageImageTypeFilterInput = {
	alt?: InputMaybe<StringQueryOperatorInput>
	copyright?: InputMaybe<StringQueryOperatorInput>
	dimensions?: InputMaybe<PrismicImageDimensionsTypeFilterInput>
	fixed?: InputMaybe<ImgixFixedFilterInput>
	fluid?: InputMaybe<ImgixFluidFilterInput>
	gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>
	localFile?: InputMaybe<FileFilterInput>
	url?: InputMaybe<StringQueryOperatorInput>
}

export type PrismicSettingsDataRedirects = {
	__typename?: "PrismicSettingsDataRedirects"
	from_path?: Maybe<Scalars["String"]>
	is_permanent?: Maybe<Scalars["Boolean"]>
	to_path?: Maybe<Scalars["String"]>
}

export type PrismicSettingsDataRedirectsFilterInput = {
	from_path?: InputMaybe<StringQueryOperatorInput>
	is_permanent?: InputMaybe<BooleanQueryOperatorInput>
	to_path?: InputMaybe<StringQueryOperatorInput>
}

export type PrismicSettingsDataRedirectsFilterListInput = {
	elemMatch?: InputMaybe<PrismicSettingsDataRedirectsFilterInput>
}

export type PrismicSettingsDataTwitterCardImageImageType = {
	__typename?: "PrismicSettingsDataTwitterCardImageImageType"
	alt?: Maybe<Scalars["String"]>
	copyright?: Maybe<Scalars["String"]>
	dimensions?: Maybe<PrismicImageDimensionsType>
	/** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
	fixed?: Maybe<ImgixFixed>
	/** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
	fluid?: Maybe<ImgixFluid>
	gatsbyImageData?: Maybe<Scalars["JSON"]>
	localFile?: Maybe<File>
	/** A plain imgix URL with the URL and params applied. */
	url?: Maybe<Scalars["String"]>
}

export type PrismicSettingsDataTwitterCardImageImageTypeFixedArgs = {
	height?: InputMaybe<Scalars["Int"]>
	imgixParams?: InputMaybe<ImgixParamsInput>
	placeholderImgixParams?: InputMaybe<ImgixParamsInput>
	quality?: InputMaybe<Scalars["Int"]>
	width?: InputMaybe<Scalars["Int"]>
}

export type PrismicSettingsDataTwitterCardImageImageTypeFluidArgs = {
	imgixParams?: InputMaybe<ImgixParamsInput>
	maxHeight?: InputMaybe<Scalars["Int"]>
	maxWidth?: InputMaybe<Scalars["Int"]>
	placeholderImgixParams?: InputMaybe<ImgixParamsInput>
	srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
}

export type PrismicSettingsDataTwitterCardImageImageTypeGatsbyImageDataArgs = {
	aspectRatio?: InputMaybe<Scalars["Float"]>
	backgroundColor?: InputMaybe<Scalars["String"]>
	breakpoints?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
	height?: InputMaybe<Scalars["Int"]>
	imgixParams?: InputMaybe<ImgixParamsInput>
	layout?: InputMaybe<GatsbyImageLayout>
	outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>
	placeholder?: InputMaybe<ImgixPlaceholder>
	placeholderImgixParams?: InputMaybe<ImgixParamsInput>
	sizes?: InputMaybe<Scalars["String"]>
	srcSetMaxWidth?: InputMaybe<Scalars["Int"]>
	srcSetMinWidth?: InputMaybe<Scalars["Int"]>
	width?: InputMaybe<Scalars["Int"]>
	widthTolerance?: InputMaybe<Scalars["Float"]>
}

export type PrismicSettingsDataTwitterCardImageImageTypeUrlArgs = {
	imgixParams?: InputMaybe<ImgixParamsInput>
}

export type PrismicSettingsDataTwitterCardImageImageTypeFilterInput = {
	alt?: InputMaybe<StringQueryOperatorInput>
	copyright?: InputMaybe<StringQueryOperatorInput>
	dimensions?: InputMaybe<PrismicImageDimensionsTypeFilterInput>
	fixed?: InputMaybe<ImgixFixedFilterInput>
	fluid?: InputMaybe<ImgixFluidFilterInput>
	gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>
	localFile?: InputMaybe<FileFilterInput>
	url?: InputMaybe<StringQueryOperatorInput>
}

export type PrismicSettingsDataType = {
	__typename?: "PrismicSettingsDataType"
	enabled?: Maybe<Scalars["Boolean"]>
	facebook_url?: Maybe<Scalars["String"]>
	footer_logo_url?: Maybe<Scalars["String"]>
	instagram_url?: Maybe<Scalars["String"]>
	open_graph_image?: Maybe<PrismicSettingsDataOpenGraphImageImageType>
	redirects?: Maybe<Array<Maybe<PrismicSettingsDataRedirects>>>
	site_copyright?: Maybe<PrismicStructuredTextType>
	site_description?: Maybe<PrismicStructuredTextType>
	site_name?: Maybe<PrismicStructuredTextType>
	text?: Maybe<PrismicStructuredTextType>
	title?: Maybe<PrismicStructuredTextType>
	twitter_card_image?: Maybe<PrismicSettingsDataTwitterCardImageImageType>
	twitter_url?: Maybe<Scalars["String"]>
	twitter_username?: Maybe<Scalars["String"]>
	youtube_url?: Maybe<Scalars["String"]>
}

export type PrismicSettingsDataTypeFilterInput = {
	enabled?: InputMaybe<BooleanQueryOperatorInput>
	facebook_url?: InputMaybe<StringQueryOperatorInput>
	footer_logo_url?: InputMaybe<StringQueryOperatorInput>
	instagram_url?: InputMaybe<StringQueryOperatorInput>
	open_graph_image?: InputMaybe<PrismicSettingsDataOpenGraphImageImageTypeFilterInput>
	redirects?: InputMaybe<PrismicSettingsDataRedirectsFilterListInput>
	site_copyright?: InputMaybe<PrismicStructuredTextTypeFilterInput>
	site_description?: InputMaybe<PrismicStructuredTextTypeFilterInput>
	site_name?: InputMaybe<PrismicStructuredTextTypeFilterInput>
	text?: InputMaybe<PrismicStructuredTextTypeFilterInput>
	title?: InputMaybe<PrismicStructuredTextTypeFilterInput>
	twitter_card_image?: InputMaybe<PrismicSettingsDataTwitterCardImageImageTypeFilterInput>
	twitter_url?: InputMaybe<StringQueryOperatorInput>
	twitter_username?: InputMaybe<StringQueryOperatorInput>
	youtube_url?: InputMaybe<StringQueryOperatorInput>
}

export type PrismicSettingsEdge = {
	__typename?: "PrismicSettingsEdge"
	next?: Maybe<PrismicSettings>
	node: PrismicSettings
	previous?: Maybe<PrismicSettings>
}

export enum PrismicSettingsFieldsEnum {
	Previewable = "_previewable",
	AlternateLanguages = "alternate_languages",
	AlternateLanguagesId = "alternate_languages___id",
	AlternateLanguagesLang = "alternate_languages___lang",
	AlternateLanguagesRaw = "alternate_languages___raw",
	AlternateLanguagesType = "alternate_languages___type",
	AlternateLanguagesUid = "alternate_languages___uid",
	Children = "children",
	ChildrenChildren = "children___children",
	ChildrenChildrenChildren = "children___children___children",
	ChildrenChildrenChildrenChildren = "children___children___children___children",
	ChildrenChildrenChildrenId = "children___children___children___id",
	ChildrenChildrenId = "children___children___id",
	ChildrenChildrenInternalContent = "children___children___internal___content",
	ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
	ChildrenChildrenInternalContentFilePath = "children___children___internal___contentFilePath",
	ChildrenChildrenInternalDescription = "children___children___internal___description",
	ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
	ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
	ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
	ChildrenChildrenInternalOwner = "children___children___internal___owner",
	ChildrenChildrenInternalType = "children___children___internal___type",
	ChildrenChildrenParentChildren = "children___children___parent___children",
	ChildrenChildrenParentId = "children___children___parent___id",
	ChildrenId = "children___id",
	ChildrenInternalContent = "children___internal___content",
	ChildrenInternalContentDigest = "children___internal___contentDigest",
	ChildrenInternalContentFilePath = "children___internal___contentFilePath",
	ChildrenInternalDescription = "children___internal___description",
	ChildrenInternalFieldOwners = "children___internal___fieldOwners",
	ChildrenInternalIgnoreType = "children___internal___ignoreType",
	ChildrenInternalMediaType = "children___internal___mediaType",
	ChildrenInternalOwner = "children___internal___owner",
	ChildrenInternalType = "children___internal___type",
	ChildrenParentChildren = "children___parent___children",
	ChildrenParentChildrenChildren = "children___parent___children___children",
	ChildrenParentChildrenId = "children___parent___children___id",
	ChildrenParentId = "children___parent___id",
	ChildrenParentInternalContent = "children___parent___internal___content",
	ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
	ChildrenParentInternalContentFilePath = "children___parent___internal___contentFilePath",
	ChildrenParentInternalDescription = "children___parent___internal___description",
	ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
	ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
	ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
	ChildrenParentInternalOwner = "children___parent___internal___owner",
	ChildrenParentInternalType = "children___parent___internal___type",
	ChildrenParentParentChildren = "children___parent___parent___children",
	ChildrenParentParentId = "children___parent___parent___id",
	DataRaw = "dataRaw",
	DataEnabled = "data___enabled",
	DataFacebookUrl = "data___facebook_url",
	DataFooterLogoUrl = "data___footer_logo_url",
	DataInstagramUrl = "data___instagram_url",
	DataOpenGraphImageAlt = "data___open_graph_image___alt",
	DataOpenGraphImageCopyright = "data___open_graph_image___copyright",
	DataOpenGraphImageDimensionsHeight = "data___open_graph_image___dimensions___height",
	DataOpenGraphImageDimensionsWidth = "data___open_graph_image___dimensions___width",
	/** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
	DataOpenGraphImageFixedBase64 = "data___open_graph_image___fixed___base64",
	/** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
	DataOpenGraphImageFixedHeight = "data___open_graph_image___fixed___height",
	/** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
	DataOpenGraphImageFixedSizes = "data___open_graph_image___fixed___sizes",
	/** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
	DataOpenGraphImageFixedSrc = "data___open_graph_image___fixed___src",
	/** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
	DataOpenGraphImageFixedSrcSet = "data___open_graph_image___fixed___srcSet",
	/** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
	DataOpenGraphImageFixedSrcSetWebp = "data___open_graph_image___fixed___srcSetWebp",
	/** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
	DataOpenGraphImageFixedSrcWebp = "data___open_graph_image___fixed___srcWebp",
	/** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
	DataOpenGraphImageFixedWidth = "data___open_graph_image___fixed___width",
	/** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
	DataOpenGraphImageFluidAspectRatio = "data___open_graph_image___fluid___aspectRatio",
	/** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
	DataOpenGraphImageFluidBase64 = "data___open_graph_image___fluid___base64",
	/** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
	DataOpenGraphImageFluidSizes = "data___open_graph_image___fluid___sizes",
	/** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
	DataOpenGraphImageFluidSrc = "data___open_graph_image___fluid___src",
	/** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
	DataOpenGraphImageFluidSrcSet = "data___open_graph_image___fluid___srcSet",
	/** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
	DataOpenGraphImageFluidSrcSetWebp = "data___open_graph_image___fluid___srcSetWebp",
	/** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
	DataOpenGraphImageFluidSrcWebp = "data___open_graph_image___fluid___srcWebp",
	/** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
	DataOpenGraphImageGatsbyImageData = "data___open_graph_image___gatsbyImageData",
	DataOpenGraphImageLocalFileAbsolutePath = "data___open_graph_image___localFile___absolutePath",
	DataOpenGraphImageLocalFileAccessTime = "data___open_graph_image___localFile___accessTime",
	DataOpenGraphImageLocalFileAtime = "data___open_graph_image___localFile___atime",
	DataOpenGraphImageLocalFileAtimeMs = "data___open_graph_image___localFile___atimeMs",
	DataOpenGraphImageLocalFileBase = "data___open_graph_image___localFile___base",
	DataOpenGraphImageLocalFileBirthTime = "data___open_graph_image___localFile___birthTime",
	DataOpenGraphImageLocalFileBirthtime = "data___open_graph_image___localFile___birthtime",
	DataOpenGraphImageLocalFileBirthtimeMs = "data___open_graph_image___localFile___birthtimeMs",
	DataOpenGraphImageLocalFileChangeTime = "data___open_graph_image___localFile___changeTime",
	DataOpenGraphImageLocalFileChildren = "data___open_graph_image___localFile___children",
	DataOpenGraphImageLocalFileCtime = "data___open_graph_image___localFile___ctime",
	DataOpenGraphImageLocalFileCtimeMs = "data___open_graph_image___localFile___ctimeMs",
	DataOpenGraphImageLocalFileDev = "data___open_graph_image___localFile___dev",
	DataOpenGraphImageLocalFileDir = "data___open_graph_image___localFile___dir",
	DataOpenGraphImageLocalFileExt = "data___open_graph_image___localFile___ext",
	DataOpenGraphImageLocalFileExtension = "data___open_graph_image___localFile___extension",
	DataOpenGraphImageLocalFileGid = "data___open_graph_image___localFile___gid",
	DataOpenGraphImageLocalFileId = "data___open_graph_image___localFile___id",
	DataOpenGraphImageLocalFileIno = "data___open_graph_image___localFile___ino",
	DataOpenGraphImageLocalFileMode = "data___open_graph_image___localFile___mode",
	DataOpenGraphImageLocalFileModifiedTime = "data___open_graph_image___localFile___modifiedTime",
	DataOpenGraphImageLocalFileMtime = "data___open_graph_image___localFile___mtime",
	DataOpenGraphImageLocalFileMtimeMs = "data___open_graph_image___localFile___mtimeMs",
	DataOpenGraphImageLocalFileName = "data___open_graph_image___localFile___name",
	DataOpenGraphImageLocalFileNlink = "data___open_graph_image___localFile___nlink",
	DataOpenGraphImageLocalFilePrettySize = "data___open_graph_image___localFile___prettySize",
	DataOpenGraphImageLocalFileRdev = "data___open_graph_image___localFile___rdev",
	DataOpenGraphImageLocalFileRelativeDirectory = "data___open_graph_image___localFile___relativeDirectory",
	DataOpenGraphImageLocalFileRelativePath = "data___open_graph_image___localFile___relativePath",
	DataOpenGraphImageLocalFileRoot = "data___open_graph_image___localFile___root",
	DataOpenGraphImageLocalFileSize = "data___open_graph_image___localFile___size",
	DataOpenGraphImageLocalFileSourceInstanceName = "data___open_graph_image___localFile___sourceInstanceName",
	DataOpenGraphImageLocalFileUid = "data___open_graph_image___localFile___uid",
	/** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
	DataOpenGraphImageUrl = "data___open_graph_image___url",
	DataRedirects = "data___redirects",
	DataRedirectsFromPath = "data___redirects___from_path",
	DataRedirectsIsPermanent = "data___redirects___is_permanent",
	DataRedirectsToPath = "data___redirects___to_path",
	DataSiteCopyrightHtml = "data___site_copyright___html",
	DataSiteCopyrightRaw = "data___site_copyright___raw",
	DataSiteCopyrightRichText = "data___site_copyright___richText",
	DataSiteCopyrightText = "data___site_copyright___text",
	DataSiteDescriptionHtml = "data___site_description___html",
	DataSiteDescriptionRaw = "data___site_description___raw",
	DataSiteDescriptionRichText = "data___site_description___richText",
	DataSiteDescriptionText = "data___site_description___text",
	DataSiteNameHtml = "data___site_name___html",
	DataSiteNameRaw = "data___site_name___raw",
	DataSiteNameRichText = "data___site_name___richText",
	DataSiteNameText = "data___site_name___text",
	DataTextHtml = "data___text___html",
	DataTextRaw = "data___text___raw",
	DataTextRichText = "data___text___richText",
	DataTextText = "data___text___text",
	DataTitleHtml = "data___title___html",
	DataTitleRaw = "data___title___raw",
	DataTitleRichText = "data___title___richText",
	DataTitleText = "data___title___text",
	DataTwitterCardImageAlt = "data___twitter_card_image___alt",
	DataTwitterCardImageCopyright = "data___twitter_card_image___copyright",
	DataTwitterCardImageDimensionsHeight = "data___twitter_card_image___dimensions___height",
	DataTwitterCardImageDimensionsWidth = "data___twitter_card_image___dimensions___width",
	/** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
	DataTwitterCardImageFixedBase64 = "data___twitter_card_image___fixed___base64",
	/** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
	DataTwitterCardImageFixedHeight = "data___twitter_card_image___fixed___height",
	/** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
	DataTwitterCardImageFixedSizes = "data___twitter_card_image___fixed___sizes",
	/** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
	DataTwitterCardImageFixedSrc = "data___twitter_card_image___fixed___src",
	/** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
	DataTwitterCardImageFixedSrcSet = "data___twitter_card_image___fixed___srcSet",
	/** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
	DataTwitterCardImageFixedSrcSetWebp = "data___twitter_card_image___fixed___srcSetWebp",
	/** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
	DataTwitterCardImageFixedSrcWebp = "data___twitter_card_image___fixed___srcWebp",
	/** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
	DataTwitterCardImageFixedWidth = "data___twitter_card_image___fixed___width",
	/** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
	DataTwitterCardImageFluidAspectRatio = "data___twitter_card_image___fluid___aspectRatio",
	/** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
	DataTwitterCardImageFluidBase64 = "data___twitter_card_image___fluid___base64",
	/** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
	DataTwitterCardImageFluidSizes = "data___twitter_card_image___fluid___sizes",
	/** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
	DataTwitterCardImageFluidSrc = "data___twitter_card_image___fluid___src",
	/** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
	DataTwitterCardImageFluidSrcSet = "data___twitter_card_image___fluid___srcSet",
	/** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
	DataTwitterCardImageFluidSrcSetWebp = "data___twitter_card_image___fluid___srcSetWebp",
	/** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
	DataTwitterCardImageFluidSrcWebp = "data___twitter_card_image___fluid___srcWebp",
	/** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
	DataTwitterCardImageGatsbyImageData = "data___twitter_card_image___gatsbyImageData",
	DataTwitterCardImageLocalFileAbsolutePath = "data___twitter_card_image___localFile___absolutePath",
	DataTwitterCardImageLocalFileAccessTime = "data___twitter_card_image___localFile___accessTime",
	DataTwitterCardImageLocalFileAtime = "data___twitter_card_image___localFile___atime",
	DataTwitterCardImageLocalFileAtimeMs = "data___twitter_card_image___localFile___atimeMs",
	DataTwitterCardImageLocalFileBase = "data___twitter_card_image___localFile___base",
	DataTwitterCardImageLocalFileBirthTime = "data___twitter_card_image___localFile___birthTime",
	DataTwitterCardImageLocalFileBirthtime = "data___twitter_card_image___localFile___birthtime",
	DataTwitterCardImageLocalFileBirthtimeMs = "data___twitter_card_image___localFile___birthtimeMs",
	DataTwitterCardImageLocalFileChangeTime = "data___twitter_card_image___localFile___changeTime",
	DataTwitterCardImageLocalFileChildren = "data___twitter_card_image___localFile___children",
	DataTwitterCardImageLocalFileCtime = "data___twitter_card_image___localFile___ctime",
	DataTwitterCardImageLocalFileCtimeMs = "data___twitter_card_image___localFile___ctimeMs",
	DataTwitterCardImageLocalFileDev = "data___twitter_card_image___localFile___dev",
	DataTwitterCardImageLocalFileDir = "data___twitter_card_image___localFile___dir",
	DataTwitterCardImageLocalFileExt = "data___twitter_card_image___localFile___ext",
	DataTwitterCardImageLocalFileExtension = "data___twitter_card_image___localFile___extension",
	DataTwitterCardImageLocalFileGid = "data___twitter_card_image___localFile___gid",
	DataTwitterCardImageLocalFileId = "data___twitter_card_image___localFile___id",
	DataTwitterCardImageLocalFileIno = "data___twitter_card_image___localFile___ino",
	DataTwitterCardImageLocalFileMode = "data___twitter_card_image___localFile___mode",
	DataTwitterCardImageLocalFileModifiedTime = "data___twitter_card_image___localFile___modifiedTime",
	DataTwitterCardImageLocalFileMtime = "data___twitter_card_image___localFile___mtime",
	DataTwitterCardImageLocalFileMtimeMs = "data___twitter_card_image___localFile___mtimeMs",
	DataTwitterCardImageLocalFileName = "data___twitter_card_image___localFile___name",
	DataTwitterCardImageLocalFileNlink = "data___twitter_card_image___localFile___nlink",
	DataTwitterCardImageLocalFilePrettySize = "data___twitter_card_image___localFile___prettySize",
	DataTwitterCardImageLocalFileRdev = "data___twitter_card_image___localFile___rdev",
	DataTwitterCardImageLocalFileRelativeDirectory = "data___twitter_card_image___localFile___relativeDirectory",
	DataTwitterCardImageLocalFileRelativePath = "data___twitter_card_image___localFile___relativePath",
	DataTwitterCardImageLocalFileRoot = "data___twitter_card_image___localFile___root",
	DataTwitterCardImageLocalFileSize = "data___twitter_card_image___localFile___size",
	DataTwitterCardImageLocalFileSourceInstanceName = "data___twitter_card_image___localFile___sourceInstanceName",
	DataTwitterCardImageLocalFileUid = "data___twitter_card_image___localFile___uid",
	/** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
	DataTwitterCardImageUrl = "data___twitter_card_image___url",
	DataTwitterUrl = "data___twitter_url",
	DataTwitterUsername = "data___twitter_username",
	DataYoutubeUrl = "data___youtube_url",
	FirstPublicationDate = "first_publication_date",
	Href = "href",
	Id = "id",
	InternalContent = "internal___content",
	InternalContentDigest = "internal___contentDigest",
	InternalContentFilePath = "internal___contentFilePath",
	InternalDescription = "internal___description",
	InternalFieldOwners = "internal___fieldOwners",
	InternalIgnoreType = "internal___ignoreType",
	InternalMediaType = "internal___mediaType",
	InternalOwner = "internal___owner",
	InternalType = "internal___type",
	Lang = "lang",
	LastPublicationDate = "last_publication_date",
	ParentChildren = "parent___children",
	ParentChildrenChildren = "parent___children___children",
	ParentChildrenChildrenChildren = "parent___children___children___children",
	ParentChildrenChildrenId = "parent___children___children___id",
	ParentChildrenId = "parent___children___id",
	ParentChildrenInternalContent = "parent___children___internal___content",
	ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
	ParentChildrenInternalContentFilePath = "parent___children___internal___contentFilePath",
	ParentChildrenInternalDescription = "parent___children___internal___description",
	ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
	ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
	ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
	ParentChildrenInternalOwner = "parent___children___internal___owner",
	ParentChildrenInternalType = "parent___children___internal___type",
	ParentChildrenParentChildren = "parent___children___parent___children",
	ParentChildrenParentId = "parent___children___parent___id",
	ParentId = "parent___id",
	ParentInternalContent = "parent___internal___content",
	ParentInternalContentDigest = "parent___internal___contentDigest",
	ParentInternalContentFilePath = "parent___internal___contentFilePath",
	ParentInternalDescription = "parent___internal___description",
	ParentInternalFieldOwners = "parent___internal___fieldOwners",
	ParentInternalIgnoreType = "parent___internal___ignoreType",
	ParentInternalMediaType = "parent___internal___mediaType",
	ParentInternalOwner = "parent___internal___owner",
	ParentInternalType = "parent___internal___type",
	ParentParentChildren = "parent___parent___children",
	ParentParentChildrenChildren = "parent___parent___children___children",
	ParentParentChildrenId = "parent___parent___children___id",
	ParentParentId = "parent___parent___id",
	ParentParentInternalContent = "parent___parent___internal___content",
	ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
	ParentParentInternalContentFilePath = "parent___parent___internal___contentFilePath",
	ParentParentInternalDescription = "parent___parent___internal___description",
	ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
	ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
	ParentParentInternalMediaType = "parent___parent___internal___mediaType",
	ParentParentInternalOwner = "parent___parent___internal___owner",
	ParentParentInternalType = "parent___parent___internal___type",
	ParentParentParentChildren = "parent___parent___parent___children",
	ParentParentParentId = "parent___parent___parent___id",
	PrismicId = "prismicId",
	Tags = "tags",
	Type = "type",
	Url = "url",
}

export type PrismicSettingsFilterInput = {
	_previewable?: InputMaybe<IdQueryOperatorInput>
	alternate_languages?: InputMaybe<PrismicAlternateLanguageTypeFilterListInput>
	children?: InputMaybe<NodeFilterListInput>
	data?: InputMaybe<PrismicSettingsDataTypeFilterInput>
	dataRaw?: InputMaybe<JsonQueryOperatorInput>
	first_publication_date?: InputMaybe<DateQueryOperatorInput>
	href?: InputMaybe<StringQueryOperatorInput>
	id?: InputMaybe<StringQueryOperatorInput>
	internal?: InputMaybe<InternalFilterInput>
	lang?: InputMaybe<StringQueryOperatorInput>
	last_publication_date?: InputMaybe<DateQueryOperatorInput>
	parent?: InputMaybe<NodeFilterInput>
	prismicId?: InputMaybe<IdQueryOperatorInput>
	tags?: InputMaybe<StringQueryOperatorInput>
	type?: InputMaybe<StringQueryOperatorInput>
	url?: InputMaybe<StringQueryOperatorInput>
}

export type PrismicSettingsGroupConnection = {
	__typename?: "PrismicSettingsGroupConnection"
	distinct: Array<Scalars["String"]>
	edges: Array<PrismicSettingsEdge>
	field: Scalars["String"]
	fieldValue?: Maybe<Scalars["String"]>
	group: Array<PrismicSettingsGroupConnection>
	max?: Maybe<Scalars["Float"]>
	min?: Maybe<Scalars["Float"]>
	nodes: Array<PrismicSettings>
	pageInfo: PageInfo
	sum?: Maybe<Scalars["Float"]>
	totalCount: Scalars["Int"]
}

export type PrismicSettingsGroupConnectionDistinctArgs = {
	field: PrismicSettingsFieldsEnum
}

export type PrismicSettingsGroupConnectionGroupArgs = {
	field: PrismicSettingsFieldsEnum
	limit?: InputMaybe<Scalars["Int"]>
	skip?: InputMaybe<Scalars["Int"]>
}

export type PrismicSettingsGroupConnectionMaxArgs = {
	field: PrismicSettingsFieldsEnum
}

export type PrismicSettingsGroupConnectionMinArgs = {
	field: PrismicSettingsFieldsEnum
}

export type PrismicSettingsGroupConnectionSumArgs = {
	field: PrismicSettingsFieldsEnum
}

export type PrismicSettingsSortInput = {
	fields?: InputMaybe<Array<InputMaybe<PrismicSettingsFieldsEnum>>>
	order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type PrismicSharedSliceType = {
	id: Scalars["ID"]
	slice_label?: Maybe<Scalars["String"]>
	slice_type: Scalars["String"]
	variation: Scalars["String"]
	version: Scalars["String"]
}

export type PrismicSliceType = {
	id: Scalars["ID"]
	slice_label?: Maybe<Scalars["String"]>
	slice_type: Scalars["String"]
}

export type PrismicSponsor = Node & {
	__typename?: "PrismicSponsor"
	_previewable: Scalars["ID"]
	alternate_languages: Array<PrismicAlternateLanguageType>
	children: Array<Node>
	data: PrismicSponsorDataType
	dataRaw: Scalars["JSON"]
	first_publication_date: Scalars["Date"]
	href: Scalars["String"]
	id: Scalars["ID"]
	internal: Internal
	lang: Scalars["String"]
	last_publication_date: Scalars["Date"]
	parent?: Maybe<Node>
	prismicId: Scalars["ID"]
	tags: Array<Scalars["String"]>
	type: Scalars["String"]
	url?: Maybe<Scalars["String"]>
}

export type PrismicSponsorFirst_Publication_DateArgs = {
	difference?: InputMaybe<Scalars["String"]>
	formatString?: InputMaybe<Scalars["String"]>
	fromNow?: InputMaybe<Scalars["Boolean"]>
	locale?: InputMaybe<Scalars["String"]>
}

export type PrismicSponsorLast_Publication_DateArgs = {
	difference?: InputMaybe<Scalars["String"]>
	formatString?: InputMaybe<Scalars["String"]>
	fromNow?: InputMaybe<Scalars["Boolean"]>
	locale?: InputMaybe<Scalars["String"]>
}

export type PrismicSponsorConnection = {
	__typename?: "PrismicSponsorConnection"
	distinct: Array<Scalars["String"]>
	edges: Array<PrismicSponsorEdge>
	group: Array<PrismicSponsorGroupConnection>
	max?: Maybe<Scalars["Float"]>
	min?: Maybe<Scalars["Float"]>
	nodes: Array<PrismicSponsor>
	pageInfo: PageInfo
	sum?: Maybe<Scalars["Float"]>
	totalCount: Scalars["Int"]
}

export type PrismicSponsorConnectionDistinctArgs = {
	field: PrismicSponsorFieldsEnum
}

export type PrismicSponsorConnectionGroupArgs = {
	field: PrismicSponsorFieldsEnum
	limit?: InputMaybe<Scalars["Int"]>
	skip?: InputMaybe<Scalars["Int"]>
}

export type PrismicSponsorConnectionMaxArgs = {
	field: PrismicSponsorFieldsEnum
}

export type PrismicSponsorConnectionMinArgs = {
	field: PrismicSponsorFieldsEnum
}

export type PrismicSponsorConnectionSumArgs = {
	field: PrismicSponsorFieldsEnum
}

export type PrismicSponsorDataImageImageType = {
	__typename?: "PrismicSponsorDataImageImageType"
	alt?: Maybe<Scalars["String"]>
	copyright?: Maybe<Scalars["String"]>
	dimensions?: Maybe<PrismicImageDimensionsType>
	/** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
	fixed?: Maybe<ImgixFixed>
	/** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
	fluid?: Maybe<ImgixFluid>
	gatsbyImageData?: Maybe<Scalars["JSON"]>
	localFile?: Maybe<File>
	/** A plain imgix URL with the URL and params applied. */
	url?: Maybe<Scalars["String"]>
}

export type PrismicSponsorDataImageImageTypeFixedArgs = {
	height?: InputMaybe<Scalars["Int"]>
	imgixParams?: InputMaybe<ImgixParamsInput>
	placeholderImgixParams?: InputMaybe<ImgixParamsInput>
	quality?: InputMaybe<Scalars["Int"]>
	width?: InputMaybe<Scalars["Int"]>
}

export type PrismicSponsorDataImageImageTypeFluidArgs = {
	imgixParams?: InputMaybe<ImgixParamsInput>
	maxHeight?: InputMaybe<Scalars["Int"]>
	maxWidth?: InputMaybe<Scalars["Int"]>
	placeholderImgixParams?: InputMaybe<ImgixParamsInput>
	srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
}

export type PrismicSponsorDataImageImageTypeGatsbyImageDataArgs = {
	aspectRatio?: InputMaybe<Scalars["Float"]>
	backgroundColor?: InputMaybe<Scalars["String"]>
	breakpoints?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
	height?: InputMaybe<Scalars["Int"]>
	imgixParams?: InputMaybe<ImgixParamsInput>
	layout?: InputMaybe<GatsbyImageLayout>
	outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>
	placeholder?: InputMaybe<ImgixPlaceholder>
	placeholderImgixParams?: InputMaybe<ImgixParamsInput>
	sizes?: InputMaybe<Scalars["String"]>
	srcSetMaxWidth?: InputMaybe<Scalars["Int"]>
	srcSetMinWidth?: InputMaybe<Scalars["Int"]>
	width?: InputMaybe<Scalars["Int"]>
	widthTolerance?: InputMaybe<Scalars["Float"]>
}

export type PrismicSponsorDataImageImageTypeUrlArgs = {
	imgixParams?: InputMaybe<ImgixParamsInput>
}

export type PrismicSponsorDataImageImageTypeFilterInput = {
	alt?: InputMaybe<StringQueryOperatorInput>
	copyright?: InputMaybe<StringQueryOperatorInput>
	dimensions?: InputMaybe<PrismicImageDimensionsTypeFilterInput>
	fixed?: InputMaybe<ImgixFixedFilterInput>
	fluid?: InputMaybe<ImgixFluidFilterInput>
	gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>
	localFile?: InputMaybe<FileFilterInput>
	url?: InputMaybe<StringQueryOperatorInput>
}

export type PrismicSponsorDataType = {
	__typename?: "PrismicSponsorDataType"
	image?: Maybe<PrismicSponsorDataImageImageType>
	link?: Maybe<PrismicLinkType>
	name?: Maybe<PrismicStructuredTextType>
}

export type PrismicSponsorDataTypeFilterInput = {
	image?: InputMaybe<PrismicSponsorDataImageImageTypeFilterInput>
	link?: InputMaybe<PrismicLinkTypeFilterInput>
	name?: InputMaybe<PrismicStructuredTextTypeFilterInput>
}

export type PrismicSponsorEdge = {
	__typename?: "PrismicSponsorEdge"
	next?: Maybe<PrismicSponsor>
	node: PrismicSponsor
	previous?: Maybe<PrismicSponsor>
}

export enum PrismicSponsorFieldsEnum {
	Previewable = "_previewable",
	AlternateLanguages = "alternate_languages",
	AlternateLanguagesId = "alternate_languages___id",
	AlternateLanguagesLang = "alternate_languages___lang",
	AlternateLanguagesRaw = "alternate_languages___raw",
	AlternateLanguagesType = "alternate_languages___type",
	AlternateLanguagesUid = "alternate_languages___uid",
	Children = "children",
	ChildrenChildren = "children___children",
	ChildrenChildrenChildren = "children___children___children",
	ChildrenChildrenChildrenChildren = "children___children___children___children",
	ChildrenChildrenChildrenId = "children___children___children___id",
	ChildrenChildrenId = "children___children___id",
	ChildrenChildrenInternalContent = "children___children___internal___content",
	ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
	ChildrenChildrenInternalContentFilePath = "children___children___internal___contentFilePath",
	ChildrenChildrenInternalDescription = "children___children___internal___description",
	ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
	ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
	ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
	ChildrenChildrenInternalOwner = "children___children___internal___owner",
	ChildrenChildrenInternalType = "children___children___internal___type",
	ChildrenChildrenParentChildren = "children___children___parent___children",
	ChildrenChildrenParentId = "children___children___parent___id",
	ChildrenId = "children___id",
	ChildrenInternalContent = "children___internal___content",
	ChildrenInternalContentDigest = "children___internal___contentDigest",
	ChildrenInternalContentFilePath = "children___internal___contentFilePath",
	ChildrenInternalDescription = "children___internal___description",
	ChildrenInternalFieldOwners = "children___internal___fieldOwners",
	ChildrenInternalIgnoreType = "children___internal___ignoreType",
	ChildrenInternalMediaType = "children___internal___mediaType",
	ChildrenInternalOwner = "children___internal___owner",
	ChildrenInternalType = "children___internal___type",
	ChildrenParentChildren = "children___parent___children",
	ChildrenParentChildrenChildren = "children___parent___children___children",
	ChildrenParentChildrenId = "children___parent___children___id",
	ChildrenParentId = "children___parent___id",
	ChildrenParentInternalContent = "children___parent___internal___content",
	ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
	ChildrenParentInternalContentFilePath = "children___parent___internal___contentFilePath",
	ChildrenParentInternalDescription = "children___parent___internal___description",
	ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
	ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
	ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
	ChildrenParentInternalOwner = "children___parent___internal___owner",
	ChildrenParentInternalType = "children___parent___internal___type",
	ChildrenParentParentChildren = "children___parent___parent___children",
	ChildrenParentParentId = "children___parent___parent___id",
	DataRaw = "dataRaw",
	DataImageAlt = "data___image___alt",
	DataImageCopyright = "data___image___copyright",
	DataImageDimensionsHeight = "data___image___dimensions___height",
	DataImageDimensionsWidth = "data___image___dimensions___width",
	/** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
	DataImageFixedBase64 = "data___image___fixed___base64",
	/** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
	DataImageFixedHeight = "data___image___fixed___height",
	/** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
	DataImageFixedSizes = "data___image___fixed___sizes",
	/** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
	DataImageFixedSrc = "data___image___fixed___src",
	/** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
	DataImageFixedSrcSet = "data___image___fixed___srcSet",
	/** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
	DataImageFixedSrcSetWebp = "data___image___fixed___srcSetWebp",
	/** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
	DataImageFixedSrcWebp = "data___image___fixed___srcWebp",
	/** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
	DataImageFixedWidth = "data___image___fixed___width",
	/** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
	DataImageFluidAspectRatio = "data___image___fluid___aspectRatio",
	/** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
	DataImageFluidBase64 = "data___image___fluid___base64",
	/** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
	DataImageFluidSizes = "data___image___fluid___sizes",
	/** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
	DataImageFluidSrc = "data___image___fluid___src",
	/** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
	DataImageFluidSrcSet = "data___image___fluid___srcSet",
	/** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
	DataImageFluidSrcSetWebp = "data___image___fluid___srcSetWebp",
	/** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
	DataImageFluidSrcWebp = "data___image___fluid___srcWebp",
	/** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
	DataImageGatsbyImageData = "data___image___gatsbyImageData",
	DataImageLocalFileAbsolutePath = "data___image___localFile___absolutePath",
	DataImageLocalFileAccessTime = "data___image___localFile___accessTime",
	DataImageLocalFileAtime = "data___image___localFile___atime",
	DataImageLocalFileAtimeMs = "data___image___localFile___atimeMs",
	DataImageLocalFileBase = "data___image___localFile___base",
	DataImageLocalFileBirthTime = "data___image___localFile___birthTime",
	DataImageLocalFileBirthtime = "data___image___localFile___birthtime",
	DataImageLocalFileBirthtimeMs = "data___image___localFile___birthtimeMs",
	DataImageLocalFileChangeTime = "data___image___localFile___changeTime",
	DataImageLocalFileChildren = "data___image___localFile___children",
	DataImageLocalFileCtime = "data___image___localFile___ctime",
	DataImageLocalFileCtimeMs = "data___image___localFile___ctimeMs",
	DataImageLocalFileDev = "data___image___localFile___dev",
	DataImageLocalFileDir = "data___image___localFile___dir",
	DataImageLocalFileExt = "data___image___localFile___ext",
	DataImageLocalFileExtension = "data___image___localFile___extension",
	DataImageLocalFileGid = "data___image___localFile___gid",
	DataImageLocalFileId = "data___image___localFile___id",
	DataImageLocalFileIno = "data___image___localFile___ino",
	DataImageLocalFileMode = "data___image___localFile___mode",
	DataImageLocalFileModifiedTime = "data___image___localFile___modifiedTime",
	DataImageLocalFileMtime = "data___image___localFile___mtime",
	DataImageLocalFileMtimeMs = "data___image___localFile___mtimeMs",
	DataImageLocalFileName = "data___image___localFile___name",
	DataImageLocalFileNlink = "data___image___localFile___nlink",
	DataImageLocalFilePrettySize = "data___image___localFile___prettySize",
	DataImageLocalFileRdev = "data___image___localFile___rdev",
	DataImageLocalFileRelativeDirectory = "data___image___localFile___relativeDirectory",
	DataImageLocalFileRelativePath = "data___image___localFile___relativePath",
	DataImageLocalFileRoot = "data___image___localFile___root",
	DataImageLocalFileSize = "data___image___localFile___size",
	DataImageLocalFileSourceInstanceName = "data___image___localFile___sourceInstanceName",
	DataImageLocalFileUid = "data___image___localFile___uid",
	/** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
	DataImageUrl = "data___image___url",
	DataLinkId = "data___link___id",
	DataLinkIsBroken = "data___link___isBroken",
	DataLinkLang = "data___link___lang",
	DataLinkLinkType = "data___link___link_type",
	DataLinkLocalFileAbsolutePath = "data___link___localFile___absolutePath",
	DataLinkLocalFileAccessTime = "data___link___localFile___accessTime",
	DataLinkLocalFileAtime = "data___link___localFile___atime",
	DataLinkLocalFileAtimeMs = "data___link___localFile___atimeMs",
	DataLinkLocalFileBase = "data___link___localFile___base",
	DataLinkLocalFileBirthTime = "data___link___localFile___birthTime",
	DataLinkLocalFileBirthtime = "data___link___localFile___birthtime",
	DataLinkLocalFileBirthtimeMs = "data___link___localFile___birthtimeMs",
	DataLinkLocalFileChangeTime = "data___link___localFile___changeTime",
	DataLinkLocalFileChildren = "data___link___localFile___children",
	DataLinkLocalFileCtime = "data___link___localFile___ctime",
	DataLinkLocalFileCtimeMs = "data___link___localFile___ctimeMs",
	DataLinkLocalFileDev = "data___link___localFile___dev",
	DataLinkLocalFileDir = "data___link___localFile___dir",
	DataLinkLocalFileExt = "data___link___localFile___ext",
	DataLinkLocalFileExtension = "data___link___localFile___extension",
	DataLinkLocalFileGid = "data___link___localFile___gid",
	DataLinkLocalFileId = "data___link___localFile___id",
	DataLinkLocalFileIno = "data___link___localFile___ino",
	DataLinkLocalFileMode = "data___link___localFile___mode",
	DataLinkLocalFileModifiedTime = "data___link___localFile___modifiedTime",
	DataLinkLocalFileMtime = "data___link___localFile___mtime",
	DataLinkLocalFileMtimeMs = "data___link___localFile___mtimeMs",
	DataLinkLocalFileName = "data___link___localFile___name",
	DataLinkLocalFileNlink = "data___link___localFile___nlink",
	DataLinkLocalFilePrettySize = "data___link___localFile___prettySize",
	DataLinkLocalFileRdev = "data___link___localFile___rdev",
	DataLinkLocalFileRelativeDirectory = "data___link___localFile___relativeDirectory",
	DataLinkLocalFileRelativePath = "data___link___localFile___relativePath",
	DataLinkLocalFileRoot = "data___link___localFile___root",
	DataLinkLocalFileSize = "data___link___localFile___size",
	DataLinkLocalFileSourceInstanceName = "data___link___localFile___sourceInstanceName",
	DataLinkLocalFileUid = "data___link___localFile___uid",
	DataLinkRaw = "data___link___raw",
	DataLinkSize = "data___link___size",
	DataLinkSlug = "data___link___slug",
	DataLinkTags = "data___link___tags",
	DataLinkTarget = "data___link___target",
	DataLinkType = "data___link___type",
	DataLinkUid = "data___link___uid",
	DataLinkUrl = "data___link___url",
	DataNameHtml = "data___name___html",
	DataNameRaw = "data___name___raw",
	DataNameRichText = "data___name___richText",
	DataNameText = "data___name___text",
	FirstPublicationDate = "first_publication_date",
	Href = "href",
	Id = "id",
	InternalContent = "internal___content",
	InternalContentDigest = "internal___contentDigest",
	InternalContentFilePath = "internal___contentFilePath",
	InternalDescription = "internal___description",
	InternalFieldOwners = "internal___fieldOwners",
	InternalIgnoreType = "internal___ignoreType",
	InternalMediaType = "internal___mediaType",
	InternalOwner = "internal___owner",
	InternalType = "internal___type",
	Lang = "lang",
	LastPublicationDate = "last_publication_date",
	ParentChildren = "parent___children",
	ParentChildrenChildren = "parent___children___children",
	ParentChildrenChildrenChildren = "parent___children___children___children",
	ParentChildrenChildrenId = "parent___children___children___id",
	ParentChildrenId = "parent___children___id",
	ParentChildrenInternalContent = "parent___children___internal___content",
	ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
	ParentChildrenInternalContentFilePath = "parent___children___internal___contentFilePath",
	ParentChildrenInternalDescription = "parent___children___internal___description",
	ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
	ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
	ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
	ParentChildrenInternalOwner = "parent___children___internal___owner",
	ParentChildrenInternalType = "parent___children___internal___type",
	ParentChildrenParentChildren = "parent___children___parent___children",
	ParentChildrenParentId = "parent___children___parent___id",
	ParentId = "parent___id",
	ParentInternalContent = "parent___internal___content",
	ParentInternalContentDigest = "parent___internal___contentDigest",
	ParentInternalContentFilePath = "parent___internal___contentFilePath",
	ParentInternalDescription = "parent___internal___description",
	ParentInternalFieldOwners = "parent___internal___fieldOwners",
	ParentInternalIgnoreType = "parent___internal___ignoreType",
	ParentInternalMediaType = "parent___internal___mediaType",
	ParentInternalOwner = "parent___internal___owner",
	ParentInternalType = "parent___internal___type",
	ParentParentChildren = "parent___parent___children",
	ParentParentChildrenChildren = "parent___parent___children___children",
	ParentParentChildrenId = "parent___parent___children___id",
	ParentParentId = "parent___parent___id",
	ParentParentInternalContent = "parent___parent___internal___content",
	ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
	ParentParentInternalContentFilePath = "parent___parent___internal___contentFilePath",
	ParentParentInternalDescription = "parent___parent___internal___description",
	ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
	ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
	ParentParentInternalMediaType = "parent___parent___internal___mediaType",
	ParentParentInternalOwner = "parent___parent___internal___owner",
	ParentParentInternalType = "parent___parent___internal___type",
	ParentParentParentChildren = "parent___parent___parent___children",
	ParentParentParentId = "parent___parent___parent___id",
	PrismicId = "prismicId",
	Tags = "tags",
	Type = "type",
	Url = "url",
}

export type PrismicSponsorFilterInput = {
	_previewable?: InputMaybe<IdQueryOperatorInput>
	alternate_languages?: InputMaybe<PrismicAlternateLanguageTypeFilterListInput>
	children?: InputMaybe<NodeFilterListInput>
	data?: InputMaybe<PrismicSponsorDataTypeFilterInput>
	dataRaw?: InputMaybe<JsonQueryOperatorInput>
	first_publication_date?: InputMaybe<DateQueryOperatorInput>
	href?: InputMaybe<StringQueryOperatorInput>
	id?: InputMaybe<StringQueryOperatorInput>
	internal?: InputMaybe<InternalFilterInput>
	lang?: InputMaybe<StringQueryOperatorInput>
	last_publication_date?: InputMaybe<DateQueryOperatorInput>
	parent?: InputMaybe<NodeFilterInput>
	prismicId?: InputMaybe<IdQueryOperatorInput>
	tags?: InputMaybe<StringQueryOperatorInput>
	type?: InputMaybe<StringQueryOperatorInput>
	url?: InputMaybe<StringQueryOperatorInput>
}

export type PrismicSponsorGroupConnection = {
	__typename?: "PrismicSponsorGroupConnection"
	distinct: Array<Scalars["String"]>
	edges: Array<PrismicSponsorEdge>
	field: Scalars["String"]
	fieldValue?: Maybe<Scalars["String"]>
	group: Array<PrismicSponsorGroupConnection>
	max?: Maybe<Scalars["Float"]>
	min?: Maybe<Scalars["Float"]>
	nodes: Array<PrismicSponsor>
	pageInfo: PageInfo
	sum?: Maybe<Scalars["Float"]>
	totalCount: Scalars["Int"]
}

export type PrismicSponsorGroupConnectionDistinctArgs = {
	field: PrismicSponsorFieldsEnum
}

export type PrismicSponsorGroupConnectionGroupArgs = {
	field: PrismicSponsorFieldsEnum
	limit?: InputMaybe<Scalars["Int"]>
	skip?: InputMaybe<Scalars["Int"]>
}

export type PrismicSponsorGroupConnectionMaxArgs = {
	field: PrismicSponsorFieldsEnum
}

export type PrismicSponsorGroupConnectionMinArgs = {
	field: PrismicSponsorFieldsEnum
}

export type PrismicSponsorGroupConnectionSumArgs = {
	field: PrismicSponsorFieldsEnum
}

export type PrismicSponsorSortInput = {
	fields?: InputMaybe<Array<InputMaybe<PrismicSponsorFieldsEnum>>>
	order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type PrismicSponsorsList = Node & {
	__typename?: "PrismicSponsorsList"
	_previewable: Scalars["ID"]
	alternate_languages: Array<PrismicAlternateLanguageType>
	children: Array<Node>
	data: PrismicSponsorsListDataType
	dataRaw: Scalars["JSON"]
	first_publication_date: Scalars["Date"]
	href: Scalars["String"]
	id: Scalars["ID"]
	internal: Internal
	lang: Scalars["String"]
	last_publication_date: Scalars["Date"]
	parent?: Maybe<Node>
	prismicId: Scalars["ID"]
	tags: Array<Scalars["String"]>
	type: Scalars["String"]
	uid: Scalars["String"]
	url?: Maybe<Scalars["String"]>
}

export type PrismicSponsorsListFirst_Publication_DateArgs = {
	difference?: InputMaybe<Scalars["String"]>
	formatString?: InputMaybe<Scalars["String"]>
	fromNow?: InputMaybe<Scalars["Boolean"]>
	locale?: InputMaybe<Scalars["String"]>
}

export type PrismicSponsorsListLast_Publication_DateArgs = {
	difference?: InputMaybe<Scalars["String"]>
	formatString?: InputMaybe<Scalars["String"]>
	fromNow?: InputMaybe<Scalars["Boolean"]>
	locale?: InputMaybe<Scalars["String"]>
}

export type PrismicSponsorsListConnection = {
	__typename?: "PrismicSponsorsListConnection"
	distinct: Array<Scalars["String"]>
	edges: Array<PrismicSponsorsListEdge>
	group: Array<PrismicSponsorsListGroupConnection>
	max?: Maybe<Scalars["Float"]>
	min?: Maybe<Scalars["Float"]>
	nodes: Array<PrismicSponsorsList>
	pageInfo: PageInfo
	sum?: Maybe<Scalars["Float"]>
	totalCount: Scalars["Int"]
}

export type PrismicSponsorsListConnectionDistinctArgs = {
	field: PrismicSponsorsListFieldsEnum
}

export type PrismicSponsorsListConnectionGroupArgs = {
	field: PrismicSponsorsListFieldsEnum
	limit?: InputMaybe<Scalars["Int"]>
	skip?: InputMaybe<Scalars["Int"]>
}

export type PrismicSponsorsListConnectionMaxArgs = {
	field: PrismicSponsorsListFieldsEnum
}

export type PrismicSponsorsListConnectionMinArgs = {
	field: PrismicSponsorsListFieldsEnum
}

export type PrismicSponsorsListConnectionSumArgs = {
	field: PrismicSponsorsListFieldsEnum
}

export type PrismicSponsorsListDataBronzeSponsors = {
	__typename?: "PrismicSponsorsListDataBronzeSponsors"
	sponsor?: Maybe<PrismicLinkType>
}

export type PrismicSponsorsListDataBronzeSponsorsFilterInput = {
	sponsor?: InputMaybe<PrismicLinkTypeFilterInput>
}

export type PrismicSponsorsListDataBronzeSponsorsFilterListInput = {
	elemMatch?: InputMaybe<PrismicSponsorsListDataBronzeSponsorsFilterInput>
}

export type PrismicSponsorsListDataGoldSponsors = {
	__typename?: "PrismicSponsorsListDataGoldSponsors"
	sponsor?: Maybe<PrismicLinkType>
}

export type PrismicSponsorsListDataGoldSponsorsFilterInput = {
	sponsor?: InputMaybe<PrismicLinkTypeFilterInput>
}

export type PrismicSponsorsListDataGoldSponsorsFilterListInput = {
	elemMatch?: InputMaybe<PrismicSponsorsListDataGoldSponsorsFilterInput>
}

export type PrismicSponsorsListDataMediaSponsors = {
	__typename?: "PrismicSponsorsListDataMediaSponsors"
	sponsor?: Maybe<PrismicLinkType>
}

export type PrismicSponsorsListDataMediaSponsorsFilterInput = {
	sponsor?: InputMaybe<PrismicLinkTypeFilterInput>
}

export type PrismicSponsorsListDataMediaSponsorsFilterListInput = {
	elemMatch?: InputMaybe<PrismicSponsorsListDataMediaSponsorsFilterInput>
}

export type PrismicSponsorsListDataPartnerSponsors = {
	__typename?: "PrismicSponsorsListDataPartnerSponsors"
	sponsor?: Maybe<PrismicLinkType>
}

export type PrismicSponsorsListDataPartnerSponsorsFilterInput = {
	sponsor?: InputMaybe<PrismicLinkTypeFilterInput>
}

export type PrismicSponsorsListDataPartnerSponsorsFilterListInput = {
	elemMatch?: InputMaybe<PrismicSponsorsListDataPartnerSponsorsFilterInput>
}

export type PrismicSponsorsListDataPlatinumSponsors = {
	__typename?: "PrismicSponsorsListDataPlatinumSponsors"
	sponsor?: Maybe<PrismicLinkType>
}

export type PrismicSponsorsListDataPlatinumSponsorsFilterInput = {
	sponsor?: InputMaybe<PrismicLinkTypeFilterInput>
}

export type PrismicSponsorsListDataPlatinumSponsorsFilterListInput = {
	elemMatch?: InputMaybe<PrismicSponsorsListDataPlatinumSponsorsFilterInput>
}

export type PrismicSponsorsListDataSilverSponsors = {
	__typename?: "PrismicSponsorsListDataSilverSponsors"
	sponsor?: Maybe<PrismicLinkType>
}

export type PrismicSponsorsListDataSilverSponsorsFilterInput = {
	sponsor?: InputMaybe<PrismicLinkTypeFilterInput>
}

export type PrismicSponsorsListDataSilverSponsorsFilterListInput = {
	elemMatch?: InputMaybe<PrismicSponsorsListDataSilverSponsorsFilterInput>
}

export type PrismicSponsorsListDataType = {
	__typename?: "PrismicSponsorsListDataType"
	bronze_sponsors?: Maybe<Array<Maybe<PrismicSponsorsListDataBronzeSponsors>>>
	gold_sponsors?: Maybe<Array<Maybe<PrismicSponsorsListDataGoldSponsors>>>
	media_sponsors?: Maybe<Array<Maybe<PrismicSponsorsListDataMediaSponsors>>>
	partner_sponsors?: Maybe<Array<Maybe<PrismicSponsorsListDataPartnerSponsors>>>
	platinum_sponsors?: Maybe<
		Array<Maybe<PrismicSponsorsListDataPlatinumSponsors>>
	>
	rainbows_over_waikiki_sponsor?: Maybe<PrismicLinkType>
	silver_sponsors?: Maybe<Array<Maybe<PrismicSponsorsListDataSilverSponsors>>>
	title?: Maybe<PrismicStructuredTextType>
	visionary_sponsors?: Maybe<
		Array<Maybe<PrismicSponsorsListDataVisionarySponsors>>
	>
}

export type PrismicSponsorsListDataTypeFilterInput = {
	bronze_sponsors?: InputMaybe<PrismicSponsorsListDataBronzeSponsorsFilterListInput>
	gold_sponsors?: InputMaybe<PrismicSponsorsListDataGoldSponsorsFilterListInput>
	media_sponsors?: InputMaybe<PrismicSponsorsListDataMediaSponsorsFilterListInput>
	partner_sponsors?: InputMaybe<PrismicSponsorsListDataPartnerSponsorsFilterListInput>
	platinum_sponsors?: InputMaybe<PrismicSponsorsListDataPlatinumSponsorsFilterListInput>
	rainbows_over_waikiki_sponsor?: InputMaybe<PrismicLinkTypeFilterInput>
	silver_sponsors?: InputMaybe<PrismicSponsorsListDataSilverSponsorsFilterListInput>
	title?: InputMaybe<PrismicStructuredTextTypeFilterInput>
	visionary_sponsors?: InputMaybe<PrismicSponsorsListDataVisionarySponsorsFilterListInput>
}

export type PrismicSponsorsListDataVisionarySponsors = {
	__typename?: "PrismicSponsorsListDataVisionarySponsors"
	sponsor?: Maybe<PrismicLinkType>
}

export type PrismicSponsorsListDataVisionarySponsorsFilterInput = {
	sponsor?: InputMaybe<PrismicLinkTypeFilterInput>
}

export type PrismicSponsorsListDataVisionarySponsorsFilterListInput = {
	elemMatch?: InputMaybe<PrismicSponsorsListDataVisionarySponsorsFilterInput>
}

export type PrismicSponsorsListEdge = {
	__typename?: "PrismicSponsorsListEdge"
	next?: Maybe<PrismicSponsorsList>
	node: PrismicSponsorsList
	previous?: Maybe<PrismicSponsorsList>
}

export enum PrismicSponsorsListFieldsEnum {
	Previewable = "_previewable",
	AlternateLanguages = "alternate_languages",
	AlternateLanguagesId = "alternate_languages___id",
	AlternateLanguagesLang = "alternate_languages___lang",
	AlternateLanguagesRaw = "alternate_languages___raw",
	AlternateLanguagesType = "alternate_languages___type",
	AlternateLanguagesUid = "alternate_languages___uid",
	Children = "children",
	ChildrenChildren = "children___children",
	ChildrenChildrenChildren = "children___children___children",
	ChildrenChildrenChildrenChildren = "children___children___children___children",
	ChildrenChildrenChildrenId = "children___children___children___id",
	ChildrenChildrenId = "children___children___id",
	ChildrenChildrenInternalContent = "children___children___internal___content",
	ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
	ChildrenChildrenInternalContentFilePath = "children___children___internal___contentFilePath",
	ChildrenChildrenInternalDescription = "children___children___internal___description",
	ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
	ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
	ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
	ChildrenChildrenInternalOwner = "children___children___internal___owner",
	ChildrenChildrenInternalType = "children___children___internal___type",
	ChildrenChildrenParentChildren = "children___children___parent___children",
	ChildrenChildrenParentId = "children___children___parent___id",
	ChildrenId = "children___id",
	ChildrenInternalContent = "children___internal___content",
	ChildrenInternalContentDigest = "children___internal___contentDigest",
	ChildrenInternalContentFilePath = "children___internal___contentFilePath",
	ChildrenInternalDescription = "children___internal___description",
	ChildrenInternalFieldOwners = "children___internal___fieldOwners",
	ChildrenInternalIgnoreType = "children___internal___ignoreType",
	ChildrenInternalMediaType = "children___internal___mediaType",
	ChildrenInternalOwner = "children___internal___owner",
	ChildrenInternalType = "children___internal___type",
	ChildrenParentChildren = "children___parent___children",
	ChildrenParentChildrenChildren = "children___parent___children___children",
	ChildrenParentChildrenId = "children___parent___children___id",
	ChildrenParentId = "children___parent___id",
	ChildrenParentInternalContent = "children___parent___internal___content",
	ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
	ChildrenParentInternalContentFilePath = "children___parent___internal___contentFilePath",
	ChildrenParentInternalDescription = "children___parent___internal___description",
	ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
	ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
	ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
	ChildrenParentInternalOwner = "children___parent___internal___owner",
	ChildrenParentInternalType = "children___parent___internal___type",
	ChildrenParentParentChildren = "children___parent___parent___children",
	ChildrenParentParentId = "children___parent___parent___id",
	DataRaw = "dataRaw",
	DataBronzeSponsors = "data___bronze_sponsors",
	DataBronzeSponsorsSponsorId = "data___bronze_sponsors___sponsor___id",
	DataBronzeSponsorsSponsorIsBroken = "data___bronze_sponsors___sponsor___isBroken",
	DataBronzeSponsorsSponsorLang = "data___bronze_sponsors___sponsor___lang",
	DataBronzeSponsorsSponsorLinkType = "data___bronze_sponsors___sponsor___link_type",
	DataBronzeSponsorsSponsorRaw = "data___bronze_sponsors___sponsor___raw",
	DataBronzeSponsorsSponsorSize = "data___bronze_sponsors___sponsor___size",
	DataBronzeSponsorsSponsorSlug = "data___bronze_sponsors___sponsor___slug",
	DataBronzeSponsorsSponsorTags = "data___bronze_sponsors___sponsor___tags",
	DataBronzeSponsorsSponsorTarget = "data___bronze_sponsors___sponsor___target",
	DataBronzeSponsorsSponsorType = "data___bronze_sponsors___sponsor___type",
	DataBronzeSponsorsSponsorUid = "data___bronze_sponsors___sponsor___uid",
	DataBronzeSponsorsSponsorUrl = "data___bronze_sponsors___sponsor___url",
	DataGoldSponsors = "data___gold_sponsors",
	DataGoldSponsorsSponsorId = "data___gold_sponsors___sponsor___id",
	DataGoldSponsorsSponsorIsBroken = "data___gold_sponsors___sponsor___isBroken",
	DataGoldSponsorsSponsorLang = "data___gold_sponsors___sponsor___lang",
	DataGoldSponsorsSponsorLinkType = "data___gold_sponsors___sponsor___link_type",
	DataGoldSponsorsSponsorRaw = "data___gold_sponsors___sponsor___raw",
	DataGoldSponsorsSponsorSize = "data___gold_sponsors___sponsor___size",
	DataGoldSponsorsSponsorSlug = "data___gold_sponsors___sponsor___slug",
	DataGoldSponsorsSponsorTags = "data___gold_sponsors___sponsor___tags",
	DataGoldSponsorsSponsorTarget = "data___gold_sponsors___sponsor___target",
	DataGoldSponsorsSponsorType = "data___gold_sponsors___sponsor___type",
	DataGoldSponsorsSponsorUid = "data___gold_sponsors___sponsor___uid",
	DataGoldSponsorsSponsorUrl = "data___gold_sponsors___sponsor___url",
	DataMediaSponsors = "data___media_sponsors",
	DataMediaSponsorsSponsorId = "data___media_sponsors___sponsor___id",
	DataMediaSponsorsSponsorIsBroken = "data___media_sponsors___sponsor___isBroken",
	DataMediaSponsorsSponsorLang = "data___media_sponsors___sponsor___lang",
	DataMediaSponsorsSponsorLinkType = "data___media_sponsors___sponsor___link_type",
	DataMediaSponsorsSponsorRaw = "data___media_sponsors___sponsor___raw",
	DataMediaSponsorsSponsorSize = "data___media_sponsors___sponsor___size",
	DataMediaSponsorsSponsorSlug = "data___media_sponsors___sponsor___slug",
	DataMediaSponsorsSponsorTags = "data___media_sponsors___sponsor___tags",
	DataMediaSponsorsSponsorTarget = "data___media_sponsors___sponsor___target",
	DataMediaSponsorsSponsorType = "data___media_sponsors___sponsor___type",
	DataMediaSponsorsSponsorUid = "data___media_sponsors___sponsor___uid",
	DataMediaSponsorsSponsorUrl = "data___media_sponsors___sponsor___url",
	DataPartnerSponsors = "data___partner_sponsors",
	DataPartnerSponsorsSponsorId = "data___partner_sponsors___sponsor___id",
	DataPartnerSponsorsSponsorIsBroken = "data___partner_sponsors___sponsor___isBroken",
	DataPartnerSponsorsSponsorLang = "data___partner_sponsors___sponsor___lang",
	DataPartnerSponsorsSponsorLinkType = "data___partner_sponsors___sponsor___link_type",
	DataPartnerSponsorsSponsorRaw = "data___partner_sponsors___sponsor___raw",
	DataPartnerSponsorsSponsorSize = "data___partner_sponsors___sponsor___size",
	DataPartnerSponsorsSponsorSlug = "data___partner_sponsors___sponsor___slug",
	DataPartnerSponsorsSponsorTags = "data___partner_sponsors___sponsor___tags",
	DataPartnerSponsorsSponsorTarget = "data___partner_sponsors___sponsor___target",
	DataPartnerSponsorsSponsorType = "data___partner_sponsors___sponsor___type",
	DataPartnerSponsorsSponsorUid = "data___partner_sponsors___sponsor___uid",
	DataPartnerSponsorsSponsorUrl = "data___partner_sponsors___sponsor___url",
	DataPlatinumSponsors = "data___platinum_sponsors",
	DataPlatinumSponsorsSponsorId = "data___platinum_sponsors___sponsor___id",
	DataPlatinumSponsorsSponsorIsBroken = "data___platinum_sponsors___sponsor___isBroken",
	DataPlatinumSponsorsSponsorLang = "data___platinum_sponsors___sponsor___lang",
	DataPlatinumSponsorsSponsorLinkType = "data___platinum_sponsors___sponsor___link_type",
	DataPlatinumSponsorsSponsorRaw = "data___platinum_sponsors___sponsor___raw",
	DataPlatinumSponsorsSponsorSize = "data___platinum_sponsors___sponsor___size",
	DataPlatinumSponsorsSponsorSlug = "data___platinum_sponsors___sponsor___slug",
	DataPlatinumSponsorsSponsorTags = "data___platinum_sponsors___sponsor___tags",
	DataPlatinumSponsorsSponsorTarget = "data___platinum_sponsors___sponsor___target",
	DataPlatinumSponsorsSponsorType = "data___platinum_sponsors___sponsor___type",
	DataPlatinumSponsorsSponsorUid = "data___platinum_sponsors___sponsor___uid",
	DataPlatinumSponsorsSponsorUrl = "data___platinum_sponsors___sponsor___url",
	DataRainbowsOverWaikikiSponsorId = "data___rainbows_over_waikiki_sponsor___id",
	DataRainbowsOverWaikikiSponsorIsBroken = "data___rainbows_over_waikiki_sponsor___isBroken",
	DataRainbowsOverWaikikiSponsorLang = "data___rainbows_over_waikiki_sponsor___lang",
	DataRainbowsOverWaikikiSponsorLinkType = "data___rainbows_over_waikiki_sponsor___link_type",
	DataRainbowsOverWaikikiSponsorLocalFileAbsolutePath = "data___rainbows_over_waikiki_sponsor___localFile___absolutePath",
	DataRainbowsOverWaikikiSponsorLocalFileAccessTime = "data___rainbows_over_waikiki_sponsor___localFile___accessTime",
	DataRainbowsOverWaikikiSponsorLocalFileAtime = "data___rainbows_over_waikiki_sponsor___localFile___atime",
	DataRainbowsOverWaikikiSponsorLocalFileAtimeMs = "data___rainbows_over_waikiki_sponsor___localFile___atimeMs",
	DataRainbowsOverWaikikiSponsorLocalFileBase = "data___rainbows_over_waikiki_sponsor___localFile___base",
	DataRainbowsOverWaikikiSponsorLocalFileBirthTime = "data___rainbows_over_waikiki_sponsor___localFile___birthTime",
	DataRainbowsOverWaikikiSponsorLocalFileBirthtime = "data___rainbows_over_waikiki_sponsor___localFile___birthtime",
	DataRainbowsOverWaikikiSponsorLocalFileBirthtimeMs = "data___rainbows_over_waikiki_sponsor___localFile___birthtimeMs",
	DataRainbowsOverWaikikiSponsorLocalFileChangeTime = "data___rainbows_over_waikiki_sponsor___localFile___changeTime",
	DataRainbowsOverWaikikiSponsorLocalFileChildren = "data___rainbows_over_waikiki_sponsor___localFile___children",
	DataRainbowsOverWaikikiSponsorLocalFileCtime = "data___rainbows_over_waikiki_sponsor___localFile___ctime",
	DataRainbowsOverWaikikiSponsorLocalFileCtimeMs = "data___rainbows_over_waikiki_sponsor___localFile___ctimeMs",
	DataRainbowsOverWaikikiSponsorLocalFileDev = "data___rainbows_over_waikiki_sponsor___localFile___dev",
	DataRainbowsOverWaikikiSponsorLocalFileDir = "data___rainbows_over_waikiki_sponsor___localFile___dir",
	DataRainbowsOverWaikikiSponsorLocalFileExt = "data___rainbows_over_waikiki_sponsor___localFile___ext",
	DataRainbowsOverWaikikiSponsorLocalFileExtension = "data___rainbows_over_waikiki_sponsor___localFile___extension",
	DataRainbowsOverWaikikiSponsorLocalFileGid = "data___rainbows_over_waikiki_sponsor___localFile___gid",
	DataRainbowsOverWaikikiSponsorLocalFileId = "data___rainbows_over_waikiki_sponsor___localFile___id",
	DataRainbowsOverWaikikiSponsorLocalFileIno = "data___rainbows_over_waikiki_sponsor___localFile___ino",
	DataRainbowsOverWaikikiSponsorLocalFileMode = "data___rainbows_over_waikiki_sponsor___localFile___mode",
	DataRainbowsOverWaikikiSponsorLocalFileModifiedTime = "data___rainbows_over_waikiki_sponsor___localFile___modifiedTime",
	DataRainbowsOverWaikikiSponsorLocalFileMtime = "data___rainbows_over_waikiki_sponsor___localFile___mtime",
	DataRainbowsOverWaikikiSponsorLocalFileMtimeMs = "data___rainbows_over_waikiki_sponsor___localFile___mtimeMs",
	DataRainbowsOverWaikikiSponsorLocalFileName = "data___rainbows_over_waikiki_sponsor___localFile___name",
	DataRainbowsOverWaikikiSponsorLocalFileNlink = "data___rainbows_over_waikiki_sponsor___localFile___nlink",
	DataRainbowsOverWaikikiSponsorLocalFilePrettySize = "data___rainbows_over_waikiki_sponsor___localFile___prettySize",
	DataRainbowsOverWaikikiSponsorLocalFileRdev = "data___rainbows_over_waikiki_sponsor___localFile___rdev",
	DataRainbowsOverWaikikiSponsorLocalFileRelativeDirectory = "data___rainbows_over_waikiki_sponsor___localFile___relativeDirectory",
	DataRainbowsOverWaikikiSponsorLocalFileRelativePath = "data___rainbows_over_waikiki_sponsor___localFile___relativePath",
	DataRainbowsOverWaikikiSponsorLocalFileRoot = "data___rainbows_over_waikiki_sponsor___localFile___root",
	DataRainbowsOverWaikikiSponsorLocalFileSize = "data___rainbows_over_waikiki_sponsor___localFile___size",
	DataRainbowsOverWaikikiSponsorLocalFileSourceInstanceName = "data___rainbows_over_waikiki_sponsor___localFile___sourceInstanceName",
	DataRainbowsOverWaikikiSponsorLocalFileUid = "data___rainbows_over_waikiki_sponsor___localFile___uid",
	DataRainbowsOverWaikikiSponsorRaw = "data___rainbows_over_waikiki_sponsor___raw",
	DataRainbowsOverWaikikiSponsorSize = "data___rainbows_over_waikiki_sponsor___size",
	DataRainbowsOverWaikikiSponsorSlug = "data___rainbows_over_waikiki_sponsor___slug",
	DataRainbowsOverWaikikiSponsorTags = "data___rainbows_over_waikiki_sponsor___tags",
	DataRainbowsOverWaikikiSponsorTarget = "data___rainbows_over_waikiki_sponsor___target",
	DataRainbowsOverWaikikiSponsorType = "data___rainbows_over_waikiki_sponsor___type",
	DataRainbowsOverWaikikiSponsorUid = "data___rainbows_over_waikiki_sponsor___uid",
	DataRainbowsOverWaikikiSponsorUrl = "data___rainbows_over_waikiki_sponsor___url",
	DataSilverSponsors = "data___silver_sponsors",
	DataSilverSponsorsSponsorId = "data___silver_sponsors___sponsor___id",
	DataSilverSponsorsSponsorIsBroken = "data___silver_sponsors___sponsor___isBroken",
	DataSilverSponsorsSponsorLang = "data___silver_sponsors___sponsor___lang",
	DataSilverSponsorsSponsorLinkType = "data___silver_sponsors___sponsor___link_type",
	DataSilverSponsorsSponsorRaw = "data___silver_sponsors___sponsor___raw",
	DataSilverSponsorsSponsorSize = "data___silver_sponsors___sponsor___size",
	DataSilverSponsorsSponsorSlug = "data___silver_sponsors___sponsor___slug",
	DataSilverSponsorsSponsorTags = "data___silver_sponsors___sponsor___tags",
	DataSilverSponsorsSponsorTarget = "data___silver_sponsors___sponsor___target",
	DataSilverSponsorsSponsorType = "data___silver_sponsors___sponsor___type",
	DataSilverSponsorsSponsorUid = "data___silver_sponsors___sponsor___uid",
	DataSilverSponsorsSponsorUrl = "data___silver_sponsors___sponsor___url",
	DataTitleHtml = "data___title___html",
	DataTitleRaw = "data___title___raw",
	DataTitleRichText = "data___title___richText",
	DataTitleText = "data___title___text",
	DataVisionarySponsors = "data___visionary_sponsors",
	DataVisionarySponsorsSponsorId = "data___visionary_sponsors___sponsor___id",
	DataVisionarySponsorsSponsorIsBroken = "data___visionary_sponsors___sponsor___isBroken",
	DataVisionarySponsorsSponsorLang = "data___visionary_sponsors___sponsor___lang",
	DataVisionarySponsorsSponsorLinkType = "data___visionary_sponsors___sponsor___link_type",
	DataVisionarySponsorsSponsorRaw = "data___visionary_sponsors___sponsor___raw",
	DataVisionarySponsorsSponsorSize = "data___visionary_sponsors___sponsor___size",
	DataVisionarySponsorsSponsorSlug = "data___visionary_sponsors___sponsor___slug",
	DataVisionarySponsorsSponsorTags = "data___visionary_sponsors___sponsor___tags",
	DataVisionarySponsorsSponsorTarget = "data___visionary_sponsors___sponsor___target",
	DataVisionarySponsorsSponsorType = "data___visionary_sponsors___sponsor___type",
	DataVisionarySponsorsSponsorUid = "data___visionary_sponsors___sponsor___uid",
	DataVisionarySponsorsSponsorUrl = "data___visionary_sponsors___sponsor___url",
	FirstPublicationDate = "first_publication_date",
	Href = "href",
	Id = "id",
	InternalContent = "internal___content",
	InternalContentDigest = "internal___contentDigest",
	InternalContentFilePath = "internal___contentFilePath",
	InternalDescription = "internal___description",
	InternalFieldOwners = "internal___fieldOwners",
	InternalIgnoreType = "internal___ignoreType",
	InternalMediaType = "internal___mediaType",
	InternalOwner = "internal___owner",
	InternalType = "internal___type",
	Lang = "lang",
	LastPublicationDate = "last_publication_date",
	ParentChildren = "parent___children",
	ParentChildrenChildren = "parent___children___children",
	ParentChildrenChildrenChildren = "parent___children___children___children",
	ParentChildrenChildrenId = "parent___children___children___id",
	ParentChildrenId = "parent___children___id",
	ParentChildrenInternalContent = "parent___children___internal___content",
	ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
	ParentChildrenInternalContentFilePath = "parent___children___internal___contentFilePath",
	ParentChildrenInternalDescription = "parent___children___internal___description",
	ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
	ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
	ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
	ParentChildrenInternalOwner = "parent___children___internal___owner",
	ParentChildrenInternalType = "parent___children___internal___type",
	ParentChildrenParentChildren = "parent___children___parent___children",
	ParentChildrenParentId = "parent___children___parent___id",
	ParentId = "parent___id",
	ParentInternalContent = "parent___internal___content",
	ParentInternalContentDigest = "parent___internal___contentDigest",
	ParentInternalContentFilePath = "parent___internal___contentFilePath",
	ParentInternalDescription = "parent___internal___description",
	ParentInternalFieldOwners = "parent___internal___fieldOwners",
	ParentInternalIgnoreType = "parent___internal___ignoreType",
	ParentInternalMediaType = "parent___internal___mediaType",
	ParentInternalOwner = "parent___internal___owner",
	ParentInternalType = "parent___internal___type",
	ParentParentChildren = "parent___parent___children",
	ParentParentChildrenChildren = "parent___parent___children___children",
	ParentParentChildrenId = "parent___parent___children___id",
	ParentParentId = "parent___parent___id",
	ParentParentInternalContent = "parent___parent___internal___content",
	ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
	ParentParentInternalContentFilePath = "parent___parent___internal___contentFilePath",
	ParentParentInternalDescription = "parent___parent___internal___description",
	ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
	ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
	ParentParentInternalMediaType = "parent___parent___internal___mediaType",
	ParentParentInternalOwner = "parent___parent___internal___owner",
	ParentParentInternalType = "parent___parent___internal___type",
	ParentParentParentChildren = "parent___parent___parent___children",
	ParentParentParentId = "parent___parent___parent___id",
	PrismicId = "prismicId",
	Tags = "tags",
	Type = "type",
	Uid = "uid",
	Url = "url",
}

export type PrismicSponsorsListFilterInput = {
	_previewable?: InputMaybe<IdQueryOperatorInput>
	alternate_languages?: InputMaybe<PrismicAlternateLanguageTypeFilterListInput>
	children?: InputMaybe<NodeFilterListInput>
	data?: InputMaybe<PrismicSponsorsListDataTypeFilterInput>
	dataRaw?: InputMaybe<JsonQueryOperatorInput>
	first_publication_date?: InputMaybe<DateQueryOperatorInput>
	href?: InputMaybe<StringQueryOperatorInput>
	id?: InputMaybe<StringQueryOperatorInput>
	internal?: InputMaybe<InternalFilterInput>
	lang?: InputMaybe<StringQueryOperatorInput>
	last_publication_date?: InputMaybe<DateQueryOperatorInput>
	parent?: InputMaybe<NodeFilterInput>
	prismicId?: InputMaybe<IdQueryOperatorInput>
	tags?: InputMaybe<StringQueryOperatorInput>
	type?: InputMaybe<StringQueryOperatorInput>
	uid?: InputMaybe<StringQueryOperatorInput>
	url?: InputMaybe<StringQueryOperatorInput>
}

export type PrismicSponsorsListGroupConnection = {
	__typename?: "PrismicSponsorsListGroupConnection"
	distinct: Array<Scalars["String"]>
	edges: Array<PrismicSponsorsListEdge>
	field: Scalars["String"]
	fieldValue?: Maybe<Scalars["String"]>
	group: Array<PrismicSponsorsListGroupConnection>
	max?: Maybe<Scalars["Float"]>
	min?: Maybe<Scalars["Float"]>
	nodes: Array<PrismicSponsorsList>
	pageInfo: PageInfo
	sum?: Maybe<Scalars["Float"]>
	totalCount: Scalars["Int"]
}

export type PrismicSponsorsListGroupConnectionDistinctArgs = {
	field: PrismicSponsorsListFieldsEnum
}

export type PrismicSponsorsListGroupConnectionGroupArgs = {
	field: PrismicSponsorsListFieldsEnum
	limit?: InputMaybe<Scalars["Int"]>
	skip?: InputMaybe<Scalars["Int"]>
}

export type PrismicSponsorsListGroupConnectionMaxArgs = {
	field: PrismicSponsorsListFieldsEnum
}

export type PrismicSponsorsListGroupConnectionMinArgs = {
	field: PrismicSponsorsListFieldsEnum
}

export type PrismicSponsorsListGroupConnectionSumArgs = {
	field: PrismicSponsorsListFieldsEnum
}

export type PrismicSponsorsListSortInput = {
	fields?: InputMaybe<Array<InputMaybe<PrismicSponsorsListFieldsEnum>>>
	order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type PrismicStructuredTextQueryOperatorInput = {
	eq?: InputMaybe<Scalars["PrismicStructuredText"]>
	in?: InputMaybe<Array<InputMaybe<Scalars["PrismicStructuredText"]>>>
	ne?: InputMaybe<Scalars["PrismicStructuredText"]>
	nin?: InputMaybe<Array<InputMaybe<Scalars["PrismicStructuredText"]>>>
}

export type PrismicStructuredTextType = {
	__typename?: "PrismicStructuredTextType"
	html?: Maybe<Scalars["String"]>
	/** @deprecated This field has been renamed to `richText`. The `richText` field has the same value the `raw` field. */
	raw: Scalars["PrismicStructuredText"]
	richText: Scalars["PrismicStructuredText"]
	text?: Maybe<Scalars["String"]>
}

export type PrismicStructuredTextTypeFilterInput = {
	html?: InputMaybe<StringQueryOperatorInput>
	raw?: InputMaybe<PrismicStructuredTextQueryOperatorInput>
	richText?: InputMaybe<PrismicStructuredTextQueryOperatorInput>
	text?: InputMaybe<StringQueryOperatorInput>
}

export type PrismicSubmissionType = Node & {
	__typename?: "PrismicSubmissionType"
	_previewable: Scalars["ID"]
	alternate_languages: Array<PrismicAlternateLanguageType>
	children: Array<Node>
	data: PrismicSubmissionTypeDataType
	dataRaw: Scalars["JSON"]
	first_publication_date: Scalars["Date"]
	href: Scalars["String"]
	id: Scalars["ID"]
	internal: Internal
	lang: Scalars["String"]
	last_publication_date: Scalars["Date"]
	parent?: Maybe<Node>
	prismicId: Scalars["ID"]
	submissions?: Maybe<Array<Maybe<PrismicVideoSubmission>>>
	tags: Array<Scalars["String"]>
	type: Scalars["String"]
	uid: Scalars["String"]
	url?: Maybe<Scalars["String"]>
}

export type PrismicSubmissionTypeFirst_Publication_DateArgs = {
	difference?: InputMaybe<Scalars["String"]>
	formatString?: InputMaybe<Scalars["String"]>
	fromNow?: InputMaybe<Scalars["Boolean"]>
	locale?: InputMaybe<Scalars["String"]>
}

export type PrismicSubmissionTypeLast_Publication_DateArgs = {
	difference?: InputMaybe<Scalars["String"]>
	formatString?: InputMaybe<Scalars["String"]>
	fromNow?: InputMaybe<Scalars["Boolean"]>
	locale?: InputMaybe<Scalars["String"]>
}

export type PrismicSubmissionTypeConnection = {
	__typename?: "PrismicSubmissionTypeConnection"
	distinct: Array<Scalars["String"]>
	edges: Array<PrismicSubmissionTypeEdge>
	group: Array<PrismicSubmissionTypeGroupConnection>
	max?: Maybe<Scalars["Float"]>
	min?: Maybe<Scalars["Float"]>
	nodes: Array<PrismicSubmissionType>
	pageInfo: PageInfo
	sum?: Maybe<Scalars["Float"]>
	totalCount: Scalars["Int"]
}

export type PrismicSubmissionTypeConnectionDistinctArgs = {
	field: PrismicSubmissionTypeFieldsEnum
}

export type PrismicSubmissionTypeConnectionGroupArgs = {
	field: PrismicSubmissionTypeFieldsEnum
	limit?: InputMaybe<Scalars["Int"]>
	skip?: InputMaybe<Scalars["Int"]>
}

export type PrismicSubmissionTypeConnectionMaxArgs = {
	field: PrismicSubmissionTypeFieldsEnum
}

export type PrismicSubmissionTypeConnectionMinArgs = {
	field: PrismicSubmissionTypeFieldsEnum
}

export type PrismicSubmissionTypeConnectionSumArgs = {
	field: PrismicSubmissionTypeFieldsEnum
}

export type PrismicSubmissionTypeDataType = {
	__typename?: "PrismicSubmissionTypeDataType"
	end_time?: Maybe<Scalars["Date"]>
	mute_videos?: Maybe<Scalars["Boolean"]>
	name?: Maybe<PrismicStructuredTextType>
	votable?: Maybe<Scalars["Boolean"]>
}

export type PrismicSubmissionTypeDataTypeEnd_TimeArgs = {
	difference?: InputMaybe<Scalars["String"]>
	formatString?: InputMaybe<Scalars["String"]>
	fromNow?: InputMaybe<Scalars["Boolean"]>
	locale?: InputMaybe<Scalars["String"]>
}

export type PrismicSubmissionTypeDataTypeFilterInput = {
	end_time?: InputMaybe<DateQueryOperatorInput>
	mute_videos?: InputMaybe<BooleanQueryOperatorInput>
	name?: InputMaybe<PrismicStructuredTextTypeFilterInput>
	votable?: InputMaybe<BooleanQueryOperatorInput>
}

export type PrismicSubmissionTypeEdge = {
	__typename?: "PrismicSubmissionTypeEdge"
	next?: Maybe<PrismicSubmissionType>
	node: PrismicSubmissionType
	previous?: Maybe<PrismicSubmissionType>
}

export enum PrismicSubmissionTypeFieldsEnum {
	Previewable = "_previewable",
	AlternateLanguages = "alternate_languages",
	AlternateLanguagesId = "alternate_languages___id",
	AlternateLanguagesLang = "alternate_languages___lang",
	AlternateLanguagesRaw = "alternate_languages___raw",
	AlternateLanguagesType = "alternate_languages___type",
	AlternateLanguagesUid = "alternate_languages___uid",
	Children = "children",
	ChildrenChildren = "children___children",
	ChildrenChildrenChildren = "children___children___children",
	ChildrenChildrenChildrenChildren = "children___children___children___children",
	ChildrenChildrenChildrenId = "children___children___children___id",
	ChildrenChildrenId = "children___children___id",
	ChildrenChildrenInternalContent = "children___children___internal___content",
	ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
	ChildrenChildrenInternalContentFilePath = "children___children___internal___contentFilePath",
	ChildrenChildrenInternalDescription = "children___children___internal___description",
	ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
	ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
	ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
	ChildrenChildrenInternalOwner = "children___children___internal___owner",
	ChildrenChildrenInternalType = "children___children___internal___type",
	ChildrenChildrenParentChildren = "children___children___parent___children",
	ChildrenChildrenParentId = "children___children___parent___id",
	ChildrenId = "children___id",
	ChildrenInternalContent = "children___internal___content",
	ChildrenInternalContentDigest = "children___internal___contentDigest",
	ChildrenInternalContentFilePath = "children___internal___contentFilePath",
	ChildrenInternalDescription = "children___internal___description",
	ChildrenInternalFieldOwners = "children___internal___fieldOwners",
	ChildrenInternalIgnoreType = "children___internal___ignoreType",
	ChildrenInternalMediaType = "children___internal___mediaType",
	ChildrenInternalOwner = "children___internal___owner",
	ChildrenInternalType = "children___internal___type",
	ChildrenParentChildren = "children___parent___children",
	ChildrenParentChildrenChildren = "children___parent___children___children",
	ChildrenParentChildrenId = "children___parent___children___id",
	ChildrenParentId = "children___parent___id",
	ChildrenParentInternalContent = "children___parent___internal___content",
	ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
	ChildrenParentInternalContentFilePath = "children___parent___internal___contentFilePath",
	ChildrenParentInternalDescription = "children___parent___internal___description",
	ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
	ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
	ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
	ChildrenParentInternalOwner = "children___parent___internal___owner",
	ChildrenParentInternalType = "children___parent___internal___type",
	ChildrenParentParentChildren = "children___parent___parent___children",
	ChildrenParentParentId = "children___parent___parent___id",
	DataRaw = "dataRaw",
	DataEndTime = "data___end_time",
	DataMuteVideos = "data___mute_videos",
	DataNameHtml = "data___name___html",
	DataNameRaw = "data___name___raw",
	DataNameRichText = "data___name___richText",
	DataNameText = "data___name___text",
	DataVotable = "data___votable",
	FirstPublicationDate = "first_publication_date",
	Href = "href",
	Id = "id",
	InternalContent = "internal___content",
	InternalContentDigest = "internal___contentDigest",
	InternalContentFilePath = "internal___contentFilePath",
	InternalDescription = "internal___description",
	InternalFieldOwners = "internal___fieldOwners",
	InternalIgnoreType = "internal___ignoreType",
	InternalMediaType = "internal___mediaType",
	InternalOwner = "internal___owner",
	InternalType = "internal___type",
	Lang = "lang",
	LastPublicationDate = "last_publication_date",
	ParentChildren = "parent___children",
	ParentChildrenChildren = "parent___children___children",
	ParentChildrenChildrenChildren = "parent___children___children___children",
	ParentChildrenChildrenId = "parent___children___children___id",
	ParentChildrenId = "parent___children___id",
	ParentChildrenInternalContent = "parent___children___internal___content",
	ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
	ParentChildrenInternalContentFilePath = "parent___children___internal___contentFilePath",
	ParentChildrenInternalDescription = "parent___children___internal___description",
	ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
	ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
	ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
	ParentChildrenInternalOwner = "parent___children___internal___owner",
	ParentChildrenInternalType = "parent___children___internal___type",
	ParentChildrenParentChildren = "parent___children___parent___children",
	ParentChildrenParentId = "parent___children___parent___id",
	ParentId = "parent___id",
	ParentInternalContent = "parent___internal___content",
	ParentInternalContentDigest = "parent___internal___contentDigest",
	ParentInternalContentFilePath = "parent___internal___contentFilePath",
	ParentInternalDescription = "parent___internal___description",
	ParentInternalFieldOwners = "parent___internal___fieldOwners",
	ParentInternalIgnoreType = "parent___internal___ignoreType",
	ParentInternalMediaType = "parent___internal___mediaType",
	ParentInternalOwner = "parent___internal___owner",
	ParentInternalType = "parent___internal___type",
	ParentParentChildren = "parent___parent___children",
	ParentParentChildrenChildren = "parent___parent___children___children",
	ParentParentChildrenId = "parent___parent___children___id",
	ParentParentId = "parent___parent___id",
	ParentParentInternalContent = "parent___parent___internal___content",
	ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
	ParentParentInternalContentFilePath = "parent___parent___internal___contentFilePath",
	ParentParentInternalDescription = "parent___parent___internal___description",
	ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
	ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
	ParentParentInternalMediaType = "parent___parent___internal___mediaType",
	ParentParentInternalOwner = "parent___parent___internal___owner",
	ParentParentInternalType = "parent___parent___internal___type",
	ParentParentParentChildren = "parent___parent___parent___children",
	ParentParentParentId = "parent___parent___parent___id",
	PrismicId = "prismicId",
	Tags = "tags",
	Type = "type",
	Uid = "uid",
	Url = "url",
}

export type PrismicSubmissionTypeFilterInput = {
	_previewable?: InputMaybe<IdQueryOperatorInput>
	alternate_languages?: InputMaybe<PrismicAlternateLanguageTypeFilterListInput>
	children?: InputMaybe<NodeFilterListInput>
	data?: InputMaybe<PrismicSubmissionTypeDataTypeFilterInput>
	dataRaw?: InputMaybe<JsonQueryOperatorInput>
	first_publication_date?: InputMaybe<DateQueryOperatorInput>
	href?: InputMaybe<StringQueryOperatorInput>
	id?: InputMaybe<StringQueryOperatorInput>
	internal?: InputMaybe<InternalFilterInput>
	lang?: InputMaybe<StringQueryOperatorInput>
	last_publication_date?: InputMaybe<DateQueryOperatorInput>
	parent?: InputMaybe<NodeFilterInput>
	prismicId?: InputMaybe<IdQueryOperatorInput>
	tags?: InputMaybe<StringQueryOperatorInput>
	type?: InputMaybe<StringQueryOperatorInput>
	uid?: InputMaybe<StringQueryOperatorInput>
	url?: InputMaybe<StringQueryOperatorInput>
}

export type PrismicSubmissionTypeGroupConnection = {
	__typename?: "PrismicSubmissionTypeGroupConnection"
	distinct: Array<Scalars["String"]>
	edges: Array<PrismicSubmissionTypeEdge>
	field: Scalars["String"]
	fieldValue?: Maybe<Scalars["String"]>
	group: Array<PrismicSubmissionTypeGroupConnection>
	max?: Maybe<Scalars["Float"]>
	min?: Maybe<Scalars["Float"]>
	nodes: Array<PrismicSubmissionType>
	pageInfo: PageInfo
	sum?: Maybe<Scalars["Float"]>
	totalCount: Scalars["Int"]
}

export type PrismicSubmissionTypeGroupConnectionDistinctArgs = {
	field: PrismicSubmissionTypeFieldsEnum
}

export type PrismicSubmissionTypeGroupConnectionGroupArgs = {
	field: PrismicSubmissionTypeFieldsEnum
	limit?: InputMaybe<Scalars["Int"]>
	skip?: InputMaybe<Scalars["Int"]>
}

export type PrismicSubmissionTypeGroupConnectionMaxArgs = {
	field: PrismicSubmissionTypeFieldsEnum
}

export type PrismicSubmissionTypeGroupConnectionMinArgs = {
	field: PrismicSubmissionTypeFieldsEnum
}

export type PrismicSubmissionTypeGroupConnectionSumArgs = {
	field: PrismicSubmissionTypeFieldsEnum
}

export type PrismicSubmissionTypeSortInput = {
	fields?: InputMaybe<Array<InputMaybe<PrismicSubmissionTypeFieldsEnum>>>
	order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type PrismicTypePathType = Node & {
	__typename?: "PrismicTypePathType"
	children: Array<Node>
	id: Scalars["ID"]
	internal: Internal
	kind: Scalars["String"]
	parent?: Maybe<Node>
	path: Array<Scalars["String"]>
	type: Scalars["String"]
}

export type PrismicTypePathTypeConnection = {
	__typename?: "PrismicTypePathTypeConnection"
	distinct: Array<Scalars["String"]>
	edges: Array<PrismicTypePathTypeEdge>
	group: Array<PrismicTypePathTypeGroupConnection>
	max?: Maybe<Scalars["Float"]>
	min?: Maybe<Scalars["Float"]>
	nodes: Array<PrismicTypePathType>
	pageInfo: PageInfo
	sum?: Maybe<Scalars["Float"]>
	totalCount: Scalars["Int"]
}

export type PrismicTypePathTypeConnectionDistinctArgs = {
	field: PrismicTypePathTypeFieldsEnum
}

export type PrismicTypePathTypeConnectionGroupArgs = {
	field: PrismicTypePathTypeFieldsEnum
	limit?: InputMaybe<Scalars["Int"]>
	skip?: InputMaybe<Scalars["Int"]>
}

export type PrismicTypePathTypeConnectionMaxArgs = {
	field: PrismicTypePathTypeFieldsEnum
}

export type PrismicTypePathTypeConnectionMinArgs = {
	field: PrismicTypePathTypeFieldsEnum
}

export type PrismicTypePathTypeConnectionSumArgs = {
	field: PrismicTypePathTypeFieldsEnum
}

export type PrismicTypePathTypeEdge = {
	__typename?: "PrismicTypePathTypeEdge"
	next?: Maybe<PrismicTypePathType>
	node: PrismicTypePathType
	previous?: Maybe<PrismicTypePathType>
}

export enum PrismicTypePathTypeFieldsEnum {
	Children = "children",
	ChildrenChildren = "children___children",
	ChildrenChildrenChildren = "children___children___children",
	ChildrenChildrenChildrenChildren = "children___children___children___children",
	ChildrenChildrenChildrenId = "children___children___children___id",
	ChildrenChildrenId = "children___children___id",
	ChildrenChildrenInternalContent = "children___children___internal___content",
	ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
	ChildrenChildrenInternalContentFilePath = "children___children___internal___contentFilePath",
	ChildrenChildrenInternalDescription = "children___children___internal___description",
	ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
	ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
	ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
	ChildrenChildrenInternalOwner = "children___children___internal___owner",
	ChildrenChildrenInternalType = "children___children___internal___type",
	ChildrenChildrenParentChildren = "children___children___parent___children",
	ChildrenChildrenParentId = "children___children___parent___id",
	ChildrenId = "children___id",
	ChildrenInternalContent = "children___internal___content",
	ChildrenInternalContentDigest = "children___internal___contentDigest",
	ChildrenInternalContentFilePath = "children___internal___contentFilePath",
	ChildrenInternalDescription = "children___internal___description",
	ChildrenInternalFieldOwners = "children___internal___fieldOwners",
	ChildrenInternalIgnoreType = "children___internal___ignoreType",
	ChildrenInternalMediaType = "children___internal___mediaType",
	ChildrenInternalOwner = "children___internal___owner",
	ChildrenInternalType = "children___internal___type",
	ChildrenParentChildren = "children___parent___children",
	ChildrenParentChildrenChildren = "children___parent___children___children",
	ChildrenParentChildrenId = "children___parent___children___id",
	ChildrenParentId = "children___parent___id",
	ChildrenParentInternalContent = "children___parent___internal___content",
	ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
	ChildrenParentInternalContentFilePath = "children___parent___internal___contentFilePath",
	ChildrenParentInternalDescription = "children___parent___internal___description",
	ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
	ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
	ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
	ChildrenParentInternalOwner = "children___parent___internal___owner",
	ChildrenParentInternalType = "children___parent___internal___type",
	ChildrenParentParentChildren = "children___parent___parent___children",
	ChildrenParentParentId = "children___parent___parent___id",
	Id = "id",
	InternalContent = "internal___content",
	InternalContentDigest = "internal___contentDigest",
	InternalContentFilePath = "internal___contentFilePath",
	InternalDescription = "internal___description",
	InternalFieldOwners = "internal___fieldOwners",
	InternalIgnoreType = "internal___ignoreType",
	InternalMediaType = "internal___mediaType",
	InternalOwner = "internal___owner",
	InternalType = "internal___type",
	Kind = "kind",
	ParentChildren = "parent___children",
	ParentChildrenChildren = "parent___children___children",
	ParentChildrenChildrenChildren = "parent___children___children___children",
	ParentChildrenChildrenId = "parent___children___children___id",
	ParentChildrenId = "parent___children___id",
	ParentChildrenInternalContent = "parent___children___internal___content",
	ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
	ParentChildrenInternalContentFilePath = "parent___children___internal___contentFilePath",
	ParentChildrenInternalDescription = "parent___children___internal___description",
	ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
	ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
	ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
	ParentChildrenInternalOwner = "parent___children___internal___owner",
	ParentChildrenInternalType = "parent___children___internal___type",
	ParentChildrenParentChildren = "parent___children___parent___children",
	ParentChildrenParentId = "parent___children___parent___id",
	ParentId = "parent___id",
	ParentInternalContent = "parent___internal___content",
	ParentInternalContentDigest = "parent___internal___contentDigest",
	ParentInternalContentFilePath = "parent___internal___contentFilePath",
	ParentInternalDescription = "parent___internal___description",
	ParentInternalFieldOwners = "parent___internal___fieldOwners",
	ParentInternalIgnoreType = "parent___internal___ignoreType",
	ParentInternalMediaType = "parent___internal___mediaType",
	ParentInternalOwner = "parent___internal___owner",
	ParentInternalType = "parent___internal___type",
	ParentParentChildren = "parent___parent___children",
	ParentParentChildrenChildren = "parent___parent___children___children",
	ParentParentChildrenId = "parent___parent___children___id",
	ParentParentId = "parent___parent___id",
	ParentParentInternalContent = "parent___parent___internal___content",
	ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
	ParentParentInternalContentFilePath = "parent___parent___internal___contentFilePath",
	ParentParentInternalDescription = "parent___parent___internal___description",
	ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
	ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
	ParentParentInternalMediaType = "parent___parent___internal___mediaType",
	ParentParentInternalOwner = "parent___parent___internal___owner",
	ParentParentInternalType = "parent___parent___internal___type",
	ParentParentParentChildren = "parent___parent___parent___children",
	ParentParentParentId = "parent___parent___parent___id",
	Path = "path",
	Type = "type",
}

export type PrismicTypePathTypeFilterInput = {
	children?: InputMaybe<NodeFilterListInput>
	id?: InputMaybe<StringQueryOperatorInput>
	internal?: InputMaybe<InternalFilterInput>
	kind?: InputMaybe<StringQueryOperatorInput>
	parent?: InputMaybe<NodeFilterInput>
	path?: InputMaybe<StringQueryOperatorInput>
	type?: InputMaybe<StringQueryOperatorInput>
}

export type PrismicTypePathTypeGroupConnection = {
	__typename?: "PrismicTypePathTypeGroupConnection"
	distinct: Array<Scalars["String"]>
	edges: Array<PrismicTypePathTypeEdge>
	field: Scalars["String"]
	fieldValue?: Maybe<Scalars["String"]>
	group: Array<PrismicTypePathTypeGroupConnection>
	max?: Maybe<Scalars["Float"]>
	min?: Maybe<Scalars["Float"]>
	nodes: Array<PrismicTypePathType>
	pageInfo: PageInfo
	sum?: Maybe<Scalars["Float"]>
	totalCount: Scalars["Int"]
}

export type PrismicTypePathTypeGroupConnectionDistinctArgs = {
	field: PrismicTypePathTypeFieldsEnum
}

export type PrismicTypePathTypeGroupConnectionGroupArgs = {
	field: PrismicTypePathTypeFieldsEnum
	limit?: InputMaybe<Scalars["Int"]>
	skip?: InputMaybe<Scalars["Int"]>
}

export type PrismicTypePathTypeGroupConnectionMaxArgs = {
	field: PrismicTypePathTypeFieldsEnum
}

export type PrismicTypePathTypeGroupConnectionMinArgs = {
	field: PrismicTypePathTypeFieldsEnum
}

export type PrismicTypePathTypeGroupConnectionSumArgs = {
	field: PrismicTypePathTypeFieldsEnum
}

export type PrismicTypePathTypeSortInput = {
	fields?: InputMaybe<Array<InputMaybe<PrismicTypePathTypeFieldsEnum>>>
	order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type PrismicVideoSubmission = Node & {
	__typename?: "PrismicVideoSubmission"
	_previewable: Scalars["ID"]
	alternate_languages: Array<PrismicAlternateLanguageType>
	children: Array<Node>
	data: PrismicVideoSubmissionDataType
	dataRaw: Scalars["JSON"]
	first_publication_date: Scalars["Date"]
	href: Scalars["String"]
	id: Scalars["ID"]
	internal: Internal
	lang: Scalars["String"]
	last_publication_date: Scalars["Date"]
	parent?: Maybe<Node>
	prismicId: Scalars["ID"]
	tags: Array<Scalars["String"]>
	type: Scalars["String"]
	uid: Scalars["String"]
	url?: Maybe<Scalars["String"]>
}

export type PrismicVideoSubmissionFirst_Publication_DateArgs = {
	difference?: InputMaybe<Scalars["String"]>
	formatString?: InputMaybe<Scalars["String"]>
	fromNow?: InputMaybe<Scalars["Boolean"]>
	locale?: InputMaybe<Scalars["String"]>
}

export type PrismicVideoSubmissionLast_Publication_DateArgs = {
	difference?: InputMaybe<Scalars["String"]>
	formatString?: InputMaybe<Scalars["String"]>
	fromNow?: InputMaybe<Scalars["Boolean"]>
	locale?: InputMaybe<Scalars["String"]>
}

export type PrismicVideoSubmissionConnection = {
	__typename?: "PrismicVideoSubmissionConnection"
	distinct: Array<Scalars["String"]>
	edges: Array<PrismicVideoSubmissionEdge>
	group: Array<PrismicVideoSubmissionGroupConnection>
	max?: Maybe<Scalars["Float"]>
	min?: Maybe<Scalars["Float"]>
	nodes: Array<PrismicVideoSubmission>
	pageInfo: PageInfo
	sum?: Maybe<Scalars["Float"]>
	totalCount: Scalars["Int"]
}

export type PrismicVideoSubmissionConnectionDistinctArgs = {
	field: PrismicVideoSubmissionFieldsEnum
}

export type PrismicVideoSubmissionConnectionGroupArgs = {
	field: PrismicVideoSubmissionFieldsEnum
	limit?: InputMaybe<Scalars["Int"]>
	skip?: InputMaybe<Scalars["Int"]>
}

export type PrismicVideoSubmissionConnectionMaxArgs = {
	field: PrismicVideoSubmissionFieldsEnum
}

export type PrismicVideoSubmissionConnectionMinArgs = {
	field: PrismicVideoSubmissionFieldsEnum
}

export type PrismicVideoSubmissionConnectionSumArgs = {
	field: PrismicVideoSubmissionFieldsEnum
}

export type PrismicVideoSubmissionDataType = {
	__typename?: "PrismicVideoSubmissionDataType"
	description?: Maybe<PrismicStructuredTextType>
	name?: Maybe<PrismicStructuredTextType>
	subtitle?: Maybe<PrismicStructuredTextType>
	type?: Maybe<PrismicLinkType>
	video_thumbnail?: Maybe<PrismicVideoSubmissionDataVideoThumbnailImageType>
	video_url?: Maybe<Scalars["String"]>
}

export type PrismicVideoSubmissionDataTypeFilterInput = {
	description?: InputMaybe<PrismicStructuredTextTypeFilterInput>
	name?: InputMaybe<PrismicStructuredTextTypeFilterInput>
	subtitle?: InputMaybe<PrismicStructuredTextTypeFilterInput>
	type?: InputMaybe<PrismicLinkTypeFilterInput>
	video_thumbnail?: InputMaybe<PrismicVideoSubmissionDataVideoThumbnailImageTypeFilterInput>
	video_url?: InputMaybe<StringQueryOperatorInput>
}

export type PrismicVideoSubmissionDataVideoThumbnailImageType = {
	__typename?: "PrismicVideoSubmissionDataVideoThumbnailImageType"
	alt?: Maybe<Scalars["String"]>
	copyright?: Maybe<Scalars["String"]>
	dimensions?: Maybe<PrismicImageDimensionsType>
	/** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
	fixed?: Maybe<ImgixFixed>
	/** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
	fluid?: Maybe<ImgixFluid>
	gatsbyImageData?: Maybe<Scalars["JSON"]>
	localFile?: Maybe<File>
	/** A plain imgix URL with the URL and params applied. */
	url?: Maybe<Scalars["String"]>
}

export type PrismicVideoSubmissionDataVideoThumbnailImageTypeFixedArgs = {
	height?: InputMaybe<Scalars["Int"]>
	imgixParams?: InputMaybe<ImgixParamsInput>
	placeholderImgixParams?: InputMaybe<ImgixParamsInput>
	quality?: InputMaybe<Scalars["Int"]>
	width?: InputMaybe<Scalars["Int"]>
}

export type PrismicVideoSubmissionDataVideoThumbnailImageTypeFluidArgs = {
	imgixParams?: InputMaybe<ImgixParamsInput>
	maxHeight?: InputMaybe<Scalars["Int"]>
	maxWidth?: InputMaybe<Scalars["Int"]>
	placeholderImgixParams?: InputMaybe<ImgixParamsInput>
	srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
}

export type PrismicVideoSubmissionDataVideoThumbnailImageTypeGatsbyImageDataArgs =
	{
		aspectRatio?: InputMaybe<Scalars["Float"]>
		backgroundColor?: InputMaybe<Scalars["String"]>
		breakpoints?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
		height?: InputMaybe<Scalars["Int"]>
		imgixParams?: InputMaybe<ImgixParamsInput>
		layout?: InputMaybe<GatsbyImageLayout>
		outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>
		placeholder?: InputMaybe<ImgixPlaceholder>
		placeholderImgixParams?: InputMaybe<ImgixParamsInput>
		sizes?: InputMaybe<Scalars["String"]>
		srcSetMaxWidth?: InputMaybe<Scalars["Int"]>
		srcSetMinWidth?: InputMaybe<Scalars["Int"]>
		width?: InputMaybe<Scalars["Int"]>
		widthTolerance?: InputMaybe<Scalars["Float"]>
	}

export type PrismicVideoSubmissionDataVideoThumbnailImageTypeUrlArgs = {
	imgixParams?: InputMaybe<ImgixParamsInput>
}

export type PrismicVideoSubmissionDataVideoThumbnailImageTypeFilterInput = {
	alt?: InputMaybe<StringQueryOperatorInput>
	copyright?: InputMaybe<StringQueryOperatorInput>
	dimensions?: InputMaybe<PrismicImageDimensionsTypeFilterInput>
	fixed?: InputMaybe<ImgixFixedFilterInput>
	fluid?: InputMaybe<ImgixFluidFilterInput>
	gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>
	localFile?: InputMaybe<FileFilterInput>
	url?: InputMaybe<StringQueryOperatorInput>
}

export type PrismicVideoSubmissionEdge = {
	__typename?: "PrismicVideoSubmissionEdge"
	next?: Maybe<PrismicVideoSubmission>
	node: PrismicVideoSubmission
	previous?: Maybe<PrismicVideoSubmission>
}

export enum PrismicVideoSubmissionFieldsEnum {
	Previewable = "_previewable",
	AlternateLanguages = "alternate_languages",
	AlternateLanguagesId = "alternate_languages___id",
	AlternateLanguagesLang = "alternate_languages___lang",
	AlternateLanguagesRaw = "alternate_languages___raw",
	AlternateLanguagesType = "alternate_languages___type",
	AlternateLanguagesUid = "alternate_languages___uid",
	Children = "children",
	ChildrenChildren = "children___children",
	ChildrenChildrenChildren = "children___children___children",
	ChildrenChildrenChildrenChildren = "children___children___children___children",
	ChildrenChildrenChildrenId = "children___children___children___id",
	ChildrenChildrenId = "children___children___id",
	ChildrenChildrenInternalContent = "children___children___internal___content",
	ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
	ChildrenChildrenInternalContentFilePath = "children___children___internal___contentFilePath",
	ChildrenChildrenInternalDescription = "children___children___internal___description",
	ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
	ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
	ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
	ChildrenChildrenInternalOwner = "children___children___internal___owner",
	ChildrenChildrenInternalType = "children___children___internal___type",
	ChildrenChildrenParentChildren = "children___children___parent___children",
	ChildrenChildrenParentId = "children___children___parent___id",
	ChildrenId = "children___id",
	ChildrenInternalContent = "children___internal___content",
	ChildrenInternalContentDigest = "children___internal___contentDigest",
	ChildrenInternalContentFilePath = "children___internal___contentFilePath",
	ChildrenInternalDescription = "children___internal___description",
	ChildrenInternalFieldOwners = "children___internal___fieldOwners",
	ChildrenInternalIgnoreType = "children___internal___ignoreType",
	ChildrenInternalMediaType = "children___internal___mediaType",
	ChildrenInternalOwner = "children___internal___owner",
	ChildrenInternalType = "children___internal___type",
	ChildrenParentChildren = "children___parent___children",
	ChildrenParentChildrenChildren = "children___parent___children___children",
	ChildrenParentChildrenId = "children___parent___children___id",
	ChildrenParentId = "children___parent___id",
	ChildrenParentInternalContent = "children___parent___internal___content",
	ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
	ChildrenParentInternalContentFilePath = "children___parent___internal___contentFilePath",
	ChildrenParentInternalDescription = "children___parent___internal___description",
	ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
	ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
	ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
	ChildrenParentInternalOwner = "children___parent___internal___owner",
	ChildrenParentInternalType = "children___parent___internal___type",
	ChildrenParentParentChildren = "children___parent___parent___children",
	ChildrenParentParentId = "children___parent___parent___id",
	DataRaw = "dataRaw",
	DataDescriptionHtml = "data___description___html",
	DataDescriptionRaw = "data___description___raw",
	DataDescriptionRichText = "data___description___richText",
	DataDescriptionText = "data___description___text",
	DataNameHtml = "data___name___html",
	DataNameRaw = "data___name___raw",
	DataNameRichText = "data___name___richText",
	DataNameText = "data___name___text",
	DataSubtitleHtml = "data___subtitle___html",
	DataSubtitleRaw = "data___subtitle___raw",
	DataSubtitleRichText = "data___subtitle___richText",
	DataSubtitleText = "data___subtitle___text",
	DataTypeId = "data___type___id",
	DataTypeIsBroken = "data___type___isBroken",
	DataTypeLang = "data___type___lang",
	DataTypeLinkType = "data___type___link_type",
	DataTypeLocalFileAbsolutePath = "data___type___localFile___absolutePath",
	DataTypeLocalFileAccessTime = "data___type___localFile___accessTime",
	DataTypeLocalFileAtime = "data___type___localFile___atime",
	DataTypeLocalFileAtimeMs = "data___type___localFile___atimeMs",
	DataTypeLocalFileBase = "data___type___localFile___base",
	DataTypeLocalFileBirthTime = "data___type___localFile___birthTime",
	DataTypeLocalFileBirthtime = "data___type___localFile___birthtime",
	DataTypeLocalFileBirthtimeMs = "data___type___localFile___birthtimeMs",
	DataTypeLocalFileChangeTime = "data___type___localFile___changeTime",
	DataTypeLocalFileChildren = "data___type___localFile___children",
	DataTypeLocalFileCtime = "data___type___localFile___ctime",
	DataTypeLocalFileCtimeMs = "data___type___localFile___ctimeMs",
	DataTypeLocalFileDev = "data___type___localFile___dev",
	DataTypeLocalFileDir = "data___type___localFile___dir",
	DataTypeLocalFileExt = "data___type___localFile___ext",
	DataTypeLocalFileExtension = "data___type___localFile___extension",
	DataTypeLocalFileGid = "data___type___localFile___gid",
	DataTypeLocalFileId = "data___type___localFile___id",
	DataTypeLocalFileIno = "data___type___localFile___ino",
	DataTypeLocalFileMode = "data___type___localFile___mode",
	DataTypeLocalFileModifiedTime = "data___type___localFile___modifiedTime",
	DataTypeLocalFileMtime = "data___type___localFile___mtime",
	DataTypeLocalFileMtimeMs = "data___type___localFile___mtimeMs",
	DataTypeLocalFileName = "data___type___localFile___name",
	DataTypeLocalFileNlink = "data___type___localFile___nlink",
	DataTypeLocalFilePrettySize = "data___type___localFile___prettySize",
	DataTypeLocalFileRdev = "data___type___localFile___rdev",
	DataTypeLocalFileRelativeDirectory = "data___type___localFile___relativeDirectory",
	DataTypeLocalFileRelativePath = "data___type___localFile___relativePath",
	DataTypeLocalFileRoot = "data___type___localFile___root",
	DataTypeLocalFileSize = "data___type___localFile___size",
	DataTypeLocalFileSourceInstanceName = "data___type___localFile___sourceInstanceName",
	DataTypeLocalFileUid = "data___type___localFile___uid",
	DataTypeRaw = "data___type___raw",
	DataTypeSize = "data___type___size",
	DataTypeSlug = "data___type___slug",
	DataTypeTags = "data___type___tags",
	DataTypeTarget = "data___type___target",
	DataTypeType = "data___type___type",
	DataTypeUid = "data___type___uid",
	DataTypeUrl = "data___type___url",
	DataVideoThumbnailAlt = "data___video_thumbnail___alt",
	DataVideoThumbnailCopyright = "data___video_thumbnail___copyright",
	DataVideoThumbnailDimensionsHeight = "data___video_thumbnail___dimensions___height",
	DataVideoThumbnailDimensionsWidth = "data___video_thumbnail___dimensions___width",
	/** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
	DataVideoThumbnailFixedBase64 = "data___video_thumbnail___fixed___base64",
	/** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
	DataVideoThumbnailFixedHeight = "data___video_thumbnail___fixed___height",
	/** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
	DataVideoThumbnailFixedSizes = "data___video_thumbnail___fixed___sizes",
	/** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
	DataVideoThumbnailFixedSrc = "data___video_thumbnail___fixed___src",
	/** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
	DataVideoThumbnailFixedSrcSet = "data___video_thumbnail___fixed___srcSet",
	/** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
	DataVideoThumbnailFixedSrcSetWebp = "data___video_thumbnail___fixed___srcSetWebp",
	/** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
	DataVideoThumbnailFixedSrcWebp = "data___video_thumbnail___fixed___srcWebp",
	/** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
	DataVideoThumbnailFixedWidth = "data___video_thumbnail___fixed___width",
	/** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
	DataVideoThumbnailFluidAspectRatio = "data___video_thumbnail___fluid___aspectRatio",
	/** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
	DataVideoThumbnailFluidBase64 = "data___video_thumbnail___fluid___base64",
	/** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
	DataVideoThumbnailFluidSizes = "data___video_thumbnail___fluid___sizes",
	/** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
	DataVideoThumbnailFluidSrc = "data___video_thumbnail___fluid___src",
	/** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
	DataVideoThumbnailFluidSrcSet = "data___video_thumbnail___fluid___srcSet",
	/** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
	DataVideoThumbnailFluidSrcSetWebp = "data___video_thumbnail___fluid___srcSetWebp",
	/** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
	DataVideoThumbnailFluidSrcWebp = "data___video_thumbnail___fluid___srcWebp",
	/** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
	DataVideoThumbnailGatsbyImageData = "data___video_thumbnail___gatsbyImageData",
	DataVideoThumbnailLocalFileAbsolutePath = "data___video_thumbnail___localFile___absolutePath",
	DataVideoThumbnailLocalFileAccessTime = "data___video_thumbnail___localFile___accessTime",
	DataVideoThumbnailLocalFileAtime = "data___video_thumbnail___localFile___atime",
	DataVideoThumbnailLocalFileAtimeMs = "data___video_thumbnail___localFile___atimeMs",
	DataVideoThumbnailLocalFileBase = "data___video_thumbnail___localFile___base",
	DataVideoThumbnailLocalFileBirthTime = "data___video_thumbnail___localFile___birthTime",
	DataVideoThumbnailLocalFileBirthtime = "data___video_thumbnail___localFile___birthtime",
	DataVideoThumbnailLocalFileBirthtimeMs = "data___video_thumbnail___localFile___birthtimeMs",
	DataVideoThumbnailLocalFileChangeTime = "data___video_thumbnail___localFile___changeTime",
	DataVideoThumbnailLocalFileChildren = "data___video_thumbnail___localFile___children",
	DataVideoThumbnailLocalFileCtime = "data___video_thumbnail___localFile___ctime",
	DataVideoThumbnailLocalFileCtimeMs = "data___video_thumbnail___localFile___ctimeMs",
	DataVideoThumbnailLocalFileDev = "data___video_thumbnail___localFile___dev",
	DataVideoThumbnailLocalFileDir = "data___video_thumbnail___localFile___dir",
	DataVideoThumbnailLocalFileExt = "data___video_thumbnail___localFile___ext",
	DataVideoThumbnailLocalFileExtension = "data___video_thumbnail___localFile___extension",
	DataVideoThumbnailLocalFileGid = "data___video_thumbnail___localFile___gid",
	DataVideoThumbnailLocalFileId = "data___video_thumbnail___localFile___id",
	DataVideoThumbnailLocalFileIno = "data___video_thumbnail___localFile___ino",
	DataVideoThumbnailLocalFileMode = "data___video_thumbnail___localFile___mode",
	DataVideoThumbnailLocalFileModifiedTime = "data___video_thumbnail___localFile___modifiedTime",
	DataVideoThumbnailLocalFileMtime = "data___video_thumbnail___localFile___mtime",
	DataVideoThumbnailLocalFileMtimeMs = "data___video_thumbnail___localFile___mtimeMs",
	DataVideoThumbnailLocalFileName = "data___video_thumbnail___localFile___name",
	DataVideoThumbnailLocalFileNlink = "data___video_thumbnail___localFile___nlink",
	DataVideoThumbnailLocalFilePrettySize = "data___video_thumbnail___localFile___prettySize",
	DataVideoThumbnailLocalFileRdev = "data___video_thumbnail___localFile___rdev",
	DataVideoThumbnailLocalFileRelativeDirectory = "data___video_thumbnail___localFile___relativeDirectory",
	DataVideoThumbnailLocalFileRelativePath = "data___video_thumbnail___localFile___relativePath",
	DataVideoThumbnailLocalFileRoot = "data___video_thumbnail___localFile___root",
	DataVideoThumbnailLocalFileSize = "data___video_thumbnail___localFile___size",
	DataVideoThumbnailLocalFileSourceInstanceName = "data___video_thumbnail___localFile___sourceInstanceName",
	DataVideoThumbnailLocalFileUid = "data___video_thumbnail___localFile___uid",
	/** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
	DataVideoThumbnailUrl = "data___video_thumbnail___url",
	DataVideoUrl = "data___video_url",
	FirstPublicationDate = "first_publication_date",
	Href = "href",
	Id = "id",
	InternalContent = "internal___content",
	InternalContentDigest = "internal___contentDigest",
	InternalContentFilePath = "internal___contentFilePath",
	InternalDescription = "internal___description",
	InternalFieldOwners = "internal___fieldOwners",
	InternalIgnoreType = "internal___ignoreType",
	InternalMediaType = "internal___mediaType",
	InternalOwner = "internal___owner",
	InternalType = "internal___type",
	Lang = "lang",
	LastPublicationDate = "last_publication_date",
	ParentChildren = "parent___children",
	ParentChildrenChildren = "parent___children___children",
	ParentChildrenChildrenChildren = "parent___children___children___children",
	ParentChildrenChildrenId = "parent___children___children___id",
	ParentChildrenId = "parent___children___id",
	ParentChildrenInternalContent = "parent___children___internal___content",
	ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
	ParentChildrenInternalContentFilePath = "parent___children___internal___contentFilePath",
	ParentChildrenInternalDescription = "parent___children___internal___description",
	ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
	ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
	ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
	ParentChildrenInternalOwner = "parent___children___internal___owner",
	ParentChildrenInternalType = "parent___children___internal___type",
	ParentChildrenParentChildren = "parent___children___parent___children",
	ParentChildrenParentId = "parent___children___parent___id",
	ParentId = "parent___id",
	ParentInternalContent = "parent___internal___content",
	ParentInternalContentDigest = "parent___internal___contentDigest",
	ParentInternalContentFilePath = "parent___internal___contentFilePath",
	ParentInternalDescription = "parent___internal___description",
	ParentInternalFieldOwners = "parent___internal___fieldOwners",
	ParentInternalIgnoreType = "parent___internal___ignoreType",
	ParentInternalMediaType = "parent___internal___mediaType",
	ParentInternalOwner = "parent___internal___owner",
	ParentInternalType = "parent___internal___type",
	ParentParentChildren = "parent___parent___children",
	ParentParentChildrenChildren = "parent___parent___children___children",
	ParentParentChildrenId = "parent___parent___children___id",
	ParentParentId = "parent___parent___id",
	ParentParentInternalContent = "parent___parent___internal___content",
	ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
	ParentParentInternalContentFilePath = "parent___parent___internal___contentFilePath",
	ParentParentInternalDescription = "parent___parent___internal___description",
	ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
	ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
	ParentParentInternalMediaType = "parent___parent___internal___mediaType",
	ParentParentInternalOwner = "parent___parent___internal___owner",
	ParentParentInternalType = "parent___parent___internal___type",
	ParentParentParentChildren = "parent___parent___parent___children",
	ParentParentParentId = "parent___parent___parent___id",
	PrismicId = "prismicId",
	Tags = "tags",
	Type = "type",
	Uid = "uid",
	Url = "url",
}

export type PrismicVideoSubmissionFilterInput = {
	_previewable?: InputMaybe<IdQueryOperatorInput>
	alternate_languages?: InputMaybe<PrismicAlternateLanguageTypeFilterListInput>
	children?: InputMaybe<NodeFilterListInput>
	data?: InputMaybe<PrismicVideoSubmissionDataTypeFilterInput>
	dataRaw?: InputMaybe<JsonQueryOperatorInput>
	first_publication_date?: InputMaybe<DateQueryOperatorInput>
	href?: InputMaybe<StringQueryOperatorInput>
	id?: InputMaybe<StringQueryOperatorInput>
	internal?: InputMaybe<InternalFilterInput>
	lang?: InputMaybe<StringQueryOperatorInput>
	last_publication_date?: InputMaybe<DateQueryOperatorInput>
	parent?: InputMaybe<NodeFilterInput>
	prismicId?: InputMaybe<IdQueryOperatorInput>
	tags?: InputMaybe<StringQueryOperatorInput>
	type?: InputMaybe<StringQueryOperatorInput>
	uid?: InputMaybe<StringQueryOperatorInput>
	url?: InputMaybe<StringQueryOperatorInput>
}

export type PrismicVideoSubmissionGroupConnection = {
	__typename?: "PrismicVideoSubmissionGroupConnection"
	distinct: Array<Scalars["String"]>
	edges: Array<PrismicVideoSubmissionEdge>
	field: Scalars["String"]
	fieldValue?: Maybe<Scalars["String"]>
	group: Array<PrismicVideoSubmissionGroupConnection>
	max?: Maybe<Scalars["Float"]>
	min?: Maybe<Scalars["Float"]>
	nodes: Array<PrismicVideoSubmission>
	pageInfo: PageInfo
	sum?: Maybe<Scalars["Float"]>
	totalCount: Scalars["Int"]
}

export type PrismicVideoSubmissionGroupConnectionDistinctArgs = {
	field: PrismicVideoSubmissionFieldsEnum
}

export type PrismicVideoSubmissionGroupConnectionGroupArgs = {
	field: PrismicVideoSubmissionFieldsEnum
	limit?: InputMaybe<Scalars["Int"]>
	skip?: InputMaybe<Scalars["Int"]>
}

export type PrismicVideoSubmissionGroupConnectionMaxArgs = {
	field: PrismicVideoSubmissionFieldsEnum
}

export type PrismicVideoSubmissionGroupConnectionMinArgs = {
	field: PrismicVideoSubmissionFieldsEnum
}

export type PrismicVideoSubmissionGroupConnectionSumArgs = {
	field: PrismicVideoSubmissionFieldsEnum
}

export type PrismicVideoSubmissionSortInput = {
	fields?: InputMaybe<Array<InputMaybe<PrismicVideoSubmissionFieldsEnum>>>
	order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type Query = {
	__typename?: "Query"
	allDirectory: DirectoryConnection
	allFile: FileConnection
	allPrismicEmbedType: PrismicEmbedTypeConnection
	allPrismicEvent: PrismicEventConnection
	allPrismicNavigation: PrismicNavigationConnection
	allPrismicPage: PrismicPageConnection
	allPrismicSettings: PrismicSettingsConnection
	allPrismicSponsor: PrismicSponsorConnection
	allPrismicSponsorsList: PrismicSponsorsListConnection
	allPrismicSubmissionType: PrismicSubmissionTypeConnection
	allPrismicTypePathType: PrismicTypePathTypeConnection
	allPrismicVideoSubmission: PrismicVideoSubmissionConnection
	allSite: SiteConnection
	allSiteBuildMetadata: SiteBuildMetadataConnection
	allSiteFunction: SiteFunctionConnection
	allSitePage: SitePageConnection
	allSitePlugin: SitePluginConnection
	directory?: Maybe<Directory>
	file?: Maybe<File>
	prismicEmbedType?: Maybe<PrismicEmbedType>
	prismicEvent?: Maybe<PrismicEvent>
	prismicNavigation?: Maybe<PrismicNavigation>
	prismicPage?: Maybe<PrismicPage>
	prismicSettings?: Maybe<PrismicSettings>
	prismicSponsor?: Maybe<PrismicSponsor>
	prismicSponsorsList?: Maybe<PrismicSponsorsList>
	prismicSubmissionType?: Maybe<PrismicSubmissionType>
	prismicTypePathType?: Maybe<PrismicTypePathType>
	prismicVideoSubmission?: Maybe<PrismicVideoSubmission>
	site?: Maybe<Site>
	siteBuildMetadata?: Maybe<SiteBuildMetadata>
	siteFunction?: Maybe<SiteFunction>
	sitePage?: Maybe<SitePage>
	sitePlugin?: Maybe<SitePlugin>
}

export type QueryAllDirectoryArgs = {
	filter?: InputMaybe<DirectoryFilterInput>
	limit?: InputMaybe<Scalars["Int"]>
	skip?: InputMaybe<Scalars["Int"]>
	sort?: InputMaybe<DirectorySortInput>
}

export type QueryAllFileArgs = {
	filter?: InputMaybe<FileFilterInput>
	limit?: InputMaybe<Scalars["Int"]>
	skip?: InputMaybe<Scalars["Int"]>
	sort?: InputMaybe<FileSortInput>
}

export type QueryAllPrismicEmbedTypeArgs = {
	filter?: InputMaybe<PrismicEmbedTypeFilterInput>
	limit?: InputMaybe<Scalars["Int"]>
	skip?: InputMaybe<Scalars["Int"]>
	sort?: InputMaybe<PrismicEmbedTypeSortInput>
}

export type QueryAllPrismicEventArgs = {
	filter?: InputMaybe<PrismicEventFilterInput>
	limit?: InputMaybe<Scalars["Int"]>
	skip?: InputMaybe<Scalars["Int"]>
	sort?: InputMaybe<PrismicEventSortInput>
}

export type QueryAllPrismicNavigationArgs = {
	filter?: InputMaybe<PrismicNavigationFilterInput>
	limit?: InputMaybe<Scalars["Int"]>
	skip?: InputMaybe<Scalars["Int"]>
	sort?: InputMaybe<PrismicNavigationSortInput>
}

export type QueryAllPrismicPageArgs = {
	filter?: InputMaybe<PrismicPageFilterInput>
	limit?: InputMaybe<Scalars["Int"]>
	skip?: InputMaybe<Scalars["Int"]>
	sort?: InputMaybe<PrismicPageSortInput>
}

export type QueryAllPrismicSettingsArgs = {
	filter?: InputMaybe<PrismicSettingsFilterInput>
	limit?: InputMaybe<Scalars["Int"]>
	skip?: InputMaybe<Scalars["Int"]>
	sort?: InputMaybe<PrismicSettingsSortInput>
}

export type QueryAllPrismicSponsorArgs = {
	filter?: InputMaybe<PrismicSponsorFilterInput>
	limit?: InputMaybe<Scalars["Int"]>
	skip?: InputMaybe<Scalars["Int"]>
	sort?: InputMaybe<PrismicSponsorSortInput>
}

export type QueryAllPrismicSponsorsListArgs = {
	filter?: InputMaybe<PrismicSponsorsListFilterInput>
	limit?: InputMaybe<Scalars["Int"]>
	skip?: InputMaybe<Scalars["Int"]>
	sort?: InputMaybe<PrismicSponsorsListSortInput>
}

export type QueryAllPrismicSubmissionTypeArgs = {
	filter?: InputMaybe<PrismicSubmissionTypeFilterInput>
	limit?: InputMaybe<Scalars["Int"]>
	skip?: InputMaybe<Scalars["Int"]>
	sort?: InputMaybe<PrismicSubmissionTypeSortInput>
}

export type QueryAllPrismicTypePathTypeArgs = {
	filter?: InputMaybe<PrismicTypePathTypeFilterInput>
	limit?: InputMaybe<Scalars["Int"]>
	skip?: InputMaybe<Scalars["Int"]>
	sort?: InputMaybe<PrismicTypePathTypeSortInput>
}

export type QueryAllPrismicVideoSubmissionArgs = {
	filter?: InputMaybe<PrismicVideoSubmissionFilterInput>
	limit?: InputMaybe<Scalars["Int"]>
	skip?: InputMaybe<Scalars["Int"]>
	sort?: InputMaybe<PrismicVideoSubmissionSortInput>
}

export type QueryAllSiteArgs = {
	filter?: InputMaybe<SiteFilterInput>
	limit?: InputMaybe<Scalars["Int"]>
	skip?: InputMaybe<Scalars["Int"]>
	sort?: InputMaybe<SiteSortInput>
}

export type QueryAllSiteBuildMetadataArgs = {
	filter?: InputMaybe<SiteBuildMetadataFilterInput>
	limit?: InputMaybe<Scalars["Int"]>
	skip?: InputMaybe<Scalars["Int"]>
	sort?: InputMaybe<SiteBuildMetadataSortInput>
}

export type QueryAllSiteFunctionArgs = {
	filter?: InputMaybe<SiteFunctionFilterInput>
	limit?: InputMaybe<Scalars["Int"]>
	skip?: InputMaybe<Scalars["Int"]>
	sort?: InputMaybe<SiteFunctionSortInput>
}

export type QueryAllSitePageArgs = {
	filter?: InputMaybe<SitePageFilterInput>
	limit?: InputMaybe<Scalars["Int"]>
	skip?: InputMaybe<Scalars["Int"]>
	sort?: InputMaybe<SitePageSortInput>
}

export type QueryAllSitePluginArgs = {
	filter?: InputMaybe<SitePluginFilterInput>
	limit?: InputMaybe<Scalars["Int"]>
	skip?: InputMaybe<Scalars["Int"]>
	sort?: InputMaybe<SitePluginSortInput>
}

export type QueryDirectoryArgs = {
	absolutePath?: InputMaybe<StringQueryOperatorInput>
	accessTime?: InputMaybe<DateQueryOperatorInput>
	atime?: InputMaybe<DateQueryOperatorInput>
	atimeMs?: InputMaybe<FloatQueryOperatorInput>
	base?: InputMaybe<StringQueryOperatorInput>
	birthTime?: InputMaybe<DateQueryOperatorInput>
	birthtime?: InputMaybe<DateQueryOperatorInput>
	birthtimeMs?: InputMaybe<FloatQueryOperatorInput>
	changeTime?: InputMaybe<DateQueryOperatorInput>
	children?: InputMaybe<NodeFilterListInput>
	ctime?: InputMaybe<DateQueryOperatorInput>
	ctimeMs?: InputMaybe<FloatQueryOperatorInput>
	dev?: InputMaybe<IntQueryOperatorInput>
	dir?: InputMaybe<StringQueryOperatorInput>
	ext?: InputMaybe<StringQueryOperatorInput>
	extension?: InputMaybe<StringQueryOperatorInput>
	gid?: InputMaybe<IntQueryOperatorInput>
	id?: InputMaybe<StringQueryOperatorInput>
	ino?: InputMaybe<FloatQueryOperatorInput>
	internal?: InputMaybe<InternalFilterInput>
	mode?: InputMaybe<IntQueryOperatorInput>
	modifiedTime?: InputMaybe<DateQueryOperatorInput>
	mtime?: InputMaybe<DateQueryOperatorInput>
	mtimeMs?: InputMaybe<FloatQueryOperatorInput>
	name?: InputMaybe<StringQueryOperatorInput>
	nlink?: InputMaybe<IntQueryOperatorInput>
	parent?: InputMaybe<NodeFilterInput>
	prettySize?: InputMaybe<StringQueryOperatorInput>
	rdev?: InputMaybe<IntQueryOperatorInput>
	relativeDirectory?: InputMaybe<StringQueryOperatorInput>
	relativePath?: InputMaybe<StringQueryOperatorInput>
	root?: InputMaybe<StringQueryOperatorInput>
	size?: InputMaybe<IntQueryOperatorInput>
	sourceInstanceName?: InputMaybe<StringQueryOperatorInput>
	uid?: InputMaybe<IntQueryOperatorInput>
}

export type QueryFileArgs = {
	absolutePath?: InputMaybe<StringQueryOperatorInput>
	accessTime?: InputMaybe<DateQueryOperatorInput>
	atime?: InputMaybe<DateQueryOperatorInput>
	atimeMs?: InputMaybe<FloatQueryOperatorInput>
	base?: InputMaybe<StringQueryOperatorInput>
	birthTime?: InputMaybe<DateQueryOperatorInput>
	birthtime?: InputMaybe<DateQueryOperatorInput>
	birthtimeMs?: InputMaybe<FloatQueryOperatorInput>
	changeTime?: InputMaybe<DateQueryOperatorInput>
	children?: InputMaybe<NodeFilterListInput>
	ctime?: InputMaybe<DateQueryOperatorInput>
	ctimeMs?: InputMaybe<FloatQueryOperatorInput>
	dev?: InputMaybe<IntQueryOperatorInput>
	dir?: InputMaybe<StringQueryOperatorInput>
	ext?: InputMaybe<StringQueryOperatorInput>
	extension?: InputMaybe<StringQueryOperatorInput>
	gid?: InputMaybe<IntQueryOperatorInput>
	id?: InputMaybe<StringQueryOperatorInput>
	ino?: InputMaybe<FloatQueryOperatorInput>
	internal?: InputMaybe<InternalFilterInput>
	mode?: InputMaybe<IntQueryOperatorInput>
	modifiedTime?: InputMaybe<DateQueryOperatorInput>
	mtime?: InputMaybe<DateQueryOperatorInput>
	mtimeMs?: InputMaybe<FloatQueryOperatorInput>
	name?: InputMaybe<StringQueryOperatorInput>
	nlink?: InputMaybe<IntQueryOperatorInput>
	parent?: InputMaybe<NodeFilterInput>
	prettySize?: InputMaybe<StringQueryOperatorInput>
	rdev?: InputMaybe<IntQueryOperatorInput>
	relativeDirectory?: InputMaybe<StringQueryOperatorInput>
	relativePath?: InputMaybe<StringQueryOperatorInput>
	root?: InputMaybe<StringQueryOperatorInput>
	size?: InputMaybe<IntQueryOperatorInput>
	sourceInstanceName?: InputMaybe<StringQueryOperatorInput>
	uid?: InputMaybe<IntQueryOperatorInput>
}

export type QueryPrismicEmbedTypeArgs = {
	children?: InputMaybe<NodeFilterListInput>
	id?: InputMaybe<StringQueryOperatorInput>
	internal?: InputMaybe<InternalFilterInput>
	parent?: InputMaybe<NodeFilterInput>
}

export type QueryPrismicEventArgs = {
	_previewable?: InputMaybe<IdQueryOperatorInput>
	alternate_languages?: InputMaybe<PrismicAlternateLanguageTypeFilterListInput>
	children?: InputMaybe<NodeFilterListInput>
	data?: InputMaybe<PrismicEventDataTypeFilterInput>
	dataRaw?: InputMaybe<JsonQueryOperatorInput>
	first_publication_date?: InputMaybe<DateQueryOperatorInput>
	href?: InputMaybe<StringQueryOperatorInput>
	id?: InputMaybe<StringQueryOperatorInput>
	internal?: InputMaybe<InternalFilterInput>
	lang?: InputMaybe<StringQueryOperatorInput>
	last_publication_date?: InputMaybe<DateQueryOperatorInput>
	parent?: InputMaybe<NodeFilterInput>
	prismicId?: InputMaybe<IdQueryOperatorInput>
	tags?: InputMaybe<StringQueryOperatorInput>
	type?: InputMaybe<StringQueryOperatorInput>
	uid?: InputMaybe<StringQueryOperatorInput>
	url?: InputMaybe<StringQueryOperatorInput>
}

export type QueryPrismicNavigationArgs = {
	_previewable?: InputMaybe<IdQueryOperatorInput>
	alternate_languages?: InputMaybe<PrismicAlternateLanguageTypeFilterListInput>
	children?: InputMaybe<NodeFilterListInput>
	data?: InputMaybe<PrismicNavigationDataTypeFilterInput>
	dataRaw?: InputMaybe<JsonQueryOperatorInput>
	first_publication_date?: InputMaybe<DateQueryOperatorInput>
	href?: InputMaybe<StringQueryOperatorInput>
	id?: InputMaybe<StringQueryOperatorInput>
	internal?: InputMaybe<InternalFilterInput>
	lang?: InputMaybe<StringQueryOperatorInput>
	last_publication_date?: InputMaybe<DateQueryOperatorInput>
	parent?: InputMaybe<NodeFilterInput>
	prismicId?: InputMaybe<IdQueryOperatorInput>
	tags?: InputMaybe<StringQueryOperatorInput>
	type?: InputMaybe<StringQueryOperatorInput>
	uid?: InputMaybe<StringQueryOperatorInput>
	url?: InputMaybe<StringQueryOperatorInput>
}

export type QueryPrismicPageArgs = {
	_previewable?: InputMaybe<IdQueryOperatorInput>
	alternate_languages?: InputMaybe<PrismicAlternateLanguageTypeFilterListInput>
	children?: InputMaybe<NodeFilterListInput>
	data?: InputMaybe<PrismicPageDataTypeFilterInput>
	dataRaw?: InputMaybe<JsonQueryOperatorInput>
	first_publication_date?: InputMaybe<DateQueryOperatorInput>
	href?: InputMaybe<StringQueryOperatorInput>
	id?: InputMaybe<StringQueryOperatorInput>
	internal?: InputMaybe<InternalFilterInput>
	lang?: InputMaybe<StringQueryOperatorInput>
	last_publication_date?: InputMaybe<DateQueryOperatorInput>
	parent?: InputMaybe<NodeFilterInput>
	prismicId?: InputMaybe<IdQueryOperatorInput>
	tags?: InputMaybe<StringQueryOperatorInput>
	type?: InputMaybe<StringQueryOperatorInput>
	uid?: InputMaybe<StringQueryOperatorInput>
	url?: InputMaybe<StringQueryOperatorInput>
}

export type QueryPrismicSettingsArgs = {
	_previewable?: InputMaybe<IdQueryOperatorInput>
	alternate_languages?: InputMaybe<PrismicAlternateLanguageTypeFilterListInput>
	children?: InputMaybe<NodeFilterListInput>
	data?: InputMaybe<PrismicSettingsDataTypeFilterInput>
	dataRaw?: InputMaybe<JsonQueryOperatorInput>
	first_publication_date?: InputMaybe<DateQueryOperatorInput>
	href?: InputMaybe<StringQueryOperatorInput>
	id?: InputMaybe<StringQueryOperatorInput>
	internal?: InputMaybe<InternalFilterInput>
	lang?: InputMaybe<StringQueryOperatorInput>
	last_publication_date?: InputMaybe<DateQueryOperatorInput>
	parent?: InputMaybe<NodeFilterInput>
	prismicId?: InputMaybe<IdQueryOperatorInput>
	tags?: InputMaybe<StringQueryOperatorInput>
	type?: InputMaybe<StringQueryOperatorInput>
	url?: InputMaybe<StringQueryOperatorInput>
}

export type QueryPrismicSponsorArgs = {
	_previewable?: InputMaybe<IdQueryOperatorInput>
	alternate_languages?: InputMaybe<PrismicAlternateLanguageTypeFilterListInput>
	children?: InputMaybe<NodeFilterListInput>
	data?: InputMaybe<PrismicSponsorDataTypeFilterInput>
	dataRaw?: InputMaybe<JsonQueryOperatorInput>
	first_publication_date?: InputMaybe<DateQueryOperatorInput>
	href?: InputMaybe<StringQueryOperatorInput>
	id?: InputMaybe<StringQueryOperatorInput>
	internal?: InputMaybe<InternalFilterInput>
	lang?: InputMaybe<StringQueryOperatorInput>
	last_publication_date?: InputMaybe<DateQueryOperatorInput>
	parent?: InputMaybe<NodeFilterInput>
	prismicId?: InputMaybe<IdQueryOperatorInput>
	tags?: InputMaybe<StringQueryOperatorInput>
	type?: InputMaybe<StringQueryOperatorInput>
	url?: InputMaybe<StringQueryOperatorInput>
}

export type QueryPrismicSponsorsListArgs = {
	_previewable?: InputMaybe<IdQueryOperatorInput>
	alternate_languages?: InputMaybe<PrismicAlternateLanguageTypeFilterListInput>
	children?: InputMaybe<NodeFilterListInput>
	data?: InputMaybe<PrismicSponsorsListDataTypeFilterInput>
	dataRaw?: InputMaybe<JsonQueryOperatorInput>
	first_publication_date?: InputMaybe<DateQueryOperatorInput>
	href?: InputMaybe<StringQueryOperatorInput>
	id?: InputMaybe<StringQueryOperatorInput>
	internal?: InputMaybe<InternalFilterInput>
	lang?: InputMaybe<StringQueryOperatorInput>
	last_publication_date?: InputMaybe<DateQueryOperatorInput>
	parent?: InputMaybe<NodeFilterInput>
	prismicId?: InputMaybe<IdQueryOperatorInput>
	tags?: InputMaybe<StringQueryOperatorInput>
	type?: InputMaybe<StringQueryOperatorInput>
	uid?: InputMaybe<StringQueryOperatorInput>
	url?: InputMaybe<StringQueryOperatorInput>
}

export type QueryPrismicSubmissionTypeArgs = {
	_previewable?: InputMaybe<IdQueryOperatorInput>
	alternate_languages?: InputMaybe<PrismicAlternateLanguageTypeFilterListInput>
	children?: InputMaybe<NodeFilterListInput>
	data?: InputMaybe<PrismicSubmissionTypeDataTypeFilterInput>
	dataRaw?: InputMaybe<JsonQueryOperatorInput>
	first_publication_date?: InputMaybe<DateQueryOperatorInput>
	href?: InputMaybe<StringQueryOperatorInput>
	id?: InputMaybe<StringQueryOperatorInput>
	internal?: InputMaybe<InternalFilterInput>
	lang?: InputMaybe<StringQueryOperatorInput>
	last_publication_date?: InputMaybe<DateQueryOperatorInput>
	parent?: InputMaybe<NodeFilterInput>
	prismicId?: InputMaybe<IdQueryOperatorInput>
	tags?: InputMaybe<StringQueryOperatorInput>
	type?: InputMaybe<StringQueryOperatorInput>
	uid?: InputMaybe<StringQueryOperatorInput>
	url?: InputMaybe<StringQueryOperatorInput>
}

export type QueryPrismicTypePathTypeArgs = {
	children?: InputMaybe<NodeFilterListInput>
	id?: InputMaybe<StringQueryOperatorInput>
	internal?: InputMaybe<InternalFilterInput>
	kind?: InputMaybe<StringQueryOperatorInput>
	parent?: InputMaybe<NodeFilterInput>
	path?: InputMaybe<StringQueryOperatorInput>
	type?: InputMaybe<StringQueryOperatorInput>
}

export type QueryPrismicVideoSubmissionArgs = {
	_previewable?: InputMaybe<IdQueryOperatorInput>
	alternate_languages?: InputMaybe<PrismicAlternateLanguageTypeFilterListInput>
	children?: InputMaybe<NodeFilterListInput>
	data?: InputMaybe<PrismicVideoSubmissionDataTypeFilterInput>
	dataRaw?: InputMaybe<JsonQueryOperatorInput>
	first_publication_date?: InputMaybe<DateQueryOperatorInput>
	href?: InputMaybe<StringQueryOperatorInput>
	id?: InputMaybe<StringQueryOperatorInput>
	internal?: InputMaybe<InternalFilterInput>
	lang?: InputMaybe<StringQueryOperatorInput>
	last_publication_date?: InputMaybe<DateQueryOperatorInput>
	parent?: InputMaybe<NodeFilterInput>
	prismicId?: InputMaybe<IdQueryOperatorInput>
	tags?: InputMaybe<StringQueryOperatorInput>
	type?: InputMaybe<StringQueryOperatorInput>
	uid?: InputMaybe<StringQueryOperatorInput>
	url?: InputMaybe<StringQueryOperatorInput>
}

export type QuerySiteArgs = {
	buildTime?: InputMaybe<DateQueryOperatorInput>
	children?: InputMaybe<NodeFilterListInput>
	flags?: InputMaybe<SiteFlagsFilterInput>
	graphqlTypegen?: InputMaybe<BooleanQueryOperatorInput>
	host?: InputMaybe<StringQueryOperatorInput>
	id?: InputMaybe<StringQueryOperatorInput>
	internal?: InputMaybe<InternalFilterInput>
	jsxRuntime?: InputMaybe<StringQueryOperatorInput>
	parent?: InputMaybe<NodeFilterInput>
	pathPrefix?: InputMaybe<StringQueryOperatorInput>
	polyfill?: InputMaybe<BooleanQueryOperatorInput>
	port?: InputMaybe<IntQueryOperatorInput>
	siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>
	trailingSlash?: InputMaybe<StringQueryOperatorInput>
}

export type QuerySiteBuildMetadataArgs = {
	buildTime?: InputMaybe<DateQueryOperatorInput>
	children?: InputMaybe<NodeFilterListInput>
	id?: InputMaybe<StringQueryOperatorInput>
	internal?: InputMaybe<InternalFilterInput>
	parent?: InputMaybe<NodeFilterInput>
}

export type QuerySiteFunctionArgs = {
	absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>
	children?: InputMaybe<NodeFilterListInput>
	functionRoute?: InputMaybe<StringQueryOperatorInput>
	id?: InputMaybe<StringQueryOperatorInput>
	internal?: InputMaybe<InternalFilterInput>
	matchPath?: InputMaybe<StringQueryOperatorInput>
	originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>
	originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>
	parent?: InputMaybe<NodeFilterInput>
	pluginName?: InputMaybe<StringQueryOperatorInput>
	relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>
}

export type QuerySitePageArgs = {
	children?: InputMaybe<NodeFilterListInput>
	component?: InputMaybe<StringQueryOperatorInput>
	componentChunkName?: InputMaybe<StringQueryOperatorInput>
	id?: InputMaybe<StringQueryOperatorInput>
	internal?: InputMaybe<InternalFilterInput>
	internalComponentName?: InputMaybe<StringQueryOperatorInput>
	matchPath?: InputMaybe<StringQueryOperatorInput>
	pageContext?: InputMaybe<JsonQueryOperatorInput>
	parent?: InputMaybe<NodeFilterInput>
	path?: InputMaybe<StringQueryOperatorInput>
	pluginCreator?: InputMaybe<SitePluginFilterInput>
}

export type QuerySitePluginArgs = {
	browserAPIs?: InputMaybe<StringQueryOperatorInput>
	children?: InputMaybe<NodeFilterListInput>
	id?: InputMaybe<StringQueryOperatorInput>
	internal?: InputMaybe<InternalFilterInput>
	name?: InputMaybe<StringQueryOperatorInput>
	nodeAPIs?: InputMaybe<StringQueryOperatorInput>
	packageJson?: InputMaybe<JsonQueryOperatorInput>
	parent?: InputMaybe<NodeFilterInput>
	pluginFilepath?: InputMaybe<StringQueryOperatorInput>
	pluginOptions?: InputMaybe<JsonQueryOperatorInput>
	resolve?: InputMaybe<StringQueryOperatorInput>
	ssrAPIs?: InputMaybe<StringQueryOperatorInput>
	version?: InputMaybe<StringQueryOperatorInput>
}

export type Site = Node & {
	__typename?: "Site"
	buildTime?: Maybe<Scalars["Date"]>
	children: Array<Node>
	flags?: Maybe<SiteFlags>
	graphqlTypegen?: Maybe<Scalars["Boolean"]>
	host?: Maybe<Scalars["String"]>
	id: Scalars["ID"]
	internal: Internal
	jsxRuntime?: Maybe<Scalars["String"]>
	parent?: Maybe<Node>
	pathPrefix?: Maybe<Scalars["String"]>
	polyfill?: Maybe<Scalars["Boolean"]>
	port?: Maybe<Scalars["Int"]>
	siteMetadata?: Maybe<SiteSiteMetadata>
	trailingSlash?: Maybe<Scalars["String"]>
}

export type SiteBuildTimeArgs = {
	difference?: InputMaybe<Scalars["String"]>
	formatString?: InputMaybe<Scalars["String"]>
	fromNow?: InputMaybe<Scalars["Boolean"]>
	locale?: InputMaybe<Scalars["String"]>
}

export type SiteBuildMetadata = Node & {
	__typename?: "SiteBuildMetadata"
	buildTime?: Maybe<Scalars["Date"]>
	children: Array<Node>
	id: Scalars["ID"]
	internal: Internal
	parent?: Maybe<Node>
}

export type SiteBuildMetadataBuildTimeArgs = {
	difference?: InputMaybe<Scalars["String"]>
	formatString?: InputMaybe<Scalars["String"]>
	fromNow?: InputMaybe<Scalars["Boolean"]>
	locale?: InputMaybe<Scalars["String"]>
}

export type SiteBuildMetadataConnection = {
	__typename?: "SiteBuildMetadataConnection"
	distinct: Array<Scalars["String"]>
	edges: Array<SiteBuildMetadataEdge>
	group: Array<SiteBuildMetadataGroupConnection>
	max?: Maybe<Scalars["Float"]>
	min?: Maybe<Scalars["Float"]>
	nodes: Array<SiteBuildMetadata>
	pageInfo: PageInfo
	sum?: Maybe<Scalars["Float"]>
	totalCount: Scalars["Int"]
}

export type SiteBuildMetadataConnectionDistinctArgs = {
	field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataConnectionGroupArgs = {
	field: SiteBuildMetadataFieldsEnum
	limit?: InputMaybe<Scalars["Int"]>
	skip?: InputMaybe<Scalars["Int"]>
}

export type SiteBuildMetadataConnectionMaxArgs = {
	field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataConnectionMinArgs = {
	field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataConnectionSumArgs = {
	field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataEdge = {
	__typename?: "SiteBuildMetadataEdge"
	next?: Maybe<SiteBuildMetadata>
	node: SiteBuildMetadata
	previous?: Maybe<SiteBuildMetadata>
}

export enum SiteBuildMetadataFieldsEnum {
	BuildTime = "buildTime",
	Children = "children",
	ChildrenChildren = "children___children",
	ChildrenChildrenChildren = "children___children___children",
	ChildrenChildrenChildrenChildren = "children___children___children___children",
	ChildrenChildrenChildrenId = "children___children___children___id",
	ChildrenChildrenId = "children___children___id",
	ChildrenChildrenInternalContent = "children___children___internal___content",
	ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
	ChildrenChildrenInternalContentFilePath = "children___children___internal___contentFilePath",
	ChildrenChildrenInternalDescription = "children___children___internal___description",
	ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
	ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
	ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
	ChildrenChildrenInternalOwner = "children___children___internal___owner",
	ChildrenChildrenInternalType = "children___children___internal___type",
	ChildrenChildrenParentChildren = "children___children___parent___children",
	ChildrenChildrenParentId = "children___children___parent___id",
	ChildrenId = "children___id",
	ChildrenInternalContent = "children___internal___content",
	ChildrenInternalContentDigest = "children___internal___contentDigest",
	ChildrenInternalContentFilePath = "children___internal___contentFilePath",
	ChildrenInternalDescription = "children___internal___description",
	ChildrenInternalFieldOwners = "children___internal___fieldOwners",
	ChildrenInternalIgnoreType = "children___internal___ignoreType",
	ChildrenInternalMediaType = "children___internal___mediaType",
	ChildrenInternalOwner = "children___internal___owner",
	ChildrenInternalType = "children___internal___type",
	ChildrenParentChildren = "children___parent___children",
	ChildrenParentChildrenChildren = "children___parent___children___children",
	ChildrenParentChildrenId = "children___parent___children___id",
	ChildrenParentId = "children___parent___id",
	ChildrenParentInternalContent = "children___parent___internal___content",
	ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
	ChildrenParentInternalContentFilePath = "children___parent___internal___contentFilePath",
	ChildrenParentInternalDescription = "children___parent___internal___description",
	ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
	ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
	ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
	ChildrenParentInternalOwner = "children___parent___internal___owner",
	ChildrenParentInternalType = "children___parent___internal___type",
	ChildrenParentParentChildren = "children___parent___parent___children",
	ChildrenParentParentId = "children___parent___parent___id",
	Id = "id",
	InternalContent = "internal___content",
	InternalContentDigest = "internal___contentDigest",
	InternalContentFilePath = "internal___contentFilePath",
	InternalDescription = "internal___description",
	InternalFieldOwners = "internal___fieldOwners",
	InternalIgnoreType = "internal___ignoreType",
	InternalMediaType = "internal___mediaType",
	InternalOwner = "internal___owner",
	InternalType = "internal___type",
	ParentChildren = "parent___children",
	ParentChildrenChildren = "parent___children___children",
	ParentChildrenChildrenChildren = "parent___children___children___children",
	ParentChildrenChildrenId = "parent___children___children___id",
	ParentChildrenId = "parent___children___id",
	ParentChildrenInternalContent = "parent___children___internal___content",
	ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
	ParentChildrenInternalContentFilePath = "parent___children___internal___contentFilePath",
	ParentChildrenInternalDescription = "parent___children___internal___description",
	ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
	ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
	ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
	ParentChildrenInternalOwner = "parent___children___internal___owner",
	ParentChildrenInternalType = "parent___children___internal___type",
	ParentChildrenParentChildren = "parent___children___parent___children",
	ParentChildrenParentId = "parent___children___parent___id",
	ParentId = "parent___id",
	ParentInternalContent = "parent___internal___content",
	ParentInternalContentDigest = "parent___internal___contentDigest",
	ParentInternalContentFilePath = "parent___internal___contentFilePath",
	ParentInternalDescription = "parent___internal___description",
	ParentInternalFieldOwners = "parent___internal___fieldOwners",
	ParentInternalIgnoreType = "parent___internal___ignoreType",
	ParentInternalMediaType = "parent___internal___mediaType",
	ParentInternalOwner = "parent___internal___owner",
	ParentInternalType = "parent___internal___type",
	ParentParentChildren = "parent___parent___children",
	ParentParentChildrenChildren = "parent___parent___children___children",
	ParentParentChildrenId = "parent___parent___children___id",
	ParentParentId = "parent___parent___id",
	ParentParentInternalContent = "parent___parent___internal___content",
	ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
	ParentParentInternalContentFilePath = "parent___parent___internal___contentFilePath",
	ParentParentInternalDescription = "parent___parent___internal___description",
	ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
	ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
	ParentParentInternalMediaType = "parent___parent___internal___mediaType",
	ParentParentInternalOwner = "parent___parent___internal___owner",
	ParentParentInternalType = "parent___parent___internal___type",
	ParentParentParentChildren = "parent___parent___parent___children",
	ParentParentParentId = "parent___parent___parent___id",
}

export type SiteBuildMetadataFilterInput = {
	buildTime?: InputMaybe<DateQueryOperatorInput>
	children?: InputMaybe<NodeFilterListInput>
	id?: InputMaybe<StringQueryOperatorInput>
	internal?: InputMaybe<InternalFilterInput>
	parent?: InputMaybe<NodeFilterInput>
}

export type SiteBuildMetadataGroupConnection = {
	__typename?: "SiteBuildMetadataGroupConnection"
	distinct: Array<Scalars["String"]>
	edges: Array<SiteBuildMetadataEdge>
	field: Scalars["String"]
	fieldValue?: Maybe<Scalars["String"]>
	group: Array<SiteBuildMetadataGroupConnection>
	max?: Maybe<Scalars["Float"]>
	min?: Maybe<Scalars["Float"]>
	nodes: Array<SiteBuildMetadata>
	pageInfo: PageInfo
	sum?: Maybe<Scalars["Float"]>
	totalCount: Scalars["Int"]
}

export type SiteBuildMetadataGroupConnectionDistinctArgs = {
	field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataGroupConnectionGroupArgs = {
	field: SiteBuildMetadataFieldsEnum
	limit?: InputMaybe<Scalars["Int"]>
	skip?: InputMaybe<Scalars["Int"]>
}

export type SiteBuildMetadataGroupConnectionMaxArgs = {
	field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataGroupConnectionMinArgs = {
	field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataGroupConnectionSumArgs = {
	field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataSortInput = {
	fields?: InputMaybe<Array<InputMaybe<SiteBuildMetadataFieldsEnum>>>
	order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type SiteConnection = {
	__typename?: "SiteConnection"
	distinct: Array<Scalars["String"]>
	edges: Array<SiteEdge>
	group: Array<SiteGroupConnection>
	max?: Maybe<Scalars["Float"]>
	min?: Maybe<Scalars["Float"]>
	nodes: Array<Site>
	pageInfo: PageInfo
	sum?: Maybe<Scalars["Float"]>
	totalCount: Scalars["Int"]
}

export type SiteConnectionDistinctArgs = {
	field: SiteFieldsEnum
}

export type SiteConnectionGroupArgs = {
	field: SiteFieldsEnum
	limit?: InputMaybe<Scalars["Int"]>
	skip?: InputMaybe<Scalars["Int"]>
}

export type SiteConnectionMaxArgs = {
	field: SiteFieldsEnum
}

export type SiteConnectionMinArgs = {
	field: SiteFieldsEnum
}

export type SiteConnectionSumArgs = {
	field: SiteFieldsEnum
}

export type SiteEdge = {
	__typename?: "SiteEdge"
	next?: Maybe<Site>
	node: Site
	previous?: Maybe<Site>
}

export enum SiteFieldsEnum {
	BuildTime = "buildTime",
	Children = "children",
	ChildrenChildren = "children___children",
	ChildrenChildrenChildren = "children___children___children",
	ChildrenChildrenChildrenChildren = "children___children___children___children",
	ChildrenChildrenChildrenId = "children___children___children___id",
	ChildrenChildrenId = "children___children___id",
	ChildrenChildrenInternalContent = "children___children___internal___content",
	ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
	ChildrenChildrenInternalContentFilePath = "children___children___internal___contentFilePath",
	ChildrenChildrenInternalDescription = "children___children___internal___description",
	ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
	ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
	ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
	ChildrenChildrenInternalOwner = "children___children___internal___owner",
	ChildrenChildrenInternalType = "children___children___internal___type",
	ChildrenChildrenParentChildren = "children___children___parent___children",
	ChildrenChildrenParentId = "children___children___parent___id",
	ChildrenId = "children___id",
	ChildrenInternalContent = "children___internal___content",
	ChildrenInternalContentDigest = "children___internal___contentDigest",
	ChildrenInternalContentFilePath = "children___internal___contentFilePath",
	ChildrenInternalDescription = "children___internal___description",
	ChildrenInternalFieldOwners = "children___internal___fieldOwners",
	ChildrenInternalIgnoreType = "children___internal___ignoreType",
	ChildrenInternalMediaType = "children___internal___mediaType",
	ChildrenInternalOwner = "children___internal___owner",
	ChildrenInternalType = "children___internal___type",
	ChildrenParentChildren = "children___parent___children",
	ChildrenParentChildrenChildren = "children___parent___children___children",
	ChildrenParentChildrenId = "children___parent___children___id",
	ChildrenParentId = "children___parent___id",
	ChildrenParentInternalContent = "children___parent___internal___content",
	ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
	ChildrenParentInternalContentFilePath = "children___parent___internal___contentFilePath",
	ChildrenParentInternalDescription = "children___parent___internal___description",
	ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
	ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
	ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
	ChildrenParentInternalOwner = "children___parent___internal___owner",
	ChildrenParentInternalType = "children___parent___internal___type",
	ChildrenParentParentChildren = "children___parent___parent___children",
	ChildrenParentParentId = "children___parent___parent___id",
	FlagsDevSsr = "flags___DEV_SSR",
	FlagsFastDev = "flags___FAST_DEV",
	GraphqlTypegen = "graphqlTypegen",
	Host = "host",
	Id = "id",
	InternalContent = "internal___content",
	InternalContentDigest = "internal___contentDigest",
	InternalContentFilePath = "internal___contentFilePath",
	InternalDescription = "internal___description",
	InternalFieldOwners = "internal___fieldOwners",
	InternalIgnoreType = "internal___ignoreType",
	InternalMediaType = "internal___mediaType",
	InternalOwner = "internal___owner",
	InternalType = "internal___type",
	JsxRuntime = "jsxRuntime",
	ParentChildren = "parent___children",
	ParentChildrenChildren = "parent___children___children",
	ParentChildrenChildrenChildren = "parent___children___children___children",
	ParentChildrenChildrenId = "parent___children___children___id",
	ParentChildrenId = "parent___children___id",
	ParentChildrenInternalContent = "parent___children___internal___content",
	ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
	ParentChildrenInternalContentFilePath = "parent___children___internal___contentFilePath",
	ParentChildrenInternalDescription = "parent___children___internal___description",
	ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
	ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
	ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
	ParentChildrenInternalOwner = "parent___children___internal___owner",
	ParentChildrenInternalType = "parent___children___internal___type",
	ParentChildrenParentChildren = "parent___children___parent___children",
	ParentChildrenParentId = "parent___children___parent___id",
	ParentId = "parent___id",
	ParentInternalContent = "parent___internal___content",
	ParentInternalContentDigest = "parent___internal___contentDigest",
	ParentInternalContentFilePath = "parent___internal___contentFilePath",
	ParentInternalDescription = "parent___internal___description",
	ParentInternalFieldOwners = "parent___internal___fieldOwners",
	ParentInternalIgnoreType = "parent___internal___ignoreType",
	ParentInternalMediaType = "parent___internal___mediaType",
	ParentInternalOwner = "parent___internal___owner",
	ParentInternalType = "parent___internal___type",
	ParentParentChildren = "parent___parent___children",
	ParentParentChildrenChildren = "parent___parent___children___children",
	ParentParentChildrenId = "parent___parent___children___id",
	ParentParentId = "parent___parent___id",
	ParentParentInternalContent = "parent___parent___internal___content",
	ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
	ParentParentInternalContentFilePath = "parent___parent___internal___contentFilePath",
	ParentParentInternalDescription = "parent___parent___internal___description",
	ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
	ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
	ParentParentInternalMediaType = "parent___parent___internal___mediaType",
	ParentParentInternalOwner = "parent___parent___internal___owner",
	ParentParentInternalType = "parent___parent___internal___type",
	ParentParentParentChildren = "parent___parent___parent___children",
	ParentParentParentId = "parent___parent___parent___id",
	PathPrefix = "pathPrefix",
	Polyfill = "polyfill",
	Port = "port",
	SiteMetadataDescription = "siteMetadata___description",
	SiteMetadataSiteUrl = "siteMetadata___siteUrl",
	SiteMetadataTitle = "siteMetadata___title",
	TrailingSlash = "trailingSlash",
}

export type SiteFilterInput = {
	buildTime?: InputMaybe<DateQueryOperatorInput>
	children?: InputMaybe<NodeFilterListInput>
	flags?: InputMaybe<SiteFlagsFilterInput>
	graphqlTypegen?: InputMaybe<BooleanQueryOperatorInput>
	host?: InputMaybe<StringQueryOperatorInput>
	id?: InputMaybe<StringQueryOperatorInput>
	internal?: InputMaybe<InternalFilterInput>
	jsxRuntime?: InputMaybe<StringQueryOperatorInput>
	parent?: InputMaybe<NodeFilterInput>
	pathPrefix?: InputMaybe<StringQueryOperatorInput>
	polyfill?: InputMaybe<BooleanQueryOperatorInput>
	port?: InputMaybe<IntQueryOperatorInput>
	siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>
	trailingSlash?: InputMaybe<StringQueryOperatorInput>
}

export type SiteFlags = {
	__typename?: "SiteFlags"
	DEV_SSR?: Maybe<Scalars["Boolean"]>
	FAST_DEV?: Maybe<Scalars["Boolean"]>
}

export type SiteFlagsFilterInput = {
	DEV_SSR?: InputMaybe<BooleanQueryOperatorInput>
	FAST_DEV?: InputMaybe<BooleanQueryOperatorInput>
}

export type SiteFunction = Node & {
	__typename?: "SiteFunction"
	absoluteCompiledFilePath: Scalars["String"]
	children: Array<Node>
	functionRoute: Scalars["String"]
	id: Scalars["ID"]
	internal: Internal
	matchPath?: Maybe<Scalars["String"]>
	originalAbsoluteFilePath: Scalars["String"]
	originalRelativeFilePath: Scalars["String"]
	parent?: Maybe<Node>
	pluginName: Scalars["String"]
	relativeCompiledFilePath: Scalars["String"]
}

export type SiteFunctionConnection = {
	__typename?: "SiteFunctionConnection"
	distinct: Array<Scalars["String"]>
	edges: Array<SiteFunctionEdge>
	group: Array<SiteFunctionGroupConnection>
	max?: Maybe<Scalars["Float"]>
	min?: Maybe<Scalars["Float"]>
	nodes: Array<SiteFunction>
	pageInfo: PageInfo
	sum?: Maybe<Scalars["Float"]>
	totalCount: Scalars["Int"]
}

export type SiteFunctionConnectionDistinctArgs = {
	field: SiteFunctionFieldsEnum
}

export type SiteFunctionConnectionGroupArgs = {
	field: SiteFunctionFieldsEnum
	limit?: InputMaybe<Scalars["Int"]>
	skip?: InputMaybe<Scalars["Int"]>
}

export type SiteFunctionConnectionMaxArgs = {
	field: SiteFunctionFieldsEnum
}

export type SiteFunctionConnectionMinArgs = {
	field: SiteFunctionFieldsEnum
}

export type SiteFunctionConnectionSumArgs = {
	field: SiteFunctionFieldsEnum
}

export type SiteFunctionEdge = {
	__typename?: "SiteFunctionEdge"
	next?: Maybe<SiteFunction>
	node: SiteFunction
	previous?: Maybe<SiteFunction>
}

export enum SiteFunctionFieldsEnum {
	AbsoluteCompiledFilePath = "absoluteCompiledFilePath",
	Children = "children",
	ChildrenChildren = "children___children",
	ChildrenChildrenChildren = "children___children___children",
	ChildrenChildrenChildrenChildren = "children___children___children___children",
	ChildrenChildrenChildrenId = "children___children___children___id",
	ChildrenChildrenId = "children___children___id",
	ChildrenChildrenInternalContent = "children___children___internal___content",
	ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
	ChildrenChildrenInternalContentFilePath = "children___children___internal___contentFilePath",
	ChildrenChildrenInternalDescription = "children___children___internal___description",
	ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
	ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
	ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
	ChildrenChildrenInternalOwner = "children___children___internal___owner",
	ChildrenChildrenInternalType = "children___children___internal___type",
	ChildrenChildrenParentChildren = "children___children___parent___children",
	ChildrenChildrenParentId = "children___children___parent___id",
	ChildrenId = "children___id",
	ChildrenInternalContent = "children___internal___content",
	ChildrenInternalContentDigest = "children___internal___contentDigest",
	ChildrenInternalContentFilePath = "children___internal___contentFilePath",
	ChildrenInternalDescription = "children___internal___description",
	ChildrenInternalFieldOwners = "children___internal___fieldOwners",
	ChildrenInternalIgnoreType = "children___internal___ignoreType",
	ChildrenInternalMediaType = "children___internal___mediaType",
	ChildrenInternalOwner = "children___internal___owner",
	ChildrenInternalType = "children___internal___type",
	ChildrenParentChildren = "children___parent___children",
	ChildrenParentChildrenChildren = "children___parent___children___children",
	ChildrenParentChildrenId = "children___parent___children___id",
	ChildrenParentId = "children___parent___id",
	ChildrenParentInternalContent = "children___parent___internal___content",
	ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
	ChildrenParentInternalContentFilePath = "children___parent___internal___contentFilePath",
	ChildrenParentInternalDescription = "children___parent___internal___description",
	ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
	ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
	ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
	ChildrenParentInternalOwner = "children___parent___internal___owner",
	ChildrenParentInternalType = "children___parent___internal___type",
	ChildrenParentParentChildren = "children___parent___parent___children",
	ChildrenParentParentId = "children___parent___parent___id",
	FunctionRoute = "functionRoute",
	Id = "id",
	InternalContent = "internal___content",
	InternalContentDigest = "internal___contentDigest",
	InternalContentFilePath = "internal___contentFilePath",
	InternalDescription = "internal___description",
	InternalFieldOwners = "internal___fieldOwners",
	InternalIgnoreType = "internal___ignoreType",
	InternalMediaType = "internal___mediaType",
	InternalOwner = "internal___owner",
	InternalType = "internal___type",
	MatchPath = "matchPath",
	OriginalAbsoluteFilePath = "originalAbsoluteFilePath",
	OriginalRelativeFilePath = "originalRelativeFilePath",
	ParentChildren = "parent___children",
	ParentChildrenChildren = "parent___children___children",
	ParentChildrenChildrenChildren = "parent___children___children___children",
	ParentChildrenChildrenId = "parent___children___children___id",
	ParentChildrenId = "parent___children___id",
	ParentChildrenInternalContent = "parent___children___internal___content",
	ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
	ParentChildrenInternalContentFilePath = "parent___children___internal___contentFilePath",
	ParentChildrenInternalDescription = "parent___children___internal___description",
	ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
	ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
	ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
	ParentChildrenInternalOwner = "parent___children___internal___owner",
	ParentChildrenInternalType = "parent___children___internal___type",
	ParentChildrenParentChildren = "parent___children___parent___children",
	ParentChildrenParentId = "parent___children___parent___id",
	ParentId = "parent___id",
	ParentInternalContent = "parent___internal___content",
	ParentInternalContentDigest = "parent___internal___contentDigest",
	ParentInternalContentFilePath = "parent___internal___contentFilePath",
	ParentInternalDescription = "parent___internal___description",
	ParentInternalFieldOwners = "parent___internal___fieldOwners",
	ParentInternalIgnoreType = "parent___internal___ignoreType",
	ParentInternalMediaType = "parent___internal___mediaType",
	ParentInternalOwner = "parent___internal___owner",
	ParentInternalType = "parent___internal___type",
	ParentParentChildren = "parent___parent___children",
	ParentParentChildrenChildren = "parent___parent___children___children",
	ParentParentChildrenId = "parent___parent___children___id",
	ParentParentId = "parent___parent___id",
	ParentParentInternalContent = "parent___parent___internal___content",
	ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
	ParentParentInternalContentFilePath = "parent___parent___internal___contentFilePath",
	ParentParentInternalDescription = "parent___parent___internal___description",
	ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
	ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
	ParentParentInternalMediaType = "parent___parent___internal___mediaType",
	ParentParentInternalOwner = "parent___parent___internal___owner",
	ParentParentInternalType = "parent___parent___internal___type",
	ParentParentParentChildren = "parent___parent___parent___children",
	ParentParentParentId = "parent___parent___parent___id",
	PluginName = "pluginName",
	RelativeCompiledFilePath = "relativeCompiledFilePath",
}

export type SiteFunctionFilterInput = {
	absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>
	children?: InputMaybe<NodeFilterListInput>
	functionRoute?: InputMaybe<StringQueryOperatorInput>
	id?: InputMaybe<StringQueryOperatorInput>
	internal?: InputMaybe<InternalFilterInput>
	matchPath?: InputMaybe<StringQueryOperatorInput>
	originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>
	originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>
	parent?: InputMaybe<NodeFilterInput>
	pluginName?: InputMaybe<StringQueryOperatorInput>
	relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>
}

export type SiteFunctionGroupConnection = {
	__typename?: "SiteFunctionGroupConnection"
	distinct: Array<Scalars["String"]>
	edges: Array<SiteFunctionEdge>
	field: Scalars["String"]
	fieldValue?: Maybe<Scalars["String"]>
	group: Array<SiteFunctionGroupConnection>
	max?: Maybe<Scalars["Float"]>
	min?: Maybe<Scalars["Float"]>
	nodes: Array<SiteFunction>
	pageInfo: PageInfo
	sum?: Maybe<Scalars["Float"]>
	totalCount: Scalars["Int"]
}

export type SiteFunctionGroupConnectionDistinctArgs = {
	field: SiteFunctionFieldsEnum
}

export type SiteFunctionGroupConnectionGroupArgs = {
	field: SiteFunctionFieldsEnum
	limit?: InputMaybe<Scalars["Int"]>
	skip?: InputMaybe<Scalars["Int"]>
}

export type SiteFunctionGroupConnectionMaxArgs = {
	field: SiteFunctionFieldsEnum
}

export type SiteFunctionGroupConnectionMinArgs = {
	field: SiteFunctionFieldsEnum
}

export type SiteFunctionGroupConnectionSumArgs = {
	field: SiteFunctionFieldsEnum
}

export type SiteFunctionSortInput = {
	fields?: InputMaybe<Array<InputMaybe<SiteFunctionFieldsEnum>>>
	order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type SiteGroupConnection = {
	__typename?: "SiteGroupConnection"
	distinct: Array<Scalars["String"]>
	edges: Array<SiteEdge>
	field: Scalars["String"]
	fieldValue?: Maybe<Scalars["String"]>
	group: Array<SiteGroupConnection>
	max?: Maybe<Scalars["Float"]>
	min?: Maybe<Scalars["Float"]>
	nodes: Array<Site>
	pageInfo: PageInfo
	sum?: Maybe<Scalars["Float"]>
	totalCount: Scalars["Int"]
}

export type SiteGroupConnectionDistinctArgs = {
	field: SiteFieldsEnum
}

export type SiteGroupConnectionGroupArgs = {
	field: SiteFieldsEnum
	limit?: InputMaybe<Scalars["Int"]>
	skip?: InputMaybe<Scalars["Int"]>
}

export type SiteGroupConnectionMaxArgs = {
	field: SiteFieldsEnum
}

export type SiteGroupConnectionMinArgs = {
	field: SiteFieldsEnum
}

export type SiteGroupConnectionSumArgs = {
	field: SiteFieldsEnum
}

export type SitePage = Node & {
	__typename?: "SitePage"
	children: Array<Node>
	component: Scalars["String"]
	componentChunkName: Scalars["String"]
	id: Scalars["ID"]
	internal: Internal
	internalComponentName: Scalars["String"]
	matchPath?: Maybe<Scalars["String"]>
	pageContext?: Maybe<Scalars["JSON"]>
	parent?: Maybe<Node>
	path: Scalars["String"]
	pluginCreator?: Maybe<SitePlugin>
}

export type SitePageConnection = {
	__typename?: "SitePageConnection"
	distinct: Array<Scalars["String"]>
	edges: Array<SitePageEdge>
	group: Array<SitePageGroupConnection>
	max?: Maybe<Scalars["Float"]>
	min?: Maybe<Scalars["Float"]>
	nodes: Array<SitePage>
	pageInfo: PageInfo
	sum?: Maybe<Scalars["Float"]>
	totalCount: Scalars["Int"]
}

export type SitePageConnectionDistinctArgs = {
	field: SitePageFieldsEnum
}

export type SitePageConnectionGroupArgs = {
	field: SitePageFieldsEnum
	limit?: InputMaybe<Scalars["Int"]>
	skip?: InputMaybe<Scalars["Int"]>
}

export type SitePageConnectionMaxArgs = {
	field: SitePageFieldsEnum
}

export type SitePageConnectionMinArgs = {
	field: SitePageFieldsEnum
}

export type SitePageConnectionSumArgs = {
	field: SitePageFieldsEnum
}

export type SitePageEdge = {
	__typename?: "SitePageEdge"
	next?: Maybe<SitePage>
	node: SitePage
	previous?: Maybe<SitePage>
}

export enum SitePageFieldsEnum {
	Children = "children",
	ChildrenChildren = "children___children",
	ChildrenChildrenChildren = "children___children___children",
	ChildrenChildrenChildrenChildren = "children___children___children___children",
	ChildrenChildrenChildrenId = "children___children___children___id",
	ChildrenChildrenId = "children___children___id",
	ChildrenChildrenInternalContent = "children___children___internal___content",
	ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
	ChildrenChildrenInternalContentFilePath = "children___children___internal___contentFilePath",
	ChildrenChildrenInternalDescription = "children___children___internal___description",
	ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
	ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
	ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
	ChildrenChildrenInternalOwner = "children___children___internal___owner",
	ChildrenChildrenInternalType = "children___children___internal___type",
	ChildrenChildrenParentChildren = "children___children___parent___children",
	ChildrenChildrenParentId = "children___children___parent___id",
	ChildrenId = "children___id",
	ChildrenInternalContent = "children___internal___content",
	ChildrenInternalContentDigest = "children___internal___contentDigest",
	ChildrenInternalContentFilePath = "children___internal___contentFilePath",
	ChildrenInternalDescription = "children___internal___description",
	ChildrenInternalFieldOwners = "children___internal___fieldOwners",
	ChildrenInternalIgnoreType = "children___internal___ignoreType",
	ChildrenInternalMediaType = "children___internal___mediaType",
	ChildrenInternalOwner = "children___internal___owner",
	ChildrenInternalType = "children___internal___type",
	ChildrenParentChildren = "children___parent___children",
	ChildrenParentChildrenChildren = "children___parent___children___children",
	ChildrenParentChildrenId = "children___parent___children___id",
	ChildrenParentId = "children___parent___id",
	ChildrenParentInternalContent = "children___parent___internal___content",
	ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
	ChildrenParentInternalContentFilePath = "children___parent___internal___contentFilePath",
	ChildrenParentInternalDescription = "children___parent___internal___description",
	ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
	ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
	ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
	ChildrenParentInternalOwner = "children___parent___internal___owner",
	ChildrenParentInternalType = "children___parent___internal___type",
	ChildrenParentParentChildren = "children___parent___parent___children",
	ChildrenParentParentId = "children___parent___parent___id",
	Component = "component",
	ComponentChunkName = "componentChunkName",
	Id = "id",
	InternalComponentName = "internalComponentName",
	InternalContent = "internal___content",
	InternalContentDigest = "internal___contentDigest",
	InternalContentFilePath = "internal___contentFilePath",
	InternalDescription = "internal___description",
	InternalFieldOwners = "internal___fieldOwners",
	InternalIgnoreType = "internal___ignoreType",
	InternalMediaType = "internal___mediaType",
	InternalOwner = "internal___owner",
	InternalType = "internal___type",
	MatchPath = "matchPath",
	PageContext = "pageContext",
	ParentChildren = "parent___children",
	ParentChildrenChildren = "parent___children___children",
	ParentChildrenChildrenChildren = "parent___children___children___children",
	ParentChildrenChildrenId = "parent___children___children___id",
	ParentChildrenId = "parent___children___id",
	ParentChildrenInternalContent = "parent___children___internal___content",
	ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
	ParentChildrenInternalContentFilePath = "parent___children___internal___contentFilePath",
	ParentChildrenInternalDescription = "parent___children___internal___description",
	ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
	ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
	ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
	ParentChildrenInternalOwner = "parent___children___internal___owner",
	ParentChildrenInternalType = "parent___children___internal___type",
	ParentChildrenParentChildren = "parent___children___parent___children",
	ParentChildrenParentId = "parent___children___parent___id",
	ParentId = "parent___id",
	ParentInternalContent = "parent___internal___content",
	ParentInternalContentDigest = "parent___internal___contentDigest",
	ParentInternalContentFilePath = "parent___internal___contentFilePath",
	ParentInternalDescription = "parent___internal___description",
	ParentInternalFieldOwners = "parent___internal___fieldOwners",
	ParentInternalIgnoreType = "parent___internal___ignoreType",
	ParentInternalMediaType = "parent___internal___mediaType",
	ParentInternalOwner = "parent___internal___owner",
	ParentInternalType = "parent___internal___type",
	ParentParentChildren = "parent___parent___children",
	ParentParentChildrenChildren = "parent___parent___children___children",
	ParentParentChildrenId = "parent___parent___children___id",
	ParentParentId = "parent___parent___id",
	ParentParentInternalContent = "parent___parent___internal___content",
	ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
	ParentParentInternalContentFilePath = "parent___parent___internal___contentFilePath",
	ParentParentInternalDescription = "parent___parent___internal___description",
	ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
	ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
	ParentParentInternalMediaType = "parent___parent___internal___mediaType",
	ParentParentInternalOwner = "parent___parent___internal___owner",
	ParentParentInternalType = "parent___parent___internal___type",
	ParentParentParentChildren = "parent___parent___parent___children",
	ParentParentParentId = "parent___parent___parent___id",
	Path = "path",
	PluginCreatorBrowserApIs = "pluginCreator___browserAPIs",
	PluginCreatorChildren = "pluginCreator___children",
	PluginCreatorChildrenChildren = "pluginCreator___children___children",
	PluginCreatorChildrenChildrenChildren = "pluginCreator___children___children___children",
	PluginCreatorChildrenChildrenId = "pluginCreator___children___children___id",
	PluginCreatorChildrenId = "pluginCreator___children___id",
	PluginCreatorChildrenInternalContent = "pluginCreator___children___internal___content",
	PluginCreatorChildrenInternalContentDigest = "pluginCreator___children___internal___contentDigest",
	PluginCreatorChildrenInternalContentFilePath = "pluginCreator___children___internal___contentFilePath",
	PluginCreatorChildrenInternalDescription = "pluginCreator___children___internal___description",
	PluginCreatorChildrenInternalFieldOwners = "pluginCreator___children___internal___fieldOwners",
	PluginCreatorChildrenInternalIgnoreType = "pluginCreator___children___internal___ignoreType",
	PluginCreatorChildrenInternalMediaType = "pluginCreator___children___internal___mediaType",
	PluginCreatorChildrenInternalOwner = "pluginCreator___children___internal___owner",
	PluginCreatorChildrenInternalType = "pluginCreator___children___internal___type",
	PluginCreatorChildrenParentChildren = "pluginCreator___children___parent___children",
	PluginCreatorChildrenParentId = "pluginCreator___children___parent___id",
	PluginCreatorId = "pluginCreator___id",
	PluginCreatorInternalContent = "pluginCreator___internal___content",
	PluginCreatorInternalContentDigest = "pluginCreator___internal___contentDigest",
	PluginCreatorInternalContentFilePath = "pluginCreator___internal___contentFilePath",
	PluginCreatorInternalDescription = "pluginCreator___internal___description",
	PluginCreatorInternalFieldOwners = "pluginCreator___internal___fieldOwners",
	PluginCreatorInternalIgnoreType = "pluginCreator___internal___ignoreType",
	PluginCreatorInternalMediaType = "pluginCreator___internal___mediaType",
	PluginCreatorInternalOwner = "pluginCreator___internal___owner",
	PluginCreatorInternalType = "pluginCreator___internal___type",
	PluginCreatorName = "pluginCreator___name",
	PluginCreatorNodeApIs = "pluginCreator___nodeAPIs",
	PluginCreatorPackageJson = "pluginCreator___packageJson",
	PluginCreatorParentChildren = "pluginCreator___parent___children",
	PluginCreatorParentChildrenChildren = "pluginCreator___parent___children___children",
	PluginCreatorParentChildrenId = "pluginCreator___parent___children___id",
	PluginCreatorParentId = "pluginCreator___parent___id",
	PluginCreatorParentInternalContent = "pluginCreator___parent___internal___content",
	PluginCreatorParentInternalContentDigest = "pluginCreator___parent___internal___contentDigest",
	PluginCreatorParentInternalContentFilePath = "pluginCreator___parent___internal___contentFilePath",
	PluginCreatorParentInternalDescription = "pluginCreator___parent___internal___description",
	PluginCreatorParentInternalFieldOwners = "pluginCreator___parent___internal___fieldOwners",
	PluginCreatorParentInternalIgnoreType = "pluginCreator___parent___internal___ignoreType",
	PluginCreatorParentInternalMediaType = "pluginCreator___parent___internal___mediaType",
	PluginCreatorParentInternalOwner = "pluginCreator___parent___internal___owner",
	PluginCreatorParentInternalType = "pluginCreator___parent___internal___type",
	PluginCreatorParentParentChildren = "pluginCreator___parent___parent___children",
	PluginCreatorParentParentId = "pluginCreator___parent___parent___id",
	PluginCreatorPluginFilepath = "pluginCreator___pluginFilepath",
	PluginCreatorPluginOptions = "pluginCreator___pluginOptions",
	PluginCreatorResolve = "pluginCreator___resolve",
	PluginCreatorSsrApIs = "pluginCreator___ssrAPIs",
	PluginCreatorVersion = "pluginCreator___version",
}

export type SitePageFilterInput = {
	children?: InputMaybe<NodeFilterListInput>
	component?: InputMaybe<StringQueryOperatorInput>
	componentChunkName?: InputMaybe<StringQueryOperatorInput>
	id?: InputMaybe<StringQueryOperatorInput>
	internal?: InputMaybe<InternalFilterInput>
	internalComponentName?: InputMaybe<StringQueryOperatorInput>
	matchPath?: InputMaybe<StringQueryOperatorInput>
	pageContext?: InputMaybe<JsonQueryOperatorInput>
	parent?: InputMaybe<NodeFilterInput>
	path?: InputMaybe<StringQueryOperatorInput>
	pluginCreator?: InputMaybe<SitePluginFilterInput>
}

export type SitePageGroupConnection = {
	__typename?: "SitePageGroupConnection"
	distinct: Array<Scalars["String"]>
	edges: Array<SitePageEdge>
	field: Scalars["String"]
	fieldValue?: Maybe<Scalars["String"]>
	group: Array<SitePageGroupConnection>
	max?: Maybe<Scalars["Float"]>
	min?: Maybe<Scalars["Float"]>
	nodes: Array<SitePage>
	pageInfo: PageInfo
	sum?: Maybe<Scalars["Float"]>
	totalCount: Scalars["Int"]
}

export type SitePageGroupConnectionDistinctArgs = {
	field: SitePageFieldsEnum
}

export type SitePageGroupConnectionGroupArgs = {
	field: SitePageFieldsEnum
	limit?: InputMaybe<Scalars["Int"]>
	skip?: InputMaybe<Scalars["Int"]>
}

export type SitePageGroupConnectionMaxArgs = {
	field: SitePageFieldsEnum
}

export type SitePageGroupConnectionMinArgs = {
	field: SitePageFieldsEnum
}

export type SitePageGroupConnectionSumArgs = {
	field: SitePageFieldsEnum
}

export type SitePageSortInput = {
	fields?: InputMaybe<Array<InputMaybe<SitePageFieldsEnum>>>
	order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type SitePlugin = Node & {
	__typename?: "SitePlugin"
	browserAPIs?: Maybe<Array<Maybe<Scalars["String"]>>>
	children: Array<Node>
	id: Scalars["ID"]
	internal: Internal
	name?: Maybe<Scalars["String"]>
	nodeAPIs?: Maybe<Array<Maybe<Scalars["String"]>>>
	packageJson?: Maybe<Scalars["JSON"]>
	parent?: Maybe<Node>
	pluginFilepath?: Maybe<Scalars["String"]>
	pluginOptions?: Maybe<Scalars["JSON"]>
	resolve?: Maybe<Scalars["String"]>
	ssrAPIs?: Maybe<Array<Maybe<Scalars["String"]>>>
	version?: Maybe<Scalars["String"]>
}

export type SitePluginConnection = {
	__typename?: "SitePluginConnection"
	distinct: Array<Scalars["String"]>
	edges: Array<SitePluginEdge>
	group: Array<SitePluginGroupConnection>
	max?: Maybe<Scalars["Float"]>
	min?: Maybe<Scalars["Float"]>
	nodes: Array<SitePlugin>
	pageInfo: PageInfo
	sum?: Maybe<Scalars["Float"]>
	totalCount: Scalars["Int"]
}

export type SitePluginConnectionDistinctArgs = {
	field: SitePluginFieldsEnum
}

export type SitePluginConnectionGroupArgs = {
	field: SitePluginFieldsEnum
	limit?: InputMaybe<Scalars["Int"]>
	skip?: InputMaybe<Scalars["Int"]>
}

export type SitePluginConnectionMaxArgs = {
	field: SitePluginFieldsEnum
}

export type SitePluginConnectionMinArgs = {
	field: SitePluginFieldsEnum
}

export type SitePluginConnectionSumArgs = {
	field: SitePluginFieldsEnum
}

export type SitePluginEdge = {
	__typename?: "SitePluginEdge"
	next?: Maybe<SitePlugin>
	node: SitePlugin
	previous?: Maybe<SitePlugin>
}

export enum SitePluginFieldsEnum {
	BrowserApIs = "browserAPIs",
	Children = "children",
	ChildrenChildren = "children___children",
	ChildrenChildrenChildren = "children___children___children",
	ChildrenChildrenChildrenChildren = "children___children___children___children",
	ChildrenChildrenChildrenId = "children___children___children___id",
	ChildrenChildrenId = "children___children___id",
	ChildrenChildrenInternalContent = "children___children___internal___content",
	ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
	ChildrenChildrenInternalContentFilePath = "children___children___internal___contentFilePath",
	ChildrenChildrenInternalDescription = "children___children___internal___description",
	ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
	ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
	ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
	ChildrenChildrenInternalOwner = "children___children___internal___owner",
	ChildrenChildrenInternalType = "children___children___internal___type",
	ChildrenChildrenParentChildren = "children___children___parent___children",
	ChildrenChildrenParentId = "children___children___parent___id",
	ChildrenId = "children___id",
	ChildrenInternalContent = "children___internal___content",
	ChildrenInternalContentDigest = "children___internal___contentDigest",
	ChildrenInternalContentFilePath = "children___internal___contentFilePath",
	ChildrenInternalDescription = "children___internal___description",
	ChildrenInternalFieldOwners = "children___internal___fieldOwners",
	ChildrenInternalIgnoreType = "children___internal___ignoreType",
	ChildrenInternalMediaType = "children___internal___mediaType",
	ChildrenInternalOwner = "children___internal___owner",
	ChildrenInternalType = "children___internal___type",
	ChildrenParentChildren = "children___parent___children",
	ChildrenParentChildrenChildren = "children___parent___children___children",
	ChildrenParentChildrenId = "children___parent___children___id",
	ChildrenParentId = "children___parent___id",
	ChildrenParentInternalContent = "children___parent___internal___content",
	ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
	ChildrenParentInternalContentFilePath = "children___parent___internal___contentFilePath",
	ChildrenParentInternalDescription = "children___parent___internal___description",
	ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
	ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
	ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
	ChildrenParentInternalOwner = "children___parent___internal___owner",
	ChildrenParentInternalType = "children___parent___internal___type",
	ChildrenParentParentChildren = "children___parent___parent___children",
	ChildrenParentParentId = "children___parent___parent___id",
	Id = "id",
	InternalContent = "internal___content",
	InternalContentDigest = "internal___contentDigest",
	InternalContentFilePath = "internal___contentFilePath",
	InternalDescription = "internal___description",
	InternalFieldOwners = "internal___fieldOwners",
	InternalIgnoreType = "internal___ignoreType",
	InternalMediaType = "internal___mediaType",
	InternalOwner = "internal___owner",
	InternalType = "internal___type",
	Name = "name",
	NodeApIs = "nodeAPIs",
	PackageJson = "packageJson",
	ParentChildren = "parent___children",
	ParentChildrenChildren = "parent___children___children",
	ParentChildrenChildrenChildren = "parent___children___children___children",
	ParentChildrenChildrenId = "parent___children___children___id",
	ParentChildrenId = "parent___children___id",
	ParentChildrenInternalContent = "parent___children___internal___content",
	ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
	ParentChildrenInternalContentFilePath = "parent___children___internal___contentFilePath",
	ParentChildrenInternalDescription = "parent___children___internal___description",
	ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
	ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
	ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
	ParentChildrenInternalOwner = "parent___children___internal___owner",
	ParentChildrenInternalType = "parent___children___internal___type",
	ParentChildrenParentChildren = "parent___children___parent___children",
	ParentChildrenParentId = "parent___children___parent___id",
	ParentId = "parent___id",
	ParentInternalContent = "parent___internal___content",
	ParentInternalContentDigest = "parent___internal___contentDigest",
	ParentInternalContentFilePath = "parent___internal___contentFilePath",
	ParentInternalDescription = "parent___internal___description",
	ParentInternalFieldOwners = "parent___internal___fieldOwners",
	ParentInternalIgnoreType = "parent___internal___ignoreType",
	ParentInternalMediaType = "parent___internal___mediaType",
	ParentInternalOwner = "parent___internal___owner",
	ParentInternalType = "parent___internal___type",
	ParentParentChildren = "parent___parent___children",
	ParentParentChildrenChildren = "parent___parent___children___children",
	ParentParentChildrenId = "parent___parent___children___id",
	ParentParentId = "parent___parent___id",
	ParentParentInternalContent = "parent___parent___internal___content",
	ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
	ParentParentInternalContentFilePath = "parent___parent___internal___contentFilePath",
	ParentParentInternalDescription = "parent___parent___internal___description",
	ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
	ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
	ParentParentInternalMediaType = "parent___parent___internal___mediaType",
	ParentParentInternalOwner = "parent___parent___internal___owner",
	ParentParentInternalType = "parent___parent___internal___type",
	ParentParentParentChildren = "parent___parent___parent___children",
	ParentParentParentId = "parent___parent___parent___id",
	PluginFilepath = "pluginFilepath",
	PluginOptions = "pluginOptions",
	Resolve = "resolve",
	SsrApIs = "ssrAPIs",
	Version = "version",
}

export type SitePluginFilterInput = {
	browserAPIs?: InputMaybe<StringQueryOperatorInput>
	children?: InputMaybe<NodeFilterListInput>
	id?: InputMaybe<StringQueryOperatorInput>
	internal?: InputMaybe<InternalFilterInput>
	name?: InputMaybe<StringQueryOperatorInput>
	nodeAPIs?: InputMaybe<StringQueryOperatorInput>
	packageJson?: InputMaybe<JsonQueryOperatorInput>
	parent?: InputMaybe<NodeFilterInput>
	pluginFilepath?: InputMaybe<StringQueryOperatorInput>
	pluginOptions?: InputMaybe<JsonQueryOperatorInput>
	resolve?: InputMaybe<StringQueryOperatorInput>
	ssrAPIs?: InputMaybe<StringQueryOperatorInput>
	version?: InputMaybe<StringQueryOperatorInput>
}

export type SitePluginGroupConnection = {
	__typename?: "SitePluginGroupConnection"
	distinct: Array<Scalars["String"]>
	edges: Array<SitePluginEdge>
	field: Scalars["String"]
	fieldValue?: Maybe<Scalars["String"]>
	group: Array<SitePluginGroupConnection>
	max?: Maybe<Scalars["Float"]>
	min?: Maybe<Scalars["Float"]>
	nodes: Array<SitePlugin>
	pageInfo: PageInfo
	sum?: Maybe<Scalars["Float"]>
	totalCount: Scalars["Int"]
}

export type SitePluginGroupConnectionDistinctArgs = {
	field: SitePluginFieldsEnum
}

export type SitePluginGroupConnectionGroupArgs = {
	field: SitePluginFieldsEnum
	limit?: InputMaybe<Scalars["Int"]>
	skip?: InputMaybe<Scalars["Int"]>
}

export type SitePluginGroupConnectionMaxArgs = {
	field: SitePluginFieldsEnum
}

export type SitePluginGroupConnectionMinArgs = {
	field: SitePluginFieldsEnum
}

export type SitePluginGroupConnectionSumArgs = {
	field: SitePluginFieldsEnum
}

export type SitePluginSortInput = {
	fields?: InputMaybe<Array<InputMaybe<SitePluginFieldsEnum>>>
	order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type SiteSiteMetadata = {
	__typename?: "SiteSiteMetadata"
	description?: Maybe<Scalars["String"]>
	siteUrl?: Maybe<Scalars["String"]>
	title?: Maybe<Scalars["String"]>
}

export type SiteSiteMetadataFilterInput = {
	description?: InputMaybe<StringQueryOperatorInput>
	siteUrl?: InputMaybe<StringQueryOperatorInput>
	title?: InputMaybe<StringQueryOperatorInput>
}

export type SiteSortInput = {
	fields?: InputMaybe<Array<InputMaybe<SiteFieldsEnum>>>
	order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export enum SortOrderEnum {
	Asc = "ASC",
	Desc = "DESC",
}

export type StringQueryOperatorInput = {
	eq?: InputMaybe<Scalars["String"]>
	glob?: InputMaybe<Scalars["String"]>
	in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
	ne?: InputMaybe<Scalars["String"]>
	nin?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
	regex?: InputMaybe<Scalars["String"]>
}

export type EventAnchorFragment = {
	__typename?: "PrismicEventDataBodyAnchor"
	primary: {
		__typename?: "PrismicEventDataBodyAnchorPrimary"
		anchor?: string | undefined
	}
}

export type EventCallToActionFragment = {
	__typename?: "PrismicEventDataBodyCallToAction"
	primary: {
		__typename?: "PrismicEventDataBodyCallToActionPrimary"
		button_text?: string | undefined
		heading?:
			| { __typename?: "PrismicStructuredTextType"; text?: string | undefined }
			| undefined
		button_link?:
			| { __typename?: "PrismicLinkType"; url?: string | undefined }
			| undefined
	}
}

export type EventCallToActionCardFragment = {
	__typename?: "PrismicEventDataBodyCallToActionCard"
	primary: {
		__typename?: "PrismicEventDataBodyCallToActionCardPrimary"
		button_text?: string | undefined
		color?: string | undefined
		text?:
			| { __typename?: "PrismicStructuredTextType"; html?: string | undefined }
			| undefined
		button_link?:
			| { __typename?: "PrismicLinkType"; url?: string | undefined }
			| undefined
	}
}

export type EventFeaturedPeopleFragment = {
	__typename?: "PrismicEventDataBodyFeaturedPeople"
	primary: {
		__typename?: "PrismicEventDataBodyFeaturedPeoplePrimary"
		color?: string | undefined
		subheading?:
			| { __typename?: "PrismicStructuredTextType"; text?: string | undefined }
			| undefined
		heading?:
			| { __typename?: "PrismicStructuredTextType"; text?: string | undefined }
			| undefined
	}
	items: Array<{
		__typename?: "PrismicEventDataBodyFeaturedPeopleItem"
		instagram_handle?: string | undefined
		website_label?: string | undefined
		name?:
			| { __typename?: "PrismicStructuredTextType"; text?: string | undefined }
			| undefined
		title1?:
			| { __typename?: "PrismicStructuredTextType"; text?: string | undefined }
			| undefined
		pronouns?:
			| { __typename?: "PrismicStructuredTextType"; text?: string | undefined }
			| undefined
		bio?:
			| { __typename?: "PrismicStructuredTextType"; html?: string | undefined }
			| undefined
		headshot?:
			| {
					__typename?: "PrismicEventDataBodyFeaturedPeopleItemsHeadshotImageType"
					url?: string | undefined
					alt?: string | undefined
			  }
			| undefined
		instagram_profile_url?:
			| { __typename?: "PrismicLinkType"; url?: string | undefined }
			| undefined
		website_url?:
			| { __typename?: "PrismicLinkType"; url?: string | undefined }
			| undefined
	}>
}

export type EventImageCallToActionFragment = {
	__typename?: "PrismicEventDataBodyImageCallToAction"
	primary: {
		__typename?: "PrismicEventDataBodyImageCallToActionPrimary"
		button_text?: string | undefined
		color?: string | undefined
		image?:
			| {
					__typename?: "PrismicEventDataBodyImageCallToActionPrimaryImageImageType"
					url?: string | undefined
					alt?: string | undefined
			  }
			| undefined
		text?:
			| { __typename?: "PrismicStructuredTextType"; html?: string | undefined }
			| undefined
		button_link?:
			| { __typename?: "PrismicLinkType"; url?: string | undefined }
			| undefined
	}
}

export type EventIntroductionFragment = {
	__typename?: "PrismicEventDataBodyIntroduction"
	primary: {
		__typename?: "PrismicEventDataBodyIntroductionPrimary"
		color?: string | undefined
		heading?:
			| { __typename?: "PrismicStructuredTextType"; text?: string | undefined }
			| undefined
		text?:
			| { __typename?: "PrismicStructuredTextType"; html?: string | undefined }
			| undefined
	}
}

export type EventNewsletterFormFragment = {
	__typename?: "PrismicEventDataBodyNewsletterForm"
	primary: {
		__typename?: "PrismicEventDataBodyNewsletterFormPrimary"
		placeholder_text?: string | undefined
		color?: string | undefined
		heading?:
			| { __typename?: "PrismicStructuredTextType"; text?: string | undefined }
			| undefined
	}
}

export type EventPrideCalendarFragment = {
	__typename?: "PrismicEventDataBodyPrideCalendar"
	primary: {
		__typename?: "PrismicEventDataBodyPrideCalendarPrimary"
		color?: string | undefined
		text?:
			| { __typename?: "PrismicStructuredTextType"; html?: string | undefined }
			| undefined
	}
	items: Array<{
		__typename?: "PrismicEventDataBodyPrideCalendarItem"
		event_video_url?: string | undefined
		event_start?: unknown | undefined
		event_end?: unknown | undefined
		event_description?:
			| { __typename?: "PrismicStructuredTextType"; html?: string | undefined }
			| undefined
		event_link?:
			| { __typename?: "PrismicLinkType"; url?: string | undefined }
			| undefined
		event_title?:
			| { __typename?: "PrismicStructuredTextType"; text?: string | undefined }
			| undefined
		image?:
			| {
					__typename?: "PrismicEventDataBodyPrideCalendarItemsImageImageType"
					alt?: string | undefined
					gatsbyImageData?: unknown | undefined
					url?: string | undefined
			  }
			| undefined
	}>
}

export type EventRichTextFragment = {
	__typename?: "PrismicEventDataBodyRichText"
	primary: {
		__typename?: "PrismicEventDataBodyRichTextPrimary"
		button_text?: string | undefined
		color?: string | undefined
		text?:
			| { __typename?: "PrismicStructuredTextType"; html?: string | undefined }
			| undefined
		button_link?:
			| { __typename?: "PrismicLinkType"; url?: string | undefined }
			| undefined
	}
}

export type EventTextAndVideoFragment = {
	__typename?: "PrismicEventDataBodyTextAndVideo"
	primary: {
		__typename?: "PrismicEventDataBodyTextAndVideoPrimary"
		thumbnail_side?: string | undefined
		video_url?: string | undefined
		color?: string | undefined
		video_thumbnail?:
			| {
					__typename?: "PrismicEventDataBodyTextAndVideoPrimaryVideoThumbnailImageType"
					url?: string | undefined
					alt?: string | undefined
			  }
			| undefined
		text?:
			| { __typename?: "PrismicStructuredTextType"; html?: string | undefined }
			| undefined
	}
}

export type EventTwoColumnTextFragment = {
	__typename?: "PrismicEventDataBodyTwoColumnText"
	primary: {
		__typename?: "PrismicEventDataBodyTwoColumnTextPrimary"
		color?: string | undefined
		button_text?: string | undefined
		button_side?: string | undefined
		left_text?:
			| { __typename?: "PrismicStructuredTextType"; html?: string | undefined }
			| undefined
		right_text?:
			| { __typename?: "PrismicStructuredTextType"; html?: string | undefined }
			| undefined
		button_link?:
			| { __typename?: "PrismicLinkType"; url?: string | undefined }
			| undefined
	}
}

export type EventVideoFragment = {
	__typename?: "PrismicEventDataBodyVideo"
	primary: {
		__typename?: "PrismicEventDataBodyVideoPrimary"
		video_url?: string | undefined
		thumbnail?:
			| {
					__typename?: "PrismicEventDataBodyVideoPrimaryThumbnailImageType"
					alt?: string | undefined
					url?: string | undefined
			  }
			| undefined
	}
}

export type EventVideoGalleryFragment = {
	__typename?: "PrismicEventDataBodyVideoGallery"
	primary: {
		__typename?: "PrismicEventDataBodyVideoGalleryPrimary"
		color?: string | undefined
		text?:
			| { __typename?: "PrismicStructuredTextType"; html?: string | undefined }
			| undefined
		video_submission_type?:
			| {
					__typename?: "PrismicLinkType"
					uid?: string | undefined
					document?:
						| { __typename?: "PrismicEvent" }
						| { __typename?: "PrismicNavigation" }
						| { __typename?: "PrismicPage" }
						| { __typename?: "PrismicSettings" }
						| { __typename?: "PrismicSponsor" }
						| { __typename?: "PrismicSponsorsList" }
						| {
								__typename?: "PrismicSubmissionType"
								_previewable: string
								data: {
									__typename?: "PrismicSubmissionTypeDataType"
									votable?: boolean | undefined
									mute_videos?: boolean | undefined
									end_time?: unknown | undefined
								}
								submissions?:
									| Array<
											| {
													__typename?: "PrismicVideoSubmission"
													_previewable: string
													url?: string | undefined
													uid: string
													data: {
														__typename?: "PrismicVideoSubmissionDataType"
														video_url?: string | undefined
														name?:
															| {
																	__typename?: "PrismicStructuredTextType"
																	text?: string | undefined
															  }
															| undefined
														description?:
															| {
																	__typename?: "PrismicStructuredTextType"
																	html?: string | undefined
															  }
															| undefined
														subtitle?:
															| {
																	__typename?: "PrismicStructuredTextType"
																	text?: string | undefined
															  }
															| undefined
														video_thumbnail?:
															| {
																	__typename?: "PrismicVideoSubmissionDataVideoThumbnailImageType"
																	url?: string | undefined
																	alt?: string | undefined
															  }
															| undefined
													}
											  }
											| undefined
									  >
									| undefined
						  }
						| { __typename?: "PrismicVideoSubmission" }
						| undefined
			  }
			| undefined
	}
}

export type EventVideoHeroFragment = {
	__typename?: "PrismicEventDataBodyVideoHero"
	primary: {
		__typename?: "PrismicEventDataBodyVideoHeroPrimary"
		video_url?: string | undefined
		text?:
			| { __typename?: "PrismicStructuredTextType"; text?: string | undefined }
			| undefined
		video_thumbnail?:
			| {
					__typename?: "PrismicEventDataBodyVideoHeroPrimaryVideoThumbnailImageType"
					alt?: string | undefined
					url?: string | undefined
			  }
			| undefined
	}
}

export type PrimaryNavigationQueryVariables = Exact<{ [key: string]: never }>

export type PrimaryNavigationQuery = {
	__typename?: "Query"
	prismicNavigation?:
		| {
				__typename?: "PrismicNavigation"
				_previewable: string
				data: {
					__typename?: "PrismicNavigationDataType"
					nav_items?:
						| Array<
								| {
										__typename?: "PrismicNavigationDataNavItems"
										label?:
											| {
													__typename?: "PrismicStructuredTextType"
													text?: string | undefined
											  }
											| undefined
										link?:
											| {
													__typename?: "PrismicLinkType"
													url?: string | undefined
											  }
											| undefined
								  }
								| undefined
						  >
						| undefined
				}
		  }
		| undefined
}

export type SettingsQueryVariables = Exact<{ [key: string]: never }>

export type SettingsQuery = {
	__typename?: "Query"
	prismicSettings?:
		| {
				__typename?: "PrismicSettings"
				_previewable: string
				data: {
					__typename?: "PrismicSettingsDataType"
					facebook_url?: string | undefined
					instagram_url?: string | undefined
					youtube_url?: string | undefined
					twitter_url?: string | undefined
					twitter_username?: string | undefined
					footer_logo_url?: string | undefined
					enabled?: boolean | undefined
					site_name?:
						| {
								__typename?: "PrismicStructuredTextType"
								text?: string | undefined
						  }
						| undefined
					site_description?:
						| {
								__typename?: "PrismicStructuredTextType"
								text?: string | undefined
						  }
						| undefined
					site_copyright?:
						| {
								__typename?: "PrismicStructuredTextType"
								text?: string | undefined
								html?: string | undefined
						  }
						| undefined
					twitter_card_image?:
						| {
								__typename?: "PrismicSettingsDataTwitterCardImageImageType"
								url?: string | undefined
						  }
						| undefined
					open_graph_image?:
						| {
								__typename?: "PrismicSettingsDataOpenGraphImageImageType"
								url?: string | undefined
						  }
						| undefined
					text?:
						| {
								__typename?: "PrismicStructuredTextType"
								html?: string | undefined
						  }
						| undefined
				}
		  }
		| undefined
}

export type AnchorFragment = {
	__typename?: "PrismicPageDataBodyAnchor"
	primary: {
		__typename?: "PrismicPageDataBodyAnchorPrimary"
		anchor?: string | undefined
	}
}

export type CallToActionFragment = {
	__typename?: "PrismicPageDataBodyCallToAction"
	primary: {
		__typename?: "PrismicPageDataBodyCallToActionPrimary"
		button_text?: string | undefined
		heading?:
			| { __typename?: "PrismicStructuredTextType"; text?: string | undefined }
			| undefined
		button_link?:
			| { __typename?: "PrismicLinkType"; url?: string | undefined }
			| undefined
	}
}

export type CallToActionCardFragment = {
	__typename?: "PrismicPageDataBodyCallToActionCard"
	primary: {
		__typename?: "PrismicPageDataBodyCallToActionCardPrimary"
		button_text?: string | undefined
		color?: string | undefined
		text?:
			| { __typename?: "PrismicStructuredTextType"; html?: string | undefined }
			| undefined
		button_link?:
			| { __typename?: "PrismicLinkType"; url?: string | undefined }
			| undefined
	}
}

export type FeaturedPeopleFragment = {
	__typename?: "PrismicPageDataBodyFeaturedPeople"
	primary: {
		__typename?: "PrismicPageDataBodyFeaturedPeoplePrimary"
		color?: string | undefined
		subheading?:
			| { __typename?: "PrismicStructuredTextType"; text?: string | undefined }
			| undefined
		heading?:
			| { __typename?: "PrismicStructuredTextType"; text?: string | undefined }
			| undefined
	}
	items: Array<{
		__typename?: "PrismicPageDataBodyFeaturedPeopleItem"
		instagram_handle?: string | undefined
		website_label?: string | undefined
		name?:
			| { __typename?: "PrismicStructuredTextType"; text?: string | undefined }
			| undefined
		title1?:
			| { __typename?: "PrismicStructuredTextType"; text?: string | undefined }
			| undefined
		pronouns?:
			| { __typename?: "PrismicStructuredTextType"; text?: string | undefined }
			| undefined
		bio?:
			| { __typename?: "PrismicStructuredTextType"; html?: string | undefined }
			| undefined
		headshot?:
			| {
					__typename?: "PrismicPageDataBodyFeaturedPeopleItemsHeadshotImageType"
					url?: string | undefined
					alt?: string | undefined
			  }
			| undefined
		instagram_profile_url?:
			| { __typename?: "PrismicLinkType"; url?: string | undefined }
			| undefined
		website_url?:
			| { __typename?: "PrismicLinkType"; url?: string | undefined }
			| undefined
	}>
}

export type FilterableEventsFragment = {
	__typename?: "PrismicPageDataBodyFilterableEvents"
	items: Array<{
		__typename?: "PrismicPageDataBodyFilterableEventsItem"
		color?: string | undefined
		event?:
			| {
					__typename?: "PrismicLinkType"
					url?: string | undefined
					document?:
						| {
								__typename?: "PrismicEvent"
								_previewable: string
								data: {
									__typename?: "PrismicEventDataType"
									date?: unknown | undefined
									illustration?: string | undefined
									type?: string | undefined
									description?:
										| {
												__typename?: "PrismicStructuredTextType"
												html?: string | undefined
										  }
										| undefined
									title?:
										| {
												__typename?: "PrismicStructuredTextType"
												text?: string | undefined
										  }
										| undefined
								}
						  }
						| { __typename?: "PrismicNavigation" }
						| { __typename?: "PrismicPage" }
						| { __typename?: "PrismicSettings" }
						| { __typename?: "PrismicSponsor" }
						| { __typename?: "PrismicSponsorsList" }
						| { __typename?: "PrismicSubmissionType" }
						| { __typename?: "PrismicVideoSubmission" }
						| undefined
			  }
			| undefined
	}>
}

export type GradientTextFragment = {
	__typename?: "PrismicPageDataBodyGradientText"
	primary: {
		__typename?: "PrismicPageDataBodyGradientTextPrimary"
		button_link_text?: string | undefined
		text?:
			| { __typename?: "PrismicStructuredTextType"; text?: string | undefined }
			| undefined
		button_link?:
			| { __typename?: "PrismicLinkType"; url?: string | undefined }
			| undefined
	}
}

export type ImageCallToActionFragment = {
	__typename?: "PrismicPageDataBodyImageCallToAction"
	primary: {
		__typename?: "PrismicPageDataBodyImageCallToActionPrimary"
		button_text?: string | undefined
		color?: string | undefined
		image_side?: string | undefined
		image?:
			| {
					__typename?: "PrismicPageDataBodyImageCallToActionPrimaryImageImageType"
					url?: string | undefined
					alt?: string | undefined
			  }
			| undefined
		text?:
			| { __typename?: "PrismicStructuredTextType"; html?: string | undefined }
			| undefined
		button_link?:
			| { __typename?: "PrismicLinkType"; url?: string | undefined }
			| undefined
	}
}

export type IntroductionFragment = {
	__typename?: "PrismicPageDataBodyIntroduction"
	primary: {
		__typename?: "PrismicPageDataBodyIntroductionPrimary"
		color?: string | undefined
		heading?:
			| { __typename?: "PrismicStructuredTextType"; text?: string | undefined }
			| undefined
		text?:
			| { __typename?: "PrismicStructuredTextType"; html?: string | undefined }
			| undefined
	}
}

export type NewsletterFormFragment = {
	__typename?: "PrismicPageDataBodyNewsletterForm"
	primary: {
		__typename?: "PrismicPageDataBodyNewsletterFormPrimary"
		placeholder_text?: string | undefined
		color?: string | undefined
		heading?:
			| { __typename?: "PrismicStructuredTextType"; text?: string | undefined }
			| undefined
	}
}

export type PrideCalendarFragment = {
	__typename?: "PrismicPageDataBodyPrideCalendar"
	primary: {
		__typename?: "PrismicPageDataBodyPrideCalendarPrimary"
		color?: string | undefined
		text?:
			| { __typename?: "PrismicStructuredTextType"; html?: string | undefined }
			| undefined
	}
	items: Array<{
		__typename?: "PrismicPageDataBodyPrideCalendarItem"
		event_video_url?: string | undefined
		event_start?: unknown | undefined
		event_end?: unknown | undefined
		event_description?:
			| { __typename?: "PrismicStructuredTextType"; html?: string | undefined }
			| undefined
		event_link?:
			| { __typename?: "PrismicLinkType"; url?: string | undefined }
			| undefined
		event_title?:
			| { __typename?: "PrismicStructuredTextType"; text?: string | undefined }
			| undefined
		image?:
			| {
					__typename?: "PrismicPageDataBodyPrideCalendarItemsImageImageType"
					alt?: string | undefined
					gatsbyImageData?: unknown | undefined
					url?: string | undefined
			  }
			| undefined
	}>
}

export type RichTextFragment = {
	__typename?: "PrismicPageDataBodyRichText"
	primary: {
		__typename?: "PrismicPageDataBodyRichTextPrimary"
		button_text?: string | undefined
		color?: string | undefined
		text?:
			| { __typename?: "PrismicStructuredTextType"; html?: string | undefined }
			| undefined
		button_link?:
			| { __typename?: "PrismicLinkType"; url?: string | undefined }
			| undefined
	}
}

export type SponsorFragment = {
	__typename?: "PrismicSponsor"
	data: {
		__typename?: "PrismicSponsorDataType"
		image?:
			| {
					__typename?: "PrismicSponsorDataImageImageType"
					alt?: string | undefined
					url?: string | undefined
			  }
			| undefined
		link?:
			| { __typename?: "PrismicLinkType"; url?: string | undefined }
			| undefined
		name?:
			| { __typename?: "PrismicStructuredTextType"; text?: string | undefined }
			| undefined
	}
}

export type SponsorsFragment = {
	__typename?: "PrismicPageDataBodySponsors"
	primary: {
		__typename?: "PrismicPageDataBodySponsorsPrimary"
		heading?:
			| { __typename?: "PrismicStructuredTextType"; text?: string | undefined }
			| undefined
		subheading?:
			| { __typename?: "PrismicStructuredTextType"; text?: string | undefined }
			| undefined
		sponsor_list?:
			| {
					__typename?: "PrismicLinkType"
					document?:
						| { __typename?: "PrismicEvent" }
						| { __typename?: "PrismicNavigation" }
						| { __typename?: "PrismicPage" }
						| { __typename?: "PrismicSettings" }
						| { __typename?: "PrismicSponsor" }
						| {
								__typename?: "PrismicSponsorsList"
								id: string
								data: {
									__typename?: "PrismicSponsorsListDataType"
									rainbows_over_waikiki_sponsor?:
										| {
												__typename?: "PrismicLinkType"
												document?:
													| { __typename?: "PrismicEvent" }
													| { __typename?: "PrismicNavigation" }
													| { __typename?: "PrismicPage" }
													| { __typename?: "PrismicSettings" }
													| {
															__typename?: "PrismicSponsor"
															data: {
																__typename?: "PrismicSponsorDataType"
																image?:
																	| {
																			__typename?: "PrismicSponsorDataImageImageType"
																			alt?: string | undefined
																			url?: string | undefined
																	  }
																	| undefined
																link?:
																	| {
																			__typename?: "PrismicLinkType"
																			url?: string | undefined
																	  }
																	| undefined
																name?:
																	| {
																			__typename?: "PrismicStructuredTextType"
																			text?: string | undefined
																	  }
																	| undefined
															}
													  }
													| { __typename?: "PrismicSponsorsList" }
													| { __typename?: "PrismicSubmissionType" }
													| { __typename?: "PrismicVideoSubmission" }
													| undefined
										  }
										| undefined
									visionary_sponsors?:
										| Array<
												| {
														__typename?: "PrismicSponsorsListDataVisionarySponsors"
														sponsor?:
															| {
																	__typename?: "PrismicLinkType"
																	document?:
																		| { __typename?: "PrismicEvent" }
																		| { __typename?: "PrismicNavigation" }
																		| { __typename?: "PrismicPage" }
																		| { __typename?: "PrismicSettings" }
																		| {
																				__typename?: "PrismicSponsor"
																				data: {
																					__typename?: "PrismicSponsorDataType"
																					image?:
																						| {
																								__typename?: "PrismicSponsorDataImageImageType"
																								alt?: string | undefined
																								url?: string | undefined
																						  }
																						| undefined
																					link?:
																						| {
																								__typename?: "PrismicLinkType"
																								url?: string | undefined
																						  }
																						| undefined
																					name?:
																						| {
																								__typename?: "PrismicStructuredTextType"
																								text?: string | undefined
																						  }
																						| undefined
																				}
																		  }
																		| { __typename?: "PrismicSponsorsList" }
																		| { __typename?: "PrismicSubmissionType" }
																		| { __typename?: "PrismicVideoSubmission" }
																		| undefined
															  }
															| undefined
												  }
												| undefined
										  >
										| undefined
									media_sponsors?:
										| Array<
												| {
														__typename?: "PrismicSponsorsListDataMediaSponsors"
														sponsor?:
															| {
																	__typename?: "PrismicLinkType"
																	document?:
																		| { __typename?: "PrismicEvent" }
																		| { __typename?: "PrismicNavigation" }
																		| { __typename?: "PrismicPage" }
																		| { __typename?: "PrismicSettings" }
																		| {
																				__typename?: "PrismicSponsor"
																				data: {
																					__typename?: "PrismicSponsorDataType"
																					image?:
																						| {
																								__typename?: "PrismicSponsorDataImageImageType"
																								alt?: string | undefined
																								url?: string | undefined
																						  }
																						| undefined
																					link?:
																						| {
																								__typename?: "PrismicLinkType"
																								url?: string | undefined
																						  }
																						| undefined
																					name?:
																						| {
																								__typename?: "PrismicStructuredTextType"
																								text?: string | undefined
																						  }
																						| undefined
																				}
																		  }
																		| { __typename?: "PrismicSponsorsList" }
																		| { __typename?: "PrismicSubmissionType" }
																		| { __typename?: "PrismicVideoSubmission" }
																		| undefined
															  }
															| undefined
												  }
												| undefined
										  >
										| undefined
									platinum_sponsors?:
										| Array<
												| {
														__typename?: "PrismicSponsorsListDataPlatinumSponsors"
														sponsor?:
															| {
																	__typename?: "PrismicLinkType"
																	document?:
																		| { __typename?: "PrismicEvent" }
																		| { __typename?: "PrismicNavigation" }
																		| { __typename?: "PrismicPage" }
																		| { __typename?: "PrismicSettings" }
																		| {
																				__typename?: "PrismicSponsor"
																				data: {
																					__typename?: "PrismicSponsorDataType"
																					image?:
																						| {
																								__typename?: "PrismicSponsorDataImageImageType"
																								alt?: string | undefined
																								url?: string | undefined
																						  }
																						| undefined
																					link?:
																						| {
																								__typename?: "PrismicLinkType"
																								url?: string | undefined
																						  }
																						| undefined
																					name?:
																						| {
																								__typename?: "PrismicStructuredTextType"
																								text?: string | undefined
																						  }
																						| undefined
																				}
																		  }
																		| { __typename?: "PrismicSponsorsList" }
																		| { __typename?: "PrismicSubmissionType" }
																		| { __typename?: "PrismicVideoSubmission" }
																		| undefined
															  }
															| undefined
												  }
												| undefined
										  >
										| undefined
									gold_sponsors?:
										| Array<
												| {
														__typename?: "PrismicSponsorsListDataGoldSponsors"
														sponsor?:
															| {
																	__typename?: "PrismicLinkType"
																	document?:
																		| { __typename?: "PrismicEvent" }
																		| { __typename?: "PrismicNavigation" }
																		| { __typename?: "PrismicPage" }
																		| { __typename?: "PrismicSettings" }
																		| {
																				__typename?: "PrismicSponsor"
																				data: {
																					__typename?: "PrismicSponsorDataType"
																					image?:
																						| {
																								__typename?: "PrismicSponsorDataImageImageType"
																								alt?: string | undefined
																								url?: string | undefined
																						  }
																						| undefined
																					link?:
																						| {
																								__typename?: "PrismicLinkType"
																								url?: string | undefined
																						  }
																						| undefined
																					name?:
																						| {
																								__typename?: "PrismicStructuredTextType"
																								text?: string | undefined
																						  }
																						| undefined
																				}
																		  }
																		| { __typename?: "PrismicSponsorsList" }
																		| { __typename?: "PrismicSubmissionType" }
																		| { __typename?: "PrismicVideoSubmission" }
																		| undefined
															  }
															| undefined
												  }
												| undefined
										  >
										| undefined
									silver_sponsors?:
										| Array<
												| {
														__typename?: "PrismicSponsorsListDataSilverSponsors"
														sponsor?:
															| {
																	__typename?: "PrismicLinkType"
																	document?:
																		| { __typename?: "PrismicEvent" }
																		| { __typename?: "PrismicNavigation" }
																		| { __typename?: "PrismicPage" }
																		| { __typename?: "PrismicSettings" }
																		| {
																				__typename?: "PrismicSponsor"
																				data: {
																					__typename?: "PrismicSponsorDataType"
																					image?:
																						| {
																								__typename?: "PrismicSponsorDataImageImageType"
																								alt?: string | undefined
																								url?: string | undefined
																						  }
																						| undefined
																					link?:
																						| {
																								__typename?: "PrismicLinkType"
																								url?: string | undefined
																						  }
																						| undefined
																					name?:
																						| {
																								__typename?: "PrismicStructuredTextType"
																								text?: string | undefined
																						  }
																						| undefined
																				}
																		  }
																		| { __typename?: "PrismicSponsorsList" }
																		| { __typename?: "PrismicSubmissionType" }
																		| { __typename?: "PrismicVideoSubmission" }
																		| undefined
															  }
															| undefined
												  }
												| undefined
										  >
										| undefined
									bronze_sponsors?:
										| Array<
												| {
														__typename?: "PrismicSponsorsListDataBronzeSponsors"
														sponsor?:
															| {
																	__typename?: "PrismicLinkType"
																	document?:
																		| { __typename?: "PrismicEvent" }
																		| { __typename?: "PrismicNavigation" }
																		| { __typename?: "PrismicPage" }
																		| { __typename?: "PrismicSettings" }
																		| {
																				__typename?: "PrismicSponsor"
																				data: {
																					__typename?: "PrismicSponsorDataType"
																					image?:
																						| {
																								__typename?: "PrismicSponsorDataImageImageType"
																								alt?: string | undefined
																								url?: string | undefined
																						  }
																						| undefined
																					link?:
																						| {
																								__typename?: "PrismicLinkType"
																								url?: string | undefined
																						  }
																						| undefined
																					name?:
																						| {
																								__typename?: "PrismicStructuredTextType"
																								text?: string | undefined
																						  }
																						| undefined
																				}
																		  }
																		| { __typename?: "PrismicSponsorsList" }
																		| { __typename?: "PrismicSubmissionType" }
																		| { __typename?: "PrismicVideoSubmission" }
																		| undefined
															  }
															| undefined
												  }
												| undefined
										  >
										| undefined
									partner_sponsors?:
										| Array<
												| {
														__typename?: "PrismicSponsorsListDataPartnerSponsors"
														sponsor?:
															| {
																	__typename?: "PrismicLinkType"
																	document?:
																		| { __typename?: "PrismicEvent" }
																		| { __typename?: "PrismicNavigation" }
																		| { __typename?: "PrismicPage" }
																		| { __typename?: "PrismicSettings" }
																		| {
																				__typename?: "PrismicSponsor"
																				data: {
																					__typename?: "PrismicSponsorDataType"
																					image?:
																						| {
																								__typename?: "PrismicSponsorDataImageImageType"
																								alt?: string | undefined
																								url?: string | undefined
																						  }
																						| undefined
																					link?:
																						| {
																								__typename?: "PrismicLinkType"
																								url?: string | undefined
																						  }
																						| undefined
																					name?:
																						| {
																								__typename?: "PrismicStructuredTextType"
																								text?: string | undefined
																						  }
																						| undefined
																				}
																		  }
																		| { __typename?: "PrismicSponsorsList" }
																		| { __typename?: "PrismicSubmissionType" }
																		| { __typename?: "PrismicVideoSubmission" }
																		| undefined
															  }
															| undefined
												  }
												| undefined
										  >
										| undefined
								}
						  }
						| { __typename?: "PrismicSubmissionType" }
						| { __typename?: "PrismicVideoSubmission" }
						| undefined
			  }
			| undefined
	}
}

export type TextAndVideoFragment = {
	__typename?: "PrismicPageDataBodyTextAndVideo"
	primary: {
		__typename?: "PrismicPageDataBodyTextAndVideoPrimary"
		thumbnail_side?: string | undefined
		video_url?: string | undefined
		color?: string | undefined
		video_thumbnail?:
			| {
					__typename?: "PrismicPageDataBodyTextAndVideoPrimaryVideoThumbnailImageType"
					url?: string | undefined
					alt?: string | undefined
			  }
			| undefined
		text?:
			| { __typename?: "PrismicStructuredTextType"; html?: string | undefined }
			| undefined
	}
}

export type TwoColumnTextFragment = {
	__typename?: "PrismicPageDataBodyTwoColumnText"
	primary: {
		__typename?: "PrismicPageDataBodyTwoColumnTextPrimary"
		color?: string | undefined
		button_text?: string | undefined
		button_side?: string | undefined
		left_text?:
			| { __typename?: "PrismicStructuredTextType"; html?: string | undefined }
			| undefined
		right_text?:
			| { __typename?: "PrismicStructuredTextType"; html?: string | undefined }
			| undefined
		button_link?:
			| { __typename?: "PrismicLinkType"; url?: string | undefined }
			| undefined
	}
}

export type VideoFragment = {
	__typename?: "PrismicPageDataBodyVideo"
	primary: {
		__typename?: "PrismicPageDataBodyVideoPrimary"
		video_url?: string | undefined
		thumbnail?:
			| {
					__typename?: "PrismicPageDataBodyVideoPrimaryThumbnailImageType"
					alt?: string | undefined
					url?: string | undefined
			  }
			| undefined
	}
}

export type VideoGalleryFragment = {
	__typename?: "PrismicPageDataBodyVideoGallery"
	primary: {
		__typename?: "PrismicPageDataBodyVideoGalleryPrimary"
		color?: string | undefined
		text?:
			| { __typename?: "PrismicStructuredTextType"; html?: string | undefined }
			| undefined
		video_submission_type?:
			| {
					__typename?: "PrismicLinkType"
					uid?: string | undefined
					document?:
						| { __typename?: "PrismicEvent" }
						| { __typename?: "PrismicNavigation" }
						| { __typename?: "PrismicPage" }
						| { __typename?: "PrismicSettings" }
						| { __typename?: "PrismicSponsor" }
						| { __typename?: "PrismicSponsorsList" }
						| {
								__typename?: "PrismicSubmissionType"
								_previewable: string
								data: {
									__typename?: "PrismicSubmissionTypeDataType"
									votable?: boolean | undefined
									mute_videos?: boolean | undefined
									end_time?: unknown | undefined
								}
								submissions?:
									| Array<
											| {
													__typename?: "PrismicVideoSubmission"
													_previewable: string
													url?: string | undefined
													uid: string
													data: {
														__typename?: "PrismicVideoSubmissionDataType"
														video_url?: string | undefined
														name?:
															| {
																	__typename?: "PrismicStructuredTextType"
																	text?: string | undefined
															  }
															| undefined
														description?:
															| {
																	__typename?: "PrismicStructuredTextType"
																	html?: string | undefined
															  }
															| undefined
														subtitle?:
															| {
																	__typename?: "PrismicStructuredTextType"
																	text?: string | undefined
															  }
															| undefined
														video_thumbnail?:
															| {
																	__typename?: "PrismicVideoSubmissionDataVideoThumbnailImageType"
																	url?: string | undefined
																	alt?: string | undefined
															  }
															| undefined
													}
											  }
											| undefined
									  >
									| undefined
						  }
						| { __typename?: "PrismicVideoSubmission" }
						| undefined
			  }
			| undefined
	}
}

export type VideoHeroFragment = {
	__typename?: "PrismicPageDataBodyVideoHero"
	primary: {
		__typename?: "PrismicPageDataBodyVideoHeroPrimary"
		video_url?: string | undefined
		text?:
			| { __typename?: "PrismicStructuredTextType"; text?: string | undefined }
			| undefined
		video_thumbnail?:
			| {
					__typename?: "PrismicPageDataBodyVideoHeroPrimaryVideoThumbnailImageType"
					alt?: string | undefined
					url?: string | undefined
			  }
			| undefined
	}
}

export type EventTemplateQueryVariables = Exact<{
	uid: Scalars["String"]
}>

export type EventTemplateQuery = {
	__typename?: "Query"
	prismicEvent?:
		| {
				__typename?: "PrismicEvent"
				_previewable: string
				uid: string
				url?: string | undefined
				data: {
					__typename?: "PrismicEventDataType"
					title?:
						| {
								__typename?: "PrismicStructuredTextType"
								text?: string | undefined
						  }
						| undefined
					body: Array<
						| {
								__typename: "PrismicEventDataBodyAnchor"
								primary: {
									__typename?: "PrismicEventDataBodyAnchorPrimary"
									anchor?: string | undefined
								}
						  }
						| {
								__typename: "PrismicEventDataBodyCallToAction"
								primary: {
									__typename?: "PrismicEventDataBodyCallToActionPrimary"
									button_text?: string | undefined
									heading?:
										| {
												__typename?: "PrismicStructuredTextType"
												text?: string | undefined
										  }
										| undefined
									button_link?:
										| {
												__typename?: "PrismicLinkType"
												url?: string | undefined
										  }
										| undefined
								}
						  }
						| {
								__typename: "PrismicEventDataBodyCallToActionCard"
								primary: {
									__typename?: "PrismicEventDataBodyCallToActionCardPrimary"
									button_text?: string | undefined
									color?: string | undefined
									text?:
										| {
												__typename?: "PrismicStructuredTextType"
												html?: string | undefined
										  }
										| undefined
									button_link?:
										| {
												__typename?: "PrismicLinkType"
												url?: string | undefined
										  }
										| undefined
								}
						  }
						| {
								__typename: "PrismicEventDataBodyFeaturedPeople"
								primary: {
									__typename?: "PrismicEventDataBodyFeaturedPeoplePrimary"
									color?: string | undefined
									subheading?:
										| {
												__typename?: "PrismicStructuredTextType"
												text?: string | undefined
										  }
										| undefined
									heading?:
										| {
												__typename?: "PrismicStructuredTextType"
												text?: string | undefined
										  }
										| undefined
								}
								items: Array<{
									__typename?: "PrismicEventDataBodyFeaturedPeopleItem"
									instagram_handle?: string | undefined
									website_label?: string | undefined
									name?:
										| {
												__typename?: "PrismicStructuredTextType"
												text?: string | undefined
										  }
										| undefined
									title1?:
										| {
												__typename?: "PrismicStructuredTextType"
												text?: string | undefined
										  }
										| undefined
									pronouns?:
										| {
												__typename?: "PrismicStructuredTextType"
												text?: string | undefined
										  }
										| undefined
									bio?:
										| {
												__typename?: "PrismicStructuredTextType"
												html?: string | undefined
										  }
										| undefined
									headshot?:
										| {
												__typename?: "PrismicEventDataBodyFeaturedPeopleItemsHeadshotImageType"
												url?: string | undefined
												alt?: string | undefined
										  }
										| undefined
									instagram_profile_url?:
										| {
												__typename?: "PrismicLinkType"
												url?: string | undefined
										  }
										| undefined
									website_url?:
										| {
												__typename?: "PrismicLinkType"
												url?: string | undefined
										  }
										| undefined
								}>
						  }
						| {
								__typename: "PrismicEventDataBodyImageCallToAction"
								primary: {
									__typename?: "PrismicEventDataBodyImageCallToActionPrimary"
									button_text?: string | undefined
									color?: string | undefined
									image?:
										| {
												__typename?: "PrismicEventDataBodyImageCallToActionPrimaryImageImageType"
												url?: string | undefined
												alt?: string | undefined
										  }
										| undefined
									text?:
										| {
												__typename?: "PrismicStructuredTextType"
												html?: string | undefined
										  }
										| undefined
									button_link?:
										| {
												__typename?: "PrismicLinkType"
												url?: string | undefined
										  }
										| undefined
								}
						  }
						| {
								__typename: "PrismicEventDataBodyIntroduction"
								primary: {
									__typename?: "PrismicEventDataBodyIntroductionPrimary"
									color?: string | undefined
									heading?:
										| {
												__typename?: "PrismicStructuredTextType"
												text?: string | undefined
										  }
										| undefined
									text?:
										| {
												__typename?: "PrismicStructuredTextType"
												html?: string | undefined
										  }
										| undefined
								}
						  }
						| {
								__typename: "PrismicEventDataBodyNewsletterForm"
								primary: {
									__typename?: "PrismicEventDataBodyNewsletterFormPrimary"
									placeholder_text?: string | undefined
									color?: string | undefined
									heading?:
										| {
												__typename?: "PrismicStructuredTextType"
												text?: string | undefined
										  }
										| undefined
								}
						  }
						| {
								__typename: "PrismicEventDataBodyPrideCalendar"
								primary: {
									__typename?: "PrismicEventDataBodyPrideCalendarPrimary"
									color?: string | undefined
									text?:
										| {
												__typename?: "PrismicStructuredTextType"
												html?: string | undefined
										  }
										| undefined
								}
								items: Array<{
									__typename?: "PrismicEventDataBodyPrideCalendarItem"
									event_video_url?: string | undefined
									event_start?: unknown | undefined
									event_end?: unknown | undefined
									event_description?:
										| {
												__typename?: "PrismicStructuredTextType"
												html?: string | undefined
										  }
										| undefined
									event_link?:
										| {
												__typename?: "PrismicLinkType"
												url?: string | undefined
										  }
										| undefined
									event_title?:
										| {
												__typename?: "PrismicStructuredTextType"
												text?: string | undefined
										  }
										| undefined
									image?:
										| {
												__typename?: "PrismicEventDataBodyPrideCalendarItemsImageImageType"
												alt?: string | undefined
												gatsbyImageData?: unknown | undefined
												url?: string | undefined
										  }
										| undefined
								}>
						  }
						| {
								__typename: "PrismicEventDataBodyRichText"
								primary: {
									__typename?: "PrismicEventDataBodyRichTextPrimary"
									button_text?: string | undefined
									color?: string | undefined
									text?:
										| {
												__typename?: "PrismicStructuredTextType"
												html?: string | undefined
										  }
										| undefined
									button_link?:
										| {
												__typename?: "PrismicLinkType"
												url?: string | undefined
										  }
										| undefined
								}
						  }
						| {
								__typename: "PrismicEventDataBodyTextAndVideo"
								primary: {
									__typename?: "PrismicEventDataBodyTextAndVideoPrimary"
									thumbnail_side?: string | undefined
									video_url?: string | undefined
									color?: string | undefined
									video_thumbnail?:
										| {
												__typename?: "PrismicEventDataBodyTextAndVideoPrimaryVideoThumbnailImageType"
												url?: string | undefined
												alt?: string | undefined
										  }
										| undefined
									text?:
										| {
												__typename?: "PrismicStructuredTextType"
												html?: string | undefined
										  }
										| undefined
								}
						  }
						| {
								__typename: "PrismicEventDataBodyTwoColumnText"
								primary: {
									__typename?: "PrismicEventDataBodyTwoColumnTextPrimary"
									color?: string | undefined
									button_text?: string | undefined
									button_side?: string | undefined
									left_text?:
										| {
												__typename?: "PrismicStructuredTextType"
												html?: string | undefined
										  }
										| undefined
									right_text?:
										| {
												__typename?: "PrismicStructuredTextType"
												html?: string | undefined
										  }
										| undefined
									button_link?:
										| {
												__typename?: "PrismicLinkType"
												url?: string | undefined
										  }
										| undefined
								}
						  }
						| {
								__typename: "PrismicEventDataBodyVideo"
								primary: {
									__typename?: "PrismicEventDataBodyVideoPrimary"
									video_url?: string | undefined
									thumbnail?:
										| {
												__typename?: "PrismicEventDataBodyVideoPrimaryThumbnailImageType"
												alt?: string | undefined
												url?: string | undefined
										  }
										| undefined
								}
						  }
						| {
								__typename: "PrismicEventDataBodyVideoGallery"
								primary: {
									__typename?: "PrismicEventDataBodyVideoGalleryPrimary"
									color?: string | undefined
									text?:
										| {
												__typename?: "PrismicStructuredTextType"
												html?: string | undefined
										  }
										| undefined
									video_submission_type?:
										| {
												__typename?: "PrismicLinkType"
												uid?: string | undefined
												document?:
													| { __typename?: "PrismicEvent" }
													| { __typename?: "PrismicNavigation" }
													| { __typename?: "PrismicPage" }
													| { __typename?: "PrismicSettings" }
													| { __typename?: "PrismicSponsor" }
													| { __typename?: "PrismicSponsorsList" }
													| {
															__typename?: "PrismicSubmissionType"
															_previewable: string
															data: {
																__typename?: "PrismicSubmissionTypeDataType"
																votable?: boolean | undefined
																mute_videos?: boolean | undefined
																end_time?: unknown | undefined
															}
															submissions?:
																| Array<
																		| {
																				__typename?: "PrismicVideoSubmission"
																				_previewable: string
																				url?: string | undefined
																				uid: string
																				data: {
																					__typename?: "PrismicVideoSubmissionDataType"
																					video_url?: string | undefined
																					name?:
																						| {
																								__typename?: "PrismicStructuredTextType"
																								text?: string | undefined
																						  }
																						| undefined
																					description?:
																						| {
																								__typename?: "PrismicStructuredTextType"
																								html?: string | undefined
																						  }
																						| undefined
																					subtitle?:
																						| {
																								__typename?: "PrismicStructuredTextType"
																								text?: string | undefined
																						  }
																						| undefined
																					video_thumbnail?:
																						| {
																								__typename?: "PrismicVideoSubmissionDataVideoThumbnailImageType"
																								url?: string | undefined
																								alt?: string | undefined
																						  }
																						| undefined
																				}
																		  }
																		| undefined
																  >
																| undefined
													  }
													| { __typename?: "PrismicVideoSubmission" }
													| undefined
										  }
										| undefined
								}
						  }
						| {
								__typename: "PrismicEventDataBodyVideoHero"
								primary: {
									__typename?: "PrismicEventDataBodyVideoHeroPrimary"
									video_url?: string | undefined
									text?:
										| {
												__typename?: "PrismicStructuredTextType"
												text?: string | undefined
										  }
										| undefined
									video_thumbnail?:
										| {
												__typename?: "PrismicEventDataBodyVideoHeroPrimaryVideoThumbnailImageType"
												alt?: string | undefined
												url?: string | undefined
										  }
										| undefined
								}
						  }
					>
				}
		  }
		| undefined
}

export type PageTemplateQueryVariables = Exact<{
	uid: Scalars["String"]
}>

export type PageTemplateQuery = {
	__typename?: "Query"
	prismicPage?:
		| {
				__typename?: "PrismicPage"
				_previewable: string
				uid: string
				url?: string | undefined
				data: {
					__typename?: "PrismicPageDataType"
					meta_description?: string | undefined
					meta_title?: string | undefined
					title?:
						| {
								__typename?: "PrismicStructuredTextType"
								text?: string | undefined
						  }
						| undefined
					body: Array<
						| {
								__typename: "PrismicPageDataBodyAnchor"
								primary: {
									__typename?: "PrismicPageDataBodyAnchorPrimary"
									anchor?: string | undefined
								}
						  }
						| {
								__typename: "PrismicPageDataBodyCallToAction"
								primary: {
									__typename?: "PrismicPageDataBodyCallToActionPrimary"
									button_text?: string | undefined
									heading?:
										| {
												__typename?: "PrismicStructuredTextType"
												text?: string | undefined
										  }
										| undefined
									button_link?:
										| {
												__typename?: "PrismicLinkType"
												url?: string | undefined
										  }
										| undefined
								}
						  }
						| {
								__typename: "PrismicPageDataBodyCallToActionCard"
								primary: {
									__typename?: "PrismicPageDataBodyCallToActionCardPrimary"
									button_text?: string | undefined
									color?: string | undefined
									text?:
										| {
												__typename?: "PrismicStructuredTextType"
												html?: string | undefined
										  }
										| undefined
									button_link?:
										| {
												__typename?: "PrismicLinkType"
												url?: string | undefined
										  }
										| undefined
								}
						  }
						| {
								__typename: "PrismicPageDataBodyFeaturedPeople"
								primary: {
									__typename?: "PrismicPageDataBodyFeaturedPeoplePrimary"
									color?: string | undefined
									subheading?:
										| {
												__typename?: "PrismicStructuredTextType"
												text?: string | undefined
										  }
										| undefined
									heading?:
										| {
												__typename?: "PrismicStructuredTextType"
												text?: string | undefined
										  }
										| undefined
								}
								items: Array<{
									__typename?: "PrismicPageDataBodyFeaturedPeopleItem"
									instagram_handle?: string | undefined
									website_label?: string | undefined
									name?:
										| {
												__typename?: "PrismicStructuredTextType"
												text?: string | undefined
										  }
										| undefined
									title1?:
										| {
												__typename?: "PrismicStructuredTextType"
												text?: string | undefined
										  }
										| undefined
									pronouns?:
										| {
												__typename?: "PrismicStructuredTextType"
												text?: string | undefined
										  }
										| undefined
									bio?:
										| {
												__typename?: "PrismicStructuredTextType"
												html?: string | undefined
										  }
										| undefined
									headshot?:
										| {
												__typename?: "PrismicPageDataBodyFeaturedPeopleItemsHeadshotImageType"
												url?: string | undefined
												alt?: string | undefined
										  }
										| undefined
									instagram_profile_url?:
										| {
												__typename?: "PrismicLinkType"
												url?: string | undefined
										  }
										| undefined
									website_url?:
										| {
												__typename?: "PrismicLinkType"
												url?: string | undefined
										  }
										| undefined
								}>
						  }
						| {
								__typename: "PrismicPageDataBodyFilterableEvents"
								items: Array<{
									__typename?: "PrismicPageDataBodyFilterableEventsItem"
									color?: string | undefined
									event?:
										| {
												__typename?: "PrismicLinkType"
												url?: string | undefined
												document?:
													| {
															__typename?: "PrismicEvent"
															_previewable: string
															data: {
																__typename?: "PrismicEventDataType"
																date?: unknown | undefined
																illustration?: string | undefined
																type?: string | undefined
																description?:
																	| {
																			__typename?: "PrismicStructuredTextType"
																			html?: string | undefined
																	  }
																	| undefined
																title?:
																	| {
																			__typename?: "PrismicStructuredTextType"
																			text?: string | undefined
																	  }
																	| undefined
															}
													  }
													| { __typename?: "PrismicNavigation" }
													| { __typename?: "PrismicPage" }
													| { __typename?: "PrismicSettings" }
													| { __typename?: "PrismicSponsor" }
													| { __typename?: "PrismicSponsorsList" }
													| { __typename?: "PrismicSubmissionType" }
													| { __typename?: "PrismicVideoSubmission" }
													| undefined
										  }
										| undefined
								}>
						  }
						| {
								__typename: "PrismicPageDataBodyGradientText"
								primary: {
									__typename?: "PrismicPageDataBodyGradientTextPrimary"
									button_link_text?: string | undefined
									text?:
										| {
												__typename?: "PrismicStructuredTextType"
												text?: string | undefined
										  }
										| undefined
									button_link?:
										| {
												__typename?: "PrismicLinkType"
												url?: string | undefined
										  }
										| undefined
								}
						  }
						| {
								__typename: "PrismicPageDataBodyImageCallToAction"
								primary: {
									__typename?: "PrismicPageDataBodyImageCallToActionPrimary"
									button_text?: string | undefined
									color?: string | undefined
									image_side?: string | undefined
									image?:
										| {
												__typename?: "PrismicPageDataBodyImageCallToActionPrimaryImageImageType"
												url?: string | undefined
												alt?: string | undefined
										  }
										| undefined
									text?:
										| {
												__typename?: "PrismicStructuredTextType"
												html?: string | undefined
										  }
										| undefined
									button_link?:
										| {
												__typename?: "PrismicLinkType"
												url?: string | undefined
										  }
										| undefined
								}
						  }
						| {
								__typename: "PrismicPageDataBodyIntroduction"
								primary: {
									__typename?: "PrismicPageDataBodyIntroductionPrimary"
									color?: string | undefined
									heading?:
										| {
												__typename?: "PrismicStructuredTextType"
												text?: string | undefined
										  }
										| undefined
									text?:
										| {
												__typename?: "PrismicStructuredTextType"
												html?: string | undefined
										  }
										| undefined
								}
						  }
						| {
								__typename: "PrismicPageDataBodyNewsletterForm"
								primary: {
									__typename?: "PrismicPageDataBodyNewsletterFormPrimary"
									placeholder_text?: string | undefined
									color?: string | undefined
									heading?:
										| {
												__typename?: "PrismicStructuredTextType"
												text?: string | undefined
										  }
										| undefined
								}
						  }
						| {
								__typename: "PrismicPageDataBodyPrideCalendar"
								primary: {
									__typename?: "PrismicPageDataBodyPrideCalendarPrimary"
									color?: string | undefined
									text?:
										| {
												__typename?: "PrismicStructuredTextType"
												html?: string | undefined
										  }
										| undefined
								}
								items: Array<{
									__typename?: "PrismicPageDataBodyPrideCalendarItem"
									event_video_url?: string | undefined
									event_start?: unknown | undefined
									event_end?: unknown | undefined
									event_description?:
										| {
												__typename?: "PrismicStructuredTextType"
												html?: string | undefined
										  }
										| undefined
									event_link?:
										| {
												__typename?: "PrismicLinkType"
												url?: string | undefined
										  }
										| undefined
									event_title?:
										| {
												__typename?: "PrismicStructuredTextType"
												text?: string | undefined
										  }
										| undefined
									image?:
										| {
												__typename?: "PrismicPageDataBodyPrideCalendarItemsImageImageType"
												alt?: string | undefined
												gatsbyImageData?: unknown | undefined
												url?: string | undefined
										  }
										| undefined
								}>
						  }
						| {
								__typename: "PrismicPageDataBodyRichText"
								primary: {
									__typename?: "PrismicPageDataBodyRichTextPrimary"
									button_text?: string | undefined
									color?: string | undefined
									text?:
										| {
												__typename?: "PrismicStructuredTextType"
												html?: string | undefined
										  }
										| undefined
									button_link?:
										| {
												__typename?: "PrismicLinkType"
												url?: string | undefined
										  }
										| undefined
								}
						  }
						| {
								__typename: "PrismicPageDataBodySponsors"
								primary: {
									__typename?: "PrismicPageDataBodySponsorsPrimary"
									heading?:
										| {
												__typename?: "PrismicStructuredTextType"
												text?: string | undefined
										  }
										| undefined
									subheading?:
										| {
												__typename?: "PrismicStructuredTextType"
												text?: string | undefined
										  }
										| undefined
									sponsor_list?:
										| {
												__typename?: "PrismicLinkType"
												document?:
													| { __typename?: "PrismicEvent" }
													| { __typename?: "PrismicNavigation" }
													| { __typename?: "PrismicPage" }
													| { __typename?: "PrismicSettings" }
													| { __typename?: "PrismicSponsor" }
													| {
															__typename?: "PrismicSponsorsList"
															id: string
															data: {
																__typename?: "PrismicSponsorsListDataType"
																rainbows_over_waikiki_sponsor?:
																	| {
																			__typename?: "PrismicLinkType"
																			document?:
																				| { __typename?: "PrismicEvent" }
																				| { __typename?: "PrismicNavigation" }
																				| { __typename?: "PrismicPage" }
																				| { __typename?: "PrismicSettings" }
																				| {
																						__typename?: "PrismicSponsor"
																						data: {
																							__typename?: "PrismicSponsorDataType"
																							image?:
																								| {
																										__typename?: "PrismicSponsorDataImageImageType"
																										alt?: string | undefined
																										url?: string | undefined
																								  }
																								| undefined
																							link?:
																								| {
																										__typename?: "PrismicLinkType"
																										url?: string | undefined
																								  }
																								| undefined
																							name?:
																								| {
																										__typename?: "PrismicStructuredTextType"
																										text?: string | undefined
																								  }
																								| undefined
																						}
																				  }
																				| { __typename?: "PrismicSponsorsList" }
																				| {
																						__typename?: "PrismicSubmissionType"
																				  }
																				| {
																						__typename?: "PrismicVideoSubmission"
																				  }
																				| undefined
																	  }
																	| undefined
																visionary_sponsors?:
																	| Array<
																			| {
																					__typename?: "PrismicSponsorsListDataVisionarySponsors"
																					sponsor?:
																						| {
																								__typename?: "PrismicLinkType"
																								document?:
																									| {
																											__typename?: "PrismicEvent"
																									  }
																									| {
																											__typename?: "PrismicNavigation"
																									  }
																									| {
																											__typename?: "PrismicPage"
																									  }
																									| {
																											__typename?: "PrismicSettings"
																									  }
																									| {
																											__typename?: "PrismicSponsor"
																											data: {
																												__typename?: "PrismicSponsorDataType"
																												image?:
																													| {
																															__typename?: "PrismicSponsorDataImageImageType"
																															alt?:
																																| string
																																| undefined
																															url?:
																																| string
																																| undefined
																													  }
																													| undefined
																												link?:
																													| {
																															__typename?: "PrismicLinkType"
																															url?:
																																| string
																																| undefined
																													  }
																													| undefined
																												name?:
																													| {
																															__typename?: "PrismicStructuredTextType"
																															text?:
																																| string
																																| undefined
																													  }
																													| undefined
																											}
																									  }
																									| {
																											__typename?: "PrismicSponsorsList"
																									  }
																									| {
																											__typename?: "PrismicSubmissionType"
																									  }
																									| {
																											__typename?: "PrismicVideoSubmission"
																									  }
																									| undefined
																						  }
																						| undefined
																			  }
																			| undefined
																	  >
																	| undefined
																media_sponsors?:
																	| Array<
																			| {
																					__typename?: "PrismicSponsorsListDataMediaSponsors"
																					sponsor?:
																						| {
																								__typename?: "PrismicLinkType"
																								document?:
																									| {
																											__typename?: "PrismicEvent"
																									  }
																									| {
																											__typename?: "PrismicNavigation"
																									  }
																									| {
																											__typename?: "PrismicPage"
																									  }
																									| {
																											__typename?: "PrismicSettings"
																									  }
																									| {
																											__typename?: "PrismicSponsor"
																											data: {
																												__typename?: "PrismicSponsorDataType"
																												image?:
																													| {
																															__typename?: "PrismicSponsorDataImageImageType"
																															alt?:
																																| string
																																| undefined
																															url?:
																																| string
																																| undefined
																													  }
																													| undefined
																												link?:
																													| {
																															__typename?: "PrismicLinkType"
																															url?:
																																| string
																																| undefined
																													  }
																													| undefined
																												name?:
																													| {
																															__typename?: "PrismicStructuredTextType"
																															text?:
																																| string
																																| undefined
																													  }
																													| undefined
																											}
																									  }
																									| {
																											__typename?: "PrismicSponsorsList"
																									  }
																									| {
																											__typename?: "PrismicSubmissionType"
																									  }
																									| {
																											__typename?: "PrismicVideoSubmission"
																									  }
																									| undefined
																						  }
																						| undefined
																			  }
																			| undefined
																	  >
																	| undefined
																platinum_sponsors?:
																	| Array<
																			| {
																					__typename?: "PrismicSponsorsListDataPlatinumSponsors"
																					sponsor?:
																						| {
																								__typename?: "PrismicLinkType"
																								document?:
																									| {
																											__typename?: "PrismicEvent"
																									  }
																									| {
																											__typename?: "PrismicNavigation"
																									  }
																									| {
																											__typename?: "PrismicPage"
																									  }
																									| {
																											__typename?: "PrismicSettings"
																									  }
																									| {
																											__typename?: "PrismicSponsor"
																											data: {
																												__typename?: "PrismicSponsorDataType"
																												image?:
																													| {
																															__typename?: "PrismicSponsorDataImageImageType"
																															alt?:
																																| string
																																| undefined
																															url?:
																																| string
																																| undefined
																													  }
																													| undefined
																												link?:
																													| {
																															__typename?: "PrismicLinkType"
																															url?:
																																| string
																																| undefined
																													  }
																													| undefined
																												name?:
																													| {
																															__typename?: "PrismicStructuredTextType"
																															text?:
																																| string
																																| undefined
																													  }
																													| undefined
																											}
																									  }
																									| {
																											__typename?: "PrismicSponsorsList"
																									  }
																									| {
																											__typename?: "PrismicSubmissionType"
																									  }
																									| {
																											__typename?: "PrismicVideoSubmission"
																									  }
																									| undefined
																						  }
																						| undefined
																			  }
																			| undefined
																	  >
																	| undefined
																gold_sponsors?:
																	| Array<
																			| {
																					__typename?: "PrismicSponsorsListDataGoldSponsors"
																					sponsor?:
																						| {
																								__typename?: "PrismicLinkType"
																								document?:
																									| {
																											__typename?: "PrismicEvent"
																									  }
																									| {
																											__typename?: "PrismicNavigation"
																									  }
																									| {
																											__typename?: "PrismicPage"
																									  }
																									| {
																											__typename?: "PrismicSettings"
																									  }
																									| {
																											__typename?: "PrismicSponsor"
																											data: {
																												__typename?: "PrismicSponsorDataType"
																												image?:
																													| {
																															__typename?: "PrismicSponsorDataImageImageType"
																															alt?:
																																| string
																																| undefined
																															url?:
																																| string
																																| undefined
																													  }
																													| undefined
																												link?:
																													| {
																															__typename?: "PrismicLinkType"
																															url?:
																																| string
																																| undefined
																													  }
																													| undefined
																												name?:
																													| {
																															__typename?: "PrismicStructuredTextType"
																															text?:
																																| string
																																| undefined
																													  }
																													| undefined
																											}
																									  }
																									| {
																											__typename?: "PrismicSponsorsList"
																									  }
																									| {
																											__typename?: "PrismicSubmissionType"
																									  }
																									| {
																											__typename?: "PrismicVideoSubmission"
																									  }
																									| undefined
																						  }
																						| undefined
																			  }
																			| undefined
																	  >
																	| undefined
																silver_sponsors?:
																	| Array<
																			| {
																					__typename?: "PrismicSponsorsListDataSilverSponsors"
																					sponsor?:
																						| {
																								__typename?: "PrismicLinkType"
																								document?:
																									| {
																											__typename?: "PrismicEvent"
																									  }
																									| {
																											__typename?: "PrismicNavigation"
																									  }
																									| {
																											__typename?: "PrismicPage"
																									  }
																									| {
																											__typename?: "PrismicSettings"
																									  }
																									| {
																											__typename?: "PrismicSponsor"
																											data: {
																												__typename?: "PrismicSponsorDataType"
																												image?:
																													| {
																															__typename?: "PrismicSponsorDataImageImageType"
																															alt?:
																																| string
																																| undefined
																															url?:
																																| string
																																| undefined
																													  }
																													| undefined
																												link?:
																													| {
																															__typename?: "PrismicLinkType"
																															url?:
																																| string
																																| undefined
																													  }
																													| undefined
																												name?:
																													| {
																															__typename?: "PrismicStructuredTextType"
																															text?:
																																| string
																																| undefined
																													  }
																													| undefined
																											}
																									  }
																									| {
																											__typename?: "PrismicSponsorsList"
																									  }
																									| {
																											__typename?: "PrismicSubmissionType"
																									  }
																									| {
																											__typename?: "PrismicVideoSubmission"
																									  }
																									| undefined
																						  }
																						| undefined
																			  }
																			| undefined
																	  >
																	| undefined
																bronze_sponsors?:
																	| Array<
																			| {
																					__typename?: "PrismicSponsorsListDataBronzeSponsors"
																					sponsor?:
																						| {
																								__typename?: "PrismicLinkType"
																								document?:
																									| {
																											__typename?: "PrismicEvent"
																									  }
																									| {
																											__typename?: "PrismicNavigation"
																									  }
																									| {
																											__typename?: "PrismicPage"
																									  }
																									| {
																											__typename?: "PrismicSettings"
																									  }
																									| {
																											__typename?: "PrismicSponsor"
																											data: {
																												__typename?: "PrismicSponsorDataType"
																												image?:
																													| {
																															__typename?: "PrismicSponsorDataImageImageType"
																															alt?:
																																| string
																																| undefined
																															url?:
																																| string
																																| undefined
																													  }
																													| undefined
																												link?:
																													| {
																															__typename?: "PrismicLinkType"
																															url?:
																																| string
																																| undefined
																													  }
																													| undefined
																												name?:
																													| {
																															__typename?: "PrismicStructuredTextType"
																															text?:
																																| string
																																| undefined
																													  }
																													| undefined
																											}
																									  }
																									| {
																											__typename?: "PrismicSponsorsList"
																									  }
																									| {
																											__typename?: "PrismicSubmissionType"
																									  }
																									| {
																											__typename?: "PrismicVideoSubmission"
																									  }
																									| undefined
																						  }
																						| undefined
																			  }
																			| undefined
																	  >
																	| undefined
																partner_sponsors?:
																	| Array<
																			| {
																					__typename?: "PrismicSponsorsListDataPartnerSponsors"
																					sponsor?:
																						| {
																								__typename?: "PrismicLinkType"
																								document?:
																									| {
																											__typename?: "PrismicEvent"
																									  }
																									| {
																											__typename?: "PrismicNavigation"
																									  }
																									| {
																											__typename?: "PrismicPage"
																									  }
																									| {
																											__typename?: "PrismicSettings"
																									  }
																									| {
																											__typename?: "PrismicSponsor"
																											data: {
																												__typename?: "PrismicSponsorDataType"
																												image?:
																													| {
																															__typename?: "PrismicSponsorDataImageImageType"
																															alt?:
																																| string
																																| undefined
																															url?:
																																| string
																																| undefined
																													  }
																													| undefined
																												link?:
																													| {
																															__typename?: "PrismicLinkType"
																															url?:
																																| string
																																| undefined
																													  }
																													| undefined
																												name?:
																													| {
																															__typename?: "PrismicStructuredTextType"
																															text?:
																																| string
																																| undefined
																													  }
																													| undefined
																											}
																									  }
																									| {
																											__typename?: "PrismicSponsorsList"
																									  }
																									| {
																											__typename?: "PrismicSubmissionType"
																									  }
																									| {
																											__typename?: "PrismicVideoSubmission"
																									  }
																									| undefined
																						  }
																						| undefined
																			  }
																			| undefined
																	  >
																	| undefined
															}
													  }
													| { __typename?: "PrismicSubmissionType" }
													| { __typename?: "PrismicVideoSubmission" }
													| undefined
										  }
										| undefined
								}
						  }
						| {
								__typename: "PrismicPageDataBodyTextAndVideo"
								primary: {
									__typename?: "PrismicPageDataBodyTextAndVideoPrimary"
									thumbnail_side?: string | undefined
									video_url?: string | undefined
									color?: string | undefined
									video_thumbnail?:
										| {
												__typename?: "PrismicPageDataBodyTextAndVideoPrimaryVideoThumbnailImageType"
												url?: string | undefined
												alt?: string | undefined
										  }
										| undefined
									text?:
										| {
												__typename?: "PrismicStructuredTextType"
												html?: string | undefined
										  }
										| undefined
								}
						  }
						| {
								__typename: "PrismicPageDataBodyTwoColumnText"
								primary: {
									__typename?: "PrismicPageDataBodyTwoColumnTextPrimary"
									color?: string | undefined
									button_text?: string | undefined
									button_side?: string | undefined
									left_text?:
										| {
												__typename?: "PrismicStructuredTextType"
												html?: string | undefined
										  }
										| undefined
									right_text?:
										| {
												__typename?: "PrismicStructuredTextType"
												html?: string | undefined
										  }
										| undefined
									button_link?:
										| {
												__typename?: "PrismicLinkType"
												url?: string | undefined
										  }
										| undefined
								}
						  }
						| {
								__typename: "PrismicPageDataBodyVideo"
								primary: {
									__typename?: "PrismicPageDataBodyVideoPrimary"
									video_url?: string | undefined
									thumbnail?:
										| {
												__typename?: "PrismicPageDataBodyVideoPrimaryThumbnailImageType"
												alt?: string | undefined
												url?: string | undefined
										  }
										| undefined
								}
						  }
						| {
								__typename: "PrismicPageDataBodyVideoGallery"
								primary: {
									__typename?: "PrismicPageDataBodyVideoGalleryPrimary"
									color?: string | undefined
									text?:
										| {
												__typename?: "PrismicStructuredTextType"
												html?: string | undefined
										  }
										| undefined
									video_submission_type?:
										| {
												__typename?: "PrismicLinkType"
												uid?: string | undefined
												document?:
													| { __typename?: "PrismicEvent" }
													| { __typename?: "PrismicNavigation" }
													| { __typename?: "PrismicPage" }
													| { __typename?: "PrismicSettings" }
													| { __typename?: "PrismicSponsor" }
													| { __typename?: "PrismicSponsorsList" }
													| {
															__typename?: "PrismicSubmissionType"
															_previewable: string
															data: {
																__typename?: "PrismicSubmissionTypeDataType"
																votable?: boolean | undefined
																mute_videos?: boolean | undefined
																end_time?: unknown | undefined
															}
															submissions?:
																| Array<
																		| {
																				__typename?: "PrismicVideoSubmission"
																				_previewable: string
																				url?: string | undefined
																				uid: string
																				data: {
																					__typename?: "PrismicVideoSubmissionDataType"
																					video_url?: string | undefined
																					name?:
																						| {
																								__typename?: "PrismicStructuredTextType"
																								text?: string | undefined
																						  }
																						| undefined
																					description?:
																						| {
																								__typename?: "PrismicStructuredTextType"
																								html?: string | undefined
																						  }
																						| undefined
																					subtitle?:
																						| {
																								__typename?: "PrismicStructuredTextType"
																								text?: string | undefined
																						  }
																						| undefined
																					video_thumbnail?:
																						| {
																								__typename?: "PrismicVideoSubmissionDataVideoThumbnailImageType"
																								url?: string | undefined
																								alt?: string | undefined
																						  }
																						| undefined
																				}
																		  }
																		| undefined
																  >
																| undefined
													  }
													| { __typename?: "PrismicVideoSubmission" }
													| undefined
										  }
										| undefined
								}
						  }
						| {
								__typename: "PrismicPageDataBodyVideoHero"
								primary: {
									__typename?: "PrismicPageDataBodyVideoHeroPrimary"
									video_url?: string | undefined
									text?:
										| {
												__typename?: "PrismicStructuredTextType"
												text?: string | undefined
										  }
										| undefined
									video_thumbnail?:
										| {
												__typename?: "PrismicPageDataBodyVideoHeroPrimaryVideoThumbnailImageType"
												alt?: string | undefined
												url?: string | undefined
										  }
										| undefined
								}
						  }
					>
				}
		  }
		| undefined
}
