export type Maybe<T> = T | undefined
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
	/** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
	Date: unknown
	/** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
	JSON: unknown
	/** Text content with rich formatting capabilities using a Prismic format called Structured Text. */
	PrismicStructuredText: any
}

export type BooleanQueryOperatorInput = {
	eq?: Maybe<Scalars["Boolean"]>
	ne?: Maybe<Scalars["Boolean"]>
	in?: Maybe<Array<Maybe<Scalars["Boolean"]>>>
	nin?: Maybe<Array<Maybe<Scalars["Boolean"]>>>
}

export type DateQueryOperatorInput = {
	eq?: Maybe<Scalars["Date"]>
	ne?: Maybe<Scalars["Date"]>
	gt?: Maybe<Scalars["Date"]>
	gte?: Maybe<Scalars["Date"]>
	lt?: Maybe<Scalars["Date"]>
	lte?: Maybe<Scalars["Date"]>
	in?: Maybe<Array<Maybe<Scalars["Date"]>>>
	nin?: Maybe<Array<Maybe<Scalars["Date"]>>>
}

export type Directory = Node & {
	sourceInstanceName: Scalars["String"]
	absolutePath: Scalars["String"]
	relativePath: Scalars["String"]
	extension: Scalars["String"]
	size: Scalars["Int"]
	prettySize: Scalars["String"]
	modifiedTime: Scalars["Date"]
	accessTime: Scalars["Date"]
	changeTime: Scalars["Date"]
	birthTime: Scalars["Date"]
	root: Scalars["String"]
	dir: Scalars["String"]
	base: Scalars["String"]
	ext: Scalars["String"]
	name: Scalars["String"]
	relativeDirectory: Scalars["String"]
	dev: Scalars["Int"]
	mode: Scalars["Int"]
	nlink: Scalars["Int"]
	uid: Scalars["Int"]
	gid: Scalars["Int"]
	rdev: Scalars["Int"]
	ino: Scalars["Float"]
	atimeMs: Scalars["Float"]
	mtimeMs: Scalars["Float"]
	ctimeMs: Scalars["Float"]
	atime: Scalars["Date"]
	mtime: Scalars["Date"]
	ctime: Scalars["Date"]
	/** @deprecated Use `birthTime` instead */
	birthtime?: Maybe<Scalars["Date"]>
	/** @deprecated Use `birthTime` instead */
	birthtimeMs?: Maybe<Scalars["Float"]>
	id: Scalars["ID"]
	parent?: Maybe<Node>
	children: Array<Node>
	internal: Internal
}

export type DirectoryModifiedTimeArgs = {
	formatString?: Maybe<Scalars["String"]>
	fromNow?: Maybe<Scalars["Boolean"]>
	difference?: Maybe<Scalars["String"]>
	locale?: Maybe<Scalars["String"]>
}

export type DirectoryAccessTimeArgs = {
	formatString?: Maybe<Scalars["String"]>
	fromNow?: Maybe<Scalars["Boolean"]>
	difference?: Maybe<Scalars["String"]>
	locale?: Maybe<Scalars["String"]>
}

export type DirectoryChangeTimeArgs = {
	formatString?: Maybe<Scalars["String"]>
	fromNow?: Maybe<Scalars["Boolean"]>
	difference?: Maybe<Scalars["String"]>
	locale?: Maybe<Scalars["String"]>
}

export type DirectoryBirthTimeArgs = {
	formatString?: Maybe<Scalars["String"]>
	fromNow?: Maybe<Scalars["Boolean"]>
	difference?: Maybe<Scalars["String"]>
	locale?: Maybe<Scalars["String"]>
}

export type DirectoryAtimeArgs = {
	formatString?: Maybe<Scalars["String"]>
	fromNow?: Maybe<Scalars["Boolean"]>
	difference?: Maybe<Scalars["String"]>
	locale?: Maybe<Scalars["String"]>
}

export type DirectoryMtimeArgs = {
	formatString?: Maybe<Scalars["String"]>
	fromNow?: Maybe<Scalars["Boolean"]>
	difference?: Maybe<Scalars["String"]>
	locale?: Maybe<Scalars["String"]>
}

export type DirectoryCtimeArgs = {
	formatString?: Maybe<Scalars["String"]>
	fromNow?: Maybe<Scalars["Boolean"]>
	difference?: Maybe<Scalars["String"]>
	locale?: Maybe<Scalars["String"]>
}

export type DirectoryConnection = {
	totalCount: Scalars["Int"]
	edges: Array<DirectoryEdge>
	nodes: Array<Directory>
	pageInfo: PageInfo
	distinct: Array<Scalars["String"]>
	max?: Maybe<Scalars["Float"]>
	min?: Maybe<Scalars["Float"]>
	sum?: Maybe<Scalars["Float"]>
	group: Array<DirectoryGroupConnection>
}

export type DirectoryConnectionDistinctArgs = {
	field: DirectoryFieldsEnum
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

export type DirectoryConnectionGroupArgs = {
	skip?: Maybe<Scalars["Int"]>
	limit?: Maybe<Scalars["Int"]>
	field: DirectoryFieldsEnum
}

export type DirectoryEdge = {
	next?: Maybe<Directory>
	node: Directory
	previous?: Maybe<Directory>
}

export enum DirectoryFieldsEnum {
	SourceInstanceName = "sourceInstanceName",
	AbsolutePath = "absolutePath",
	RelativePath = "relativePath",
	Extension = "extension",
	Size = "size",
	PrettySize = "prettySize",
	ModifiedTime = "modifiedTime",
	AccessTime = "accessTime",
	ChangeTime = "changeTime",
	BirthTime = "birthTime",
	Root = "root",
	Dir = "dir",
	Base = "base",
	Ext = "ext",
	Name = "name",
	RelativeDirectory = "relativeDirectory",
	Dev = "dev",
	Mode = "mode",
	Nlink = "nlink",
	Uid = "uid",
	Gid = "gid",
	Rdev = "rdev",
	Ino = "ino",
	AtimeMs = "atimeMs",
	MtimeMs = "mtimeMs",
	CtimeMs = "ctimeMs",
	Atime = "atime",
	Mtime = "mtime",
	Ctime = "ctime",
	Birthtime = "birthtime",
	BirthtimeMs = "birthtimeMs",
	Id = "id",
	ParentId = "parent___id",
	ParentParentId = "parent___parent___id",
	ParentParentParentId = "parent___parent___parent___id",
	ParentParentParentChildren = "parent___parent___parent___children",
	ParentParentChildren = "parent___parent___children",
	ParentParentChildrenId = "parent___parent___children___id",
	ParentParentChildrenChildren = "parent___parent___children___children",
	ParentParentInternalContent = "parent___parent___internal___content",
	ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
	ParentParentInternalDescription = "parent___parent___internal___description",
	ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
	ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
	ParentParentInternalMediaType = "parent___parent___internal___mediaType",
	ParentParentInternalOwner = "parent___parent___internal___owner",
	ParentParentInternalType = "parent___parent___internal___type",
	ParentParentInternalContentFilePath = "parent___parent___internal___contentFilePath",
	ParentChildren = "parent___children",
	ParentChildrenId = "parent___children___id",
	ParentChildrenParentId = "parent___children___parent___id",
	ParentChildrenParentChildren = "parent___children___parent___children",
	ParentChildrenChildren = "parent___children___children",
	ParentChildrenChildrenId = "parent___children___children___id",
	ParentChildrenChildrenChildren = "parent___children___children___children",
	ParentChildrenInternalContent = "parent___children___internal___content",
	ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
	ParentChildrenInternalDescription = "parent___children___internal___description",
	ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
	ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
	ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
	ParentChildrenInternalOwner = "parent___children___internal___owner",
	ParentChildrenInternalType = "parent___children___internal___type",
	ParentChildrenInternalContentFilePath = "parent___children___internal___contentFilePath",
	ParentInternalContent = "parent___internal___content",
	ParentInternalContentDigest = "parent___internal___contentDigest",
	ParentInternalDescription = "parent___internal___description",
	ParentInternalFieldOwners = "parent___internal___fieldOwners",
	ParentInternalIgnoreType = "parent___internal___ignoreType",
	ParentInternalMediaType = "parent___internal___mediaType",
	ParentInternalOwner = "parent___internal___owner",
	ParentInternalType = "parent___internal___type",
	ParentInternalContentFilePath = "parent___internal___contentFilePath",
	Children = "children",
	ChildrenId = "children___id",
	ChildrenParentId = "children___parent___id",
	ChildrenParentParentId = "children___parent___parent___id",
	ChildrenParentParentChildren = "children___parent___parent___children",
	ChildrenParentChildren = "children___parent___children",
	ChildrenParentChildrenId = "children___parent___children___id",
	ChildrenParentChildrenChildren = "children___parent___children___children",
	ChildrenParentInternalContent = "children___parent___internal___content",
	ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
	ChildrenParentInternalDescription = "children___parent___internal___description",
	ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
	ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
	ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
	ChildrenParentInternalOwner = "children___parent___internal___owner",
	ChildrenParentInternalType = "children___parent___internal___type",
	ChildrenParentInternalContentFilePath = "children___parent___internal___contentFilePath",
	ChildrenChildren = "children___children",
	ChildrenChildrenId = "children___children___id",
	ChildrenChildrenParentId = "children___children___parent___id",
	ChildrenChildrenParentChildren = "children___children___parent___children",
	ChildrenChildrenChildren = "children___children___children",
	ChildrenChildrenChildrenId = "children___children___children___id",
	ChildrenChildrenChildrenChildren = "children___children___children___children",
	ChildrenChildrenInternalContent = "children___children___internal___content",
	ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
	ChildrenChildrenInternalDescription = "children___children___internal___description",
	ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
	ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
	ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
	ChildrenChildrenInternalOwner = "children___children___internal___owner",
	ChildrenChildrenInternalType = "children___children___internal___type",
	ChildrenChildrenInternalContentFilePath = "children___children___internal___contentFilePath",
	ChildrenInternalContent = "children___internal___content",
	ChildrenInternalContentDigest = "children___internal___contentDigest",
	ChildrenInternalDescription = "children___internal___description",
	ChildrenInternalFieldOwners = "children___internal___fieldOwners",
	ChildrenInternalIgnoreType = "children___internal___ignoreType",
	ChildrenInternalMediaType = "children___internal___mediaType",
	ChildrenInternalOwner = "children___internal___owner",
	ChildrenInternalType = "children___internal___type",
	ChildrenInternalContentFilePath = "children___internal___contentFilePath",
	InternalContent = "internal___content",
	InternalContentDigest = "internal___contentDigest",
	InternalDescription = "internal___description",
	InternalFieldOwners = "internal___fieldOwners",
	InternalIgnoreType = "internal___ignoreType",
	InternalMediaType = "internal___mediaType",
	InternalOwner = "internal___owner",
	InternalType = "internal___type",
	InternalContentFilePath = "internal___contentFilePath",
}

export type DirectoryFilterInput = {
	sourceInstanceName?: Maybe<StringQueryOperatorInput>
	absolutePath?: Maybe<StringQueryOperatorInput>
	relativePath?: Maybe<StringQueryOperatorInput>
	extension?: Maybe<StringQueryOperatorInput>
	size?: Maybe<IntQueryOperatorInput>
	prettySize?: Maybe<StringQueryOperatorInput>
	modifiedTime?: Maybe<DateQueryOperatorInput>
	accessTime?: Maybe<DateQueryOperatorInput>
	changeTime?: Maybe<DateQueryOperatorInput>
	birthTime?: Maybe<DateQueryOperatorInput>
	root?: Maybe<StringQueryOperatorInput>
	dir?: Maybe<StringQueryOperatorInput>
	base?: Maybe<StringQueryOperatorInput>
	ext?: Maybe<StringQueryOperatorInput>
	name?: Maybe<StringQueryOperatorInput>
	relativeDirectory?: Maybe<StringQueryOperatorInput>
	dev?: Maybe<IntQueryOperatorInput>
	mode?: Maybe<IntQueryOperatorInput>
	nlink?: Maybe<IntQueryOperatorInput>
	uid?: Maybe<IntQueryOperatorInput>
	gid?: Maybe<IntQueryOperatorInput>
	rdev?: Maybe<IntQueryOperatorInput>
	ino?: Maybe<FloatQueryOperatorInput>
	atimeMs?: Maybe<FloatQueryOperatorInput>
	mtimeMs?: Maybe<FloatQueryOperatorInput>
	ctimeMs?: Maybe<FloatQueryOperatorInput>
	atime?: Maybe<DateQueryOperatorInput>
	mtime?: Maybe<DateQueryOperatorInput>
	ctime?: Maybe<DateQueryOperatorInput>
	birthtime?: Maybe<DateQueryOperatorInput>
	birthtimeMs?: Maybe<FloatQueryOperatorInput>
	id?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	children?: Maybe<NodeFilterListInput>
	internal?: Maybe<InternalFilterInput>
}

export type DirectoryGroupConnection = {
	totalCount: Scalars["Int"]
	edges: Array<DirectoryEdge>
	nodes: Array<Directory>
	pageInfo: PageInfo
	distinct: Array<Scalars["String"]>
	max?: Maybe<Scalars["Float"]>
	min?: Maybe<Scalars["Float"]>
	sum?: Maybe<Scalars["Float"]>
	group: Array<DirectoryGroupConnection>
	field: Scalars["String"]
	fieldValue?: Maybe<Scalars["String"]>
}

export type DirectoryGroupConnectionDistinctArgs = {
	field: DirectoryFieldsEnum
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

export type DirectoryGroupConnectionGroupArgs = {
	skip?: Maybe<Scalars["Int"]>
	limit?: Maybe<Scalars["Int"]>
	field: DirectoryFieldsEnum
}

export type DirectorySortInput = {
	fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>
	order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type File = Node & {
	sourceInstanceName: Scalars["String"]
	absolutePath: Scalars["String"]
	relativePath: Scalars["String"]
	extension: Scalars["String"]
	size: Scalars["Int"]
	prettySize: Scalars["String"]
	modifiedTime: Scalars["Date"]
	accessTime: Scalars["Date"]
	changeTime: Scalars["Date"]
	birthTime: Scalars["Date"]
	root: Scalars["String"]
	dir: Scalars["String"]
	base: Scalars["String"]
	ext: Scalars["String"]
	name: Scalars["String"]
	relativeDirectory: Scalars["String"]
	dev: Scalars["Int"]
	mode: Scalars["Int"]
	nlink: Scalars["Int"]
	uid: Scalars["Int"]
	gid: Scalars["Int"]
	rdev: Scalars["Int"]
	ino: Scalars["Float"]
	atimeMs: Scalars["Float"]
	mtimeMs: Scalars["Float"]
	ctimeMs: Scalars["Float"]
	atime: Scalars["Date"]
	mtime: Scalars["Date"]
	ctime: Scalars["Date"]
	/** @deprecated Use `birthTime` instead */
	birthtime?: Maybe<Scalars["Date"]>
	/** @deprecated Use `birthTime` instead */
	birthtimeMs?: Maybe<Scalars["Float"]>
	id: Scalars["ID"]
	parent?: Maybe<Node>
	children: Array<Node>
	internal: Internal
}

export type FileModifiedTimeArgs = {
	formatString?: Maybe<Scalars["String"]>
	fromNow?: Maybe<Scalars["Boolean"]>
	difference?: Maybe<Scalars["String"]>
	locale?: Maybe<Scalars["String"]>
}

export type FileAccessTimeArgs = {
	formatString?: Maybe<Scalars["String"]>
	fromNow?: Maybe<Scalars["Boolean"]>
	difference?: Maybe<Scalars["String"]>
	locale?: Maybe<Scalars["String"]>
}

export type FileChangeTimeArgs = {
	formatString?: Maybe<Scalars["String"]>
	fromNow?: Maybe<Scalars["Boolean"]>
	difference?: Maybe<Scalars["String"]>
	locale?: Maybe<Scalars["String"]>
}

export type FileBirthTimeArgs = {
	formatString?: Maybe<Scalars["String"]>
	fromNow?: Maybe<Scalars["Boolean"]>
	difference?: Maybe<Scalars["String"]>
	locale?: Maybe<Scalars["String"]>
}

export type FileAtimeArgs = {
	formatString?: Maybe<Scalars["String"]>
	fromNow?: Maybe<Scalars["Boolean"]>
	difference?: Maybe<Scalars["String"]>
	locale?: Maybe<Scalars["String"]>
}

export type FileMtimeArgs = {
	formatString?: Maybe<Scalars["String"]>
	fromNow?: Maybe<Scalars["Boolean"]>
	difference?: Maybe<Scalars["String"]>
	locale?: Maybe<Scalars["String"]>
}

export type FileCtimeArgs = {
	formatString?: Maybe<Scalars["String"]>
	fromNow?: Maybe<Scalars["Boolean"]>
	difference?: Maybe<Scalars["String"]>
	locale?: Maybe<Scalars["String"]>
}

export type FileConnection = {
	totalCount: Scalars["Int"]
	edges: Array<FileEdge>
	nodes: Array<File>
	pageInfo: PageInfo
	distinct: Array<Scalars["String"]>
	max?: Maybe<Scalars["Float"]>
	min?: Maybe<Scalars["Float"]>
	sum?: Maybe<Scalars["Float"]>
	group: Array<FileGroupConnection>
}

export type FileConnectionDistinctArgs = {
	field: FileFieldsEnum
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

export type FileConnectionGroupArgs = {
	skip?: Maybe<Scalars["Int"]>
	limit?: Maybe<Scalars["Int"]>
	field: FileFieldsEnum
}

export type FileEdge = {
	next?: Maybe<File>
	node: File
	previous?: Maybe<File>
}

export enum FileFieldsEnum {
	SourceInstanceName = "sourceInstanceName",
	AbsolutePath = "absolutePath",
	RelativePath = "relativePath",
	Extension = "extension",
	Size = "size",
	PrettySize = "prettySize",
	ModifiedTime = "modifiedTime",
	AccessTime = "accessTime",
	ChangeTime = "changeTime",
	BirthTime = "birthTime",
	Root = "root",
	Dir = "dir",
	Base = "base",
	Ext = "ext",
	Name = "name",
	RelativeDirectory = "relativeDirectory",
	Dev = "dev",
	Mode = "mode",
	Nlink = "nlink",
	Uid = "uid",
	Gid = "gid",
	Rdev = "rdev",
	Ino = "ino",
	AtimeMs = "atimeMs",
	MtimeMs = "mtimeMs",
	CtimeMs = "ctimeMs",
	Atime = "atime",
	Mtime = "mtime",
	Ctime = "ctime",
	Birthtime = "birthtime",
	BirthtimeMs = "birthtimeMs",
	Id = "id",
	ParentId = "parent___id",
	ParentParentId = "parent___parent___id",
	ParentParentParentId = "parent___parent___parent___id",
	ParentParentParentChildren = "parent___parent___parent___children",
	ParentParentChildren = "parent___parent___children",
	ParentParentChildrenId = "parent___parent___children___id",
	ParentParentChildrenChildren = "parent___parent___children___children",
	ParentParentInternalContent = "parent___parent___internal___content",
	ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
	ParentParentInternalDescription = "parent___parent___internal___description",
	ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
	ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
	ParentParentInternalMediaType = "parent___parent___internal___mediaType",
	ParentParentInternalOwner = "parent___parent___internal___owner",
	ParentParentInternalType = "parent___parent___internal___type",
	ParentParentInternalContentFilePath = "parent___parent___internal___contentFilePath",
	ParentChildren = "parent___children",
	ParentChildrenId = "parent___children___id",
	ParentChildrenParentId = "parent___children___parent___id",
	ParentChildrenParentChildren = "parent___children___parent___children",
	ParentChildrenChildren = "parent___children___children",
	ParentChildrenChildrenId = "parent___children___children___id",
	ParentChildrenChildrenChildren = "parent___children___children___children",
	ParentChildrenInternalContent = "parent___children___internal___content",
	ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
	ParentChildrenInternalDescription = "parent___children___internal___description",
	ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
	ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
	ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
	ParentChildrenInternalOwner = "parent___children___internal___owner",
	ParentChildrenInternalType = "parent___children___internal___type",
	ParentChildrenInternalContentFilePath = "parent___children___internal___contentFilePath",
	ParentInternalContent = "parent___internal___content",
	ParentInternalContentDigest = "parent___internal___contentDigest",
	ParentInternalDescription = "parent___internal___description",
	ParentInternalFieldOwners = "parent___internal___fieldOwners",
	ParentInternalIgnoreType = "parent___internal___ignoreType",
	ParentInternalMediaType = "parent___internal___mediaType",
	ParentInternalOwner = "parent___internal___owner",
	ParentInternalType = "parent___internal___type",
	ParentInternalContentFilePath = "parent___internal___contentFilePath",
	Children = "children",
	ChildrenId = "children___id",
	ChildrenParentId = "children___parent___id",
	ChildrenParentParentId = "children___parent___parent___id",
	ChildrenParentParentChildren = "children___parent___parent___children",
	ChildrenParentChildren = "children___parent___children",
	ChildrenParentChildrenId = "children___parent___children___id",
	ChildrenParentChildrenChildren = "children___parent___children___children",
	ChildrenParentInternalContent = "children___parent___internal___content",
	ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
	ChildrenParentInternalDescription = "children___parent___internal___description",
	ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
	ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
	ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
	ChildrenParentInternalOwner = "children___parent___internal___owner",
	ChildrenParentInternalType = "children___parent___internal___type",
	ChildrenParentInternalContentFilePath = "children___parent___internal___contentFilePath",
	ChildrenChildren = "children___children",
	ChildrenChildrenId = "children___children___id",
	ChildrenChildrenParentId = "children___children___parent___id",
	ChildrenChildrenParentChildren = "children___children___parent___children",
	ChildrenChildrenChildren = "children___children___children",
	ChildrenChildrenChildrenId = "children___children___children___id",
	ChildrenChildrenChildrenChildren = "children___children___children___children",
	ChildrenChildrenInternalContent = "children___children___internal___content",
	ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
	ChildrenChildrenInternalDescription = "children___children___internal___description",
	ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
	ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
	ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
	ChildrenChildrenInternalOwner = "children___children___internal___owner",
	ChildrenChildrenInternalType = "children___children___internal___type",
	ChildrenChildrenInternalContentFilePath = "children___children___internal___contentFilePath",
	ChildrenInternalContent = "children___internal___content",
	ChildrenInternalContentDigest = "children___internal___contentDigest",
	ChildrenInternalDescription = "children___internal___description",
	ChildrenInternalFieldOwners = "children___internal___fieldOwners",
	ChildrenInternalIgnoreType = "children___internal___ignoreType",
	ChildrenInternalMediaType = "children___internal___mediaType",
	ChildrenInternalOwner = "children___internal___owner",
	ChildrenInternalType = "children___internal___type",
	ChildrenInternalContentFilePath = "children___internal___contentFilePath",
	InternalContent = "internal___content",
	InternalContentDigest = "internal___contentDigest",
	InternalDescription = "internal___description",
	InternalFieldOwners = "internal___fieldOwners",
	InternalIgnoreType = "internal___ignoreType",
	InternalMediaType = "internal___mediaType",
	InternalOwner = "internal___owner",
	InternalType = "internal___type",
	InternalContentFilePath = "internal___contentFilePath",
}

export type FileFilterInput = {
	sourceInstanceName?: Maybe<StringQueryOperatorInput>
	absolutePath?: Maybe<StringQueryOperatorInput>
	relativePath?: Maybe<StringQueryOperatorInput>
	extension?: Maybe<StringQueryOperatorInput>
	size?: Maybe<IntQueryOperatorInput>
	prettySize?: Maybe<StringQueryOperatorInput>
	modifiedTime?: Maybe<DateQueryOperatorInput>
	accessTime?: Maybe<DateQueryOperatorInput>
	changeTime?: Maybe<DateQueryOperatorInput>
	birthTime?: Maybe<DateQueryOperatorInput>
	root?: Maybe<StringQueryOperatorInput>
	dir?: Maybe<StringQueryOperatorInput>
	base?: Maybe<StringQueryOperatorInput>
	ext?: Maybe<StringQueryOperatorInput>
	name?: Maybe<StringQueryOperatorInput>
	relativeDirectory?: Maybe<StringQueryOperatorInput>
	dev?: Maybe<IntQueryOperatorInput>
	mode?: Maybe<IntQueryOperatorInput>
	nlink?: Maybe<IntQueryOperatorInput>
	uid?: Maybe<IntQueryOperatorInput>
	gid?: Maybe<IntQueryOperatorInput>
	rdev?: Maybe<IntQueryOperatorInput>
	ino?: Maybe<FloatQueryOperatorInput>
	atimeMs?: Maybe<FloatQueryOperatorInput>
	mtimeMs?: Maybe<FloatQueryOperatorInput>
	ctimeMs?: Maybe<FloatQueryOperatorInput>
	atime?: Maybe<DateQueryOperatorInput>
	mtime?: Maybe<DateQueryOperatorInput>
	ctime?: Maybe<DateQueryOperatorInput>
	birthtime?: Maybe<DateQueryOperatorInput>
	birthtimeMs?: Maybe<FloatQueryOperatorInput>
	id?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	children?: Maybe<NodeFilterListInput>
	internal?: Maybe<InternalFilterInput>
}

export type FileGroupConnection = {
	totalCount: Scalars["Int"]
	edges: Array<FileEdge>
	nodes: Array<File>
	pageInfo: PageInfo
	distinct: Array<Scalars["String"]>
	max?: Maybe<Scalars["Float"]>
	min?: Maybe<Scalars["Float"]>
	sum?: Maybe<Scalars["Float"]>
	group: Array<FileGroupConnection>
	field: Scalars["String"]
	fieldValue?: Maybe<Scalars["String"]>
}

export type FileGroupConnectionDistinctArgs = {
	field: FileFieldsEnum
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

export type FileGroupConnectionGroupArgs = {
	skip?: Maybe<Scalars["Int"]>
	limit?: Maybe<Scalars["Int"]>
	field: FileFieldsEnum
}

export type FileSortInput = {
	fields?: Maybe<Array<Maybe<FileFieldsEnum>>>
	order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type FloatQueryOperatorInput = {
	eq?: Maybe<Scalars["Float"]>
	ne?: Maybe<Scalars["Float"]>
	gt?: Maybe<Scalars["Float"]>
	gte?: Maybe<Scalars["Float"]>
	lt?: Maybe<Scalars["Float"]>
	lte?: Maybe<Scalars["Float"]>
	in?: Maybe<Array<Maybe<Scalars["Float"]>>>
	nin?: Maybe<Array<Maybe<Scalars["Float"]>>>
}

export enum GatsbyImageFormat {
	NoChange = "NO_CHANGE",
	Auto = "AUTO",
	Jpg = "JPG",
	Png = "PNG",
	Webp = "WEBP",
	Avif = "AVIF",
}

export enum GatsbyImageLayout {
	Fixed = "FIXED",
	FullWidth = "FULL_WIDTH",
	Constrained = "CONSTRAINED",
}

export enum GatsbyImagePlaceholder {
	DominantColor = "DOMINANT_COLOR",
	TracedSvg = "TRACED_SVG",
	Blurred = "BLURRED",
	None = "NONE",
}

export type IdQueryOperatorInput = {
	eq?: Maybe<Scalars["ID"]>
	ne?: Maybe<Scalars["ID"]>
	in?: Maybe<Array<Maybe<Scalars["ID"]>>>
	nin?: Maybe<Array<Maybe<Scalars["ID"]>>>
}

export type ImgixFixed = {
	base64: Scalars["String"]
	src: Scalars["String"]
	srcSet: Scalars["String"]
	srcWebp: Scalars["String"]
	srcSetWebp: Scalars["String"]
	sizes: Scalars["String"]
	width: Scalars["Int"]
	height: Scalars["Int"]
}

export type ImgixFixedFilterInput = {
	base64?: Maybe<StringQueryOperatorInput>
	src?: Maybe<StringQueryOperatorInput>
	srcSet?: Maybe<StringQueryOperatorInput>
	srcWebp?: Maybe<StringQueryOperatorInput>
	srcSetWebp?: Maybe<StringQueryOperatorInput>
	sizes?: Maybe<StringQueryOperatorInput>
	width?: Maybe<IntQueryOperatorInput>
	height?: Maybe<IntQueryOperatorInput>
}

export type ImgixFluid = {
	base64: Scalars["String"]
	src: Scalars["String"]
	srcSet: Scalars["String"]
	srcWebp: Scalars["String"]
	srcSetWebp: Scalars["String"]
	sizes: Scalars["String"]
	aspectRatio: Scalars["Float"]
}

export type ImgixFluidFilterInput = {
	base64?: Maybe<StringQueryOperatorInput>
	src?: Maybe<StringQueryOperatorInput>
	srcSet?: Maybe<StringQueryOperatorInput>
	srcWebp?: Maybe<StringQueryOperatorInput>
	srcSetWebp?: Maybe<StringQueryOperatorInput>
	sizes?: Maybe<StringQueryOperatorInput>
	aspectRatio?: Maybe<FloatQueryOperatorInput>
}

export type ImgixParamsInput = {
	/** Specifies an aspect ratio to maintain when resizing and cropping the image. [See docs](https://docs.imgix.com/apis/url/size/ar). */
	ar?: Maybe<Scalars["String"]>
	/** Applies automatic enhancements to images. [See docs](https://docs.imgix.com/apis/url/auto). */
	auto?: Maybe<Scalars["String"]>
	/** Colors the background of padded and partially-transparent images. Default: `fff`. [See docs](https://docs.imgix.com/apis/url/bg). */
	bg?: Maybe<Scalars["String"]>
	/** Changes the blend alignment relative to the parent image. [See docs](https://docs.imgix.com/apis/url/blending/blend-align). */
	blendAlign?: Maybe<Scalars["String"]>
	/** Alias for `blendAlign`. */
	blendalign?: Maybe<Scalars["String"]>
	/** Alias for `blendAlign`. */
	ba?: Maybe<Scalars["String"]>
	/** Changes the alpha of the blend image. Default: `100`. [See docs](https://docs.imgix.com/apis/url/blending/blend-alpha). */
	blendAlpha?: Maybe<Scalars["Int"]>
	/** Alias for `blendAlpha`. */
	blendalpha?: Maybe<Scalars["Int"]>
	/** Alias for `blendAlpha`. */
	balph?: Maybe<Scalars["Int"]>
	/** Specifies a color to use when applying the blend. [See docs](https://docs.imgix.com/apis/url/blending/blend-color). */
	blendColor?: Maybe<Scalars["String"]>
	/** Alias for `blendColor`. */
	blendcolor?: Maybe<Scalars["String"]>
	/** Alias for `blendColor`. */
	blendClr?: Maybe<Scalars["String"]>
	/** Alias for `blendColor`. */
	blendclr?: Maybe<Scalars["String"]>
	/** Specifies the type of crop for blend images. [See docs](https://docs.imgix.com/apis/url/blending/blend-crop). */
	blendCrop?: Maybe<Scalars["String"]>
	/** Alias for `blendCrop`. */
	blendcrop?: Maybe<Scalars["String"]>
	/** Alias for `blendCrop`. */
	bc?: Maybe<Scalars["String"]>
	/** Specifies the fit mode for blend images. Default: `clip`. [See docs](https://docs.imgix.com/apis/url/blending/blend-fit). */
	blendFit?: Maybe<Scalars["String"]>
	/** Alias for `blendFit`. */
	blendfit?: Maybe<Scalars["String"]>
	/** Alias for `blendFit`. */
	bf?: Maybe<Scalars["String"]>
	/** Adjusts the height of the blend image. [See docs](https://docs.imgix.com/apis/url/blending/blend-h). */
	blendH?: Maybe<Scalars["Float"]>
	/** Alias for `blendH`. */
	blendh?: Maybe<Scalars["Float"]>
	/** Alias for `blendH`. */
	bh?: Maybe<Scalars["Float"]>
	/** Sets the blend mode for a blend image. Default: `overlay`. [See docs](https://docs.imgix.com/apis/url/blending/blend-mode). */
	blendMode?: Maybe<Scalars["String"]>
	/** Alias for `blendMode`. */
	blendmode?: Maybe<Scalars["String"]>
	/** Alias for `blendMode`. */
	bm?: Maybe<Scalars["String"]>
	/** Applies padding to the blend image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/blending/blend-pad). */
	blendPad?: Maybe<Scalars["Int"]>
	/** Alias for `blendPad`. */
	blendpad?: Maybe<Scalars["Int"]>
	/** Alias for `blendPad`. */
	bp?: Maybe<Scalars["Int"]>
	/** Adjusts the size of the blend image. [See docs](https://docs.imgix.com/apis/url/blending/blend-size). */
	blendSize?: Maybe<Scalars["String"]>
	/** Alias for `blendSize`. */
	blendsize?: Maybe<Scalars["String"]>
	/** Alias for `blendSize`. */
	bs?: Maybe<Scalars["String"]>
	/** Adjusts the width of the blend image. [See docs](https://docs.imgix.com/apis/url/blending/blend-w). */
	blendW?: Maybe<Scalars["Float"]>
	/** Alias for `blendW`. */
	blendw?: Maybe<Scalars["Float"]>
	/** Alias for `blendW`. */
	bw?: Maybe<Scalars["Float"]>
	/** Adjusts the x-offset of the blend image relative to its parent. Default: `0`. [See docs](https://docs.imgix.com/apis/url/blending/blend-x). */
	blendX?: Maybe<Scalars["Int"]>
	/** Alias for `blendX`. */
	blendx?: Maybe<Scalars["Int"]>
	/** Alias for `blendX`. */
	bx?: Maybe<Scalars["Int"]>
	/** Adjusts the y-offset of the blend image relative to its parent. Default: `0`. [See docs](https://docs.imgix.com/apis/url/blending/blend-y). */
	blendY?: Maybe<Scalars["Int"]>
	/** Alias for `blendY`. */
	blendy?: Maybe<Scalars["Int"]>
	/** Alias for `blendY`. */
	by?: Maybe<Scalars["Int"]>
	/** Specifies the location of the blend image. [See docs](https://docs.imgix.com/apis/url/blending/blend). */
	blend?: Maybe<Scalars["String"]>
	/** Alias for `blend`. */
	b?: Maybe<Scalars["String"]>
	/** Applies a gaussian blur to an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/stylize/blur). */
	blur?: Maybe<Scalars["Int"]>
	/** Sets bottom border of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-bottom). */
	borderBottom?: Maybe<Scalars["Int"]>
	/** Sets left border of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-left). */
	borderLeft?: Maybe<Scalars["Int"]>
	/** Sets the inner radius of the image's border in pixels. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-radius-inner). */
	borderRadiusInner?: Maybe<Scalars["String"]>
	/** Sets the outer radius of the image's border in pixels. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-radius). */
	borderRadius?: Maybe<Scalars["String"]>
	/** Sets right border of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-right). */
	borderRight?: Maybe<Scalars["Int"]>
	/** Sets top border of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-top). */
	borderTop?: Maybe<Scalars["Int"]>
	/** Applies a border to an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border). */
	border?: Maybe<Scalars["String"]>
	/** Adjusts the brightness of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/bri). */
	bri?: Maybe<Scalars["Int"]>
	/** Sets one or more Client-Hints headers. [See docs](https://docs.imgix.com/apis/url/format/ch). */
	ch?: Maybe<Scalars["String"]>
	/** Specifies the output chroma subsampling rate. Default: `420`. [See docs](https://docs.imgix.com/apis/url/format/chromasub). */
	chromasub?: Maybe<Scalars["Int"]>
	/** Limits the number of unique colors in an image. [See docs](https://docs.imgix.com/apis/url/format/colorquant). */
	colorquant?: Maybe<Scalars["Int"]>
	/** Specifies how many colors to include in a palette-extraction response. Default: `6`. [See docs](https://docs.imgix.com/apis/url/color-palette/colors). */
	colors?: Maybe<Scalars["Int"]>
	/** Adjusts the contrast of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/con). */
	con?: Maybe<Scalars["Int"]>
	/** Specifies the radius value for a rounded corner mask. [See docs](https://docs.imgix.com/apis/url/mask/corner-radius). */
	cornerRadius?: Maybe<Scalars["String"]>
	/** Specifies how to crop an image. [See docs](https://docs.imgix.com/apis/url/size/crop). */
	crop?: Maybe<Scalars["String"]>
	/** Specifies the color space of the output image. [See docs](https://docs.imgix.com/apis/url/format/cs). */
	cs?: Maybe<Scalars["String"]>
	/** Forces a URL to use send-file in its response. [See docs](https://docs.imgix.com/apis/url/format/dl). */
	dl?: Maybe<Scalars["String"]>
	/** Sets the DPI value in the EXIF header. [See docs](https://docs.imgix.com/apis/url/format/dpi). */
	dpi?: Maybe<Scalars["Int"]>
	/** Adjusts the device-pixel ratio of the output image. Default: `1`. [See docs](https://docs.imgix.com/apis/url/dpr). */
	dpr?: Maybe<Scalars["Float"]>
	/** Changes the alpha of the duotone effect atop the source image. Default: `100`. [See docs](https://docs.imgix.com/apis/url/stylize/duotone-alpha). */
	duotoneAlpha?: Maybe<Scalars["Int"]>
	/** Applies a duotone effect to the source image. [See docs](https://docs.imgix.com/apis/url/stylize/duotone). */
	duotone?: Maybe<Scalars["String"]>
	/** Adjusts the exposure of the output image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/exp). */
	exp?: Maybe<Scalars["Int"]>
	/** A Unix timestamp specifying a UTC time. Requests made to this URL after that time will output a 404 status code. [See docs](https://docs.imgix.com/apis/url/expires). */
	expires?: Maybe<Scalars["String"]>
	/** Selects a face to crop to. [See docs](https://docs.imgix.com/apis/url/face-detection/faceindex). */
	faceindex?: Maybe<Scalars["Int"]>
	/** Adjusts padding around a selected face. Default: `1`. [See docs](https://docs.imgix.com/apis/url/face-detection/facepad). */
	facepad?: Maybe<Scalars["Float"]>
	/** Specifies that face data should be included in output when combined with `fm=json`. [See docs](https://docs.imgix.com/apis/url/face-detection/faces). */
	faces?: Maybe<Scalars["Int"]>
	/** Sets the fill color for images with additional space created by the fit setting. Default: `fff`. [See docs](https://docs.imgix.com/apis/url/fill/fill-color). */
	fillColor?: Maybe<Scalars["String"]>
	/** Alias for `fillColor`. */
	fillcolor?: Maybe<Scalars["String"]>
	/** Determines how to fill in additional space created by the fit setting. [See docs](https://docs.imgix.com/apis/url/fill/fill). */
	fill?: Maybe<Scalars["String"]>
	/** Specifies how to map the source image to the output image dimensions. Default: `clip`. [See docs](https://docs.imgix.com/apis/url/size/fit). */
	fit?: Maybe<Scalars["String"]>
	/** Alias for `fit`. */
	f?: Maybe<Scalars["String"]>
	/** Flips an image on a specified axis. [See docs](https://docs.imgix.com/apis/url/rotation/flip). */
	flip?: Maybe<Scalars["String"]>
	/** Changes the format of the output image. [See docs](https://docs.imgix.com/apis/url/format/fm). */
	fm?: Maybe<Scalars["String"]>
	/** Displays crosshairs identifying the location of the set focal point. Default: `false`. [See docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-debug). */
	fpDebug?: Maybe<Scalars["Boolean"]>
	/** Sets the relative horizontal value for the focal point of an image. [See docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-x). */
	fpX?: Maybe<Scalars["Float"]>
	/** Sets the relative vertical value for the focal point of an image. [See docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-y). */
	fpY?: Maybe<Scalars["Float"]>
	/** Sets the relative zoom value for the focal point of an image. [See docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-z). */
	fpZ?: Maybe<Scalars["Float"]>
	/** Adjusts the gamma of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/gam). */
	gam?: Maybe<Scalars["Int"]>
	/** Sets grid colors for the transparency checkerboard grid. */
	gridColors?: Maybe<Scalars["String"]>
	/** Sets grid size for the transparency checkerboard grid. */
	gridSize?: Maybe<Scalars["Int"]>
	/** Adjusts the height of the output image. [See docs](https://docs.imgix.com/apis/url/size/h). */
	h?: Maybe<Scalars["Float"]>
	/** Alias for `h`. */
	height?: Maybe<Scalars["Float"]>
	/** Adjusts the highlights of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/high). */
	high?: Maybe<Scalars["Int"]>
	/** Applies a half-tone effect to the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/stylize/htn). */
	htn?: Maybe<Scalars["Int"]>
	/** Adjusts the hue of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/hue). */
	hue?: Maybe<Scalars["Int"]>
	/** Inverts the colors on the source image. Default: `false`. [See docs](https://docs.imgix.com/apis/url/adjustment/invert). */
	invert?: Maybe<Scalars["Boolean"]>
	/** Alias for `invert`. */
	inv?: Maybe<Scalars["Boolean"]>
	/** Determine if IPTC data should be passed for JPEG images. */
	iptc?: Maybe<Scalars["String"]>
	/** Specifies that the output image should be a lossless variant. Default: `false`. [See docs](https://docs.imgix.com/apis/url/format/lossless). */
	lossless?: Maybe<Scalars["Boolean"]>
	/** Changes the watermark alignment relative to the parent image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-align). */
	markAlign?: Maybe<Scalars["String"]>
	/** Alias for `markAlign`. */
	ma?: Maybe<Scalars["String"]>
	/** Alias for `markAlign`. */
	markalign?: Maybe<Scalars["String"]>
	/** Changes the alpha of the watermark image. Default: `100`. [See docs](https://docs.imgix.com/apis/url/watermark/mark-alpha). */
	markAlpha?: Maybe<Scalars["Int"]>
	/** Alias for `markAlpha`. */
	markalpha?: Maybe<Scalars["Int"]>
	/** Alias for `markAlpha`. */
	malph?: Maybe<Scalars["Int"]>
	/** Changes base URL of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-base). */
	markBase?: Maybe<Scalars["String"]>
	/** Alias for `markBase`. */
	mb?: Maybe<Scalars["String"]>
	/** Alias for `markBase`. */
	markbase?: Maybe<Scalars["String"]>
	/** Specifies the fit mode for watermark images. Default: `clip`. [See docs](https://docs.imgix.com/apis/url/watermark/mark-fit). */
	markFit?: Maybe<Scalars["String"]>
	/** Alias for `markFit`. */
	mf?: Maybe<Scalars["String"]>
	/** Alias for `markFit`. */
	markfit?: Maybe<Scalars["String"]>
	/** Adjusts the height of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-h). */
	markH?: Maybe<Scalars["Float"]>
	/** Alias for `markH`. */
	mh?: Maybe<Scalars["Float"]>
	/** Alias for `markH`. */
	markh?: Maybe<Scalars["Float"]>
	/** Applies padding to the watermark image. Default: `5`. [See docs](https://docs.imgix.com/apis/url/watermark/mark-pad). */
	markPad?: Maybe<Scalars["Int"]>
	/** Alias for `markPad`. */
	mp?: Maybe<Scalars["Int"]>
	/** Alias for `markPad`. */
	markpad?: Maybe<Scalars["Int"]>
	/** Rotates a watermark or tiled watermarks by a specified number of degrees. Default: `0`. [See docs](https://docs.imgix.com/apis/url/watermark/mark-rot). */
	markRot?: Maybe<Scalars["Float"]>
	/** Adjusts the scale of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-scale). */
	markScale?: Maybe<Scalars["Int"]>
	/** Alias for `markScale`. */
	ms?: Maybe<Scalars["Int"]>
	/** Alias for `markScale`. */
	markscale?: Maybe<Scalars["Int"]>
	/** Adds tiled watermark. [See docs](https://docs.imgix.com/apis/url/watermark/mark-tile). */
	markTile?: Maybe<Scalars["String"]>
	/** Alias for `markTile`. */
	mtile?: Maybe<Scalars["String"]>
	/** Alias for `markTile`. */
	marktile?: Maybe<Scalars["String"]>
	/** Adjusts the width of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-w). */
	markW?: Maybe<Scalars["Float"]>
	/** Alias for `markW`. */
	mw?: Maybe<Scalars["Float"]>
	/** Alias for `markW`. */
	markw?: Maybe<Scalars["Float"]>
	/** Adjusts the x-offset of the watermark image relative to its parent. [See docs](https://docs.imgix.com/apis/url/watermark/mark-x). */
	markX?: Maybe<Scalars["Int"]>
	/** Alias for `markX`. */
	mx?: Maybe<Scalars["Int"]>
	/** Alias for `markX`. */
	markx?: Maybe<Scalars["Int"]>
	/** Adjusts the y-offset of the watermark image relative to its parent. [See docs](https://docs.imgix.com/apis/url/watermark/mark-y). */
	markY?: Maybe<Scalars["Int"]>
	/** Alias for `markY`. */
	my?: Maybe<Scalars["Int"]>
	/** Alias for `markY`. */
	marky?: Maybe<Scalars["Int"]>
	/** Specifies the location of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark). */
	mark?: Maybe<Scalars["String"]>
	/** Alias for `mark`. */
	m?: Maybe<Scalars["String"]>
	/** Colors the background of the transparent mask area of images. Default: `fff`. [See docs](https://docs.imgix.com/apis/url/mask/mask-bg). */
	maskBg?: Maybe<Scalars["String"]>
	/** Alias for `maskBg`. */
	maskbg?: Maybe<Scalars["String"]>
	/** Defines the type of mask and specifies the URL if that type is selected. [See docs](https://docs.imgix.com/apis/url/mask). */
	mask?: Maybe<Scalars["String"]>
	/** Specifies the maximum height of the output image in pixels. [See docs](https://docs.imgix.com/apis/url/size/max-height). */
	maxH?: Maybe<Scalars["Int"]>
	/** Alias for `maxH`. */
	maxHeight?: Maybe<Scalars["Int"]>
	/** Specifies the maximum width of the output image in pixels. [See docs](https://docs.imgix.com/apis/url/size/max-width). */
	maxW?: Maybe<Scalars["Int"]>
	/** Alias for `maxW`. */
	maxWidth?: Maybe<Scalars["Int"]>
	/** Specifies the minimum height of the output image in pixels. [See docs](https://docs.imgix.com/apis/url/size/min-height). */
	minH?: Maybe<Scalars["Int"]>
	/** Alias for `minH`. */
	minHeight?: Maybe<Scalars["Int"]>
	/** Specifies the minimum width of the output image in pixels. [See docs](https://docs.imgix.com/apis/url/size/min-width). */
	minW?: Maybe<Scalars["Int"]>
	/** Alias for `minW`. */
	minWidth?: Maybe<Scalars["Int"]>
	/** Applies a monochrome effect to the source image. [See docs](https://docs.imgix.com/apis/url/stylize/monochrome). */
	monochrome?: Maybe<Scalars["String"]>
	/** Alias for `monochrome`. */
	mono?: Maybe<Scalars["String"]>
	/** Reduces the noise in an image. Default: `20`. [See docs](https://docs.imgix.com/apis/url/noise-reduction/nr). */
	nr?: Maybe<Scalars["Int"]>
	/** Provides a threshold by which to sharpen an image. Default: `20`. [See docs](https://docs.imgix.com/apis/url/noise-reduction/nrs). */
	nrs?: Maybe<Scalars["Int"]>
	/** Changes the image orientation. [See docs](https://docs.imgix.com/apis/url/rotation/orient). */
	orient?: Maybe<Scalars["Int"]>
	/** Alias for `orient`. */
	or?: Maybe<Scalars["Int"]>
	/** Sets bottom padding of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad-bottom). */
	padBottom?: Maybe<Scalars["Int"]>
	/** Sets left padding of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad-left). */
	padLeft?: Maybe<Scalars["Int"]>
	/** Sets right padding of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad-right). */
	padRight?: Maybe<Scalars["Int"]>
	/** Sets top padding of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad-top). */
	padTop?: Maybe<Scalars["Int"]>
	/** Pads an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad). */
	pad?: Maybe<Scalars["Int"]>
	/** Selects a page from a PDF for display. Default: `1`. [See docs](https://docs.imgix.com/apis/url/pdf/page). */
	page?: Maybe<Scalars["Int"]>
	/** Specifies an output format for palette-extraction. [See docs](https://docs.imgix.com/apis/url/color-palette/palette). */
	palette?: Maybe<Scalars["String"]>
	/** Enables or disables PDF annotation. Default: `true`. [See docs](https://docs.imgix.com/apis/url/pdf/pdf-annotation). */
	pdfAnnotation?: Maybe<Scalars["Boolean"]>
	/** Alias for `pdfAnnotation`. */
	annotation?: Maybe<Scalars["Boolean"]>
	/** Specifies a CSS prefix for all classes in palette-extraction. Default: `image`. [See docs](https://docs.imgix.com/apis/url/color-palette/prefix). */
	prefix?: Maybe<Scalars["String"]>
	/** Applies a pixelation effect to an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/stylize/px). */
	px?: Maybe<Scalars["Int"]>
	/** Adjusts the quality of an output image. Default: `75`. [See docs](https://docs.imgix.com/apis/url/format/q). */
	q?: Maybe<Scalars["Int"]>
	/** Crops an image to a specified rectangle. [See docs](https://docs.imgix.com/apis/url/size/rect). */
	rect?: Maybe<Scalars["String"]>
	/** Rotates an image by a specified number of degrees. Default: `0`. [See docs](https://docs.imgix.com/apis/url/rotation/rot). */
	rot?: Maybe<Scalars["Float"]>
	/** Adjusts the saturation of an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/sat). */
	sat?: Maybe<Scalars["Int"]>
	/** Applies a sepia effect to an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/stylize/sepia). */
	sepia?: Maybe<Scalars["Int"]>
	/** Adjusts the highlights of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/shad). */
	shad?: Maybe<Scalars["Float"]>
	/** Adjusts the sharpness of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/sharp). */
	sharp?: Maybe<Scalars["Float"]>
	/** Adds checkerboard behind images which support transparency. [See docs](https://docs.imgix.com/apis/url/fill/transparency). */
	transparency?: Maybe<Scalars["String"]>
	/** Specifies a trim color on a trim operation. [See docs](https://docs.imgix.com/apis/url/trim/trim-color). */
	trimColor?: Maybe<Scalars["String"]>
	/** Alias for `trimColor`. */
	trimcolor?: Maybe<Scalars["String"]>
	/** Specifies the mean difference on a trim operation. Default: `11`. [See docs](https://docs.imgix.com/apis/url/trim/trim-md). */
	trimMd?: Maybe<Scalars["Float"]>
	/** Alias for `trimMd`. */
	trimmd?: Maybe<Scalars["Float"]>
	/** Pads the area of the source image before trimming. Default: `0`. [See docs](https://docs.imgix.com/apis/url/trim/trim-pad). */
	trimPad?: Maybe<Scalars["Int"]>
	/** Alias for `trimPad`. */
	trimpad?: Maybe<Scalars["Int"]>
	/** Specifies the standard deviation on a trim operation. Default: `10`. [See docs](https://docs.imgix.com/apis/url/trim/trim-sd). */
	trimSd?: Maybe<Scalars["Float"]>
	/** Alias for `trimSd`. */
	trimsd?: Maybe<Scalars["Float"]>
	/** Specifies the tolerance on a trim operation. Default: `0`. [See docs](https://docs.imgix.com/apis/url/trim/trim-tol). */
	trimTol?: Maybe<Scalars["Float"]>
	/** Alias for `trimTol`. */
	trimtol?: Maybe<Scalars["Float"]>
	/** Trims the source image. [See docs](https://docs.imgix.com/apis/url/trim/trim). */
	trim?: Maybe<Scalars["String"]>
	/** Sets the vertical and horizontal alignment of rendered text relative to the base image. [See docs](https://docs.imgix.com/apis/url/text/txt-align). */
	txtAlign?: Maybe<Scalars["String"]>
	/** Alias for `txtAlign`. */
	txtalign?: Maybe<Scalars["String"]>
	/** Alias for `txtAlign`. */
	ta?: Maybe<Scalars["String"]>
	/** Sets the clipping properties of rendered text. Default: `end`. [See docs](https://docs.imgix.com/apis/url/text/txt-clip). */
	txtClip?: Maybe<Scalars["String"]>
	/** Alias for `txtClip`. */
	txtclip?: Maybe<Scalars["String"]>
	/** Alias for `txtClip`. */
	tcl?: Maybe<Scalars["String"]>
	/** Specifies the color of rendered text. [See docs](https://docs.imgix.com/apis/url/text/txt-color). */
	txtColor?: Maybe<Scalars["String"]>
	/** Alias for `txtColor`. */
	txtcolor?: Maybe<Scalars["String"]>
	/** Alias for `txtColor`. */
	txtClr?: Maybe<Scalars["String"]>
	/** Alias for `txtColor`. */
	txtclr?: Maybe<Scalars["String"]>
	/** Alias for `txtColor`. */
	tc?: Maybe<Scalars["String"]>
	/** Specifies the fit approach for rendered text. [See docs](https://docs.imgix.com/apis/url/text/txt-fit). */
	txtFit?: Maybe<Scalars["String"]>
	/** Alias for `txtFit`. */
	txtfit?: Maybe<Scalars["String"]>
	/** Selects a font for rendered text. [See docs](https://docs.imgix.com/apis/url/text/txt-font). */
	txtFont?: Maybe<Scalars["String"]>
	/** Alias for `txtFont`. */
	tf?: Maybe<Scalars["String"]>
	/** Alias for `txtFont`. */
	txtfont?: Maybe<Scalars["String"]>
	/** Sets the leading (line spacing) for rendered text. Only works on the multi-line text endpoint. Default: `0`. [See docs](https://docs.imgix.com/apis/url/typesetting/txt-lead). */
	txtLead?: Maybe<Scalars["Int"]>
	/** Alias for `txtLead`. */
	txtlead?: Maybe<Scalars["Int"]>
	/** Controls the level of ligature substitution. [See docs](https://docs.imgix.com/apis/url/text/txt-lig). */
	txtLig?: Maybe<Scalars["Int"]>
	/** Alias for `txtLig`. */
	txtlig?: Maybe<Scalars["Int"]>
	/** Specifies a text outline color. Default: `fff`. [See docs](https://docs.imgix.com/apis/url/text/txt-line-color). */
	txtLineColor?: Maybe<Scalars["String"]>
	/** Alias for `txtLineColor`. */
	txtlinecolor?: Maybe<Scalars["String"]>
	/** Alias for `txtLineColor`. */
	txtLineClr?: Maybe<Scalars["String"]>
	/** Alias for `txtLineColor`. */
	txtlineclr?: Maybe<Scalars["String"]>
	/** Outlines the rendered text with a specified color. Default: `0`. [See docs](https://docs.imgix.com/apis/url/text/txt-line). */
	txtLine?: Maybe<Scalars["Int"]>
	/** Alias for `txtLine`. */
	txtline?: Maybe<Scalars["Int"]>
	/** Alias for `txtLine`. */
	tl?: Maybe<Scalars["Int"]>
	/** Specifies the padding (in device-independent pixels) between a textbox and the edges of the base image. [See docs](https://docs.imgix.com/apis/url/text/txt-pad). */
	txtPad?: Maybe<Scalars["Int"]>
	/** Alias for `txtPad`. */
	txtpad?: Maybe<Scalars["Int"]>
	/** Alias for `txtPad`. */
	tp?: Maybe<Scalars["Int"]>
	/** Applies a shadow to rendered text. Default: `0`. [See docs](https://docs.imgix.com/apis/url/text/txt-shad). */
	txtShad?: Maybe<Scalars["Float"]>
	/** Alias for `txtShad`. */
	txtshad?: Maybe<Scalars["Float"]>
	/** Alias for `txtShad`. */
	tsh?: Maybe<Scalars["Float"]>
	/** Sets the font size of rendered text. Default: `12`. [See docs](https://docs.imgix.com/apis/url/text/txt-size). */
	txtSize?: Maybe<Scalars["Int"]>
	/** Alias for `txtSize`. */
	tsz?: Maybe<Scalars["Int"]>
	/** Alias for `txtSize`. */
	txtsize?: Maybe<Scalars["Int"]>
	/** Sets the tracking (letter spacing) for rendered text. Only works on the multi-line text endpoint. Default: `0`. [See docs](https://docs.imgix.com/apis/url/typesetting/txt-track). */
	txtTrack?: Maybe<Scalars["Int"]>
	/** Alias for `txtTrack`. */
	txttrack?: Maybe<Scalars["Int"]>
	/** Alias for `txtTrack`. */
	tt?: Maybe<Scalars["Int"]>
	/** Sets the width of rendered text. [See docs](https://docs.imgix.com/apis/url/text/txt-width). */
	txtWidth?: Maybe<Scalars["Int"]>
	/** Alias for `txtWidth`. */
	txtwidth?: Maybe<Scalars["Int"]>
	/** Sets the horizontal (x) position of the text in pixels relative to the left edge of the base image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/text/txt-x). */
	txtX?: Maybe<Scalars["Int"]>
	/** Alias for `txtX`. */
	txtx?: Maybe<Scalars["Int"]>
	/** Sets the vertical (y) position of the text in pixels relative to the top edge of the base image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/text/txt-y). */
	txtY?: Maybe<Scalars["Int"]>
	/** Alias for `txtY`. */
	txty?: Maybe<Scalars["Int"]>
	/** Sets the text string to render. [See docs](https://docs.imgix.com/apis/url/text/txt). */
	txt?: Maybe<Scalars["String"]>
	/** Alias for `txt`. */
	t?: Maybe<Scalars["String"]>
	/** Sharpens the source image using an unsharp mask. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/usm). */
	usm?: Maybe<Scalars["Int"]>
	/** Specifies the radius for an unsharp mask operation. Default: `2.5`. [See docs](https://docs.imgix.com/apis/url/adjustment/usmrad). */
	usmrad?: Maybe<Scalars["Float"]>
	/** Adjusts the vibrance of an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/vib). */
	vib?: Maybe<Scalars["Int"]>
	/** Adjusts the width of the output image. [See docs](https://docs.imgix.com/apis/url/size/w). */
	w?: Maybe<Scalars["Float"]>
	/** Alias for `w`. */
	width?: Maybe<Scalars["Float"]>
}

export enum ImgixPlaceholder {
	DominantColor = "DOMINANT_COLOR",
	Blurred = "BLURRED",
	None = "NONE",
}

export type IntQueryOperatorInput = {
	eq?: Maybe<Scalars["Int"]>
	ne?: Maybe<Scalars["Int"]>
	gt?: Maybe<Scalars["Int"]>
	gte?: Maybe<Scalars["Int"]>
	lt?: Maybe<Scalars["Int"]>
	lte?: Maybe<Scalars["Int"]>
	in?: Maybe<Array<Maybe<Scalars["Int"]>>>
	nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
}

export type Internal = {
	content?: Maybe<Scalars["String"]>
	contentDigest: Scalars["String"]
	description?: Maybe<Scalars["String"]>
	fieldOwners?: Maybe<Array<Maybe<Scalars["String"]>>>
	ignoreType?: Maybe<Scalars["Boolean"]>
	mediaType?: Maybe<Scalars["String"]>
	owner: Scalars["String"]
	type: Scalars["String"]
	contentFilePath?: Maybe<Scalars["String"]>
}

export type InternalFilterInput = {
	content?: Maybe<StringQueryOperatorInput>
	contentDigest?: Maybe<StringQueryOperatorInput>
	description?: Maybe<StringQueryOperatorInput>
	fieldOwners?: Maybe<StringQueryOperatorInput>
	ignoreType?: Maybe<BooleanQueryOperatorInput>
	mediaType?: Maybe<StringQueryOperatorInput>
	owner?: Maybe<StringQueryOperatorInput>
	type?: Maybe<StringQueryOperatorInput>
	contentFilePath?: Maybe<StringQueryOperatorInput>
}

export type JsonQueryOperatorInput = {
	eq?: Maybe<Scalars["JSON"]>
	ne?: Maybe<Scalars["JSON"]>
	in?: Maybe<Array<Maybe<Scalars["JSON"]>>>
	nin?: Maybe<Array<Maybe<Scalars["JSON"]>>>
	regex?: Maybe<Scalars["JSON"]>
	glob?: Maybe<Scalars["JSON"]>
}

/** Node Interface */
export type Node = {
	id: Scalars["ID"]
	parent?: Maybe<Node>
	children: Array<Node>
	internal: Internal
}

export type NodeFilterInput = {
	id?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	children?: Maybe<NodeFilterListInput>
	internal?: Maybe<InternalFilterInput>
}

export type NodeFilterListInput = {
	elemMatch?: Maybe<NodeFilterInput>
}

export type PageInfo = {
	currentPage: Scalars["Int"]
	hasPreviousPage: Scalars["Boolean"]
	hasNextPage: Scalars["Boolean"]
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
	id?: Maybe<Scalars["ID"]>
	uid?: Maybe<Scalars["String"]>
	lang?: Maybe<Scalars["String"]>
	type?: Maybe<Scalars["String"]>
	document?: Maybe<PrismicAllDocumentTypes>
	raw?: Maybe<Scalars["JSON"]>
}

export type PrismicAlternateLanguageTypeFilterInput = {
	id?: Maybe<IdQueryOperatorInput>
	uid?: Maybe<StringQueryOperatorInput>
	lang?: Maybe<StringQueryOperatorInput>
	type?: Maybe<StringQueryOperatorInput>
	raw?: Maybe<JsonQueryOperatorInput>
}

export type PrismicAlternateLanguageTypeFilterListInput = {
	elemMatch?: Maybe<PrismicAlternateLanguageTypeFilterInput>
}

export type PrismicEmbedType = Node & {
	id: Scalars["ID"]
	parent?: Maybe<Node>
	children: Array<Node>
	internal: Internal
}

export type PrismicEmbedTypeConnection = {
	totalCount: Scalars["Int"]
	edges: Array<PrismicEmbedTypeEdge>
	nodes: Array<PrismicEmbedType>
	pageInfo: PageInfo
	distinct: Array<Scalars["String"]>
	max?: Maybe<Scalars["Float"]>
	min?: Maybe<Scalars["Float"]>
	sum?: Maybe<Scalars["Float"]>
	group: Array<PrismicEmbedTypeGroupConnection>
}

export type PrismicEmbedTypeConnectionDistinctArgs = {
	field: PrismicEmbedTypeFieldsEnum
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

export type PrismicEmbedTypeConnectionGroupArgs = {
	skip?: Maybe<Scalars["Int"]>
	limit?: Maybe<Scalars["Int"]>
	field: PrismicEmbedTypeFieldsEnum
}

export type PrismicEmbedTypeEdge = {
	next?: Maybe<PrismicEmbedType>
	node: PrismicEmbedType
	previous?: Maybe<PrismicEmbedType>
}

export enum PrismicEmbedTypeFieldsEnum {
	Id = "id",
	ParentId = "parent___id",
	ParentParentId = "parent___parent___id",
	ParentParentParentId = "parent___parent___parent___id",
	ParentParentParentChildren = "parent___parent___parent___children",
	ParentParentChildren = "parent___parent___children",
	ParentParentChildrenId = "parent___parent___children___id",
	ParentParentChildrenChildren = "parent___parent___children___children",
	ParentParentInternalContent = "parent___parent___internal___content",
	ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
	ParentParentInternalDescription = "parent___parent___internal___description",
	ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
	ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
	ParentParentInternalMediaType = "parent___parent___internal___mediaType",
	ParentParentInternalOwner = "parent___parent___internal___owner",
	ParentParentInternalType = "parent___parent___internal___type",
	ParentParentInternalContentFilePath = "parent___parent___internal___contentFilePath",
	ParentChildren = "parent___children",
	ParentChildrenId = "parent___children___id",
	ParentChildrenParentId = "parent___children___parent___id",
	ParentChildrenParentChildren = "parent___children___parent___children",
	ParentChildrenChildren = "parent___children___children",
	ParentChildrenChildrenId = "parent___children___children___id",
	ParentChildrenChildrenChildren = "parent___children___children___children",
	ParentChildrenInternalContent = "parent___children___internal___content",
	ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
	ParentChildrenInternalDescription = "parent___children___internal___description",
	ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
	ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
	ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
	ParentChildrenInternalOwner = "parent___children___internal___owner",
	ParentChildrenInternalType = "parent___children___internal___type",
	ParentChildrenInternalContentFilePath = "parent___children___internal___contentFilePath",
	ParentInternalContent = "parent___internal___content",
	ParentInternalContentDigest = "parent___internal___contentDigest",
	ParentInternalDescription = "parent___internal___description",
	ParentInternalFieldOwners = "parent___internal___fieldOwners",
	ParentInternalIgnoreType = "parent___internal___ignoreType",
	ParentInternalMediaType = "parent___internal___mediaType",
	ParentInternalOwner = "parent___internal___owner",
	ParentInternalType = "parent___internal___type",
	ParentInternalContentFilePath = "parent___internal___contentFilePath",
	Children = "children",
	ChildrenId = "children___id",
	ChildrenParentId = "children___parent___id",
	ChildrenParentParentId = "children___parent___parent___id",
	ChildrenParentParentChildren = "children___parent___parent___children",
	ChildrenParentChildren = "children___parent___children",
	ChildrenParentChildrenId = "children___parent___children___id",
	ChildrenParentChildrenChildren = "children___parent___children___children",
	ChildrenParentInternalContent = "children___parent___internal___content",
	ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
	ChildrenParentInternalDescription = "children___parent___internal___description",
	ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
	ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
	ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
	ChildrenParentInternalOwner = "children___parent___internal___owner",
	ChildrenParentInternalType = "children___parent___internal___type",
	ChildrenParentInternalContentFilePath = "children___parent___internal___contentFilePath",
	ChildrenChildren = "children___children",
	ChildrenChildrenId = "children___children___id",
	ChildrenChildrenParentId = "children___children___parent___id",
	ChildrenChildrenParentChildren = "children___children___parent___children",
	ChildrenChildrenChildren = "children___children___children",
	ChildrenChildrenChildrenId = "children___children___children___id",
	ChildrenChildrenChildrenChildren = "children___children___children___children",
	ChildrenChildrenInternalContent = "children___children___internal___content",
	ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
	ChildrenChildrenInternalDescription = "children___children___internal___description",
	ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
	ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
	ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
	ChildrenChildrenInternalOwner = "children___children___internal___owner",
	ChildrenChildrenInternalType = "children___children___internal___type",
	ChildrenChildrenInternalContentFilePath = "children___children___internal___contentFilePath",
	ChildrenInternalContent = "children___internal___content",
	ChildrenInternalContentDigest = "children___internal___contentDigest",
	ChildrenInternalDescription = "children___internal___description",
	ChildrenInternalFieldOwners = "children___internal___fieldOwners",
	ChildrenInternalIgnoreType = "children___internal___ignoreType",
	ChildrenInternalMediaType = "children___internal___mediaType",
	ChildrenInternalOwner = "children___internal___owner",
	ChildrenInternalType = "children___internal___type",
	ChildrenInternalContentFilePath = "children___internal___contentFilePath",
	InternalContent = "internal___content",
	InternalContentDigest = "internal___contentDigest",
	InternalDescription = "internal___description",
	InternalFieldOwners = "internal___fieldOwners",
	InternalIgnoreType = "internal___ignoreType",
	InternalMediaType = "internal___mediaType",
	InternalOwner = "internal___owner",
	InternalType = "internal___type",
	InternalContentFilePath = "internal___contentFilePath",
}

export type PrismicEmbedTypeFilterInput = {
	id?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	children?: Maybe<NodeFilterListInput>
	internal?: Maybe<InternalFilterInput>
}

export type PrismicEmbedTypeGroupConnection = {
	totalCount: Scalars["Int"]
	edges: Array<PrismicEmbedTypeEdge>
	nodes: Array<PrismicEmbedType>
	pageInfo: PageInfo
	distinct: Array<Scalars["String"]>
	max?: Maybe<Scalars["Float"]>
	min?: Maybe<Scalars["Float"]>
	sum?: Maybe<Scalars["Float"]>
	group: Array<PrismicEmbedTypeGroupConnection>
	field: Scalars["String"]
	fieldValue?: Maybe<Scalars["String"]>
}

export type PrismicEmbedTypeGroupConnectionDistinctArgs = {
	field: PrismicEmbedTypeFieldsEnum
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

export type PrismicEmbedTypeGroupConnectionGroupArgs = {
	skip?: Maybe<Scalars["Int"]>
	limit?: Maybe<Scalars["Int"]>
	field: PrismicEmbedTypeFieldsEnum
}

export type PrismicEmbedTypeSortInput = {
	fields?: Maybe<Array<Maybe<PrismicEmbedTypeFieldsEnum>>>
	order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type PrismicEvent = Node & {
	uid: Scalars["String"]
	data: PrismicEventDataType
	dataRaw: Scalars["JSON"]
	prismicId: Scalars["ID"]
	alternate_languages: Array<PrismicAlternateLanguageType>
	first_publication_date: Scalars["Date"]
	href: Scalars["String"]
	lang: Scalars["String"]
	last_publication_date: Scalars["Date"]
	tags: Array<Scalars["String"]>
	type: Scalars["String"]
	url?: Maybe<Scalars["String"]>
	_previewable: Scalars["ID"]
	id: Scalars["ID"]
	parent?: Maybe<Node>
	children: Array<Node>
	internal: Internal
}

export type PrismicEventFirst_Publication_DateArgs = {
	formatString?: Maybe<Scalars["String"]>
	fromNow?: Maybe<Scalars["Boolean"]>
	difference?: Maybe<Scalars["String"]>
	locale?: Maybe<Scalars["String"]>
}

export type PrismicEventLast_Publication_DateArgs = {
	formatString?: Maybe<Scalars["String"]>
	fromNow?: Maybe<Scalars["Boolean"]>
	difference?: Maybe<Scalars["String"]>
	locale?: Maybe<Scalars["String"]>
}

export type PrismicEventConnection = {
	totalCount: Scalars["Int"]
	edges: Array<PrismicEventEdge>
	nodes: Array<PrismicEvent>
	pageInfo: PageInfo
	distinct: Array<Scalars["String"]>
	max?: Maybe<Scalars["Float"]>
	min?: Maybe<Scalars["Float"]>
	sum?: Maybe<Scalars["Float"]>
	group: Array<PrismicEventGroupConnection>
}

export type PrismicEventConnectionDistinctArgs = {
	field: PrismicEventFieldsEnum
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

export type PrismicEventConnectionGroupArgs = {
	skip?: Maybe<Scalars["Int"]>
	limit?: Maybe<Scalars["Int"]>
	field: PrismicEventFieldsEnum
}

export type PrismicEventDataBodyAnchor = PrismicSliceType & {
	primary: PrismicEventDataBodyAnchorPrimary
	id: Scalars["ID"]
	slice_type: Scalars["String"]
	slice_label?: Maybe<Scalars["String"]>
}

export type PrismicEventDataBodyAnchorPrimary = {
	anchor?: Maybe<Scalars["String"]>
}

export type PrismicEventDataBodyCallToAction = PrismicSliceType & {
	primary: PrismicEventDataBodyCallToActionPrimary
	id: Scalars["ID"]
	slice_type: Scalars["String"]
	slice_label?: Maybe<Scalars["String"]>
}

export type PrismicEventDataBodyCallToActionCard = PrismicSliceType & {
	primary: PrismicEventDataBodyCallToActionCardPrimary
	id: Scalars["ID"]
	slice_type: Scalars["String"]
	slice_label?: Maybe<Scalars["String"]>
}

export type PrismicEventDataBodyCallToActionCardPrimary = {
	button_link?: Maybe<PrismicLinkType>
	button_text?: Maybe<Scalars["String"]>
	color?: Maybe<Scalars["String"]>
	text?: Maybe<PrismicStructuredTextType>
}

export type PrismicEventDataBodyCallToActionPrimary = {
	button_link?: Maybe<PrismicLinkType>
	button_text?: Maybe<Scalars["String"]>
	heading?: Maybe<PrismicStructuredTextType>
}

export type PrismicEventDataBodyFeaturedPeople = PrismicSliceType & {
	items: Array<PrismicEventDataBodyFeaturedPeopleItem>
	primary: PrismicEventDataBodyFeaturedPeoplePrimary
	id: Scalars["ID"]
	slice_type: Scalars["String"]
	slice_label?: Maybe<Scalars["String"]>
}

export type PrismicEventDataBodyFeaturedPeopleItem = {
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
	alt?: Maybe<Scalars["String"]>
	copyright?: Maybe<Scalars["String"]>
	dimensions?: Maybe<PrismicImageDimensionsType>
	/** A plain imgix URL with the URL and params applied. */
	url?: Maybe<Scalars["String"]>
	/** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
	fixed?: Maybe<ImgixFixed>
	/** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
	fluid?: Maybe<ImgixFluid>
	gatsbyImageData?: Maybe<Scalars["JSON"]>
	localFile?: Maybe<File>
}

export type PrismicEventDataBodyFeaturedPeopleItemsHeadshotImageTypeUrlArgs = {
	imgixParams?: Maybe<ImgixParamsInput>
}

export type PrismicEventDataBodyFeaturedPeopleItemsHeadshotImageTypeFixedArgs =
	{
		width?: Maybe<Scalars["Int"]>
		height?: Maybe<Scalars["Int"]>
		quality?: Maybe<Scalars["Int"]>
		imgixParams?: Maybe<ImgixParamsInput>
		placeholderImgixParams?: Maybe<ImgixParamsInput>
	}

export type PrismicEventDataBodyFeaturedPeopleItemsHeadshotImageTypeFluidArgs =
	{
		imgixParams?: Maybe<ImgixParamsInput>
		maxWidth?: Maybe<Scalars["Int"]>
		maxHeight?: Maybe<Scalars["Int"]>
		srcSetBreakpoints?: Maybe<Array<Maybe<Scalars["Int"]>>>
		placeholderImgixParams?: Maybe<ImgixParamsInput>
	}

export type PrismicEventDataBodyFeaturedPeopleItemsHeadshotImageTypeGatsbyImageDataArgs =
	{
		layout?: Maybe<GatsbyImageLayout>
		width?: Maybe<Scalars["Int"]>
		height?: Maybe<Scalars["Int"]>
		aspectRatio?: Maybe<Scalars["Float"]>
		outputPixelDensities?: Maybe<Array<Maybe<Scalars["Float"]>>>
		breakpoints?: Maybe<Array<Maybe<Scalars["Int"]>>>
		sizes?: Maybe<Scalars["String"]>
		backgroundColor?: Maybe<Scalars["String"]>
		imgixParams?: Maybe<ImgixParamsInput>
		placeholderImgixParams?: Maybe<ImgixParamsInput>
		placeholder?: Maybe<ImgixPlaceholder>
		widthTolerance?: Maybe<Scalars["Float"]>
		srcSetMinWidth?: Maybe<Scalars["Int"]>
		srcSetMaxWidth?: Maybe<Scalars["Int"]>
	}

export type PrismicEventDataBodyFeaturedPeoplePrimary = {
	color?: Maybe<Scalars["String"]>
	heading?: Maybe<PrismicStructuredTextType>
	subheading?: Maybe<PrismicStructuredTextType>
}

export type PrismicEventDataBodyImageCallToAction = PrismicSliceType & {
	primary: PrismicEventDataBodyImageCallToActionPrimary
	id: Scalars["ID"]
	slice_type: Scalars["String"]
	slice_label?: Maybe<Scalars["String"]>
}

export type PrismicEventDataBodyImageCallToActionPrimary = {
	button_link?: Maybe<PrismicLinkType>
	button_text?: Maybe<Scalars["String"]>
	color?: Maybe<Scalars["String"]>
	image?: Maybe<PrismicEventDataBodyImageCallToActionPrimaryImageImageType>
	text?: Maybe<PrismicStructuredTextType>
}

export type PrismicEventDataBodyImageCallToActionPrimaryImageImageType = {
	alt?: Maybe<Scalars["String"]>
	copyright?: Maybe<Scalars["String"]>
	dimensions?: Maybe<PrismicImageDimensionsType>
	/** A plain imgix URL with the URL and params applied. */
	url?: Maybe<Scalars["String"]>
	/** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
	fixed?: Maybe<ImgixFixed>
	/** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
	fluid?: Maybe<ImgixFluid>
	gatsbyImageData?: Maybe<Scalars["JSON"]>
	localFile?: Maybe<File>
}

export type PrismicEventDataBodyImageCallToActionPrimaryImageImageTypeUrlArgs =
	{
		imgixParams?: Maybe<ImgixParamsInput>
	}

export type PrismicEventDataBodyImageCallToActionPrimaryImageImageTypeFixedArgs =
	{
		width?: Maybe<Scalars["Int"]>
		height?: Maybe<Scalars["Int"]>
		quality?: Maybe<Scalars["Int"]>
		imgixParams?: Maybe<ImgixParamsInput>
		placeholderImgixParams?: Maybe<ImgixParamsInput>
	}

export type PrismicEventDataBodyImageCallToActionPrimaryImageImageTypeFluidArgs =
	{
		imgixParams?: Maybe<ImgixParamsInput>
		maxWidth?: Maybe<Scalars["Int"]>
		maxHeight?: Maybe<Scalars["Int"]>
		srcSetBreakpoints?: Maybe<Array<Maybe<Scalars["Int"]>>>
		placeholderImgixParams?: Maybe<ImgixParamsInput>
	}

export type PrismicEventDataBodyImageCallToActionPrimaryImageImageTypeGatsbyImageDataArgs =
	{
		layout?: Maybe<GatsbyImageLayout>
		width?: Maybe<Scalars["Int"]>
		height?: Maybe<Scalars["Int"]>
		aspectRatio?: Maybe<Scalars["Float"]>
		outputPixelDensities?: Maybe<Array<Maybe<Scalars["Float"]>>>
		breakpoints?: Maybe<Array<Maybe<Scalars["Int"]>>>
		sizes?: Maybe<Scalars["String"]>
		backgroundColor?: Maybe<Scalars["String"]>
		imgixParams?: Maybe<ImgixParamsInput>
		placeholderImgixParams?: Maybe<ImgixParamsInput>
		placeholder?: Maybe<ImgixPlaceholder>
		widthTolerance?: Maybe<Scalars["Float"]>
		srcSetMinWidth?: Maybe<Scalars["Int"]>
		srcSetMaxWidth?: Maybe<Scalars["Int"]>
	}

export type PrismicEventDataBodyIntroduction = PrismicSliceType & {
	primary: PrismicEventDataBodyIntroductionPrimary
	id: Scalars["ID"]
	slice_type: Scalars["String"]
	slice_label?: Maybe<Scalars["String"]>
}

export type PrismicEventDataBodyIntroductionPrimary = {
	color?: Maybe<Scalars["String"]>
	heading?: Maybe<PrismicStructuredTextType>
	text?: Maybe<PrismicStructuredTextType>
}

export type PrismicEventDataBodyNewsletterForm = PrismicSliceType & {
	primary: PrismicEventDataBodyNewsletterFormPrimary
	id: Scalars["ID"]
	slice_type: Scalars["String"]
	slice_label?: Maybe<Scalars["String"]>
}

export type PrismicEventDataBodyNewsletterFormPrimary = {
	color?: Maybe<Scalars["String"]>
	heading?: Maybe<PrismicStructuredTextType>
	placeholder_text?: Maybe<Scalars["String"]>
}

export type PrismicEventDataBodyPrideCalendar = PrismicSliceType & {
	items: Array<PrismicEventDataBodyPrideCalendarItem>
	primary: PrismicEventDataBodyPrideCalendarPrimary
	id: Scalars["ID"]
	slice_type: Scalars["String"]
	slice_label?: Maybe<Scalars["String"]>
}

export type PrismicEventDataBodyPrideCalendarItem = {
	event_description?: Maybe<PrismicStructuredTextType>
	event_link?: Maybe<PrismicLinkType>
	event_title?: Maybe<PrismicStructuredTextType>
	image?: Maybe<PrismicEventDataBodyPrideCalendarItemsImageImageType>
}

export type PrismicEventDataBodyPrideCalendarItemsImageImageType = {
	alt?: Maybe<Scalars["String"]>
	copyright?: Maybe<Scalars["String"]>
	dimensions?: Maybe<PrismicImageDimensionsType>
	/** A plain imgix URL with the URL and params applied. */
	url?: Maybe<Scalars["String"]>
	/** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
	fixed?: Maybe<ImgixFixed>
	/** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
	fluid?: Maybe<ImgixFluid>
	gatsbyImageData?: Maybe<Scalars["JSON"]>
	localFile?: Maybe<File>
}

export type PrismicEventDataBodyPrideCalendarItemsImageImageTypeUrlArgs = {
	imgixParams?: Maybe<ImgixParamsInput>
}

export type PrismicEventDataBodyPrideCalendarItemsImageImageTypeFixedArgs = {
	width?: Maybe<Scalars["Int"]>
	height?: Maybe<Scalars["Int"]>
	quality?: Maybe<Scalars["Int"]>
	imgixParams?: Maybe<ImgixParamsInput>
	placeholderImgixParams?: Maybe<ImgixParamsInput>
}

export type PrismicEventDataBodyPrideCalendarItemsImageImageTypeFluidArgs = {
	imgixParams?: Maybe<ImgixParamsInput>
	maxWidth?: Maybe<Scalars["Int"]>
	maxHeight?: Maybe<Scalars["Int"]>
	srcSetBreakpoints?: Maybe<Array<Maybe<Scalars["Int"]>>>
	placeholderImgixParams?: Maybe<ImgixParamsInput>
}

export type PrismicEventDataBodyPrideCalendarItemsImageImageTypeGatsbyImageDataArgs =
	{
		layout?: Maybe<GatsbyImageLayout>
		width?: Maybe<Scalars["Int"]>
		height?: Maybe<Scalars["Int"]>
		aspectRatio?: Maybe<Scalars["Float"]>
		outputPixelDensities?: Maybe<Array<Maybe<Scalars["Float"]>>>
		breakpoints?: Maybe<Array<Maybe<Scalars["Int"]>>>
		sizes?: Maybe<Scalars["String"]>
		backgroundColor?: Maybe<Scalars["String"]>
		imgixParams?: Maybe<ImgixParamsInput>
		placeholderImgixParams?: Maybe<ImgixParamsInput>
		placeholder?: Maybe<ImgixPlaceholder>
		widthTolerance?: Maybe<Scalars["Float"]>
		srcSetMinWidth?: Maybe<Scalars["Int"]>
		srcSetMaxWidth?: Maybe<Scalars["Int"]>
	}

export type PrismicEventDataBodyPrideCalendarPrimary = {
	color?: Maybe<Scalars["String"]>
	text?: Maybe<PrismicStructuredTextType>
}

export type PrismicEventDataBodyRichText = PrismicSliceType & {
	primary: PrismicEventDataBodyRichTextPrimary
	id: Scalars["ID"]
	slice_type: Scalars["String"]
	slice_label?: Maybe<Scalars["String"]>
}

export type PrismicEventDataBodyRichTextPrimary = {
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
	primary: PrismicEventDataBodyTextAndVideoPrimary
	id: Scalars["ID"]
	slice_type: Scalars["String"]
	slice_label?: Maybe<Scalars["String"]>
}

export type PrismicEventDataBodyTextAndVideoPrimary = {
	color?: Maybe<Scalars["String"]>
	text?: Maybe<PrismicStructuredTextType>
	thumbnail_side?: Maybe<Scalars["String"]>
	video_thumbnail?: Maybe<PrismicEventDataBodyTextAndVideoPrimaryVideoThumbnailImageType>
	video_url?: Maybe<Scalars["String"]>
}

export type PrismicEventDataBodyTextAndVideoPrimaryVideoThumbnailImageType = {
	alt?: Maybe<Scalars["String"]>
	copyright?: Maybe<Scalars["String"]>
	dimensions?: Maybe<PrismicImageDimensionsType>
	/** A plain imgix URL with the URL and params applied. */
	url?: Maybe<Scalars["String"]>
	/** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
	fixed?: Maybe<ImgixFixed>
	/** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
	fluid?: Maybe<ImgixFluid>
	gatsbyImageData?: Maybe<Scalars["JSON"]>
	localFile?: Maybe<File>
}

export type PrismicEventDataBodyTextAndVideoPrimaryVideoThumbnailImageTypeUrlArgs =
	{
		imgixParams?: Maybe<ImgixParamsInput>
	}

export type PrismicEventDataBodyTextAndVideoPrimaryVideoThumbnailImageTypeFixedArgs =
	{
		width?: Maybe<Scalars["Int"]>
		height?: Maybe<Scalars["Int"]>
		quality?: Maybe<Scalars["Int"]>
		imgixParams?: Maybe<ImgixParamsInput>
		placeholderImgixParams?: Maybe<ImgixParamsInput>
	}

export type PrismicEventDataBodyTextAndVideoPrimaryVideoThumbnailImageTypeFluidArgs =
	{
		imgixParams?: Maybe<ImgixParamsInput>
		maxWidth?: Maybe<Scalars["Int"]>
		maxHeight?: Maybe<Scalars["Int"]>
		srcSetBreakpoints?: Maybe<Array<Maybe<Scalars["Int"]>>>
		placeholderImgixParams?: Maybe<ImgixParamsInput>
	}

export type PrismicEventDataBodyTextAndVideoPrimaryVideoThumbnailImageTypeGatsbyImageDataArgs =
	{
		layout?: Maybe<GatsbyImageLayout>
		width?: Maybe<Scalars["Int"]>
		height?: Maybe<Scalars["Int"]>
		aspectRatio?: Maybe<Scalars["Float"]>
		outputPixelDensities?: Maybe<Array<Maybe<Scalars["Float"]>>>
		breakpoints?: Maybe<Array<Maybe<Scalars["Int"]>>>
		sizes?: Maybe<Scalars["String"]>
		backgroundColor?: Maybe<Scalars["String"]>
		imgixParams?: Maybe<ImgixParamsInput>
		placeholderImgixParams?: Maybe<ImgixParamsInput>
		placeholder?: Maybe<ImgixPlaceholder>
		widthTolerance?: Maybe<Scalars["Float"]>
		srcSetMinWidth?: Maybe<Scalars["Int"]>
		srcSetMaxWidth?: Maybe<Scalars["Int"]>
	}

export type PrismicEventDataBodyTwoColumnText = PrismicSliceType & {
	primary: PrismicEventDataBodyTwoColumnTextPrimary
	id: Scalars["ID"]
	slice_type: Scalars["String"]
	slice_label?: Maybe<Scalars["String"]>
}

export type PrismicEventDataBodyTwoColumnTextPrimary = {
	button_link?: Maybe<PrismicLinkType>
	button_side?: Maybe<Scalars["String"]>
	button_text?: Maybe<Scalars["String"]>
	color?: Maybe<Scalars["String"]>
	left_text?: Maybe<PrismicStructuredTextType>
	right_text?: Maybe<PrismicStructuredTextType>
}

export type PrismicEventDataBodyVideo = PrismicSliceType & {
	primary: PrismicEventDataBodyVideoPrimary
	id: Scalars["ID"]
	slice_type: Scalars["String"]
	slice_label?: Maybe<Scalars["String"]>
}

export type PrismicEventDataBodyVideoGallery = PrismicSliceType & {
	primary: PrismicEventDataBodyVideoGalleryPrimary
	id: Scalars["ID"]
	slice_type: Scalars["String"]
	slice_label?: Maybe<Scalars["String"]>
}

export type PrismicEventDataBodyVideoGalleryPrimary = {
	color?: Maybe<Scalars["String"]>
	text?: Maybe<PrismicStructuredTextType>
	video_submission_type?: Maybe<PrismicLinkType>
}

export type PrismicEventDataBodyVideoHero = PrismicSliceType & {
	primary: PrismicEventDataBodyVideoHeroPrimary
	id: Scalars["ID"]
	slice_type: Scalars["String"]
	slice_label?: Maybe<Scalars["String"]>
}

export type PrismicEventDataBodyVideoHeroPrimary = {
	text?: Maybe<PrismicStructuredTextType>
	video_thumbnail?: Maybe<PrismicEventDataBodyVideoHeroPrimaryVideoThumbnailImageType>
	video_url?: Maybe<Scalars["String"]>
}

export type PrismicEventDataBodyVideoHeroPrimaryVideoThumbnailImageType = {
	alt?: Maybe<Scalars["String"]>
	copyright?: Maybe<Scalars["String"]>
	dimensions?: Maybe<PrismicImageDimensionsType>
	/** A plain imgix URL with the URL and params applied. */
	url?: Maybe<Scalars["String"]>
	/** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
	fixed?: Maybe<ImgixFixed>
	/** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
	fluid?: Maybe<ImgixFluid>
	gatsbyImageData?: Maybe<Scalars["JSON"]>
	localFile?: Maybe<File>
}

export type PrismicEventDataBodyVideoHeroPrimaryVideoThumbnailImageTypeUrlArgs =
	{
		imgixParams?: Maybe<ImgixParamsInput>
	}

export type PrismicEventDataBodyVideoHeroPrimaryVideoThumbnailImageTypeFixedArgs =
	{
		width?: Maybe<Scalars["Int"]>
		height?: Maybe<Scalars["Int"]>
		quality?: Maybe<Scalars["Int"]>
		imgixParams?: Maybe<ImgixParamsInput>
		placeholderImgixParams?: Maybe<ImgixParamsInput>
	}

export type PrismicEventDataBodyVideoHeroPrimaryVideoThumbnailImageTypeFluidArgs =
	{
		imgixParams?: Maybe<ImgixParamsInput>
		maxWidth?: Maybe<Scalars["Int"]>
		maxHeight?: Maybe<Scalars["Int"]>
		srcSetBreakpoints?: Maybe<Array<Maybe<Scalars["Int"]>>>
		placeholderImgixParams?: Maybe<ImgixParamsInput>
	}

export type PrismicEventDataBodyVideoHeroPrimaryVideoThumbnailImageTypeGatsbyImageDataArgs =
	{
		layout?: Maybe<GatsbyImageLayout>
		width?: Maybe<Scalars["Int"]>
		height?: Maybe<Scalars["Int"]>
		aspectRatio?: Maybe<Scalars["Float"]>
		outputPixelDensities?: Maybe<Array<Maybe<Scalars["Float"]>>>
		breakpoints?: Maybe<Array<Maybe<Scalars["Int"]>>>
		sizes?: Maybe<Scalars["String"]>
		backgroundColor?: Maybe<Scalars["String"]>
		imgixParams?: Maybe<ImgixParamsInput>
		placeholderImgixParams?: Maybe<ImgixParamsInput>
		placeholder?: Maybe<ImgixPlaceholder>
		widthTolerance?: Maybe<Scalars["Float"]>
		srcSetMinWidth?: Maybe<Scalars["Int"]>
		srcSetMaxWidth?: Maybe<Scalars["Int"]>
	}

export type PrismicEventDataBodyVideoPrimary = {
	thumbnail?: Maybe<PrismicEventDataBodyVideoPrimaryThumbnailImageType>
	video_url?: Maybe<Scalars["String"]>
}

export type PrismicEventDataBodyVideoPrimaryThumbnailImageType = {
	alt?: Maybe<Scalars["String"]>
	copyright?: Maybe<Scalars["String"]>
	dimensions?: Maybe<PrismicImageDimensionsType>
	/** A plain imgix URL with the URL and params applied. */
	url?: Maybe<Scalars["String"]>
	/** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
	fixed?: Maybe<ImgixFixed>
	/** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
	fluid?: Maybe<ImgixFluid>
	gatsbyImageData?: Maybe<Scalars["JSON"]>
	localFile?: Maybe<File>
}

export type PrismicEventDataBodyVideoPrimaryThumbnailImageTypeUrlArgs = {
	imgixParams?: Maybe<ImgixParamsInput>
}

export type PrismicEventDataBodyVideoPrimaryThumbnailImageTypeFixedArgs = {
	width?: Maybe<Scalars["Int"]>
	height?: Maybe<Scalars["Int"]>
	quality?: Maybe<Scalars["Int"]>
	imgixParams?: Maybe<ImgixParamsInput>
	placeholderImgixParams?: Maybe<ImgixParamsInput>
}

export type PrismicEventDataBodyVideoPrimaryThumbnailImageTypeFluidArgs = {
	imgixParams?: Maybe<ImgixParamsInput>
	maxWidth?: Maybe<Scalars["Int"]>
	maxHeight?: Maybe<Scalars["Int"]>
	srcSetBreakpoints?: Maybe<Array<Maybe<Scalars["Int"]>>>
	placeholderImgixParams?: Maybe<ImgixParamsInput>
}

export type PrismicEventDataBodyVideoPrimaryThumbnailImageTypeGatsbyImageDataArgs =
	{
		layout?: Maybe<GatsbyImageLayout>
		width?: Maybe<Scalars["Int"]>
		height?: Maybe<Scalars["Int"]>
		aspectRatio?: Maybe<Scalars["Float"]>
		outputPixelDensities?: Maybe<Array<Maybe<Scalars["Float"]>>>
		breakpoints?: Maybe<Array<Maybe<Scalars["Int"]>>>
		sizes?: Maybe<Scalars["String"]>
		backgroundColor?: Maybe<Scalars["String"]>
		imgixParams?: Maybe<ImgixParamsInput>
		placeholderImgixParams?: Maybe<ImgixParamsInput>
		placeholder?: Maybe<ImgixPlaceholder>
		widthTolerance?: Maybe<Scalars["Float"]>
		srcSetMinWidth?: Maybe<Scalars["Int"]>
		srcSetMaxWidth?: Maybe<Scalars["Int"]>
	}

export type PrismicEventDataType = {
	body: Array<PrismicEventDataBodySlicesType>
	date?: Maybe<Scalars["Date"]>
	description?: Maybe<PrismicStructuredTextType>
	illustration?: Maybe<Scalars["String"]>
	title?: Maybe<PrismicStructuredTextType>
	type?: Maybe<Scalars["String"]>
}

export type PrismicEventDataTypeDateArgs = {
	formatString?: Maybe<Scalars["String"]>
	fromNow?: Maybe<Scalars["Boolean"]>
	difference?: Maybe<Scalars["String"]>
	locale?: Maybe<Scalars["String"]>
}

export type PrismicEventDataTypeFilterInput = {
	date?: Maybe<DateQueryOperatorInput>
	description?: Maybe<PrismicStructuredTextTypeFilterInput>
	illustration?: Maybe<StringQueryOperatorInput>
	title?: Maybe<PrismicStructuredTextTypeFilterInput>
	type?: Maybe<StringQueryOperatorInput>
}

export type PrismicEventEdge = {
	next?: Maybe<PrismicEvent>
	node: PrismicEvent
	previous?: Maybe<PrismicEvent>
}

export enum PrismicEventFieldsEnum {
	Uid = "uid",
	DataDate = "data___date",
	DataDescriptionText = "data___description___text",
	DataDescriptionHtml = "data___description___html",
	DataDescriptionRichText = "data___description___richText",
	DataDescriptionRaw = "data___description___raw",
	DataIllustration = "data___illustration",
	DataTitleText = "data___title___text",
	DataTitleHtml = "data___title___html",
	DataTitleRichText = "data___title___richText",
	DataTitleRaw = "data___title___raw",
	DataType = "data___type",
	DataRaw = "dataRaw",
	PrismicId = "prismicId",
	AlternateLanguages = "alternate_languages",
	AlternateLanguagesId = "alternate_languages___id",
	AlternateLanguagesUid = "alternate_languages___uid",
	AlternateLanguagesLang = "alternate_languages___lang",
	AlternateLanguagesType = "alternate_languages___type",
	AlternateLanguagesRaw = "alternate_languages___raw",
	FirstPublicationDate = "first_publication_date",
	Href = "href",
	Lang = "lang",
	LastPublicationDate = "last_publication_date",
	Tags = "tags",
	Type = "type",
	Url = "url",
	Previewable = "_previewable",
	Id = "id",
	ParentId = "parent___id",
	ParentParentId = "parent___parent___id",
	ParentParentParentId = "parent___parent___parent___id",
	ParentParentParentChildren = "parent___parent___parent___children",
	ParentParentChildren = "parent___parent___children",
	ParentParentChildrenId = "parent___parent___children___id",
	ParentParentChildrenChildren = "parent___parent___children___children",
	ParentParentInternalContent = "parent___parent___internal___content",
	ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
	ParentParentInternalDescription = "parent___parent___internal___description",
	ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
	ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
	ParentParentInternalMediaType = "parent___parent___internal___mediaType",
	ParentParentInternalOwner = "parent___parent___internal___owner",
	ParentParentInternalType = "parent___parent___internal___type",
	ParentParentInternalContentFilePath = "parent___parent___internal___contentFilePath",
	ParentChildren = "parent___children",
	ParentChildrenId = "parent___children___id",
	ParentChildrenParentId = "parent___children___parent___id",
	ParentChildrenParentChildren = "parent___children___parent___children",
	ParentChildrenChildren = "parent___children___children",
	ParentChildrenChildrenId = "parent___children___children___id",
	ParentChildrenChildrenChildren = "parent___children___children___children",
	ParentChildrenInternalContent = "parent___children___internal___content",
	ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
	ParentChildrenInternalDescription = "parent___children___internal___description",
	ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
	ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
	ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
	ParentChildrenInternalOwner = "parent___children___internal___owner",
	ParentChildrenInternalType = "parent___children___internal___type",
	ParentChildrenInternalContentFilePath = "parent___children___internal___contentFilePath",
	ParentInternalContent = "parent___internal___content",
	ParentInternalContentDigest = "parent___internal___contentDigest",
	ParentInternalDescription = "parent___internal___description",
	ParentInternalFieldOwners = "parent___internal___fieldOwners",
	ParentInternalIgnoreType = "parent___internal___ignoreType",
	ParentInternalMediaType = "parent___internal___mediaType",
	ParentInternalOwner = "parent___internal___owner",
	ParentInternalType = "parent___internal___type",
	ParentInternalContentFilePath = "parent___internal___contentFilePath",
	Children = "children",
	ChildrenId = "children___id",
	ChildrenParentId = "children___parent___id",
	ChildrenParentParentId = "children___parent___parent___id",
	ChildrenParentParentChildren = "children___parent___parent___children",
	ChildrenParentChildren = "children___parent___children",
	ChildrenParentChildrenId = "children___parent___children___id",
	ChildrenParentChildrenChildren = "children___parent___children___children",
	ChildrenParentInternalContent = "children___parent___internal___content",
	ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
	ChildrenParentInternalDescription = "children___parent___internal___description",
	ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
	ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
	ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
	ChildrenParentInternalOwner = "children___parent___internal___owner",
	ChildrenParentInternalType = "children___parent___internal___type",
	ChildrenParentInternalContentFilePath = "children___parent___internal___contentFilePath",
	ChildrenChildren = "children___children",
	ChildrenChildrenId = "children___children___id",
	ChildrenChildrenParentId = "children___children___parent___id",
	ChildrenChildrenParentChildren = "children___children___parent___children",
	ChildrenChildrenChildren = "children___children___children",
	ChildrenChildrenChildrenId = "children___children___children___id",
	ChildrenChildrenChildrenChildren = "children___children___children___children",
	ChildrenChildrenInternalContent = "children___children___internal___content",
	ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
	ChildrenChildrenInternalDescription = "children___children___internal___description",
	ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
	ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
	ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
	ChildrenChildrenInternalOwner = "children___children___internal___owner",
	ChildrenChildrenInternalType = "children___children___internal___type",
	ChildrenChildrenInternalContentFilePath = "children___children___internal___contentFilePath",
	ChildrenInternalContent = "children___internal___content",
	ChildrenInternalContentDigest = "children___internal___contentDigest",
	ChildrenInternalDescription = "children___internal___description",
	ChildrenInternalFieldOwners = "children___internal___fieldOwners",
	ChildrenInternalIgnoreType = "children___internal___ignoreType",
	ChildrenInternalMediaType = "children___internal___mediaType",
	ChildrenInternalOwner = "children___internal___owner",
	ChildrenInternalType = "children___internal___type",
	ChildrenInternalContentFilePath = "children___internal___contentFilePath",
	InternalContent = "internal___content",
	InternalContentDigest = "internal___contentDigest",
	InternalDescription = "internal___description",
	InternalFieldOwners = "internal___fieldOwners",
	InternalIgnoreType = "internal___ignoreType",
	InternalMediaType = "internal___mediaType",
	InternalOwner = "internal___owner",
	InternalType = "internal___type",
	InternalContentFilePath = "internal___contentFilePath",
}

export type PrismicEventFilterInput = {
	uid?: Maybe<StringQueryOperatorInput>
	data?: Maybe<PrismicEventDataTypeFilterInput>
	dataRaw?: Maybe<JsonQueryOperatorInput>
	prismicId?: Maybe<IdQueryOperatorInput>
	alternate_languages?: Maybe<PrismicAlternateLanguageTypeFilterListInput>
	first_publication_date?: Maybe<DateQueryOperatorInput>
	href?: Maybe<StringQueryOperatorInput>
	lang?: Maybe<StringQueryOperatorInput>
	last_publication_date?: Maybe<DateQueryOperatorInput>
	tags?: Maybe<StringQueryOperatorInput>
	type?: Maybe<StringQueryOperatorInput>
	url?: Maybe<StringQueryOperatorInput>
	_previewable?: Maybe<IdQueryOperatorInput>
	id?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	children?: Maybe<NodeFilterListInput>
	internal?: Maybe<InternalFilterInput>
}

export type PrismicEventGroupConnection = {
	totalCount: Scalars["Int"]
	edges: Array<PrismicEventEdge>
	nodes: Array<PrismicEvent>
	pageInfo: PageInfo
	distinct: Array<Scalars["String"]>
	max?: Maybe<Scalars["Float"]>
	min?: Maybe<Scalars["Float"]>
	sum?: Maybe<Scalars["Float"]>
	group: Array<PrismicEventGroupConnection>
	field: Scalars["String"]
	fieldValue?: Maybe<Scalars["String"]>
}

export type PrismicEventGroupConnectionDistinctArgs = {
	field: PrismicEventFieldsEnum
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

export type PrismicEventGroupConnectionGroupArgs = {
	skip?: Maybe<Scalars["Int"]>
	limit?: Maybe<Scalars["Int"]>
	field: PrismicEventFieldsEnum
}

export type PrismicEventSortInput = {
	fields?: Maybe<Array<Maybe<PrismicEventFieldsEnum>>>
	order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type PrismicGeoPointType = {
	longitude: Scalars["Float"]
	latitude: Scalars["Float"]
}

export type PrismicImageDimensionsType = {
	width: Scalars["Int"]
	height: Scalars["Int"]
}

export type PrismicImageDimensionsTypeFilterInput = {
	width?: Maybe<IntQueryOperatorInput>
	height?: Maybe<IntQueryOperatorInput>
}

export type PrismicImageThumbnailType = {
	alt?: Maybe<Scalars["String"]>
	copyright?: Maybe<Scalars["String"]>
	dimensions?: Maybe<PrismicImageDimensionsType>
	/** A plain imgix URL with the URL and params applied. */
	url?: Maybe<Scalars["String"]>
	/** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
	fixed?: Maybe<ImgixFixed>
	/** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
	fluid?: Maybe<ImgixFluid>
	gatsbyImageData?: Maybe<Scalars["JSON"]>
	localFile?: Maybe<File>
}

export type PrismicImageThumbnailTypeUrlArgs = {
	imgixParams?: Maybe<ImgixParamsInput>
}

export type PrismicImageThumbnailTypeFixedArgs = {
	width?: Maybe<Scalars["Int"]>
	height?: Maybe<Scalars["Int"]>
	quality?: Maybe<Scalars["Int"]>
	imgixParams?: Maybe<ImgixParamsInput>
	placeholderImgixParams?: Maybe<ImgixParamsInput>
}

export type PrismicImageThumbnailTypeFluidArgs = {
	imgixParams?: Maybe<ImgixParamsInput>
	maxWidth?: Maybe<Scalars["Int"]>
	maxHeight?: Maybe<Scalars["Int"]>
	srcSetBreakpoints?: Maybe<Array<Maybe<Scalars["Int"]>>>
	placeholderImgixParams?: Maybe<ImgixParamsInput>
}

export type PrismicImageThumbnailTypeGatsbyImageDataArgs = {
	layout?: Maybe<GatsbyImageLayout>
	width?: Maybe<Scalars["Int"]>
	height?: Maybe<Scalars["Int"]>
	aspectRatio?: Maybe<Scalars["Float"]>
	outputPixelDensities?: Maybe<Array<Maybe<Scalars["Float"]>>>
	breakpoints?: Maybe<Array<Maybe<Scalars["Int"]>>>
	sizes?: Maybe<Scalars["String"]>
	backgroundColor?: Maybe<Scalars["String"]>
	imgixParams?: Maybe<ImgixParamsInput>
	placeholderImgixParams?: Maybe<ImgixParamsInput>
	placeholder?: Maybe<ImgixPlaceholder>
	widthTolerance?: Maybe<Scalars["Float"]>
	srcSetMinWidth?: Maybe<Scalars["Int"]>
	srcSetMaxWidth?: Maybe<Scalars["Int"]>
}

export type PrismicLinkType = {
	link_type?: Maybe<PrismicLinkTypeEnum>
	isBroken?: Maybe<Scalars["Boolean"]>
	url?: Maybe<Scalars["String"]>
	target?: Maybe<Scalars["String"]>
	size?: Maybe<Scalars["Int"]>
	id?: Maybe<Scalars["ID"]>
	type?: Maybe<Scalars["String"]>
	tags?: Maybe<Array<Maybe<Scalars["String"]>>>
	lang?: Maybe<Scalars["String"]>
	slug?: Maybe<Scalars["String"]>
	uid?: Maybe<Scalars["String"]>
	document?: Maybe<PrismicAllDocumentTypes>
	localFile?: Maybe<File>
	raw?: Maybe<Scalars["JSON"]>
}

export enum PrismicLinkTypeEnum {
	Any = "Any",
	Document = "Document",
	Media = "Media",
	Web = "Web",
}

export type PrismicLinkTypeEnumQueryOperatorInput = {
	eq?: Maybe<PrismicLinkTypeEnum>
	ne?: Maybe<PrismicLinkTypeEnum>
	in?: Maybe<Array<Maybe<PrismicLinkTypeEnum>>>
	nin?: Maybe<Array<Maybe<PrismicLinkTypeEnum>>>
}

export type PrismicLinkTypeFilterInput = {
	link_type?: Maybe<PrismicLinkTypeEnumQueryOperatorInput>
	isBroken?: Maybe<BooleanQueryOperatorInput>
	url?: Maybe<StringQueryOperatorInput>
	target?: Maybe<StringQueryOperatorInput>
	size?: Maybe<IntQueryOperatorInput>
	id?: Maybe<IdQueryOperatorInput>
	type?: Maybe<StringQueryOperatorInput>
	tags?: Maybe<StringQueryOperatorInput>
	lang?: Maybe<StringQueryOperatorInput>
	slug?: Maybe<StringQueryOperatorInput>
	uid?: Maybe<StringQueryOperatorInput>
	localFile?: Maybe<FileFilterInput>
	raw?: Maybe<JsonQueryOperatorInput>
}

export type PrismicNavigation = Node & {
	uid: Scalars["String"]
	data: PrismicNavigationDataType
	dataRaw: Scalars["JSON"]
	prismicId: Scalars["ID"]
	alternate_languages: Array<PrismicAlternateLanguageType>
	first_publication_date: Scalars["Date"]
	href: Scalars["String"]
	lang: Scalars["String"]
	last_publication_date: Scalars["Date"]
	tags: Array<Scalars["String"]>
	type: Scalars["String"]
	url?: Maybe<Scalars["String"]>
	_previewable: Scalars["ID"]
	id: Scalars["ID"]
	parent?: Maybe<Node>
	children: Array<Node>
	internal: Internal
}

export type PrismicNavigationFirst_Publication_DateArgs = {
	formatString?: Maybe<Scalars["String"]>
	fromNow?: Maybe<Scalars["Boolean"]>
	difference?: Maybe<Scalars["String"]>
	locale?: Maybe<Scalars["String"]>
}

export type PrismicNavigationLast_Publication_DateArgs = {
	formatString?: Maybe<Scalars["String"]>
	fromNow?: Maybe<Scalars["Boolean"]>
	difference?: Maybe<Scalars["String"]>
	locale?: Maybe<Scalars["String"]>
}

export type PrismicNavigationConnection = {
	totalCount: Scalars["Int"]
	edges: Array<PrismicNavigationEdge>
	nodes: Array<PrismicNavigation>
	pageInfo: PageInfo
	distinct: Array<Scalars["String"]>
	max?: Maybe<Scalars["Float"]>
	min?: Maybe<Scalars["Float"]>
	sum?: Maybe<Scalars["Float"]>
	group: Array<PrismicNavigationGroupConnection>
}

export type PrismicNavigationConnectionDistinctArgs = {
	field: PrismicNavigationFieldsEnum
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

export type PrismicNavigationConnectionGroupArgs = {
	skip?: Maybe<Scalars["Int"]>
	limit?: Maybe<Scalars["Int"]>
	field: PrismicNavigationFieldsEnum
}

export type PrismicNavigationDataNavItems = {
	label?: Maybe<PrismicStructuredTextType>
	link?: Maybe<PrismicLinkType>
}

export type PrismicNavigationDataNavItemsFilterInput = {
	label?: Maybe<PrismicStructuredTextTypeFilterInput>
	link?: Maybe<PrismicLinkTypeFilterInput>
}

export type PrismicNavigationDataNavItemsFilterListInput = {
	elemMatch?: Maybe<PrismicNavigationDataNavItemsFilterInput>
}

export type PrismicNavigationDataType = {
	nav_items?: Maybe<Array<Maybe<PrismicNavigationDataNavItems>>>
	title?: Maybe<PrismicStructuredTextType>
}

export type PrismicNavigationDataTypeFilterInput = {
	nav_items?: Maybe<PrismicNavigationDataNavItemsFilterListInput>
	title?: Maybe<PrismicStructuredTextTypeFilterInput>
}

export type PrismicNavigationEdge = {
	next?: Maybe<PrismicNavigation>
	node: PrismicNavigation
	previous?: Maybe<PrismicNavigation>
}

export enum PrismicNavigationFieldsEnum {
	Uid = "uid",
	DataNavItems = "data___nav_items",
	DataNavItemsLabelText = "data___nav_items___label___text",
	DataNavItemsLabelHtml = "data___nav_items___label___html",
	DataNavItemsLabelRichText = "data___nav_items___label___richText",
	DataNavItemsLabelRaw = "data___nav_items___label___raw",
	DataNavItemsLinkLinkType = "data___nav_items___link___link_type",
	DataNavItemsLinkIsBroken = "data___nav_items___link___isBroken",
	DataNavItemsLinkUrl = "data___nav_items___link___url",
	DataNavItemsLinkTarget = "data___nav_items___link___target",
	DataNavItemsLinkSize = "data___nav_items___link___size",
	DataNavItemsLinkId = "data___nav_items___link___id",
	DataNavItemsLinkType = "data___nav_items___link___type",
	DataNavItemsLinkTags = "data___nav_items___link___tags",
	DataNavItemsLinkLang = "data___nav_items___link___lang",
	DataNavItemsLinkSlug = "data___nav_items___link___slug",
	DataNavItemsLinkUid = "data___nav_items___link___uid",
	DataNavItemsLinkRaw = "data___nav_items___link___raw",
	DataTitleText = "data___title___text",
	DataTitleHtml = "data___title___html",
	DataTitleRichText = "data___title___richText",
	DataTitleRaw = "data___title___raw",
	DataRaw = "dataRaw",
	PrismicId = "prismicId",
	AlternateLanguages = "alternate_languages",
	AlternateLanguagesId = "alternate_languages___id",
	AlternateLanguagesUid = "alternate_languages___uid",
	AlternateLanguagesLang = "alternate_languages___lang",
	AlternateLanguagesType = "alternate_languages___type",
	AlternateLanguagesRaw = "alternate_languages___raw",
	FirstPublicationDate = "first_publication_date",
	Href = "href",
	Lang = "lang",
	LastPublicationDate = "last_publication_date",
	Tags = "tags",
	Type = "type",
	Url = "url",
	Previewable = "_previewable",
	Id = "id",
	ParentId = "parent___id",
	ParentParentId = "parent___parent___id",
	ParentParentParentId = "parent___parent___parent___id",
	ParentParentParentChildren = "parent___parent___parent___children",
	ParentParentChildren = "parent___parent___children",
	ParentParentChildrenId = "parent___parent___children___id",
	ParentParentChildrenChildren = "parent___parent___children___children",
	ParentParentInternalContent = "parent___parent___internal___content",
	ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
	ParentParentInternalDescription = "parent___parent___internal___description",
	ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
	ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
	ParentParentInternalMediaType = "parent___parent___internal___mediaType",
	ParentParentInternalOwner = "parent___parent___internal___owner",
	ParentParentInternalType = "parent___parent___internal___type",
	ParentParentInternalContentFilePath = "parent___parent___internal___contentFilePath",
	ParentChildren = "parent___children",
	ParentChildrenId = "parent___children___id",
	ParentChildrenParentId = "parent___children___parent___id",
	ParentChildrenParentChildren = "parent___children___parent___children",
	ParentChildrenChildren = "parent___children___children",
	ParentChildrenChildrenId = "parent___children___children___id",
	ParentChildrenChildrenChildren = "parent___children___children___children",
	ParentChildrenInternalContent = "parent___children___internal___content",
	ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
	ParentChildrenInternalDescription = "parent___children___internal___description",
	ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
	ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
	ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
	ParentChildrenInternalOwner = "parent___children___internal___owner",
	ParentChildrenInternalType = "parent___children___internal___type",
	ParentChildrenInternalContentFilePath = "parent___children___internal___contentFilePath",
	ParentInternalContent = "parent___internal___content",
	ParentInternalContentDigest = "parent___internal___contentDigest",
	ParentInternalDescription = "parent___internal___description",
	ParentInternalFieldOwners = "parent___internal___fieldOwners",
	ParentInternalIgnoreType = "parent___internal___ignoreType",
	ParentInternalMediaType = "parent___internal___mediaType",
	ParentInternalOwner = "parent___internal___owner",
	ParentInternalType = "parent___internal___type",
	ParentInternalContentFilePath = "parent___internal___contentFilePath",
	Children = "children",
	ChildrenId = "children___id",
	ChildrenParentId = "children___parent___id",
	ChildrenParentParentId = "children___parent___parent___id",
	ChildrenParentParentChildren = "children___parent___parent___children",
	ChildrenParentChildren = "children___parent___children",
	ChildrenParentChildrenId = "children___parent___children___id",
	ChildrenParentChildrenChildren = "children___parent___children___children",
	ChildrenParentInternalContent = "children___parent___internal___content",
	ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
	ChildrenParentInternalDescription = "children___parent___internal___description",
	ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
	ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
	ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
	ChildrenParentInternalOwner = "children___parent___internal___owner",
	ChildrenParentInternalType = "children___parent___internal___type",
	ChildrenParentInternalContentFilePath = "children___parent___internal___contentFilePath",
	ChildrenChildren = "children___children",
	ChildrenChildrenId = "children___children___id",
	ChildrenChildrenParentId = "children___children___parent___id",
	ChildrenChildrenParentChildren = "children___children___parent___children",
	ChildrenChildrenChildren = "children___children___children",
	ChildrenChildrenChildrenId = "children___children___children___id",
	ChildrenChildrenChildrenChildren = "children___children___children___children",
	ChildrenChildrenInternalContent = "children___children___internal___content",
	ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
	ChildrenChildrenInternalDescription = "children___children___internal___description",
	ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
	ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
	ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
	ChildrenChildrenInternalOwner = "children___children___internal___owner",
	ChildrenChildrenInternalType = "children___children___internal___type",
	ChildrenChildrenInternalContentFilePath = "children___children___internal___contentFilePath",
	ChildrenInternalContent = "children___internal___content",
	ChildrenInternalContentDigest = "children___internal___contentDigest",
	ChildrenInternalDescription = "children___internal___description",
	ChildrenInternalFieldOwners = "children___internal___fieldOwners",
	ChildrenInternalIgnoreType = "children___internal___ignoreType",
	ChildrenInternalMediaType = "children___internal___mediaType",
	ChildrenInternalOwner = "children___internal___owner",
	ChildrenInternalType = "children___internal___type",
	ChildrenInternalContentFilePath = "children___internal___contentFilePath",
	InternalContent = "internal___content",
	InternalContentDigest = "internal___contentDigest",
	InternalDescription = "internal___description",
	InternalFieldOwners = "internal___fieldOwners",
	InternalIgnoreType = "internal___ignoreType",
	InternalMediaType = "internal___mediaType",
	InternalOwner = "internal___owner",
	InternalType = "internal___type",
	InternalContentFilePath = "internal___contentFilePath",
}

export type PrismicNavigationFilterInput = {
	uid?: Maybe<StringQueryOperatorInput>
	data?: Maybe<PrismicNavigationDataTypeFilterInput>
	dataRaw?: Maybe<JsonQueryOperatorInput>
	prismicId?: Maybe<IdQueryOperatorInput>
	alternate_languages?: Maybe<PrismicAlternateLanguageTypeFilterListInput>
	first_publication_date?: Maybe<DateQueryOperatorInput>
	href?: Maybe<StringQueryOperatorInput>
	lang?: Maybe<StringQueryOperatorInput>
	last_publication_date?: Maybe<DateQueryOperatorInput>
	tags?: Maybe<StringQueryOperatorInput>
	type?: Maybe<StringQueryOperatorInput>
	url?: Maybe<StringQueryOperatorInput>
	_previewable?: Maybe<IdQueryOperatorInput>
	id?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	children?: Maybe<NodeFilterListInput>
	internal?: Maybe<InternalFilterInput>
}

export type PrismicNavigationGroupConnection = {
	totalCount: Scalars["Int"]
	edges: Array<PrismicNavigationEdge>
	nodes: Array<PrismicNavigation>
	pageInfo: PageInfo
	distinct: Array<Scalars["String"]>
	max?: Maybe<Scalars["Float"]>
	min?: Maybe<Scalars["Float"]>
	sum?: Maybe<Scalars["Float"]>
	group: Array<PrismicNavigationGroupConnection>
	field: Scalars["String"]
	fieldValue?: Maybe<Scalars["String"]>
}

export type PrismicNavigationGroupConnectionDistinctArgs = {
	field: PrismicNavigationFieldsEnum
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

export type PrismicNavigationGroupConnectionGroupArgs = {
	skip?: Maybe<Scalars["Int"]>
	limit?: Maybe<Scalars["Int"]>
	field: PrismicNavigationFieldsEnum
}

export type PrismicNavigationSortInput = {
	fields?: Maybe<Array<Maybe<PrismicNavigationFieldsEnum>>>
	order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type PrismicPage = Node & {
	uid: Scalars["String"]
	data: PrismicPageDataType
	dataRaw: Scalars["JSON"]
	prismicId: Scalars["ID"]
	alternate_languages: Array<PrismicAlternateLanguageType>
	first_publication_date: Scalars["Date"]
	href: Scalars["String"]
	lang: Scalars["String"]
	last_publication_date: Scalars["Date"]
	tags: Array<Scalars["String"]>
	type: Scalars["String"]
	url?: Maybe<Scalars["String"]>
	_previewable: Scalars["ID"]
	id: Scalars["ID"]
	parent?: Maybe<Node>
	children: Array<Node>
	internal: Internal
}

export type PrismicPageFirst_Publication_DateArgs = {
	formatString?: Maybe<Scalars["String"]>
	fromNow?: Maybe<Scalars["Boolean"]>
	difference?: Maybe<Scalars["String"]>
	locale?: Maybe<Scalars["String"]>
}

export type PrismicPageLast_Publication_DateArgs = {
	formatString?: Maybe<Scalars["String"]>
	fromNow?: Maybe<Scalars["Boolean"]>
	difference?: Maybe<Scalars["String"]>
	locale?: Maybe<Scalars["String"]>
}

export type PrismicPageConnection = {
	totalCount: Scalars["Int"]
	edges: Array<PrismicPageEdge>
	nodes: Array<PrismicPage>
	pageInfo: PageInfo
	distinct: Array<Scalars["String"]>
	max?: Maybe<Scalars["Float"]>
	min?: Maybe<Scalars["Float"]>
	sum?: Maybe<Scalars["Float"]>
	group: Array<PrismicPageGroupConnection>
}

export type PrismicPageConnectionDistinctArgs = {
	field: PrismicPageFieldsEnum
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

export type PrismicPageConnectionGroupArgs = {
	skip?: Maybe<Scalars["Int"]>
	limit?: Maybe<Scalars["Int"]>
	field: PrismicPageFieldsEnum
}

export type PrismicPageDataBodyAnchor = PrismicSliceType & {
	primary: PrismicPageDataBodyAnchorPrimary
	id: Scalars["ID"]
	slice_type: Scalars["String"]
	slice_label?: Maybe<Scalars["String"]>
}

export type PrismicPageDataBodyAnchorPrimary = {
	anchor?: Maybe<Scalars["String"]>
}

export type PrismicPageDataBodyCallToAction = PrismicSliceType & {
	primary: PrismicPageDataBodyCallToActionPrimary
	id: Scalars["ID"]
	slice_type: Scalars["String"]
	slice_label?: Maybe<Scalars["String"]>
}

export type PrismicPageDataBodyCallToActionCard = PrismicSliceType & {
	primary: PrismicPageDataBodyCallToActionCardPrimary
	id: Scalars["ID"]
	slice_type: Scalars["String"]
	slice_label?: Maybe<Scalars["String"]>
}

export type PrismicPageDataBodyCallToActionCardPrimary = {
	button_link?: Maybe<PrismicLinkType>
	button_text?: Maybe<Scalars["String"]>
	color?: Maybe<Scalars["String"]>
	text?: Maybe<PrismicStructuredTextType>
}

export type PrismicPageDataBodyCallToActionPrimary = {
	button_link?: Maybe<PrismicLinkType>
	button_text?: Maybe<Scalars["String"]>
	heading?: Maybe<PrismicStructuredTextType>
}

export type PrismicPageDataBodyFeaturedPeople = PrismicSliceType & {
	items: Array<PrismicPageDataBodyFeaturedPeopleItem>
	primary: PrismicPageDataBodyFeaturedPeoplePrimary
	id: Scalars["ID"]
	slice_type: Scalars["String"]
	slice_label?: Maybe<Scalars["String"]>
}

export type PrismicPageDataBodyFeaturedPeopleItem = {
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
	alt?: Maybe<Scalars["String"]>
	copyright?: Maybe<Scalars["String"]>
	dimensions?: Maybe<PrismicImageDimensionsType>
	/** A plain imgix URL with the URL and params applied. */
	url?: Maybe<Scalars["String"]>
	/** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
	fixed?: Maybe<ImgixFixed>
	/** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
	fluid?: Maybe<ImgixFluid>
	gatsbyImageData?: Maybe<Scalars["JSON"]>
	localFile?: Maybe<File>
}

export type PrismicPageDataBodyFeaturedPeopleItemsHeadshotImageTypeUrlArgs = {
	imgixParams?: Maybe<ImgixParamsInput>
}

export type PrismicPageDataBodyFeaturedPeopleItemsHeadshotImageTypeFixedArgs = {
	width?: Maybe<Scalars["Int"]>
	height?: Maybe<Scalars["Int"]>
	quality?: Maybe<Scalars["Int"]>
	imgixParams?: Maybe<ImgixParamsInput>
	placeholderImgixParams?: Maybe<ImgixParamsInput>
}

export type PrismicPageDataBodyFeaturedPeopleItemsHeadshotImageTypeFluidArgs = {
	imgixParams?: Maybe<ImgixParamsInput>
	maxWidth?: Maybe<Scalars["Int"]>
	maxHeight?: Maybe<Scalars["Int"]>
	srcSetBreakpoints?: Maybe<Array<Maybe<Scalars["Int"]>>>
	placeholderImgixParams?: Maybe<ImgixParamsInput>
}

export type PrismicPageDataBodyFeaturedPeopleItemsHeadshotImageTypeGatsbyImageDataArgs =
	{
		layout?: Maybe<GatsbyImageLayout>
		width?: Maybe<Scalars["Int"]>
		height?: Maybe<Scalars["Int"]>
		aspectRatio?: Maybe<Scalars["Float"]>
		outputPixelDensities?: Maybe<Array<Maybe<Scalars["Float"]>>>
		breakpoints?: Maybe<Array<Maybe<Scalars["Int"]>>>
		sizes?: Maybe<Scalars["String"]>
		backgroundColor?: Maybe<Scalars["String"]>
		imgixParams?: Maybe<ImgixParamsInput>
		placeholderImgixParams?: Maybe<ImgixParamsInput>
		placeholder?: Maybe<ImgixPlaceholder>
		widthTolerance?: Maybe<Scalars["Float"]>
		srcSetMinWidth?: Maybe<Scalars["Int"]>
		srcSetMaxWidth?: Maybe<Scalars["Int"]>
	}

export type PrismicPageDataBodyFeaturedPeoplePrimary = {
	color?: Maybe<Scalars["String"]>
	heading?: Maybe<PrismicStructuredTextType>
	subheading?: Maybe<PrismicStructuredTextType>
}

export type PrismicPageDataBodyFilterableEvents = PrismicSliceType & {
	items: Array<PrismicPageDataBodyFilterableEventsItem>
	id: Scalars["ID"]
	slice_type: Scalars["String"]
	slice_label?: Maybe<Scalars["String"]>
}

export type PrismicPageDataBodyFilterableEventsItem = {
	color?: Maybe<Scalars["String"]>
	event?: Maybe<PrismicLinkType>
}

export type PrismicPageDataBodyGradientText = PrismicSliceType & {
	primary: PrismicPageDataBodyGradientTextPrimary
	id: Scalars["ID"]
	slice_type: Scalars["String"]
	slice_label?: Maybe<Scalars["String"]>
}

export type PrismicPageDataBodyGradientTextPrimary = {
	text?: Maybe<PrismicStructuredTextType>
}

export type PrismicPageDataBodyImageCallToAction = PrismicSliceType & {
	primary: PrismicPageDataBodyImageCallToActionPrimary
	id: Scalars["ID"]
	slice_type: Scalars["String"]
	slice_label?: Maybe<Scalars["String"]>
}

export type PrismicPageDataBodyImageCallToActionPrimary = {
	button_link?: Maybe<PrismicLinkType>
	button_text?: Maybe<Scalars["String"]>
	color?: Maybe<Scalars["String"]>
	image?: Maybe<PrismicPageDataBodyImageCallToActionPrimaryImageImageType>
	text?: Maybe<PrismicStructuredTextType>
}

export type PrismicPageDataBodyImageCallToActionPrimaryImageImageType = {
	alt?: Maybe<Scalars["String"]>
	copyright?: Maybe<Scalars["String"]>
	dimensions?: Maybe<PrismicImageDimensionsType>
	/** A plain imgix URL with the URL and params applied. */
	url?: Maybe<Scalars["String"]>
	/** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
	fixed?: Maybe<ImgixFixed>
	/** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
	fluid?: Maybe<ImgixFluid>
	gatsbyImageData?: Maybe<Scalars["JSON"]>
	localFile?: Maybe<File>
}

export type PrismicPageDataBodyImageCallToActionPrimaryImageImageTypeUrlArgs = {
	imgixParams?: Maybe<ImgixParamsInput>
}

export type PrismicPageDataBodyImageCallToActionPrimaryImageImageTypeFixedArgs =
	{
		width?: Maybe<Scalars["Int"]>
		height?: Maybe<Scalars["Int"]>
		quality?: Maybe<Scalars["Int"]>
		imgixParams?: Maybe<ImgixParamsInput>
		placeholderImgixParams?: Maybe<ImgixParamsInput>
	}

export type PrismicPageDataBodyImageCallToActionPrimaryImageImageTypeFluidArgs =
	{
		imgixParams?: Maybe<ImgixParamsInput>
		maxWidth?: Maybe<Scalars["Int"]>
		maxHeight?: Maybe<Scalars["Int"]>
		srcSetBreakpoints?: Maybe<Array<Maybe<Scalars["Int"]>>>
		placeholderImgixParams?: Maybe<ImgixParamsInput>
	}

export type PrismicPageDataBodyImageCallToActionPrimaryImageImageTypeGatsbyImageDataArgs =
	{
		layout?: Maybe<GatsbyImageLayout>
		width?: Maybe<Scalars["Int"]>
		height?: Maybe<Scalars["Int"]>
		aspectRatio?: Maybe<Scalars["Float"]>
		outputPixelDensities?: Maybe<Array<Maybe<Scalars["Float"]>>>
		breakpoints?: Maybe<Array<Maybe<Scalars["Int"]>>>
		sizes?: Maybe<Scalars["String"]>
		backgroundColor?: Maybe<Scalars["String"]>
		imgixParams?: Maybe<ImgixParamsInput>
		placeholderImgixParams?: Maybe<ImgixParamsInput>
		placeholder?: Maybe<ImgixPlaceholder>
		widthTolerance?: Maybe<Scalars["Float"]>
		srcSetMinWidth?: Maybe<Scalars["Int"]>
		srcSetMaxWidth?: Maybe<Scalars["Int"]>
	}

export type PrismicPageDataBodyIntroduction = PrismicSliceType & {
	primary: PrismicPageDataBodyIntroductionPrimary
	id: Scalars["ID"]
	slice_type: Scalars["String"]
	slice_label?: Maybe<Scalars["String"]>
}

export type PrismicPageDataBodyIntroductionPrimary = {
	color?: Maybe<Scalars["String"]>
	heading?: Maybe<PrismicStructuredTextType>
	text?: Maybe<PrismicStructuredTextType>
}

export type PrismicPageDataBodyNewsletterForm = PrismicSliceType & {
	primary: PrismicPageDataBodyNewsletterFormPrimary
	id: Scalars["ID"]
	slice_type: Scalars["String"]
	slice_label?: Maybe<Scalars["String"]>
}

export type PrismicPageDataBodyNewsletterFormPrimary = {
	color?: Maybe<Scalars["String"]>
	heading?: Maybe<PrismicStructuredTextType>
	placeholder_text?: Maybe<Scalars["String"]>
}

export type PrismicPageDataBodyPrideCalendar = PrismicSliceType & {
	items: Array<PrismicPageDataBodyPrideCalendarItem>
	primary: PrismicPageDataBodyPrideCalendarPrimary
	id: Scalars["ID"]
	slice_type: Scalars["String"]
	slice_label?: Maybe<Scalars["String"]>
}

export type PrismicPageDataBodyPrideCalendarItem = {
	event_description?: Maybe<PrismicStructuredTextType>
	event_link?: Maybe<PrismicLinkType>
	event_title?: Maybe<PrismicStructuredTextType>
	image?: Maybe<PrismicPageDataBodyPrideCalendarItemsImageImageType>
}

export type PrismicPageDataBodyPrideCalendarItemsImageImageType = {
	alt?: Maybe<Scalars["String"]>
	copyright?: Maybe<Scalars["String"]>
	dimensions?: Maybe<PrismicImageDimensionsType>
	/** A plain imgix URL with the URL and params applied. */
	url?: Maybe<Scalars["String"]>
	/** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
	fixed?: Maybe<ImgixFixed>
	/** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
	fluid?: Maybe<ImgixFluid>
	gatsbyImageData?: Maybe<Scalars["JSON"]>
	localFile?: Maybe<File>
}

export type PrismicPageDataBodyPrideCalendarItemsImageImageTypeUrlArgs = {
	imgixParams?: Maybe<ImgixParamsInput>
}

export type PrismicPageDataBodyPrideCalendarItemsImageImageTypeFixedArgs = {
	width?: Maybe<Scalars["Int"]>
	height?: Maybe<Scalars["Int"]>
	quality?: Maybe<Scalars["Int"]>
	imgixParams?: Maybe<ImgixParamsInput>
	placeholderImgixParams?: Maybe<ImgixParamsInput>
}

export type PrismicPageDataBodyPrideCalendarItemsImageImageTypeFluidArgs = {
	imgixParams?: Maybe<ImgixParamsInput>
	maxWidth?: Maybe<Scalars["Int"]>
	maxHeight?: Maybe<Scalars["Int"]>
	srcSetBreakpoints?: Maybe<Array<Maybe<Scalars["Int"]>>>
	placeholderImgixParams?: Maybe<ImgixParamsInput>
}

export type PrismicPageDataBodyPrideCalendarItemsImageImageTypeGatsbyImageDataArgs =
	{
		layout?: Maybe<GatsbyImageLayout>
		width?: Maybe<Scalars["Int"]>
		height?: Maybe<Scalars["Int"]>
		aspectRatio?: Maybe<Scalars["Float"]>
		outputPixelDensities?: Maybe<Array<Maybe<Scalars["Float"]>>>
		breakpoints?: Maybe<Array<Maybe<Scalars["Int"]>>>
		sizes?: Maybe<Scalars["String"]>
		backgroundColor?: Maybe<Scalars["String"]>
		imgixParams?: Maybe<ImgixParamsInput>
		placeholderImgixParams?: Maybe<ImgixParamsInput>
		placeholder?: Maybe<ImgixPlaceholder>
		widthTolerance?: Maybe<Scalars["Float"]>
		srcSetMinWidth?: Maybe<Scalars["Int"]>
		srcSetMaxWidth?: Maybe<Scalars["Int"]>
	}

export type PrismicPageDataBodyPrideCalendarPrimary = {
	color?: Maybe<Scalars["String"]>
	text?: Maybe<PrismicStructuredTextType>
}

export type PrismicPageDataBodyRichText = PrismicSliceType & {
	primary: PrismicPageDataBodyRichTextPrimary
	id: Scalars["ID"]
	slice_type: Scalars["String"]
	slice_label?: Maybe<Scalars["String"]>
}

export type PrismicPageDataBodyRichTextPrimary = {
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
	primary: PrismicPageDataBodySponsorsPrimary
	id: Scalars["ID"]
	slice_type: Scalars["String"]
	slice_label?: Maybe<Scalars["String"]>
}

export type PrismicPageDataBodySponsorsPrimary = {
	heading?: Maybe<PrismicStructuredTextType>
	sponsor_list?: Maybe<PrismicLinkType>
	subheading?: Maybe<PrismicStructuredTextType>
}

export type PrismicPageDataBodyTextAndVideo = PrismicSliceType & {
	primary: PrismicPageDataBodyTextAndVideoPrimary
	id: Scalars["ID"]
	slice_type: Scalars["String"]
	slice_label?: Maybe<Scalars["String"]>
}

export type PrismicPageDataBodyTextAndVideoPrimary = {
	color?: Maybe<Scalars["String"]>
	text?: Maybe<PrismicStructuredTextType>
	thumbnail_side?: Maybe<Scalars["String"]>
	video_thumbnail?: Maybe<PrismicPageDataBodyTextAndVideoPrimaryVideoThumbnailImageType>
	video_url?: Maybe<Scalars["String"]>
}

export type PrismicPageDataBodyTextAndVideoPrimaryVideoThumbnailImageType = {
	alt?: Maybe<Scalars["String"]>
	copyright?: Maybe<Scalars["String"]>
	dimensions?: Maybe<PrismicImageDimensionsType>
	/** A plain imgix URL with the URL and params applied. */
	url?: Maybe<Scalars["String"]>
	/** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
	fixed?: Maybe<ImgixFixed>
	/** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
	fluid?: Maybe<ImgixFluid>
	gatsbyImageData?: Maybe<Scalars["JSON"]>
	localFile?: Maybe<File>
}

export type PrismicPageDataBodyTextAndVideoPrimaryVideoThumbnailImageTypeUrlArgs =
	{
		imgixParams?: Maybe<ImgixParamsInput>
	}

export type PrismicPageDataBodyTextAndVideoPrimaryVideoThumbnailImageTypeFixedArgs =
	{
		width?: Maybe<Scalars["Int"]>
		height?: Maybe<Scalars["Int"]>
		quality?: Maybe<Scalars["Int"]>
		imgixParams?: Maybe<ImgixParamsInput>
		placeholderImgixParams?: Maybe<ImgixParamsInput>
	}

export type PrismicPageDataBodyTextAndVideoPrimaryVideoThumbnailImageTypeFluidArgs =
	{
		imgixParams?: Maybe<ImgixParamsInput>
		maxWidth?: Maybe<Scalars["Int"]>
		maxHeight?: Maybe<Scalars["Int"]>
		srcSetBreakpoints?: Maybe<Array<Maybe<Scalars["Int"]>>>
		placeholderImgixParams?: Maybe<ImgixParamsInput>
	}

export type PrismicPageDataBodyTextAndVideoPrimaryVideoThumbnailImageTypeGatsbyImageDataArgs =
	{
		layout?: Maybe<GatsbyImageLayout>
		width?: Maybe<Scalars["Int"]>
		height?: Maybe<Scalars["Int"]>
		aspectRatio?: Maybe<Scalars["Float"]>
		outputPixelDensities?: Maybe<Array<Maybe<Scalars["Float"]>>>
		breakpoints?: Maybe<Array<Maybe<Scalars["Int"]>>>
		sizes?: Maybe<Scalars["String"]>
		backgroundColor?: Maybe<Scalars["String"]>
		imgixParams?: Maybe<ImgixParamsInput>
		placeholderImgixParams?: Maybe<ImgixParamsInput>
		placeholder?: Maybe<ImgixPlaceholder>
		widthTolerance?: Maybe<Scalars["Float"]>
		srcSetMinWidth?: Maybe<Scalars["Int"]>
		srcSetMaxWidth?: Maybe<Scalars["Int"]>
	}

export type PrismicPageDataBodyTwoColumnText = PrismicSliceType & {
	primary: PrismicPageDataBodyTwoColumnTextPrimary
	id: Scalars["ID"]
	slice_type: Scalars["String"]
	slice_label?: Maybe<Scalars["String"]>
}

export type PrismicPageDataBodyTwoColumnTextPrimary = {
	button_link?: Maybe<PrismicLinkType>
	button_side?: Maybe<Scalars["String"]>
	button_text?: Maybe<Scalars["String"]>
	color?: Maybe<Scalars["String"]>
	left_text?: Maybe<PrismicStructuredTextType>
	right_text?: Maybe<PrismicStructuredTextType>
}

export type PrismicPageDataBodyVideo = PrismicSliceType & {
	primary: PrismicPageDataBodyVideoPrimary
	id: Scalars["ID"]
	slice_type: Scalars["String"]
	slice_label?: Maybe<Scalars["String"]>
}

export type PrismicPageDataBodyVideoGallery = PrismicSliceType & {
	primary: PrismicPageDataBodyVideoGalleryPrimary
	id: Scalars["ID"]
	slice_type: Scalars["String"]
	slice_label?: Maybe<Scalars["String"]>
}

export type PrismicPageDataBodyVideoGalleryPrimary = {
	color?: Maybe<Scalars["String"]>
	text?: Maybe<PrismicStructuredTextType>
	video_submission_type?: Maybe<PrismicLinkType>
}

export type PrismicPageDataBodyVideoHero = PrismicSliceType & {
	primary: PrismicPageDataBodyVideoHeroPrimary
	id: Scalars["ID"]
	slice_type: Scalars["String"]
	slice_label?: Maybe<Scalars["String"]>
}

export type PrismicPageDataBodyVideoHeroPrimary = {
	text?: Maybe<PrismicStructuredTextType>
	video_thumbnail?: Maybe<PrismicPageDataBodyVideoHeroPrimaryVideoThumbnailImageType>
	video_url?: Maybe<Scalars["String"]>
}

export type PrismicPageDataBodyVideoHeroPrimaryVideoThumbnailImageType = {
	alt?: Maybe<Scalars["String"]>
	copyright?: Maybe<Scalars["String"]>
	dimensions?: Maybe<PrismicImageDimensionsType>
	/** A plain imgix URL with the URL and params applied. */
	url?: Maybe<Scalars["String"]>
	/** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
	fixed?: Maybe<ImgixFixed>
	/** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
	fluid?: Maybe<ImgixFluid>
	gatsbyImageData?: Maybe<Scalars["JSON"]>
	localFile?: Maybe<File>
}

export type PrismicPageDataBodyVideoHeroPrimaryVideoThumbnailImageTypeUrlArgs =
	{
		imgixParams?: Maybe<ImgixParamsInput>
	}

export type PrismicPageDataBodyVideoHeroPrimaryVideoThumbnailImageTypeFixedArgs =
	{
		width?: Maybe<Scalars["Int"]>
		height?: Maybe<Scalars["Int"]>
		quality?: Maybe<Scalars["Int"]>
		imgixParams?: Maybe<ImgixParamsInput>
		placeholderImgixParams?: Maybe<ImgixParamsInput>
	}

export type PrismicPageDataBodyVideoHeroPrimaryVideoThumbnailImageTypeFluidArgs =
	{
		imgixParams?: Maybe<ImgixParamsInput>
		maxWidth?: Maybe<Scalars["Int"]>
		maxHeight?: Maybe<Scalars["Int"]>
		srcSetBreakpoints?: Maybe<Array<Maybe<Scalars["Int"]>>>
		placeholderImgixParams?: Maybe<ImgixParamsInput>
	}

export type PrismicPageDataBodyVideoHeroPrimaryVideoThumbnailImageTypeGatsbyImageDataArgs =
	{
		layout?: Maybe<GatsbyImageLayout>
		width?: Maybe<Scalars["Int"]>
		height?: Maybe<Scalars["Int"]>
		aspectRatio?: Maybe<Scalars["Float"]>
		outputPixelDensities?: Maybe<Array<Maybe<Scalars["Float"]>>>
		breakpoints?: Maybe<Array<Maybe<Scalars["Int"]>>>
		sizes?: Maybe<Scalars["String"]>
		backgroundColor?: Maybe<Scalars["String"]>
		imgixParams?: Maybe<ImgixParamsInput>
		placeholderImgixParams?: Maybe<ImgixParamsInput>
		placeholder?: Maybe<ImgixPlaceholder>
		widthTolerance?: Maybe<Scalars["Float"]>
		srcSetMinWidth?: Maybe<Scalars["Int"]>
		srcSetMaxWidth?: Maybe<Scalars["Int"]>
	}

export type PrismicPageDataBodyVideoPrimary = {
	thumbnail?: Maybe<PrismicPageDataBodyVideoPrimaryThumbnailImageType>
	video_url?: Maybe<Scalars["String"]>
}

export type PrismicPageDataBodyVideoPrimaryThumbnailImageType = {
	alt?: Maybe<Scalars["String"]>
	copyright?: Maybe<Scalars["String"]>
	dimensions?: Maybe<PrismicImageDimensionsType>
	/** A plain imgix URL with the URL and params applied. */
	url?: Maybe<Scalars["String"]>
	/** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
	fixed?: Maybe<ImgixFixed>
	/** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
	fluid?: Maybe<ImgixFluid>
	gatsbyImageData?: Maybe<Scalars["JSON"]>
	localFile?: Maybe<File>
}

export type PrismicPageDataBodyVideoPrimaryThumbnailImageTypeUrlArgs = {
	imgixParams?: Maybe<ImgixParamsInput>
}

export type PrismicPageDataBodyVideoPrimaryThumbnailImageTypeFixedArgs = {
	width?: Maybe<Scalars["Int"]>
	height?: Maybe<Scalars["Int"]>
	quality?: Maybe<Scalars["Int"]>
	imgixParams?: Maybe<ImgixParamsInput>
	placeholderImgixParams?: Maybe<ImgixParamsInput>
}

export type PrismicPageDataBodyVideoPrimaryThumbnailImageTypeFluidArgs = {
	imgixParams?: Maybe<ImgixParamsInput>
	maxWidth?: Maybe<Scalars["Int"]>
	maxHeight?: Maybe<Scalars["Int"]>
	srcSetBreakpoints?: Maybe<Array<Maybe<Scalars["Int"]>>>
	placeholderImgixParams?: Maybe<ImgixParamsInput>
}

export type PrismicPageDataBodyVideoPrimaryThumbnailImageTypeGatsbyImageDataArgs =
	{
		layout?: Maybe<GatsbyImageLayout>
		width?: Maybe<Scalars["Int"]>
		height?: Maybe<Scalars["Int"]>
		aspectRatio?: Maybe<Scalars["Float"]>
		outputPixelDensities?: Maybe<Array<Maybe<Scalars["Float"]>>>
		breakpoints?: Maybe<Array<Maybe<Scalars["Int"]>>>
		sizes?: Maybe<Scalars["String"]>
		backgroundColor?: Maybe<Scalars["String"]>
		imgixParams?: Maybe<ImgixParamsInput>
		placeholderImgixParams?: Maybe<ImgixParamsInput>
		placeholder?: Maybe<ImgixPlaceholder>
		widthTolerance?: Maybe<Scalars["Float"]>
		srcSetMinWidth?: Maybe<Scalars["Int"]>
		srcSetMaxWidth?: Maybe<Scalars["Int"]>
	}

export type PrismicPageDataType = {
	body: Array<PrismicPageDataBodySlicesType>
	meta_description?: Maybe<Scalars["String"]>
	meta_title?: Maybe<Scalars["String"]>
	redirect_is_permanent?: Maybe<Scalars["Boolean"]>
	redirect_to?: Maybe<PrismicLinkType>
	title?: Maybe<PrismicStructuredTextType>
}

export type PrismicPageDataTypeFilterInput = {
	meta_description?: Maybe<StringQueryOperatorInput>
	meta_title?: Maybe<StringQueryOperatorInput>
	redirect_is_permanent?: Maybe<BooleanQueryOperatorInput>
	redirect_to?: Maybe<PrismicLinkTypeFilterInput>
	title?: Maybe<PrismicStructuredTextTypeFilterInput>
}

export type PrismicPageEdge = {
	next?: Maybe<PrismicPage>
	node: PrismicPage
	previous?: Maybe<PrismicPage>
}

export enum PrismicPageFieldsEnum {
	Uid = "uid",
	DataMetaDescription = "data___meta_description",
	DataMetaTitle = "data___meta_title",
	DataRedirectIsPermanent = "data___redirect_is_permanent",
	DataRedirectToLinkType = "data___redirect_to___link_type",
	DataRedirectToIsBroken = "data___redirect_to___isBroken",
	DataRedirectToUrl = "data___redirect_to___url",
	DataRedirectToTarget = "data___redirect_to___target",
	DataRedirectToSize = "data___redirect_to___size",
	DataRedirectToId = "data___redirect_to___id",
	DataRedirectToType = "data___redirect_to___type",
	DataRedirectToTags = "data___redirect_to___tags",
	DataRedirectToLang = "data___redirect_to___lang",
	DataRedirectToSlug = "data___redirect_to___slug",
	DataRedirectToUid = "data___redirect_to___uid",
	DataRedirectToLocalFileSourceInstanceName = "data___redirect_to___localFile___sourceInstanceName",
	DataRedirectToLocalFileAbsolutePath = "data___redirect_to___localFile___absolutePath",
	DataRedirectToLocalFileRelativePath = "data___redirect_to___localFile___relativePath",
	DataRedirectToLocalFileExtension = "data___redirect_to___localFile___extension",
	DataRedirectToLocalFileSize = "data___redirect_to___localFile___size",
	DataRedirectToLocalFilePrettySize = "data___redirect_to___localFile___prettySize",
	DataRedirectToLocalFileModifiedTime = "data___redirect_to___localFile___modifiedTime",
	DataRedirectToLocalFileAccessTime = "data___redirect_to___localFile___accessTime",
	DataRedirectToLocalFileChangeTime = "data___redirect_to___localFile___changeTime",
	DataRedirectToLocalFileBirthTime = "data___redirect_to___localFile___birthTime",
	DataRedirectToLocalFileRoot = "data___redirect_to___localFile___root",
	DataRedirectToLocalFileDir = "data___redirect_to___localFile___dir",
	DataRedirectToLocalFileBase = "data___redirect_to___localFile___base",
	DataRedirectToLocalFileExt = "data___redirect_to___localFile___ext",
	DataRedirectToLocalFileName = "data___redirect_to___localFile___name",
	DataRedirectToLocalFileRelativeDirectory = "data___redirect_to___localFile___relativeDirectory",
	DataRedirectToLocalFileDev = "data___redirect_to___localFile___dev",
	DataRedirectToLocalFileMode = "data___redirect_to___localFile___mode",
	DataRedirectToLocalFileNlink = "data___redirect_to___localFile___nlink",
	DataRedirectToLocalFileUid = "data___redirect_to___localFile___uid",
	DataRedirectToLocalFileGid = "data___redirect_to___localFile___gid",
	DataRedirectToLocalFileRdev = "data___redirect_to___localFile___rdev",
	DataRedirectToLocalFileIno = "data___redirect_to___localFile___ino",
	DataRedirectToLocalFileAtimeMs = "data___redirect_to___localFile___atimeMs",
	DataRedirectToLocalFileMtimeMs = "data___redirect_to___localFile___mtimeMs",
	DataRedirectToLocalFileCtimeMs = "data___redirect_to___localFile___ctimeMs",
	DataRedirectToLocalFileAtime = "data___redirect_to___localFile___atime",
	DataRedirectToLocalFileMtime = "data___redirect_to___localFile___mtime",
	DataRedirectToLocalFileCtime = "data___redirect_to___localFile___ctime",
	DataRedirectToLocalFileBirthtime = "data___redirect_to___localFile___birthtime",
	DataRedirectToLocalFileBirthtimeMs = "data___redirect_to___localFile___birthtimeMs",
	DataRedirectToLocalFileId = "data___redirect_to___localFile___id",
	DataRedirectToLocalFileChildren = "data___redirect_to___localFile___children",
	DataRedirectToRaw = "data___redirect_to___raw",
	DataTitleText = "data___title___text",
	DataTitleHtml = "data___title___html",
	DataTitleRichText = "data___title___richText",
	DataTitleRaw = "data___title___raw",
	DataRaw = "dataRaw",
	PrismicId = "prismicId",
	AlternateLanguages = "alternate_languages",
	AlternateLanguagesId = "alternate_languages___id",
	AlternateLanguagesUid = "alternate_languages___uid",
	AlternateLanguagesLang = "alternate_languages___lang",
	AlternateLanguagesType = "alternate_languages___type",
	AlternateLanguagesRaw = "alternate_languages___raw",
	FirstPublicationDate = "first_publication_date",
	Href = "href",
	Lang = "lang",
	LastPublicationDate = "last_publication_date",
	Tags = "tags",
	Type = "type",
	Url = "url",
	Previewable = "_previewable",
	Id = "id",
	ParentId = "parent___id",
	ParentParentId = "parent___parent___id",
	ParentParentParentId = "parent___parent___parent___id",
	ParentParentParentChildren = "parent___parent___parent___children",
	ParentParentChildren = "parent___parent___children",
	ParentParentChildrenId = "parent___parent___children___id",
	ParentParentChildrenChildren = "parent___parent___children___children",
	ParentParentInternalContent = "parent___parent___internal___content",
	ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
	ParentParentInternalDescription = "parent___parent___internal___description",
	ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
	ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
	ParentParentInternalMediaType = "parent___parent___internal___mediaType",
	ParentParentInternalOwner = "parent___parent___internal___owner",
	ParentParentInternalType = "parent___parent___internal___type",
	ParentParentInternalContentFilePath = "parent___parent___internal___contentFilePath",
	ParentChildren = "parent___children",
	ParentChildrenId = "parent___children___id",
	ParentChildrenParentId = "parent___children___parent___id",
	ParentChildrenParentChildren = "parent___children___parent___children",
	ParentChildrenChildren = "parent___children___children",
	ParentChildrenChildrenId = "parent___children___children___id",
	ParentChildrenChildrenChildren = "parent___children___children___children",
	ParentChildrenInternalContent = "parent___children___internal___content",
	ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
	ParentChildrenInternalDescription = "parent___children___internal___description",
	ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
	ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
	ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
	ParentChildrenInternalOwner = "parent___children___internal___owner",
	ParentChildrenInternalType = "parent___children___internal___type",
	ParentChildrenInternalContentFilePath = "parent___children___internal___contentFilePath",
	ParentInternalContent = "parent___internal___content",
	ParentInternalContentDigest = "parent___internal___contentDigest",
	ParentInternalDescription = "parent___internal___description",
	ParentInternalFieldOwners = "parent___internal___fieldOwners",
	ParentInternalIgnoreType = "parent___internal___ignoreType",
	ParentInternalMediaType = "parent___internal___mediaType",
	ParentInternalOwner = "parent___internal___owner",
	ParentInternalType = "parent___internal___type",
	ParentInternalContentFilePath = "parent___internal___contentFilePath",
	Children = "children",
	ChildrenId = "children___id",
	ChildrenParentId = "children___parent___id",
	ChildrenParentParentId = "children___parent___parent___id",
	ChildrenParentParentChildren = "children___parent___parent___children",
	ChildrenParentChildren = "children___parent___children",
	ChildrenParentChildrenId = "children___parent___children___id",
	ChildrenParentChildrenChildren = "children___parent___children___children",
	ChildrenParentInternalContent = "children___parent___internal___content",
	ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
	ChildrenParentInternalDescription = "children___parent___internal___description",
	ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
	ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
	ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
	ChildrenParentInternalOwner = "children___parent___internal___owner",
	ChildrenParentInternalType = "children___parent___internal___type",
	ChildrenParentInternalContentFilePath = "children___parent___internal___contentFilePath",
	ChildrenChildren = "children___children",
	ChildrenChildrenId = "children___children___id",
	ChildrenChildrenParentId = "children___children___parent___id",
	ChildrenChildrenParentChildren = "children___children___parent___children",
	ChildrenChildrenChildren = "children___children___children",
	ChildrenChildrenChildrenId = "children___children___children___id",
	ChildrenChildrenChildrenChildren = "children___children___children___children",
	ChildrenChildrenInternalContent = "children___children___internal___content",
	ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
	ChildrenChildrenInternalDescription = "children___children___internal___description",
	ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
	ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
	ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
	ChildrenChildrenInternalOwner = "children___children___internal___owner",
	ChildrenChildrenInternalType = "children___children___internal___type",
	ChildrenChildrenInternalContentFilePath = "children___children___internal___contentFilePath",
	ChildrenInternalContent = "children___internal___content",
	ChildrenInternalContentDigest = "children___internal___contentDigest",
	ChildrenInternalDescription = "children___internal___description",
	ChildrenInternalFieldOwners = "children___internal___fieldOwners",
	ChildrenInternalIgnoreType = "children___internal___ignoreType",
	ChildrenInternalMediaType = "children___internal___mediaType",
	ChildrenInternalOwner = "children___internal___owner",
	ChildrenInternalType = "children___internal___type",
	ChildrenInternalContentFilePath = "children___internal___contentFilePath",
	InternalContent = "internal___content",
	InternalContentDigest = "internal___contentDigest",
	InternalDescription = "internal___description",
	InternalFieldOwners = "internal___fieldOwners",
	InternalIgnoreType = "internal___ignoreType",
	InternalMediaType = "internal___mediaType",
	InternalOwner = "internal___owner",
	InternalType = "internal___type",
	InternalContentFilePath = "internal___contentFilePath",
}

export type PrismicPageFilterInput = {
	uid?: Maybe<StringQueryOperatorInput>
	data?: Maybe<PrismicPageDataTypeFilterInput>
	dataRaw?: Maybe<JsonQueryOperatorInput>
	prismicId?: Maybe<IdQueryOperatorInput>
	alternate_languages?: Maybe<PrismicAlternateLanguageTypeFilterListInput>
	first_publication_date?: Maybe<DateQueryOperatorInput>
	href?: Maybe<StringQueryOperatorInput>
	lang?: Maybe<StringQueryOperatorInput>
	last_publication_date?: Maybe<DateQueryOperatorInput>
	tags?: Maybe<StringQueryOperatorInput>
	type?: Maybe<StringQueryOperatorInput>
	url?: Maybe<StringQueryOperatorInput>
	_previewable?: Maybe<IdQueryOperatorInput>
	id?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	children?: Maybe<NodeFilterListInput>
	internal?: Maybe<InternalFilterInput>
}

export type PrismicPageGroupConnection = {
	totalCount: Scalars["Int"]
	edges: Array<PrismicPageEdge>
	nodes: Array<PrismicPage>
	pageInfo: PageInfo
	distinct: Array<Scalars["String"]>
	max?: Maybe<Scalars["Float"]>
	min?: Maybe<Scalars["Float"]>
	sum?: Maybe<Scalars["Float"]>
	group: Array<PrismicPageGroupConnection>
	field: Scalars["String"]
	fieldValue?: Maybe<Scalars["String"]>
}

export type PrismicPageGroupConnectionDistinctArgs = {
	field: PrismicPageFieldsEnum
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

export type PrismicPageGroupConnectionGroupArgs = {
	skip?: Maybe<Scalars["Int"]>
	limit?: Maybe<Scalars["Int"]>
	field: PrismicPageFieldsEnum
}

export type PrismicPageSortInput = {
	fields?: Maybe<Array<Maybe<PrismicPageFieldsEnum>>>
	order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type PrismicSettings = Node & {
	data: PrismicSettingsDataType
	dataRaw: Scalars["JSON"]
	prismicId: Scalars["ID"]
	alternate_languages: Array<PrismicAlternateLanguageType>
	first_publication_date: Scalars["Date"]
	href: Scalars["String"]
	lang: Scalars["String"]
	last_publication_date: Scalars["Date"]
	tags: Array<Scalars["String"]>
	type: Scalars["String"]
	url?: Maybe<Scalars["String"]>
	_previewable: Scalars["ID"]
	id: Scalars["ID"]
	parent?: Maybe<Node>
	children: Array<Node>
	internal: Internal
}

export type PrismicSettingsFirst_Publication_DateArgs = {
	formatString?: Maybe<Scalars["String"]>
	fromNow?: Maybe<Scalars["Boolean"]>
	difference?: Maybe<Scalars["String"]>
	locale?: Maybe<Scalars["String"]>
}

export type PrismicSettingsLast_Publication_DateArgs = {
	formatString?: Maybe<Scalars["String"]>
	fromNow?: Maybe<Scalars["Boolean"]>
	difference?: Maybe<Scalars["String"]>
	locale?: Maybe<Scalars["String"]>
}

export type PrismicSettingsConnection = {
	totalCount: Scalars["Int"]
	edges: Array<PrismicSettingsEdge>
	nodes: Array<PrismicSettings>
	pageInfo: PageInfo
	distinct: Array<Scalars["String"]>
	max?: Maybe<Scalars["Float"]>
	min?: Maybe<Scalars["Float"]>
	sum?: Maybe<Scalars["Float"]>
	group: Array<PrismicSettingsGroupConnection>
}

export type PrismicSettingsConnectionDistinctArgs = {
	field: PrismicSettingsFieldsEnum
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

export type PrismicSettingsConnectionGroupArgs = {
	skip?: Maybe<Scalars["Int"]>
	limit?: Maybe<Scalars["Int"]>
	field: PrismicSettingsFieldsEnum
}

export type PrismicSettingsDataOpenGraphImageImageType = {
	alt?: Maybe<Scalars["String"]>
	copyright?: Maybe<Scalars["String"]>
	dimensions?: Maybe<PrismicImageDimensionsType>
	/** A plain imgix URL with the URL and params applied. */
	url?: Maybe<Scalars["String"]>
	/** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
	fixed?: Maybe<ImgixFixed>
	/** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
	fluid?: Maybe<ImgixFluid>
	gatsbyImageData?: Maybe<Scalars["JSON"]>
	localFile?: Maybe<File>
}

export type PrismicSettingsDataOpenGraphImageImageTypeUrlArgs = {
	imgixParams?: Maybe<ImgixParamsInput>
}

export type PrismicSettingsDataOpenGraphImageImageTypeFixedArgs = {
	width?: Maybe<Scalars["Int"]>
	height?: Maybe<Scalars["Int"]>
	quality?: Maybe<Scalars["Int"]>
	imgixParams?: Maybe<ImgixParamsInput>
	placeholderImgixParams?: Maybe<ImgixParamsInput>
}

export type PrismicSettingsDataOpenGraphImageImageTypeFluidArgs = {
	imgixParams?: Maybe<ImgixParamsInput>
	maxWidth?: Maybe<Scalars["Int"]>
	maxHeight?: Maybe<Scalars["Int"]>
	srcSetBreakpoints?: Maybe<Array<Maybe<Scalars["Int"]>>>
	placeholderImgixParams?: Maybe<ImgixParamsInput>
}

export type PrismicSettingsDataOpenGraphImageImageTypeGatsbyImageDataArgs = {
	layout?: Maybe<GatsbyImageLayout>
	width?: Maybe<Scalars["Int"]>
	height?: Maybe<Scalars["Int"]>
	aspectRatio?: Maybe<Scalars["Float"]>
	outputPixelDensities?: Maybe<Array<Maybe<Scalars["Float"]>>>
	breakpoints?: Maybe<Array<Maybe<Scalars["Int"]>>>
	sizes?: Maybe<Scalars["String"]>
	backgroundColor?: Maybe<Scalars["String"]>
	imgixParams?: Maybe<ImgixParamsInput>
	placeholderImgixParams?: Maybe<ImgixParamsInput>
	placeholder?: Maybe<ImgixPlaceholder>
	widthTolerance?: Maybe<Scalars["Float"]>
	srcSetMinWidth?: Maybe<Scalars["Int"]>
	srcSetMaxWidth?: Maybe<Scalars["Int"]>
}

export type PrismicSettingsDataOpenGraphImageImageTypeFilterInput = {
	alt?: Maybe<StringQueryOperatorInput>
	copyright?: Maybe<StringQueryOperatorInput>
	dimensions?: Maybe<PrismicImageDimensionsTypeFilterInput>
	url?: Maybe<StringQueryOperatorInput>
	fixed?: Maybe<ImgixFixedFilterInput>
	fluid?: Maybe<ImgixFluidFilterInput>
	gatsbyImageData?: Maybe<JsonQueryOperatorInput>
	localFile?: Maybe<FileFilterInput>
}

export type PrismicSettingsDataRedirects = {
	from_path?: Maybe<Scalars["String"]>
	is_permanent?: Maybe<Scalars["Boolean"]>
	to_path?: Maybe<Scalars["String"]>
}

export type PrismicSettingsDataRedirectsFilterInput = {
	from_path?: Maybe<StringQueryOperatorInput>
	is_permanent?: Maybe<BooleanQueryOperatorInput>
	to_path?: Maybe<StringQueryOperatorInput>
}

export type PrismicSettingsDataRedirectsFilterListInput = {
	elemMatch?: Maybe<PrismicSettingsDataRedirectsFilterInput>
}

export type PrismicSettingsDataTwitterCardImageImageType = {
	alt?: Maybe<Scalars["String"]>
	copyright?: Maybe<Scalars["String"]>
	dimensions?: Maybe<PrismicImageDimensionsType>
	/** A plain imgix URL with the URL and params applied. */
	url?: Maybe<Scalars["String"]>
	/** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
	fixed?: Maybe<ImgixFixed>
	/** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
	fluid?: Maybe<ImgixFluid>
	gatsbyImageData?: Maybe<Scalars["JSON"]>
	localFile?: Maybe<File>
}

export type PrismicSettingsDataTwitterCardImageImageTypeUrlArgs = {
	imgixParams?: Maybe<ImgixParamsInput>
}

export type PrismicSettingsDataTwitterCardImageImageTypeFixedArgs = {
	width?: Maybe<Scalars["Int"]>
	height?: Maybe<Scalars["Int"]>
	quality?: Maybe<Scalars["Int"]>
	imgixParams?: Maybe<ImgixParamsInput>
	placeholderImgixParams?: Maybe<ImgixParamsInput>
}

export type PrismicSettingsDataTwitterCardImageImageTypeFluidArgs = {
	imgixParams?: Maybe<ImgixParamsInput>
	maxWidth?: Maybe<Scalars["Int"]>
	maxHeight?: Maybe<Scalars["Int"]>
	srcSetBreakpoints?: Maybe<Array<Maybe<Scalars["Int"]>>>
	placeholderImgixParams?: Maybe<ImgixParamsInput>
}

export type PrismicSettingsDataTwitterCardImageImageTypeGatsbyImageDataArgs = {
	layout?: Maybe<GatsbyImageLayout>
	width?: Maybe<Scalars["Int"]>
	height?: Maybe<Scalars["Int"]>
	aspectRatio?: Maybe<Scalars["Float"]>
	outputPixelDensities?: Maybe<Array<Maybe<Scalars["Float"]>>>
	breakpoints?: Maybe<Array<Maybe<Scalars["Int"]>>>
	sizes?: Maybe<Scalars["String"]>
	backgroundColor?: Maybe<Scalars["String"]>
	imgixParams?: Maybe<ImgixParamsInput>
	placeholderImgixParams?: Maybe<ImgixParamsInput>
	placeholder?: Maybe<ImgixPlaceholder>
	widthTolerance?: Maybe<Scalars["Float"]>
	srcSetMinWidth?: Maybe<Scalars["Int"]>
	srcSetMaxWidth?: Maybe<Scalars["Int"]>
}

export type PrismicSettingsDataTwitterCardImageImageTypeFilterInput = {
	alt?: Maybe<StringQueryOperatorInput>
	copyright?: Maybe<StringQueryOperatorInput>
	dimensions?: Maybe<PrismicImageDimensionsTypeFilterInput>
	url?: Maybe<StringQueryOperatorInput>
	fixed?: Maybe<ImgixFixedFilterInput>
	fluid?: Maybe<ImgixFluidFilterInput>
	gatsbyImageData?: Maybe<JsonQueryOperatorInput>
	localFile?: Maybe<FileFilterInput>
}

export type PrismicSettingsDataType = {
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
	enabled?: Maybe<BooleanQueryOperatorInput>
	facebook_url?: Maybe<StringQueryOperatorInput>
	footer_logo_url?: Maybe<StringQueryOperatorInput>
	instagram_url?: Maybe<StringQueryOperatorInput>
	open_graph_image?: Maybe<PrismicSettingsDataOpenGraphImageImageTypeFilterInput>
	redirects?: Maybe<PrismicSettingsDataRedirectsFilterListInput>
	site_copyright?: Maybe<PrismicStructuredTextTypeFilterInput>
	site_description?: Maybe<PrismicStructuredTextTypeFilterInput>
	site_name?: Maybe<PrismicStructuredTextTypeFilterInput>
	text?: Maybe<PrismicStructuredTextTypeFilterInput>
	title?: Maybe<PrismicStructuredTextTypeFilterInput>
	twitter_card_image?: Maybe<PrismicSettingsDataTwitterCardImageImageTypeFilterInput>
	twitter_url?: Maybe<StringQueryOperatorInput>
	twitter_username?: Maybe<StringQueryOperatorInput>
	youtube_url?: Maybe<StringQueryOperatorInput>
}

export type PrismicSettingsEdge = {
	next?: Maybe<PrismicSettings>
	node: PrismicSettings
	previous?: Maybe<PrismicSettings>
}

export enum PrismicSettingsFieldsEnum {
	DataEnabled = "data___enabled",
	DataFacebookUrl = "data___facebook_url",
	DataFooterLogoUrl = "data___footer_logo_url",
	DataInstagramUrl = "data___instagram_url",
	DataOpenGraphImageAlt = "data___open_graph_image___alt",
	DataOpenGraphImageCopyright = "data___open_graph_image___copyright",
	DataOpenGraphImageDimensionsWidth = "data___open_graph_image___dimensions___width",
	DataOpenGraphImageDimensionsHeight = "data___open_graph_image___dimensions___height",
	DataOpenGraphImageUrl = "data___open_graph_image___url",
	DataOpenGraphImageFixedBase64 = "data___open_graph_image___fixed___base64",
	DataOpenGraphImageFixedSrc = "data___open_graph_image___fixed___src",
	DataOpenGraphImageFixedSrcSet = "data___open_graph_image___fixed___srcSet",
	DataOpenGraphImageFixedSrcWebp = "data___open_graph_image___fixed___srcWebp",
	DataOpenGraphImageFixedSrcSetWebp = "data___open_graph_image___fixed___srcSetWebp",
	DataOpenGraphImageFixedSizes = "data___open_graph_image___fixed___sizes",
	DataOpenGraphImageFixedWidth = "data___open_graph_image___fixed___width",
	DataOpenGraphImageFixedHeight = "data___open_graph_image___fixed___height",
	DataOpenGraphImageFluidBase64 = "data___open_graph_image___fluid___base64",
	DataOpenGraphImageFluidSrc = "data___open_graph_image___fluid___src",
	DataOpenGraphImageFluidSrcSet = "data___open_graph_image___fluid___srcSet",
	DataOpenGraphImageFluidSrcWebp = "data___open_graph_image___fluid___srcWebp",
	DataOpenGraphImageFluidSrcSetWebp = "data___open_graph_image___fluid___srcSetWebp",
	DataOpenGraphImageFluidSizes = "data___open_graph_image___fluid___sizes",
	DataOpenGraphImageFluidAspectRatio = "data___open_graph_image___fluid___aspectRatio",
	DataOpenGraphImageGatsbyImageData = "data___open_graph_image___gatsbyImageData",
	DataOpenGraphImageLocalFileSourceInstanceName = "data___open_graph_image___localFile___sourceInstanceName",
	DataOpenGraphImageLocalFileAbsolutePath = "data___open_graph_image___localFile___absolutePath",
	DataOpenGraphImageLocalFileRelativePath = "data___open_graph_image___localFile___relativePath",
	DataOpenGraphImageLocalFileExtension = "data___open_graph_image___localFile___extension",
	DataOpenGraphImageLocalFileSize = "data___open_graph_image___localFile___size",
	DataOpenGraphImageLocalFilePrettySize = "data___open_graph_image___localFile___prettySize",
	DataOpenGraphImageLocalFileModifiedTime = "data___open_graph_image___localFile___modifiedTime",
	DataOpenGraphImageLocalFileAccessTime = "data___open_graph_image___localFile___accessTime",
	DataOpenGraphImageLocalFileChangeTime = "data___open_graph_image___localFile___changeTime",
	DataOpenGraphImageLocalFileBirthTime = "data___open_graph_image___localFile___birthTime",
	DataOpenGraphImageLocalFileRoot = "data___open_graph_image___localFile___root",
	DataOpenGraphImageLocalFileDir = "data___open_graph_image___localFile___dir",
	DataOpenGraphImageLocalFileBase = "data___open_graph_image___localFile___base",
	DataOpenGraphImageLocalFileExt = "data___open_graph_image___localFile___ext",
	DataOpenGraphImageLocalFileName = "data___open_graph_image___localFile___name",
	DataOpenGraphImageLocalFileRelativeDirectory = "data___open_graph_image___localFile___relativeDirectory",
	DataOpenGraphImageLocalFileDev = "data___open_graph_image___localFile___dev",
	DataOpenGraphImageLocalFileMode = "data___open_graph_image___localFile___mode",
	DataOpenGraphImageLocalFileNlink = "data___open_graph_image___localFile___nlink",
	DataOpenGraphImageLocalFileUid = "data___open_graph_image___localFile___uid",
	DataOpenGraphImageLocalFileGid = "data___open_graph_image___localFile___gid",
	DataOpenGraphImageLocalFileRdev = "data___open_graph_image___localFile___rdev",
	DataOpenGraphImageLocalFileIno = "data___open_graph_image___localFile___ino",
	DataOpenGraphImageLocalFileAtimeMs = "data___open_graph_image___localFile___atimeMs",
	DataOpenGraphImageLocalFileMtimeMs = "data___open_graph_image___localFile___mtimeMs",
	DataOpenGraphImageLocalFileCtimeMs = "data___open_graph_image___localFile___ctimeMs",
	DataOpenGraphImageLocalFileAtime = "data___open_graph_image___localFile___atime",
	DataOpenGraphImageLocalFileMtime = "data___open_graph_image___localFile___mtime",
	DataOpenGraphImageLocalFileCtime = "data___open_graph_image___localFile___ctime",
	DataOpenGraphImageLocalFileBirthtime = "data___open_graph_image___localFile___birthtime",
	DataOpenGraphImageLocalFileBirthtimeMs = "data___open_graph_image___localFile___birthtimeMs",
	DataOpenGraphImageLocalFileId = "data___open_graph_image___localFile___id",
	DataOpenGraphImageLocalFileChildren = "data___open_graph_image___localFile___children",
	DataRedirects = "data___redirects",
	DataRedirectsFromPath = "data___redirects___from_path",
	DataRedirectsIsPermanent = "data___redirects___is_permanent",
	DataRedirectsToPath = "data___redirects___to_path",
	DataSiteCopyrightText = "data___site_copyright___text",
	DataSiteCopyrightHtml = "data___site_copyright___html",
	DataSiteCopyrightRichText = "data___site_copyright___richText",
	DataSiteCopyrightRaw = "data___site_copyright___raw",
	DataSiteDescriptionText = "data___site_description___text",
	DataSiteDescriptionHtml = "data___site_description___html",
	DataSiteDescriptionRichText = "data___site_description___richText",
	DataSiteDescriptionRaw = "data___site_description___raw",
	DataSiteNameText = "data___site_name___text",
	DataSiteNameHtml = "data___site_name___html",
	DataSiteNameRichText = "data___site_name___richText",
	DataSiteNameRaw = "data___site_name___raw",
	DataTextText = "data___text___text",
	DataTextHtml = "data___text___html",
	DataTextRichText = "data___text___richText",
	DataTextRaw = "data___text___raw",
	DataTitleText = "data___title___text",
	DataTitleHtml = "data___title___html",
	DataTitleRichText = "data___title___richText",
	DataTitleRaw = "data___title___raw",
	DataTwitterCardImageAlt = "data___twitter_card_image___alt",
	DataTwitterCardImageCopyright = "data___twitter_card_image___copyright",
	DataTwitterCardImageDimensionsWidth = "data___twitter_card_image___dimensions___width",
	DataTwitterCardImageDimensionsHeight = "data___twitter_card_image___dimensions___height",
	DataTwitterCardImageUrl = "data___twitter_card_image___url",
	DataTwitterCardImageFixedBase64 = "data___twitter_card_image___fixed___base64",
	DataTwitterCardImageFixedSrc = "data___twitter_card_image___fixed___src",
	DataTwitterCardImageFixedSrcSet = "data___twitter_card_image___fixed___srcSet",
	DataTwitterCardImageFixedSrcWebp = "data___twitter_card_image___fixed___srcWebp",
	DataTwitterCardImageFixedSrcSetWebp = "data___twitter_card_image___fixed___srcSetWebp",
	DataTwitterCardImageFixedSizes = "data___twitter_card_image___fixed___sizes",
	DataTwitterCardImageFixedWidth = "data___twitter_card_image___fixed___width",
	DataTwitterCardImageFixedHeight = "data___twitter_card_image___fixed___height",
	DataTwitterCardImageFluidBase64 = "data___twitter_card_image___fluid___base64",
	DataTwitterCardImageFluidSrc = "data___twitter_card_image___fluid___src",
	DataTwitterCardImageFluidSrcSet = "data___twitter_card_image___fluid___srcSet",
	DataTwitterCardImageFluidSrcWebp = "data___twitter_card_image___fluid___srcWebp",
	DataTwitterCardImageFluidSrcSetWebp = "data___twitter_card_image___fluid___srcSetWebp",
	DataTwitterCardImageFluidSizes = "data___twitter_card_image___fluid___sizes",
	DataTwitterCardImageFluidAspectRatio = "data___twitter_card_image___fluid___aspectRatio",
	DataTwitterCardImageGatsbyImageData = "data___twitter_card_image___gatsbyImageData",
	DataTwitterCardImageLocalFileSourceInstanceName = "data___twitter_card_image___localFile___sourceInstanceName",
	DataTwitterCardImageLocalFileAbsolutePath = "data___twitter_card_image___localFile___absolutePath",
	DataTwitterCardImageLocalFileRelativePath = "data___twitter_card_image___localFile___relativePath",
	DataTwitterCardImageLocalFileExtension = "data___twitter_card_image___localFile___extension",
	DataTwitterCardImageLocalFileSize = "data___twitter_card_image___localFile___size",
	DataTwitterCardImageLocalFilePrettySize = "data___twitter_card_image___localFile___prettySize",
	DataTwitterCardImageLocalFileModifiedTime = "data___twitter_card_image___localFile___modifiedTime",
	DataTwitterCardImageLocalFileAccessTime = "data___twitter_card_image___localFile___accessTime",
	DataTwitterCardImageLocalFileChangeTime = "data___twitter_card_image___localFile___changeTime",
	DataTwitterCardImageLocalFileBirthTime = "data___twitter_card_image___localFile___birthTime",
	DataTwitterCardImageLocalFileRoot = "data___twitter_card_image___localFile___root",
	DataTwitterCardImageLocalFileDir = "data___twitter_card_image___localFile___dir",
	DataTwitterCardImageLocalFileBase = "data___twitter_card_image___localFile___base",
	DataTwitterCardImageLocalFileExt = "data___twitter_card_image___localFile___ext",
	DataTwitterCardImageLocalFileName = "data___twitter_card_image___localFile___name",
	DataTwitterCardImageLocalFileRelativeDirectory = "data___twitter_card_image___localFile___relativeDirectory",
	DataTwitterCardImageLocalFileDev = "data___twitter_card_image___localFile___dev",
	DataTwitterCardImageLocalFileMode = "data___twitter_card_image___localFile___mode",
	DataTwitterCardImageLocalFileNlink = "data___twitter_card_image___localFile___nlink",
	DataTwitterCardImageLocalFileUid = "data___twitter_card_image___localFile___uid",
	DataTwitterCardImageLocalFileGid = "data___twitter_card_image___localFile___gid",
	DataTwitterCardImageLocalFileRdev = "data___twitter_card_image___localFile___rdev",
	DataTwitterCardImageLocalFileIno = "data___twitter_card_image___localFile___ino",
	DataTwitterCardImageLocalFileAtimeMs = "data___twitter_card_image___localFile___atimeMs",
	DataTwitterCardImageLocalFileMtimeMs = "data___twitter_card_image___localFile___mtimeMs",
	DataTwitterCardImageLocalFileCtimeMs = "data___twitter_card_image___localFile___ctimeMs",
	DataTwitterCardImageLocalFileAtime = "data___twitter_card_image___localFile___atime",
	DataTwitterCardImageLocalFileMtime = "data___twitter_card_image___localFile___mtime",
	DataTwitterCardImageLocalFileCtime = "data___twitter_card_image___localFile___ctime",
	DataTwitterCardImageLocalFileBirthtime = "data___twitter_card_image___localFile___birthtime",
	DataTwitterCardImageLocalFileBirthtimeMs = "data___twitter_card_image___localFile___birthtimeMs",
	DataTwitterCardImageLocalFileId = "data___twitter_card_image___localFile___id",
	DataTwitterCardImageLocalFileChildren = "data___twitter_card_image___localFile___children",
	DataTwitterUrl = "data___twitter_url",
	DataTwitterUsername = "data___twitter_username",
	DataYoutubeUrl = "data___youtube_url",
	DataRaw = "dataRaw",
	PrismicId = "prismicId",
	AlternateLanguages = "alternate_languages",
	AlternateLanguagesId = "alternate_languages___id",
	AlternateLanguagesUid = "alternate_languages___uid",
	AlternateLanguagesLang = "alternate_languages___lang",
	AlternateLanguagesType = "alternate_languages___type",
	AlternateLanguagesRaw = "alternate_languages___raw",
	FirstPublicationDate = "first_publication_date",
	Href = "href",
	Lang = "lang",
	LastPublicationDate = "last_publication_date",
	Tags = "tags",
	Type = "type",
	Url = "url",
	Previewable = "_previewable",
	Id = "id",
	ParentId = "parent___id",
	ParentParentId = "parent___parent___id",
	ParentParentParentId = "parent___parent___parent___id",
	ParentParentParentChildren = "parent___parent___parent___children",
	ParentParentChildren = "parent___parent___children",
	ParentParentChildrenId = "parent___parent___children___id",
	ParentParentChildrenChildren = "parent___parent___children___children",
	ParentParentInternalContent = "parent___parent___internal___content",
	ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
	ParentParentInternalDescription = "parent___parent___internal___description",
	ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
	ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
	ParentParentInternalMediaType = "parent___parent___internal___mediaType",
	ParentParentInternalOwner = "parent___parent___internal___owner",
	ParentParentInternalType = "parent___parent___internal___type",
	ParentParentInternalContentFilePath = "parent___parent___internal___contentFilePath",
	ParentChildren = "parent___children",
	ParentChildrenId = "parent___children___id",
	ParentChildrenParentId = "parent___children___parent___id",
	ParentChildrenParentChildren = "parent___children___parent___children",
	ParentChildrenChildren = "parent___children___children",
	ParentChildrenChildrenId = "parent___children___children___id",
	ParentChildrenChildrenChildren = "parent___children___children___children",
	ParentChildrenInternalContent = "parent___children___internal___content",
	ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
	ParentChildrenInternalDescription = "parent___children___internal___description",
	ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
	ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
	ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
	ParentChildrenInternalOwner = "parent___children___internal___owner",
	ParentChildrenInternalType = "parent___children___internal___type",
	ParentChildrenInternalContentFilePath = "parent___children___internal___contentFilePath",
	ParentInternalContent = "parent___internal___content",
	ParentInternalContentDigest = "parent___internal___contentDigest",
	ParentInternalDescription = "parent___internal___description",
	ParentInternalFieldOwners = "parent___internal___fieldOwners",
	ParentInternalIgnoreType = "parent___internal___ignoreType",
	ParentInternalMediaType = "parent___internal___mediaType",
	ParentInternalOwner = "parent___internal___owner",
	ParentInternalType = "parent___internal___type",
	ParentInternalContentFilePath = "parent___internal___contentFilePath",
	Children = "children",
	ChildrenId = "children___id",
	ChildrenParentId = "children___parent___id",
	ChildrenParentParentId = "children___parent___parent___id",
	ChildrenParentParentChildren = "children___parent___parent___children",
	ChildrenParentChildren = "children___parent___children",
	ChildrenParentChildrenId = "children___parent___children___id",
	ChildrenParentChildrenChildren = "children___parent___children___children",
	ChildrenParentInternalContent = "children___parent___internal___content",
	ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
	ChildrenParentInternalDescription = "children___parent___internal___description",
	ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
	ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
	ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
	ChildrenParentInternalOwner = "children___parent___internal___owner",
	ChildrenParentInternalType = "children___parent___internal___type",
	ChildrenParentInternalContentFilePath = "children___parent___internal___contentFilePath",
	ChildrenChildren = "children___children",
	ChildrenChildrenId = "children___children___id",
	ChildrenChildrenParentId = "children___children___parent___id",
	ChildrenChildrenParentChildren = "children___children___parent___children",
	ChildrenChildrenChildren = "children___children___children",
	ChildrenChildrenChildrenId = "children___children___children___id",
	ChildrenChildrenChildrenChildren = "children___children___children___children",
	ChildrenChildrenInternalContent = "children___children___internal___content",
	ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
	ChildrenChildrenInternalDescription = "children___children___internal___description",
	ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
	ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
	ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
	ChildrenChildrenInternalOwner = "children___children___internal___owner",
	ChildrenChildrenInternalType = "children___children___internal___type",
	ChildrenChildrenInternalContentFilePath = "children___children___internal___contentFilePath",
	ChildrenInternalContent = "children___internal___content",
	ChildrenInternalContentDigest = "children___internal___contentDigest",
	ChildrenInternalDescription = "children___internal___description",
	ChildrenInternalFieldOwners = "children___internal___fieldOwners",
	ChildrenInternalIgnoreType = "children___internal___ignoreType",
	ChildrenInternalMediaType = "children___internal___mediaType",
	ChildrenInternalOwner = "children___internal___owner",
	ChildrenInternalType = "children___internal___type",
	ChildrenInternalContentFilePath = "children___internal___contentFilePath",
	InternalContent = "internal___content",
	InternalContentDigest = "internal___contentDigest",
	InternalDescription = "internal___description",
	InternalFieldOwners = "internal___fieldOwners",
	InternalIgnoreType = "internal___ignoreType",
	InternalMediaType = "internal___mediaType",
	InternalOwner = "internal___owner",
	InternalType = "internal___type",
	InternalContentFilePath = "internal___contentFilePath",
}

export type PrismicSettingsFilterInput = {
	data?: Maybe<PrismicSettingsDataTypeFilterInput>
	dataRaw?: Maybe<JsonQueryOperatorInput>
	prismicId?: Maybe<IdQueryOperatorInput>
	alternate_languages?: Maybe<PrismicAlternateLanguageTypeFilterListInput>
	first_publication_date?: Maybe<DateQueryOperatorInput>
	href?: Maybe<StringQueryOperatorInput>
	lang?: Maybe<StringQueryOperatorInput>
	last_publication_date?: Maybe<DateQueryOperatorInput>
	tags?: Maybe<StringQueryOperatorInput>
	type?: Maybe<StringQueryOperatorInput>
	url?: Maybe<StringQueryOperatorInput>
	_previewable?: Maybe<IdQueryOperatorInput>
	id?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	children?: Maybe<NodeFilterListInput>
	internal?: Maybe<InternalFilterInput>
}

export type PrismicSettingsGroupConnection = {
	totalCount: Scalars["Int"]
	edges: Array<PrismicSettingsEdge>
	nodes: Array<PrismicSettings>
	pageInfo: PageInfo
	distinct: Array<Scalars["String"]>
	max?: Maybe<Scalars["Float"]>
	min?: Maybe<Scalars["Float"]>
	sum?: Maybe<Scalars["Float"]>
	group: Array<PrismicSettingsGroupConnection>
	field: Scalars["String"]
	fieldValue?: Maybe<Scalars["String"]>
}

export type PrismicSettingsGroupConnectionDistinctArgs = {
	field: PrismicSettingsFieldsEnum
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

export type PrismicSettingsGroupConnectionGroupArgs = {
	skip?: Maybe<Scalars["Int"]>
	limit?: Maybe<Scalars["Int"]>
	field: PrismicSettingsFieldsEnum
}

export type PrismicSettingsSortInput = {
	fields?: Maybe<Array<Maybe<PrismicSettingsFieldsEnum>>>
	order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type PrismicSharedSliceType = {
	id: Scalars["ID"]
	slice_type: Scalars["String"]
	slice_label?: Maybe<Scalars["String"]>
	variation: Scalars["String"]
	version: Scalars["String"]
}

export type PrismicSliceType = {
	id: Scalars["ID"]
	slice_type: Scalars["String"]
	slice_label?: Maybe<Scalars["String"]>
}

export type PrismicSponsor = Node & {
	data: PrismicSponsorDataType
	dataRaw: Scalars["JSON"]
	prismicId: Scalars["ID"]
	alternate_languages: Array<PrismicAlternateLanguageType>
	first_publication_date: Scalars["Date"]
	href: Scalars["String"]
	lang: Scalars["String"]
	last_publication_date: Scalars["Date"]
	tags: Array<Scalars["String"]>
	type: Scalars["String"]
	url?: Maybe<Scalars["String"]>
	_previewable: Scalars["ID"]
	id: Scalars["ID"]
	parent?: Maybe<Node>
	children: Array<Node>
	internal: Internal
}

export type PrismicSponsorFirst_Publication_DateArgs = {
	formatString?: Maybe<Scalars["String"]>
	fromNow?: Maybe<Scalars["Boolean"]>
	difference?: Maybe<Scalars["String"]>
	locale?: Maybe<Scalars["String"]>
}

export type PrismicSponsorLast_Publication_DateArgs = {
	formatString?: Maybe<Scalars["String"]>
	fromNow?: Maybe<Scalars["Boolean"]>
	difference?: Maybe<Scalars["String"]>
	locale?: Maybe<Scalars["String"]>
}

export type PrismicSponsorConnection = {
	totalCount: Scalars["Int"]
	edges: Array<PrismicSponsorEdge>
	nodes: Array<PrismicSponsor>
	pageInfo: PageInfo
	distinct: Array<Scalars["String"]>
	max?: Maybe<Scalars["Float"]>
	min?: Maybe<Scalars["Float"]>
	sum?: Maybe<Scalars["Float"]>
	group: Array<PrismicSponsorGroupConnection>
}

export type PrismicSponsorConnectionDistinctArgs = {
	field: PrismicSponsorFieldsEnum
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

export type PrismicSponsorConnectionGroupArgs = {
	skip?: Maybe<Scalars["Int"]>
	limit?: Maybe<Scalars["Int"]>
	field: PrismicSponsorFieldsEnum
}

export type PrismicSponsorDataImageImageType = {
	alt?: Maybe<Scalars["String"]>
	copyright?: Maybe<Scalars["String"]>
	dimensions?: Maybe<PrismicImageDimensionsType>
	/** A plain imgix URL with the URL and params applied. */
	url?: Maybe<Scalars["String"]>
	/** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
	fixed?: Maybe<ImgixFixed>
	/** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
	fluid?: Maybe<ImgixFluid>
	gatsbyImageData?: Maybe<Scalars["JSON"]>
	localFile?: Maybe<File>
}

export type PrismicSponsorDataImageImageTypeUrlArgs = {
	imgixParams?: Maybe<ImgixParamsInput>
}

export type PrismicSponsorDataImageImageTypeFixedArgs = {
	width?: Maybe<Scalars["Int"]>
	height?: Maybe<Scalars["Int"]>
	quality?: Maybe<Scalars["Int"]>
	imgixParams?: Maybe<ImgixParamsInput>
	placeholderImgixParams?: Maybe<ImgixParamsInput>
}

export type PrismicSponsorDataImageImageTypeFluidArgs = {
	imgixParams?: Maybe<ImgixParamsInput>
	maxWidth?: Maybe<Scalars["Int"]>
	maxHeight?: Maybe<Scalars["Int"]>
	srcSetBreakpoints?: Maybe<Array<Maybe<Scalars["Int"]>>>
	placeholderImgixParams?: Maybe<ImgixParamsInput>
}

export type PrismicSponsorDataImageImageTypeGatsbyImageDataArgs = {
	layout?: Maybe<GatsbyImageLayout>
	width?: Maybe<Scalars["Int"]>
	height?: Maybe<Scalars["Int"]>
	aspectRatio?: Maybe<Scalars["Float"]>
	outputPixelDensities?: Maybe<Array<Maybe<Scalars["Float"]>>>
	breakpoints?: Maybe<Array<Maybe<Scalars["Int"]>>>
	sizes?: Maybe<Scalars["String"]>
	backgroundColor?: Maybe<Scalars["String"]>
	imgixParams?: Maybe<ImgixParamsInput>
	placeholderImgixParams?: Maybe<ImgixParamsInput>
	placeholder?: Maybe<ImgixPlaceholder>
	widthTolerance?: Maybe<Scalars["Float"]>
	srcSetMinWidth?: Maybe<Scalars["Int"]>
	srcSetMaxWidth?: Maybe<Scalars["Int"]>
}

export type PrismicSponsorDataImageImageTypeFilterInput = {
	alt?: Maybe<StringQueryOperatorInput>
	copyright?: Maybe<StringQueryOperatorInput>
	dimensions?: Maybe<PrismicImageDimensionsTypeFilterInput>
	url?: Maybe<StringQueryOperatorInput>
	fixed?: Maybe<ImgixFixedFilterInput>
	fluid?: Maybe<ImgixFluidFilterInput>
	gatsbyImageData?: Maybe<JsonQueryOperatorInput>
	localFile?: Maybe<FileFilterInput>
}

export type PrismicSponsorDataType = {
	image?: Maybe<PrismicSponsorDataImageImageType>
	link?: Maybe<PrismicLinkType>
	name?: Maybe<PrismicStructuredTextType>
}

export type PrismicSponsorDataTypeFilterInput = {
	image?: Maybe<PrismicSponsorDataImageImageTypeFilterInput>
	link?: Maybe<PrismicLinkTypeFilterInput>
	name?: Maybe<PrismicStructuredTextTypeFilterInput>
}

export type PrismicSponsorEdge = {
	next?: Maybe<PrismicSponsor>
	node: PrismicSponsor
	previous?: Maybe<PrismicSponsor>
}

export enum PrismicSponsorFieldsEnum {
	DataImageAlt = "data___image___alt",
	DataImageCopyright = "data___image___copyright",
	DataImageDimensionsWidth = "data___image___dimensions___width",
	DataImageDimensionsHeight = "data___image___dimensions___height",
	DataImageUrl = "data___image___url",
	DataImageFixedBase64 = "data___image___fixed___base64",
	DataImageFixedSrc = "data___image___fixed___src",
	DataImageFixedSrcSet = "data___image___fixed___srcSet",
	DataImageFixedSrcWebp = "data___image___fixed___srcWebp",
	DataImageFixedSrcSetWebp = "data___image___fixed___srcSetWebp",
	DataImageFixedSizes = "data___image___fixed___sizes",
	DataImageFixedWidth = "data___image___fixed___width",
	DataImageFixedHeight = "data___image___fixed___height",
	DataImageFluidBase64 = "data___image___fluid___base64",
	DataImageFluidSrc = "data___image___fluid___src",
	DataImageFluidSrcSet = "data___image___fluid___srcSet",
	DataImageFluidSrcWebp = "data___image___fluid___srcWebp",
	DataImageFluidSrcSetWebp = "data___image___fluid___srcSetWebp",
	DataImageFluidSizes = "data___image___fluid___sizes",
	DataImageFluidAspectRatio = "data___image___fluid___aspectRatio",
	DataImageGatsbyImageData = "data___image___gatsbyImageData",
	DataImageLocalFileSourceInstanceName = "data___image___localFile___sourceInstanceName",
	DataImageLocalFileAbsolutePath = "data___image___localFile___absolutePath",
	DataImageLocalFileRelativePath = "data___image___localFile___relativePath",
	DataImageLocalFileExtension = "data___image___localFile___extension",
	DataImageLocalFileSize = "data___image___localFile___size",
	DataImageLocalFilePrettySize = "data___image___localFile___prettySize",
	DataImageLocalFileModifiedTime = "data___image___localFile___modifiedTime",
	DataImageLocalFileAccessTime = "data___image___localFile___accessTime",
	DataImageLocalFileChangeTime = "data___image___localFile___changeTime",
	DataImageLocalFileBirthTime = "data___image___localFile___birthTime",
	DataImageLocalFileRoot = "data___image___localFile___root",
	DataImageLocalFileDir = "data___image___localFile___dir",
	DataImageLocalFileBase = "data___image___localFile___base",
	DataImageLocalFileExt = "data___image___localFile___ext",
	DataImageLocalFileName = "data___image___localFile___name",
	DataImageLocalFileRelativeDirectory = "data___image___localFile___relativeDirectory",
	DataImageLocalFileDev = "data___image___localFile___dev",
	DataImageLocalFileMode = "data___image___localFile___mode",
	DataImageLocalFileNlink = "data___image___localFile___nlink",
	DataImageLocalFileUid = "data___image___localFile___uid",
	DataImageLocalFileGid = "data___image___localFile___gid",
	DataImageLocalFileRdev = "data___image___localFile___rdev",
	DataImageLocalFileIno = "data___image___localFile___ino",
	DataImageLocalFileAtimeMs = "data___image___localFile___atimeMs",
	DataImageLocalFileMtimeMs = "data___image___localFile___mtimeMs",
	DataImageLocalFileCtimeMs = "data___image___localFile___ctimeMs",
	DataImageLocalFileAtime = "data___image___localFile___atime",
	DataImageLocalFileMtime = "data___image___localFile___mtime",
	DataImageLocalFileCtime = "data___image___localFile___ctime",
	DataImageLocalFileBirthtime = "data___image___localFile___birthtime",
	DataImageLocalFileBirthtimeMs = "data___image___localFile___birthtimeMs",
	DataImageLocalFileId = "data___image___localFile___id",
	DataImageLocalFileChildren = "data___image___localFile___children",
	DataLinkLinkType = "data___link___link_type",
	DataLinkIsBroken = "data___link___isBroken",
	DataLinkUrl = "data___link___url",
	DataLinkTarget = "data___link___target",
	DataLinkSize = "data___link___size",
	DataLinkId = "data___link___id",
	DataLinkType = "data___link___type",
	DataLinkTags = "data___link___tags",
	DataLinkLang = "data___link___lang",
	DataLinkSlug = "data___link___slug",
	DataLinkUid = "data___link___uid",
	DataLinkLocalFileSourceInstanceName = "data___link___localFile___sourceInstanceName",
	DataLinkLocalFileAbsolutePath = "data___link___localFile___absolutePath",
	DataLinkLocalFileRelativePath = "data___link___localFile___relativePath",
	DataLinkLocalFileExtension = "data___link___localFile___extension",
	DataLinkLocalFileSize = "data___link___localFile___size",
	DataLinkLocalFilePrettySize = "data___link___localFile___prettySize",
	DataLinkLocalFileModifiedTime = "data___link___localFile___modifiedTime",
	DataLinkLocalFileAccessTime = "data___link___localFile___accessTime",
	DataLinkLocalFileChangeTime = "data___link___localFile___changeTime",
	DataLinkLocalFileBirthTime = "data___link___localFile___birthTime",
	DataLinkLocalFileRoot = "data___link___localFile___root",
	DataLinkLocalFileDir = "data___link___localFile___dir",
	DataLinkLocalFileBase = "data___link___localFile___base",
	DataLinkLocalFileExt = "data___link___localFile___ext",
	DataLinkLocalFileName = "data___link___localFile___name",
	DataLinkLocalFileRelativeDirectory = "data___link___localFile___relativeDirectory",
	DataLinkLocalFileDev = "data___link___localFile___dev",
	DataLinkLocalFileMode = "data___link___localFile___mode",
	DataLinkLocalFileNlink = "data___link___localFile___nlink",
	DataLinkLocalFileUid = "data___link___localFile___uid",
	DataLinkLocalFileGid = "data___link___localFile___gid",
	DataLinkLocalFileRdev = "data___link___localFile___rdev",
	DataLinkLocalFileIno = "data___link___localFile___ino",
	DataLinkLocalFileAtimeMs = "data___link___localFile___atimeMs",
	DataLinkLocalFileMtimeMs = "data___link___localFile___mtimeMs",
	DataLinkLocalFileCtimeMs = "data___link___localFile___ctimeMs",
	DataLinkLocalFileAtime = "data___link___localFile___atime",
	DataLinkLocalFileMtime = "data___link___localFile___mtime",
	DataLinkLocalFileCtime = "data___link___localFile___ctime",
	DataLinkLocalFileBirthtime = "data___link___localFile___birthtime",
	DataLinkLocalFileBirthtimeMs = "data___link___localFile___birthtimeMs",
	DataLinkLocalFileId = "data___link___localFile___id",
	DataLinkLocalFileChildren = "data___link___localFile___children",
	DataLinkRaw = "data___link___raw",
	DataNameText = "data___name___text",
	DataNameHtml = "data___name___html",
	DataNameRichText = "data___name___richText",
	DataNameRaw = "data___name___raw",
	DataRaw = "dataRaw",
	PrismicId = "prismicId",
	AlternateLanguages = "alternate_languages",
	AlternateLanguagesId = "alternate_languages___id",
	AlternateLanguagesUid = "alternate_languages___uid",
	AlternateLanguagesLang = "alternate_languages___lang",
	AlternateLanguagesType = "alternate_languages___type",
	AlternateLanguagesRaw = "alternate_languages___raw",
	FirstPublicationDate = "first_publication_date",
	Href = "href",
	Lang = "lang",
	LastPublicationDate = "last_publication_date",
	Tags = "tags",
	Type = "type",
	Url = "url",
	Previewable = "_previewable",
	Id = "id",
	ParentId = "parent___id",
	ParentParentId = "parent___parent___id",
	ParentParentParentId = "parent___parent___parent___id",
	ParentParentParentChildren = "parent___parent___parent___children",
	ParentParentChildren = "parent___parent___children",
	ParentParentChildrenId = "parent___parent___children___id",
	ParentParentChildrenChildren = "parent___parent___children___children",
	ParentParentInternalContent = "parent___parent___internal___content",
	ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
	ParentParentInternalDescription = "parent___parent___internal___description",
	ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
	ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
	ParentParentInternalMediaType = "parent___parent___internal___mediaType",
	ParentParentInternalOwner = "parent___parent___internal___owner",
	ParentParentInternalType = "parent___parent___internal___type",
	ParentParentInternalContentFilePath = "parent___parent___internal___contentFilePath",
	ParentChildren = "parent___children",
	ParentChildrenId = "parent___children___id",
	ParentChildrenParentId = "parent___children___parent___id",
	ParentChildrenParentChildren = "parent___children___parent___children",
	ParentChildrenChildren = "parent___children___children",
	ParentChildrenChildrenId = "parent___children___children___id",
	ParentChildrenChildrenChildren = "parent___children___children___children",
	ParentChildrenInternalContent = "parent___children___internal___content",
	ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
	ParentChildrenInternalDescription = "parent___children___internal___description",
	ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
	ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
	ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
	ParentChildrenInternalOwner = "parent___children___internal___owner",
	ParentChildrenInternalType = "parent___children___internal___type",
	ParentChildrenInternalContentFilePath = "parent___children___internal___contentFilePath",
	ParentInternalContent = "parent___internal___content",
	ParentInternalContentDigest = "parent___internal___contentDigest",
	ParentInternalDescription = "parent___internal___description",
	ParentInternalFieldOwners = "parent___internal___fieldOwners",
	ParentInternalIgnoreType = "parent___internal___ignoreType",
	ParentInternalMediaType = "parent___internal___mediaType",
	ParentInternalOwner = "parent___internal___owner",
	ParentInternalType = "parent___internal___type",
	ParentInternalContentFilePath = "parent___internal___contentFilePath",
	Children = "children",
	ChildrenId = "children___id",
	ChildrenParentId = "children___parent___id",
	ChildrenParentParentId = "children___parent___parent___id",
	ChildrenParentParentChildren = "children___parent___parent___children",
	ChildrenParentChildren = "children___parent___children",
	ChildrenParentChildrenId = "children___parent___children___id",
	ChildrenParentChildrenChildren = "children___parent___children___children",
	ChildrenParentInternalContent = "children___parent___internal___content",
	ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
	ChildrenParentInternalDescription = "children___parent___internal___description",
	ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
	ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
	ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
	ChildrenParentInternalOwner = "children___parent___internal___owner",
	ChildrenParentInternalType = "children___parent___internal___type",
	ChildrenParentInternalContentFilePath = "children___parent___internal___contentFilePath",
	ChildrenChildren = "children___children",
	ChildrenChildrenId = "children___children___id",
	ChildrenChildrenParentId = "children___children___parent___id",
	ChildrenChildrenParentChildren = "children___children___parent___children",
	ChildrenChildrenChildren = "children___children___children",
	ChildrenChildrenChildrenId = "children___children___children___id",
	ChildrenChildrenChildrenChildren = "children___children___children___children",
	ChildrenChildrenInternalContent = "children___children___internal___content",
	ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
	ChildrenChildrenInternalDescription = "children___children___internal___description",
	ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
	ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
	ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
	ChildrenChildrenInternalOwner = "children___children___internal___owner",
	ChildrenChildrenInternalType = "children___children___internal___type",
	ChildrenChildrenInternalContentFilePath = "children___children___internal___contentFilePath",
	ChildrenInternalContent = "children___internal___content",
	ChildrenInternalContentDigest = "children___internal___contentDigest",
	ChildrenInternalDescription = "children___internal___description",
	ChildrenInternalFieldOwners = "children___internal___fieldOwners",
	ChildrenInternalIgnoreType = "children___internal___ignoreType",
	ChildrenInternalMediaType = "children___internal___mediaType",
	ChildrenInternalOwner = "children___internal___owner",
	ChildrenInternalType = "children___internal___type",
	ChildrenInternalContentFilePath = "children___internal___contentFilePath",
	InternalContent = "internal___content",
	InternalContentDigest = "internal___contentDigest",
	InternalDescription = "internal___description",
	InternalFieldOwners = "internal___fieldOwners",
	InternalIgnoreType = "internal___ignoreType",
	InternalMediaType = "internal___mediaType",
	InternalOwner = "internal___owner",
	InternalType = "internal___type",
	InternalContentFilePath = "internal___contentFilePath",
}

export type PrismicSponsorFilterInput = {
	data?: Maybe<PrismicSponsorDataTypeFilterInput>
	dataRaw?: Maybe<JsonQueryOperatorInput>
	prismicId?: Maybe<IdQueryOperatorInput>
	alternate_languages?: Maybe<PrismicAlternateLanguageTypeFilterListInput>
	first_publication_date?: Maybe<DateQueryOperatorInput>
	href?: Maybe<StringQueryOperatorInput>
	lang?: Maybe<StringQueryOperatorInput>
	last_publication_date?: Maybe<DateQueryOperatorInput>
	tags?: Maybe<StringQueryOperatorInput>
	type?: Maybe<StringQueryOperatorInput>
	url?: Maybe<StringQueryOperatorInput>
	_previewable?: Maybe<IdQueryOperatorInput>
	id?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	children?: Maybe<NodeFilterListInput>
	internal?: Maybe<InternalFilterInput>
}

export type PrismicSponsorGroupConnection = {
	totalCount: Scalars["Int"]
	edges: Array<PrismicSponsorEdge>
	nodes: Array<PrismicSponsor>
	pageInfo: PageInfo
	distinct: Array<Scalars["String"]>
	max?: Maybe<Scalars["Float"]>
	min?: Maybe<Scalars["Float"]>
	sum?: Maybe<Scalars["Float"]>
	group: Array<PrismicSponsorGroupConnection>
	field: Scalars["String"]
	fieldValue?: Maybe<Scalars["String"]>
}

export type PrismicSponsorGroupConnectionDistinctArgs = {
	field: PrismicSponsorFieldsEnum
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

export type PrismicSponsorGroupConnectionGroupArgs = {
	skip?: Maybe<Scalars["Int"]>
	limit?: Maybe<Scalars["Int"]>
	field: PrismicSponsorFieldsEnum
}

export type PrismicSponsorSortInput = {
	fields?: Maybe<Array<Maybe<PrismicSponsorFieldsEnum>>>
	order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type PrismicSponsorsList = Node & {
	uid: Scalars["String"]
	data: PrismicSponsorsListDataType
	dataRaw: Scalars["JSON"]
	prismicId: Scalars["ID"]
	alternate_languages: Array<PrismicAlternateLanguageType>
	first_publication_date: Scalars["Date"]
	href: Scalars["String"]
	lang: Scalars["String"]
	last_publication_date: Scalars["Date"]
	tags: Array<Scalars["String"]>
	type: Scalars["String"]
	url?: Maybe<Scalars["String"]>
	_previewable: Scalars["ID"]
	id: Scalars["ID"]
	parent?: Maybe<Node>
	children: Array<Node>
	internal: Internal
}

export type PrismicSponsorsListFirst_Publication_DateArgs = {
	formatString?: Maybe<Scalars["String"]>
	fromNow?: Maybe<Scalars["Boolean"]>
	difference?: Maybe<Scalars["String"]>
	locale?: Maybe<Scalars["String"]>
}

export type PrismicSponsorsListLast_Publication_DateArgs = {
	formatString?: Maybe<Scalars["String"]>
	fromNow?: Maybe<Scalars["Boolean"]>
	difference?: Maybe<Scalars["String"]>
	locale?: Maybe<Scalars["String"]>
}

export type PrismicSponsorsListConnection = {
	totalCount: Scalars["Int"]
	edges: Array<PrismicSponsorsListEdge>
	nodes: Array<PrismicSponsorsList>
	pageInfo: PageInfo
	distinct: Array<Scalars["String"]>
	max?: Maybe<Scalars["Float"]>
	min?: Maybe<Scalars["Float"]>
	sum?: Maybe<Scalars["Float"]>
	group: Array<PrismicSponsorsListGroupConnection>
}

export type PrismicSponsorsListConnectionDistinctArgs = {
	field: PrismicSponsorsListFieldsEnum
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

export type PrismicSponsorsListConnectionGroupArgs = {
	skip?: Maybe<Scalars["Int"]>
	limit?: Maybe<Scalars["Int"]>
	field: PrismicSponsorsListFieldsEnum
}

export type PrismicSponsorsListDataBronzeSponsors = {
	sponsor?: Maybe<PrismicLinkType>
}

export type PrismicSponsorsListDataBronzeSponsorsFilterInput = {
	sponsor?: Maybe<PrismicLinkTypeFilterInput>
}

export type PrismicSponsorsListDataBronzeSponsorsFilterListInput = {
	elemMatch?: Maybe<PrismicSponsorsListDataBronzeSponsorsFilterInput>
}

export type PrismicSponsorsListDataGoldSponsors = {
	sponsor?: Maybe<PrismicLinkType>
}

export type PrismicSponsorsListDataGoldSponsorsFilterInput = {
	sponsor?: Maybe<PrismicLinkTypeFilterInput>
}

export type PrismicSponsorsListDataGoldSponsorsFilterListInput = {
	elemMatch?: Maybe<PrismicSponsorsListDataGoldSponsorsFilterInput>
}

export type PrismicSponsorsListDataPartnerSponsors = {
	sponsor?: Maybe<PrismicLinkType>
}

export type PrismicSponsorsListDataPartnerSponsorsFilterInput = {
	sponsor?: Maybe<PrismicLinkTypeFilterInput>
}

export type PrismicSponsorsListDataPartnerSponsorsFilterListInput = {
	elemMatch?: Maybe<PrismicSponsorsListDataPartnerSponsorsFilterInput>
}

export type PrismicSponsorsListDataSilverSponsors = {
	sponsor?: Maybe<PrismicLinkType>
}

export type PrismicSponsorsListDataSilverSponsorsFilterInput = {
	sponsor?: Maybe<PrismicLinkTypeFilterInput>
}

export type PrismicSponsorsListDataSilverSponsorsFilterListInput = {
	elemMatch?: Maybe<PrismicSponsorsListDataSilverSponsorsFilterInput>
}

export type PrismicSponsorsListDataType = {
	bronze_sponsors?: Maybe<Array<Maybe<PrismicSponsorsListDataBronzeSponsors>>>
	gold_sponsors?: Maybe<Array<Maybe<PrismicSponsorsListDataGoldSponsors>>>
	partner_sponsors?: Maybe<Array<Maybe<PrismicSponsorsListDataPartnerSponsors>>>
	rainbows_over_waikiki_sponsor?: Maybe<PrismicLinkType>
	silver_sponsors?: Maybe<Array<Maybe<PrismicSponsorsListDataSilverSponsors>>>
	title?: Maybe<PrismicStructuredTextType>
	visionary_sponsors?: Maybe<
		Array<Maybe<PrismicSponsorsListDataVisionarySponsors>>
	>
}

export type PrismicSponsorsListDataTypeFilterInput = {
	bronze_sponsors?: Maybe<PrismicSponsorsListDataBronzeSponsorsFilterListInput>
	gold_sponsors?: Maybe<PrismicSponsorsListDataGoldSponsorsFilterListInput>
	partner_sponsors?: Maybe<PrismicSponsorsListDataPartnerSponsorsFilterListInput>
	rainbows_over_waikiki_sponsor?: Maybe<PrismicLinkTypeFilterInput>
	silver_sponsors?: Maybe<PrismicSponsorsListDataSilverSponsorsFilterListInput>
	title?: Maybe<PrismicStructuredTextTypeFilterInput>
	visionary_sponsors?: Maybe<PrismicSponsorsListDataVisionarySponsorsFilterListInput>
}

export type PrismicSponsorsListDataVisionarySponsors = {
	sponsor?: Maybe<PrismicLinkType>
}

export type PrismicSponsorsListDataVisionarySponsorsFilterInput = {
	sponsor?: Maybe<PrismicLinkTypeFilterInput>
}

export type PrismicSponsorsListDataVisionarySponsorsFilterListInput = {
	elemMatch?: Maybe<PrismicSponsorsListDataVisionarySponsorsFilterInput>
}

export type PrismicSponsorsListEdge = {
	next?: Maybe<PrismicSponsorsList>
	node: PrismicSponsorsList
	previous?: Maybe<PrismicSponsorsList>
}

export enum PrismicSponsorsListFieldsEnum {
	Uid = "uid",
	DataBronzeSponsors = "data___bronze_sponsors",
	DataBronzeSponsorsSponsorLinkType = "data___bronze_sponsors___sponsor___link_type",
	DataBronzeSponsorsSponsorIsBroken = "data___bronze_sponsors___sponsor___isBroken",
	DataBronzeSponsorsSponsorUrl = "data___bronze_sponsors___sponsor___url",
	DataBronzeSponsorsSponsorTarget = "data___bronze_sponsors___sponsor___target",
	DataBronzeSponsorsSponsorSize = "data___bronze_sponsors___sponsor___size",
	DataBronzeSponsorsSponsorId = "data___bronze_sponsors___sponsor___id",
	DataBronzeSponsorsSponsorType = "data___bronze_sponsors___sponsor___type",
	DataBronzeSponsorsSponsorTags = "data___bronze_sponsors___sponsor___tags",
	DataBronzeSponsorsSponsorLang = "data___bronze_sponsors___sponsor___lang",
	DataBronzeSponsorsSponsorSlug = "data___bronze_sponsors___sponsor___slug",
	DataBronzeSponsorsSponsorUid = "data___bronze_sponsors___sponsor___uid",
	DataBronzeSponsorsSponsorRaw = "data___bronze_sponsors___sponsor___raw",
	DataGoldSponsors = "data___gold_sponsors",
	DataGoldSponsorsSponsorLinkType = "data___gold_sponsors___sponsor___link_type",
	DataGoldSponsorsSponsorIsBroken = "data___gold_sponsors___sponsor___isBroken",
	DataGoldSponsorsSponsorUrl = "data___gold_sponsors___sponsor___url",
	DataGoldSponsorsSponsorTarget = "data___gold_sponsors___sponsor___target",
	DataGoldSponsorsSponsorSize = "data___gold_sponsors___sponsor___size",
	DataGoldSponsorsSponsorId = "data___gold_sponsors___sponsor___id",
	DataGoldSponsorsSponsorType = "data___gold_sponsors___sponsor___type",
	DataGoldSponsorsSponsorTags = "data___gold_sponsors___sponsor___tags",
	DataGoldSponsorsSponsorLang = "data___gold_sponsors___sponsor___lang",
	DataGoldSponsorsSponsorSlug = "data___gold_sponsors___sponsor___slug",
	DataGoldSponsorsSponsorUid = "data___gold_sponsors___sponsor___uid",
	DataGoldSponsorsSponsorRaw = "data___gold_sponsors___sponsor___raw",
	DataPartnerSponsors = "data___partner_sponsors",
	DataPartnerSponsorsSponsorLinkType = "data___partner_sponsors___sponsor___link_type",
	DataPartnerSponsorsSponsorIsBroken = "data___partner_sponsors___sponsor___isBroken",
	DataPartnerSponsorsSponsorUrl = "data___partner_sponsors___sponsor___url",
	DataPartnerSponsorsSponsorTarget = "data___partner_sponsors___sponsor___target",
	DataPartnerSponsorsSponsorSize = "data___partner_sponsors___sponsor___size",
	DataPartnerSponsorsSponsorId = "data___partner_sponsors___sponsor___id",
	DataPartnerSponsorsSponsorType = "data___partner_sponsors___sponsor___type",
	DataPartnerSponsorsSponsorTags = "data___partner_sponsors___sponsor___tags",
	DataPartnerSponsorsSponsorLang = "data___partner_sponsors___sponsor___lang",
	DataPartnerSponsorsSponsorSlug = "data___partner_sponsors___sponsor___slug",
	DataPartnerSponsorsSponsorUid = "data___partner_sponsors___sponsor___uid",
	DataPartnerSponsorsSponsorRaw = "data___partner_sponsors___sponsor___raw",
	DataRainbowsOverWaikikiSponsorLinkType = "data___rainbows_over_waikiki_sponsor___link_type",
	DataRainbowsOverWaikikiSponsorIsBroken = "data___rainbows_over_waikiki_sponsor___isBroken",
	DataRainbowsOverWaikikiSponsorUrl = "data___rainbows_over_waikiki_sponsor___url",
	DataRainbowsOverWaikikiSponsorTarget = "data___rainbows_over_waikiki_sponsor___target",
	DataRainbowsOverWaikikiSponsorSize = "data___rainbows_over_waikiki_sponsor___size",
	DataRainbowsOverWaikikiSponsorId = "data___rainbows_over_waikiki_sponsor___id",
	DataRainbowsOverWaikikiSponsorType = "data___rainbows_over_waikiki_sponsor___type",
	DataRainbowsOverWaikikiSponsorTags = "data___rainbows_over_waikiki_sponsor___tags",
	DataRainbowsOverWaikikiSponsorLang = "data___rainbows_over_waikiki_sponsor___lang",
	DataRainbowsOverWaikikiSponsorSlug = "data___rainbows_over_waikiki_sponsor___slug",
	DataRainbowsOverWaikikiSponsorUid = "data___rainbows_over_waikiki_sponsor___uid",
	DataRainbowsOverWaikikiSponsorLocalFileSourceInstanceName = "data___rainbows_over_waikiki_sponsor___localFile___sourceInstanceName",
	DataRainbowsOverWaikikiSponsorLocalFileAbsolutePath = "data___rainbows_over_waikiki_sponsor___localFile___absolutePath",
	DataRainbowsOverWaikikiSponsorLocalFileRelativePath = "data___rainbows_over_waikiki_sponsor___localFile___relativePath",
	DataRainbowsOverWaikikiSponsorLocalFileExtension = "data___rainbows_over_waikiki_sponsor___localFile___extension",
	DataRainbowsOverWaikikiSponsorLocalFileSize = "data___rainbows_over_waikiki_sponsor___localFile___size",
	DataRainbowsOverWaikikiSponsorLocalFilePrettySize = "data___rainbows_over_waikiki_sponsor___localFile___prettySize",
	DataRainbowsOverWaikikiSponsorLocalFileModifiedTime = "data___rainbows_over_waikiki_sponsor___localFile___modifiedTime",
	DataRainbowsOverWaikikiSponsorLocalFileAccessTime = "data___rainbows_over_waikiki_sponsor___localFile___accessTime",
	DataRainbowsOverWaikikiSponsorLocalFileChangeTime = "data___rainbows_over_waikiki_sponsor___localFile___changeTime",
	DataRainbowsOverWaikikiSponsorLocalFileBirthTime = "data___rainbows_over_waikiki_sponsor___localFile___birthTime",
	DataRainbowsOverWaikikiSponsorLocalFileRoot = "data___rainbows_over_waikiki_sponsor___localFile___root",
	DataRainbowsOverWaikikiSponsorLocalFileDir = "data___rainbows_over_waikiki_sponsor___localFile___dir",
	DataRainbowsOverWaikikiSponsorLocalFileBase = "data___rainbows_over_waikiki_sponsor___localFile___base",
	DataRainbowsOverWaikikiSponsorLocalFileExt = "data___rainbows_over_waikiki_sponsor___localFile___ext",
	DataRainbowsOverWaikikiSponsorLocalFileName = "data___rainbows_over_waikiki_sponsor___localFile___name",
	DataRainbowsOverWaikikiSponsorLocalFileRelativeDirectory = "data___rainbows_over_waikiki_sponsor___localFile___relativeDirectory",
	DataRainbowsOverWaikikiSponsorLocalFileDev = "data___rainbows_over_waikiki_sponsor___localFile___dev",
	DataRainbowsOverWaikikiSponsorLocalFileMode = "data___rainbows_over_waikiki_sponsor___localFile___mode",
	DataRainbowsOverWaikikiSponsorLocalFileNlink = "data___rainbows_over_waikiki_sponsor___localFile___nlink",
	DataRainbowsOverWaikikiSponsorLocalFileUid = "data___rainbows_over_waikiki_sponsor___localFile___uid",
	DataRainbowsOverWaikikiSponsorLocalFileGid = "data___rainbows_over_waikiki_sponsor___localFile___gid",
	DataRainbowsOverWaikikiSponsorLocalFileRdev = "data___rainbows_over_waikiki_sponsor___localFile___rdev",
	DataRainbowsOverWaikikiSponsorLocalFileIno = "data___rainbows_over_waikiki_sponsor___localFile___ino",
	DataRainbowsOverWaikikiSponsorLocalFileAtimeMs = "data___rainbows_over_waikiki_sponsor___localFile___atimeMs",
	DataRainbowsOverWaikikiSponsorLocalFileMtimeMs = "data___rainbows_over_waikiki_sponsor___localFile___mtimeMs",
	DataRainbowsOverWaikikiSponsorLocalFileCtimeMs = "data___rainbows_over_waikiki_sponsor___localFile___ctimeMs",
	DataRainbowsOverWaikikiSponsorLocalFileAtime = "data___rainbows_over_waikiki_sponsor___localFile___atime",
	DataRainbowsOverWaikikiSponsorLocalFileMtime = "data___rainbows_over_waikiki_sponsor___localFile___mtime",
	DataRainbowsOverWaikikiSponsorLocalFileCtime = "data___rainbows_over_waikiki_sponsor___localFile___ctime",
	DataRainbowsOverWaikikiSponsorLocalFileBirthtime = "data___rainbows_over_waikiki_sponsor___localFile___birthtime",
	DataRainbowsOverWaikikiSponsorLocalFileBirthtimeMs = "data___rainbows_over_waikiki_sponsor___localFile___birthtimeMs",
	DataRainbowsOverWaikikiSponsorLocalFileId = "data___rainbows_over_waikiki_sponsor___localFile___id",
	DataRainbowsOverWaikikiSponsorLocalFileChildren = "data___rainbows_over_waikiki_sponsor___localFile___children",
	DataRainbowsOverWaikikiSponsorRaw = "data___rainbows_over_waikiki_sponsor___raw",
	DataSilverSponsors = "data___silver_sponsors",
	DataSilverSponsorsSponsorLinkType = "data___silver_sponsors___sponsor___link_type",
	DataSilverSponsorsSponsorIsBroken = "data___silver_sponsors___sponsor___isBroken",
	DataSilverSponsorsSponsorUrl = "data___silver_sponsors___sponsor___url",
	DataSilverSponsorsSponsorTarget = "data___silver_sponsors___sponsor___target",
	DataSilverSponsorsSponsorSize = "data___silver_sponsors___sponsor___size",
	DataSilverSponsorsSponsorId = "data___silver_sponsors___sponsor___id",
	DataSilverSponsorsSponsorType = "data___silver_sponsors___sponsor___type",
	DataSilverSponsorsSponsorTags = "data___silver_sponsors___sponsor___tags",
	DataSilverSponsorsSponsorLang = "data___silver_sponsors___sponsor___lang",
	DataSilverSponsorsSponsorSlug = "data___silver_sponsors___sponsor___slug",
	DataSilverSponsorsSponsorUid = "data___silver_sponsors___sponsor___uid",
	DataSilverSponsorsSponsorRaw = "data___silver_sponsors___sponsor___raw",
	DataTitleText = "data___title___text",
	DataTitleHtml = "data___title___html",
	DataTitleRichText = "data___title___richText",
	DataTitleRaw = "data___title___raw",
	DataVisionarySponsors = "data___visionary_sponsors",
	DataVisionarySponsorsSponsorLinkType = "data___visionary_sponsors___sponsor___link_type",
	DataVisionarySponsorsSponsorIsBroken = "data___visionary_sponsors___sponsor___isBroken",
	DataVisionarySponsorsSponsorUrl = "data___visionary_sponsors___sponsor___url",
	DataVisionarySponsorsSponsorTarget = "data___visionary_sponsors___sponsor___target",
	DataVisionarySponsorsSponsorSize = "data___visionary_sponsors___sponsor___size",
	DataVisionarySponsorsSponsorId = "data___visionary_sponsors___sponsor___id",
	DataVisionarySponsorsSponsorType = "data___visionary_sponsors___sponsor___type",
	DataVisionarySponsorsSponsorTags = "data___visionary_sponsors___sponsor___tags",
	DataVisionarySponsorsSponsorLang = "data___visionary_sponsors___sponsor___lang",
	DataVisionarySponsorsSponsorSlug = "data___visionary_sponsors___sponsor___slug",
	DataVisionarySponsorsSponsorUid = "data___visionary_sponsors___sponsor___uid",
	DataVisionarySponsorsSponsorRaw = "data___visionary_sponsors___sponsor___raw",
	DataRaw = "dataRaw",
	PrismicId = "prismicId",
	AlternateLanguages = "alternate_languages",
	AlternateLanguagesId = "alternate_languages___id",
	AlternateLanguagesUid = "alternate_languages___uid",
	AlternateLanguagesLang = "alternate_languages___lang",
	AlternateLanguagesType = "alternate_languages___type",
	AlternateLanguagesRaw = "alternate_languages___raw",
	FirstPublicationDate = "first_publication_date",
	Href = "href",
	Lang = "lang",
	LastPublicationDate = "last_publication_date",
	Tags = "tags",
	Type = "type",
	Url = "url",
	Previewable = "_previewable",
	Id = "id",
	ParentId = "parent___id",
	ParentParentId = "parent___parent___id",
	ParentParentParentId = "parent___parent___parent___id",
	ParentParentParentChildren = "parent___parent___parent___children",
	ParentParentChildren = "parent___parent___children",
	ParentParentChildrenId = "parent___parent___children___id",
	ParentParentChildrenChildren = "parent___parent___children___children",
	ParentParentInternalContent = "parent___parent___internal___content",
	ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
	ParentParentInternalDescription = "parent___parent___internal___description",
	ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
	ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
	ParentParentInternalMediaType = "parent___parent___internal___mediaType",
	ParentParentInternalOwner = "parent___parent___internal___owner",
	ParentParentInternalType = "parent___parent___internal___type",
	ParentParentInternalContentFilePath = "parent___parent___internal___contentFilePath",
	ParentChildren = "parent___children",
	ParentChildrenId = "parent___children___id",
	ParentChildrenParentId = "parent___children___parent___id",
	ParentChildrenParentChildren = "parent___children___parent___children",
	ParentChildrenChildren = "parent___children___children",
	ParentChildrenChildrenId = "parent___children___children___id",
	ParentChildrenChildrenChildren = "parent___children___children___children",
	ParentChildrenInternalContent = "parent___children___internal___content",
	ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
	ParentChildrenInternalDescription = "parent___children___internal___description",
	ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
	ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
	ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
	ParentChildrenInternalOwner = "parent___children___internal___owner",
	ParentChildrenInternalType = "parent___children___internal___type",
	ParentChildrenInternalContentFilePath = "parent___children___internal___contentFilePath",
	ParentInternalContent = "parent___internal___content",
	ParentInternalContentDigest = "parent___internal___contentDigest",
	ParentInternalDescription = "parent___internal___description",
	ParentInternalFieldOwners = "parent___internal___fieldOwners",
	ParentInternalIgnoreType = "parent___internal___ignoreType",
	ParentInternalMediaType = "parent___internal___mediaType",
	ParentInternalOwner = "parent___internal___owner",
	ParentInternalType = "parent___internal___type",
	ParentInternalContentFilePath = "parent___internal___contentFilePath",
	Children = "children",
	ChildrenId = "children___id",
	ChildrenParentId = "children___parent___id",
	ChildrenParentParentId = "children___parent___parent___id",
	ChildrenParentParentChildren = "children___parent___parent___children",
	ChildrenParentChildren = "children___parent___children",
	ChildrenParentChildrenId = "children___parent___children___id",
	ChildrenParentChildrenChildren = "children___parent___children___children",
	ChildrenParentInternalContent = "children___parent___internal___content",
	ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
	ChildrenParentInternalDescription = "children___parent___internal___description",
	ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
	ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
	ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
	ChildrenParentInternalOwner = "children___parent___internal___owner",
	ChildrenParentInternalType = "children___parent___internal___type",
	ChildrenParentInternalContentFilePath = "children___parent___internal___contentFilePath",
	ChildrenChildren = "children___children",
	ChildrenChildrenId = "children___children___id",
	ChildrenChildrenParentId = "children___children___parent___id",
	ChildrenChildrenParentChildren = "children___children___parent___children",
	ChildrenChildrenChildren = "children___children___children",
	ChildrenChildrenChildrenId = "children___children___children___id",
	ChildrenChildrenChildrenChildren = "children___children___children___children",
	ChildrenChildrenInternalContent = "children___children___internal___content",
	ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
	ChildrenChildrenInternalDescription = "children___children___internal___description",
	ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
	ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
	ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
	ChildrenChildrenInternalOwner = "children___children___internal___owner",
	ChildrenChildrenInternalType = "children___children___internal___type",
	ChildrenChildrenInternalContentFilePath = "children___children___internal___contentFilePath",
	ChildrenInternalContent = "children___internal___content",
	ChildrenInternalContentDigest = "children___internal___contentDigest",
	ChildrenInternalDescription = "children___internal___description",
	ChildrenInternalFieldOwners = "children___internal___fieldOwners",
	ChildrenInternalIgnoreType = "children___internal___ignoreType",
	ChildrenInternalMediaType = "children___internal___mediaType",
	ChildrenInternalOwner = "children___internal___owner",
	ChildrenInternalType = "children___internal___type",
	ChildrenInternalContentFilePath = "children___internal___contentFilePath",
	InternalContent = "internal___content",
	InternalContentDigest = "internal___contentDigest",
	InternalDescription = "internal___description",
	InternalFieldOwners = "internal___fieldOwners",
	InternalIgnoreType = "internal___ignoreType",
	InternalMediaType = "internal___mediaType",
	InternalOwner = "internal___owner",
	InternalType = "internal___type",
	InternalContentFilePath = "internal___contentFilePath",
}

export type PrismicSponsorsListFilterInput = {
	uid?: Maybe<StringQueryOperatorInput>
	data?: Maybe<PrismicSponsorsListDataTypeFilterInput>
	dataRaw?: Maybe<JsonQueryOperatorInput>
	prismicId?: Maybe<IdQueryOperatorInput>
	alternate_languages?: Maybe<PrismicAlternateLanguageTypeFilterListInput>
	first_publication_date?: Maybe<DateQueryOperatorInput>
	href?: Maybe<StringQueryOperatorInput>
	lang?: Maybe<StringQueryOperatorInput>
	last_publication_date?: Maybe<DateQueryOperatorInput>
	tags?: Maybe<StringQueryOperatorInput>
	type?: Maybe<StringQueryOperatorInput>
	url?: Maybe<StringQueryOperatorInput>
	_previewable?: Maybe<IdQueryOperatorInput>
	id?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	children?: Maybe<NodeFilterListInput>
	internal?: Maybe<InternalFilterInput>
}

export type PrismicSponsorsListGroupConnection = {
	totalCount: Scalars["Int"]
	edges: Array<PrismicSponsorsListEdge>
	nodes: Array<PrismicSponsorsList>
	pageInfo: PageInfo
	distinct: Array<Scalars["String"]>
	max?: Maybe<Scalars["Float"]>
	min?: Maybe<Scalars["Float"]>
	sum?: Maybe<Scalars["Float"]>
	group: Array<PrismicSponsorsListGroupConnection>
	field: Scalars["String"]
	fieldValue?: Maybe<Scalars["String"]>
}

export type PrismicSponsorsListGroupConnectionDistinctArgs = {
	field: PrismicSponsorsListFieldsEnum
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

export type PrismicSponsorsListGroupConnectionGroupArgs = {
	skip?: Maybe<Scalars["Int"]>
	limit?: Maybe<Scalars["Int"]>
	field: PrismicSponsorsListFieldsEnum
}

export type PrismicSponsorsListSortInput = {
	fields?: Maybe<Array<Maybe<PrismicSponsorsListFieldsEnum>>>
	order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type PrismicStructuredTextQueryOperatorInput = {
	eq?: Maybe<Scalars["PrismicStructuredText"]>
	ne?: Maybe<Scalars["PrismicStructuredText"]>
	in?: Maybe<Array<Maybe<Scalars["PrismicStructuredText"]>>>
	nin?: Maybe<Array<Maybe<Scalars["PrismicStructuredText"]>>>
}

export type PrismicStructuredTextType = {
	text?: Maybe<Scalars["String"]>
	html?: Maybe<Scalars["String"]>
	richText: Scalars["PrismicStructuredText"]
	/** @deprecated This field has been renamed to `richText`. The `richText` field has the same value the `raw` field. */
	raw: Scalars["PrismicStructuredText"]
}

export type PrismicStructuredTextTypeFilterInput = {
	text?: Maybe<StringQueryOperatorInput>
	html?: Maybe<StringQueryOperatorInput>
	richText?: Maybe<PrismicStructuredTextQueryOperatorInput>
	raw?: Maybe<PrismicStructuredTextQueryOperatorInput>
}

export type PrismicSubmissionType = Node & {
	uid: Scalars["String"]
	data: PrismicSubmissionTypeDataType
	dataRaw: Scalars["JSON"]
	prismicId: Scalars["ID"]
	alternate_languages: Array<PrismicAlternateLanguageType>
	first_publication_date: Scalars["Date"]
	href: Scalars["String"]
	lang: Scalars["String"]
	last_publication_date: Scalars["Date"]
	tags: Array<Scalars["String"]>
	type: Scalars["String"]
	url?: Maybe<Scalars["String"]>
	_previewable: Scalars["ID"]
	id: Scalars["ID"]
	parent?: Maybe<Node>
	children: Array<Node>
	internal: Internal
	submissions?: Maybe<Array<Maybe<PrismicVideoSubmission>>>
}

export type PrismicSubmissionTypeFirst_Publication_DateArgs = {
	formatString?: Maybe<Scalars["String"]>
	fromNow?: Maybe<Scalars["Boolean"]>
	difference?: Maybe<Scalars["String"]>
	locale?: Maybe<Scalars["String"]>
}

export type PrismicSubmissionTypeLast_Publication_DateArgs = {
	formatString?: Maybe<Scalars["String"]>
	fromNow?: Maybe<Scalars["Boolean"]>
	difference?: Maybe<Scalars["String"]>
	locale?: Maybe<Scalars["String"]>
}

export type PrismicSubmissionTypeConnection = {
	totalCount: Scalars["Int"]
	edges: Array<PrismicSubmissionTypeEdge>
	nodes: Array<PrismicSubmissionType>
	pageInfo: PageInfo
	distinct: Array<Scalars["String"]>
	max?: Maybe<Scalars["Float"]>
	min?: Maybe<Scalars["Float"]>
	sum?: Maybe<Scalars["Float"]>
	group: Array<PrismicSubmissionTypeGroupConnection>
}

export type PrismicSubmissionTypeConnectionDistinctArgs = {
	field: PrismicSubmissionTypeFieldsEnum
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

export type PrismicSubmissionTypeConnectionGroupArgs = {
	skip?: Maybe<Scalars["Int"]>
	limit?: Maybe<Scalars["Int"]>
	field: PrismicSubmissionTypeFieldsEnum
}

export type PrismicSubmissionTypeDataType = {
	end_time?: Maybe<Scalars["Date"]>
	mute_videos?: Maybe<Scalars["Boolean"]>
	name?: Maybe<PrismicStructuredTextType>
	votable?: Maybe<Scalars["Boolean"]>
}

export type PrismicSubmissionTypeDataTypeEnd_TimeArgs = {
	formatString?: Maybe<Scalars["String"]>
	fromNow?: Maybe<Scalars["Boolean"]>
	difference?: Maybe<Scalars["String"]>
	locale?: Maybe<Scalars["String"]>
}

export type PrismicSubmissionTypeDataTypeFilterInput = {
	end_time?: Maybe<DateQueryOperatorInput>
	mute_videos?: Maybe<BooleanQueryOperatorInput>
	name?: Maybe<PrismicStructuredTextTypeFilterInput>
	votable?: Maybe<BooleanQueryOperatorInput>
}

export type PrismicSubmissionTypeEdge = {
	next?: Maybe<PrismicSubmissionType>
	node: PrismicSubmissionType
	previous?: Maybe<PrismicSubmissionType>
}

export enum PrismicSubmissionTypeFieldsEnum {
	Uid = "uid",
	DataEndTime = "data___end_time",
	DataMuteVideos = "data___mute_videos",
	DataNameText = "data___name___text",
	DataNameHtml = "data___name___html",
	DataNameRichText = "data___name___richText",
	DataNameRaw = "data___name___raw",
	DataVotable = "data___votable",
	DataRaw = "dataRaw",
	PrismicId = "prismicId",
	AlternateLanguages = "alternate_languages",
	AlternateLanguagesId = "alternate_languages___id",
	AlternateLanguagesUid = "alternate_languages___uid",
	AlternateLanguagesLang = "alternate_languages___lang",
	AlternateLanguagesType = "alternate_languages___type",
	AlternateLanguagesRaw = "alternate_languages___raw",
	FirstPublicationDate = "first_publication_date",
	Href = "href",
	Lang = "lang",
	LastPublicationDate = "last_publication_date",
	Tags = "tags",
	Type = "type",
	Url = "url",
	Previewable = "_previewable",
	Id = "id",
	ParentId = "parent___id",
	ParentParentId = "parent___parent___id",
	ParentParentParentId = "parent___parent___parent___id",
	ParentParentParentChildren = "parent___parent___parent___children",
	ParentParentChildren = "parent___parent___children",
	ParentParentChildrenId = "parent___parent___children___id",
	ParentParentChildrenChildren = "parent___parent___children___children",
	ParentParentInternalContent = "parent___parent___internal___content",
	ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
	ParentParentInternalDescription = "parent___parent___internal___description",
	ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
	ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
	ParentParentInternalMediaType = "parent___parent___internal___mediaType",
	ParentParentInternalOwner = "parent___parent___internal___owner",
	ParentParentInternalType = "parent___parent___internal___type",
	ParentParentInternalContentFilePath = "parent___parent___internal___contentFilePath",
	ParentChildren = "parent___children",
	ParentChildrenId = "parent___children___id",
	ParentChildrenParentId = "parent___children___parent___id",
	ParentChildrenParentChildren = "parent___children___parent___children",
	ParentChildrenChildren = "parent___children___children",
	ParentChildrenChildrenId = "parent___children___children___id",
	ParentChildrenChildrenChildren = "parent___children___children___children",
	ParentChildrenInternalContent = "parent___children___internal___content",
	ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
	ParentChildrenInternalDescription = "parent___children___internal___description",
	ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
	ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
	ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
	ParentChildrenInternalOwner = "parent___children___internal___owner",
	ParentChildrenInternalType = "parent___children___internal___type",
	ParentChildrenInternalContentFilePath = "parent___children___internal___contentFilePath",
	ParentInternalContent = "parent___internal___content",
	ParentInternalContentDigest = "parent___internal___contentDigest",
	ParentInternalDescription = "parent___internal___description",
	ParentInternalFieldOwners = "parent___internal___fieldOwners",
	ParentInternalIgnoreType = "parent___internal___ignoreType",
	ParentInternalMediaType = "parent___internal___mediaType",
	ParentInternalOwner = "parent___internal___owner",
	ParentInternalType = "parent___internal___type",
	ParentInternalContentFilePath = "parent___internal___contentFilePath",
	Children = "children",
	ChildrenId = "children___id",
	ChildrenParentId = "children___parent___id",
	ChildrenParentParentId = "children___parent___parent___id",
	ChildrenParentParentChildren = "children___parent___parent___children",
	ChildrenParentChildren = "children___parent___children",
	ChildrenParentChildrenId = "children___parent___children___id",
	ChildrenParentChildrenChildren = "children___parent___children___children",
	ChildrenParentInternalContent = "children___parent___internal___content",
	ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
	ChildrenParentInternalDescription = "children___parent___internal___description",
	ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
	ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
	ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
	ChildrenParentInternalOwner = "children___parent___internal___owner",
	ChildrenParentInternalType = "children___parent___internal___type",
	ChildrenParentInternalContentFilePath = "children___parent___internal___contentFilePath",
	ChildrenChildren = "children___children",
	ChildrenChildrenId = "children___children___id",
	ChildrenChildrenParentId = "children___children___parent___id",
	ChildrenChildrenParentChildren = "children___children___parent___children",
	ChildrenChildrenChildren = "children___children___children",
	ChildrenChildrenChildrenId = "children___children___children___id",
	ChildrenChildrenChildrenChildren = "children___children___children___children",
	ChildrenChildrenInternalContent = "children___children___internal___content",
	ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
	ChildrenChildrenInternalDescription = "children___children___internal___description",
	ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
	ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
	ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
	ChildrenChildrenInternalOwner = "children___children___internal___owner",
	ChildrenChildrenInternalType = "children___children___internal___type",
	ChildrenChildrenInternalContentFilePath = "children___children___internal___contentFilePath",
	ChildrenInternalContent = "children___internal___content",
	ChildrenInternalContentDigest = "children___internal___contentDigest",
	ChildrenInternalDescription = "children___internal___description",
	ChildrenInternalFieldOwners = "children___internal___fieldOwners",
	ChildrenInternalIgnoreType = "children___internal___ignoreType",
	ChildrenInternalMediaType = "children___internal___mediaType",
	ChildrenInternalOwner = "children___internal___owner",
	ChildrenInternalType = "children___internal___type",
	ChildrenInternalContentFilePath = "children___internal___contentFilePath",
	InternalContent = "internal___content",
	InternalContentDigest = "internal___contentDigest",
	InternalDescription = "internal___description",
	InternalFieldOwners = "internal___fieldOwners",
	InternalIgnoreType = "internal___ignoreType",
	InternalMediaType = "internal___mediaType",
	InternalOwner = "internal___owner",
	InternalType = "internal___type",
	InternalContentFilePath = "internal___contentFilePath",
}

export type PrismicSubmissionTypeFilterInput = {
	uid?: Maybe<StringQueryOperatorInput>
	data?: Maybe<PrismicSubmissionTypeDataTypeFilterInput>
	dataRaw?: Maybe<JsonQueryOperatorInput>
	prismicId?: Maybe<IdQueryOperatorInput>
	alternate_languages?: Maybe<PrismicAlternateLanguageTypeFilterListInput>
	first_publication_date?: Maybe<DateQueryOperatorInput>
	href?: Maybe<StringQueryOperatorInput>
	lang?: Maybe<StringQueryOperatorInput>
	last_publication_date?: Maybe<DateQueryOperatorInput>
	tags?: Maybe<StringQueryOperatorInput>
	type?: Maybe<StringQueryOperatorInput>
	url?: Maybe<StringQueryOperatorInput>
	_previewable?: Maybe<IdQueryOperatorInput>
	id?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	children?: Maybe<NodeFilterListInput>
	internal?: Maybe<InternalFilterInput>
}

export type PrismicSubmissionTypeGroupConnection = {
	totalCount: Scalars["Int"]
	edges: Array<PrismicSubmissionTypeEdge>
	nodes: Array<PrismicSubmissionType>
	pageInfo: PageInfo
	distinct: Array<Scalars["String"]>
	max?: Maybe<Scalars["Float"]>
	min?: Maybe<Scalars["Float"]>
	sum?: Maybe<Scalars["Float"]>
	group: Array<PrismicSubmissionTypeGroupConnection>
	field: Scalars["String"]
	fieldValue?: Maybe<Scalars["String"]>
}

export type PrismicSubmissionTypeGroupConnectionDistinctArgs = {
	field: PrismicSubmissionTypeFieldsEnum
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

export type PrismicSubmissionTypeGroupConnectionGroupArgs = {
	skip?: Maybe<Scalars["Int"]>
	limit?: Maybe<Scalars["Int"]>
	field: PrismicSubmissionTypeFieldsEnum
}

export type PrismicSubmissionTypeSortInput = {
	fields?: Maybe<Array<Maybe<PrismicSubmissionTypeFieldsEnum>>>
	order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type PrismicTypePathType = Node & {
	kind: Scalars["String"]
	path: Array<Scalars["String"]>
	type: Scalars["String"]
	id: Scalars["ID"]
	parent?: Maybe<Node>
	children: Array<Node>
	internal: Internal
}

export type PrismicTypePathTypeConnection = {
	totalCount: Scalars["Int"]
	edges: Array<PrismicTypePathTypeEdge>
	nodes: Array<PrismicTypePathType>
	pageInfo: PageInfo
	distinct: Array<Scalars["String"]>
	max?: Maybe<Scalars["Float"]>
	min?: Maybe<Scalars["Float"]>
	sum?: Maybe<Scalars["Float"]>
	group: Array<PrismicTypePathTypeGroupConnection>
}

export type PrismicTypePathTypeConnectionDistinctArgs = {
	field: PrismicTypePathTypeFieldsEnum
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

export type PrismicTypePathTypeConnectionGroupArgs = {
	skip?: Maybe<Scalars["Int"]>
	limit?: Maybe<Scalars["Int"]>
	field: PrismicTypePathTypeFieldsEnum
}

export type PrismicTypePathTypeEdge = {
	next?: Maybe<PrismicTypePathType>
	node: PrismicTypePathType
	previous?: Maybe<PrismicTypePathType>
}

export enum PrismicTypePathTypeFieldsEnum {
	Kind = "kind",
	Path = "path",
	Type = "type",
	Id = "id",
	ParentId = "parent___id",
	ParentParentId = "parent___parent___id",
	ParentParentParentId = "parent___parent___parent___id",
	ParentParentParentChildren = "parent___parent___parent___children",
	ParentParentChildren = "parent___parent___children",
	ParentParentChildrenId = "parent___parent___children___id",
	ParentParentChildrenChildren = "parent___parent___children___children",
	ParentParentInternalContent = "parent___parent___internal___content",
	ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
	ParentParentInternalDescription = "parent___parent___internal___description",
	ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
	ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
	ParentParentInternalMediaType = "parent___parent___internal___mediaType",
	ParentParentInternalOwner = "parent___parent___internal___owner",
	ParentParentInternalType = "parent___parent___internal___type",
	ParentParentInternalContentFilePath = "parent___parent___internal___contentFilePath",
	ParentChildren = "parent___children",
	ParentChildrenId = "parent___children___id",
	ParentChildrenParentId = "parent___children___parent___id",
	ParentChildrenParentChildren = "parent___children___parent___children",
	ParentChildrenChildren = "parent___children___children",
	ParentChildrenChildrenId = "parent___children___children___id",
	ParentChildrenChildrenChildren = "parent___children___children___children",
	ParentChildrenInternalContent = "parent___children___internal___content",
	ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
	ParentChildrenInternalDescription = "parent___children___internal___description",
	ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
	ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
	ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
	ParentChildrenInternalOwner = "parent___children___internal___owner",
	ParentChildrenInternalType = "parent___children___internal___type",
	ParentChildrenInternalContentFilePath = "parent___children___internal___contentFilePath",
	ParentInternalContent = "parent___internal___content",
	ParentInternalContentDigest = "parent___internal___contentDigest",
	ParentInternalDescription = "parent___internal___description",
	ParentInternalFieldOwners = "parent___internal___fieldOwners",
	ParentInternalIgnoreType = "parent___internal___ignoreType",
	ParentInternalMediaType = "parent___internal___mediaType",
	ParentInternalOwner = "parent___internal___owner",
	ParentInternalType = "parent___internal___type",
	ParentInternalContentFilePath = "parent___internal___contentFilePath",
	Children = "children",
	ChildrenId = "children___id",
	ChildrenParentId = "children___parent___id",
	ChildrenParentParentId = "children___parent___parent___id",
	ChildrenParentParentChildren = "children___parent___parent___children",
	ChildrenParentChildren = "children___parent___children",
	ChildrenParentChildrenId = "children___parent___children___id",
	ChildrenParentChildrenChildren = "children___parent___children___children",
	ChildrenParentInternalContent = "children___parent___internal___content",
	ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
	ChildrenParentInternalDescription = "children___parent___internal___description",
	ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
	ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
	ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
	ChildrenParentInternalOwner = "children___parent___internal___owner",
	ChildrenParentInternalType = "children___parent___internal___type",
	ChildrenParentInternalContentFilePath = "children___parent___internal___contentFilePath",
	ChildrenChildren = "children___children",
	ChildrenChildrenId = "children___children___id",
	ChildrenChildrenParentId = "children___children___parent___id",
	ChildrenChildrenParentChildren = "children___children___parent___children",
	ChildrenChildrenChildren = "children___children___children",
	ChildrenChildrenChildrenId = "children___children___children___id",
	ChildrenChildrenChildrenChildren = "children___children___children___children",
	ChildrenChildrenInternalContent = "children___children___internal___content",
	ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
	ChildrenChildrenInternalDescription = "children___children___internal___description",
	ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
	ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
	ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
	ChildrenChildrenInternalOwner = "children___children___internal___owner",
	ChildrenChildrenInternalType = "children___children___internal___type",
	ChildrenChildrenInternalContentFilePath = "children___children___internal___contentFilePath",
	ChildrenInternalContent = "children___internal___content",
	ChildrenInternalContentDigest = "children___internal___contentDigest",
	ChildrenInternalDescription = "children___internal___description",
	ChildrenInternalFieldOwners = "children___internal___fieldOwners",
	ChildrenInternalIgnoreType = "children___internal___ignoreType",
	ChildrenInternalMediaType = "children___internal___mediaType",
	ChildrenInternalOwner = "children___internal___owner",
	ChildrenInternalType = "children___internal___type",
	ChildrenInternalContentFilePath = "children___internal___contentFilePath",
	InternalContent = "internal___content",
	InternalContentDigest = "internal___contentDigest",
	InternalDescription = "internal___description",
	InternalFieldOwners = "internal___fieldOwners",
	InternalIgnoreType = "internal___ignoreType",
	InternalMediaType = "internal___mediaType",
	InternalOwner = "internal___owner",
	InternalType = "internal___type",
	InternalContentFilePath = "internal___contentFilePath",
}

export type PrismicTypePathTypeFilterInput = {
	kind?: Maybe<StringQueryOperatorInput>
	path?: Maybe<StringQueryOperatorInput>
	type?: Maybe<StringQueryOperatorInput>
	id?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	children?: Maybe<NodeFilterListInput>
	internal?: Maybe<InternalFilterInput>
}

export type PrismicTypePathTypeGroupConnection = {
	totalCount: Scalars["Int"]
	edges: Array<PrismicTypePathTypeEdge>
	nodes: Array<PrismicTypePathType>
	pageInfo: PageInfo
	distinct: Array<Scalars["String"]>
	max?: Maybe<Scalars["Float"]>
	min?: Maybe<Scalars["Float"]>
	sum?: Maybe<Scalars["Float"]>
	group: Array<PrismicTypePathTypeGroupConnection>
	field: Scalars["String"]
	fieldValue?: Maybe<Scalars["String"]>
}

export type PrismicTypePathTypeGroupConnectionDistinctArgs = {
	field: PrismicTypePathTypeFieldsEnum
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

export type PrismicTypePathTypeGroupConnectionGroupArgs = {
	skip?: Maybe<Scalars["Int"]>
	limit?: Maybe<Scalars["Int"]>
	field: PrismicTypePathTypeFieldsEnum
}

export type PrismicTypePathTypeSortInput = {
	fields?: Maybe<Array<Maybe<PrismicTypePathTypeFieldsEnum>>>
	order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type PrismicVideoSubmission = Node & {
	uid: Scalars["String"]
	data: PrismicVideoSubmissionDataType
	dataRaw: Scalars["JSON"]
	prismicId: Scalars["ID"]
	alternate_languages: Array<PrismicAlternateLanguageType>
	first_publication_date: Scalars["Date"]
	href: Scalars["String"]
	lang: Scalars["String"]
	last_publication_date: Scalars["Date"]
	tags: Array<Scalars["String"]>
	type: Scalars["String"]
	url?: Maybe<Scalars["String"]>
	_previewable: Scalars["ID"]
	id: Scalars["ID"]
	parent?: Maybe<Node>
	children: Array<Node>
	internal: Internal
}

export type PrismicVideoSubmissionFirst_Publication_DateArgs = {
	formatString?: Maybe<Scalars["String"]>
	fromNow?: Maybe<Scalars["Boolean"]>
	difference?: Maybe<Scalars["String"]>
	locale?: Maybe<Scalars["String"]>
}

export type PrismicVideoSubmissionLast_Publication_DateArgs = {
	formatString?: Maybe<Scalars["String"]>
	fromNow?: Maybe<Scalars["Boolean"]>
	difference?: Maybe<Scalars["String"]>
	locale?: Maybe<Scalars["String"]>
}

export type PrismicVideoSubmissionConnection = {
	totalCount: Scalars["Int"]
	edges: Array<PrismicVideoSubmissionEdge>
	nodes: Array<PrismicVideoSubmission>
	pageInfo: PageInfo
	distinct: Array<Scalars["String"]>
	max?: Maybe<Scalars["Float"]>
	min?: Maybe<Scalars["Float"]>
	sum?: Maybe<Scalars["Float"]>
	group: Array<PrismicVideoSubmissionGroupConnection>
}

export type PrismicVideoSubmissionConnectionDistinctArgs = {
	field: PrismicVideoSubmissionFieldsEnum
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

export type PrismicVideoSubmissionConnectionGroupArgs = {
	skip?: Maybe<Scalars["Int"]>
	limit?: Maybe<Scalars["Int"]>
	field: PrismicVideoSubmissionFieldsEnum
}

export type PrismicVideoSubmissionDataType = {
	description?: Maybe<PrismicStructuredTextType>
	name?: Maybe<PrismicStructuredTextType>
	subtitle?: Maybe<PrismicStructuredTextType>
	type?: Maybe<PrismicLinkType>
	video_thumbnail?: Maybe<PrismicVideoSubmissionDataVideoThumbnailImageType>
	video_url?: Maybe<Scalars["String"]>
}

export type PrismicVideoSubmissionDataTypeFilterInput = {
	description?: Maybe<PrismicStructuredTextTypeFilterInput>
	name?: Maybe<PrismicStructuredTextTypeFilterInput>
	subtitle?: Maybe<PrismicStructuredTextTypeFilterInput>
	type?: Maybe<PrismicLinkTypeFilterInput>
	video_thumbnail?: Maybe<PrismicVideoSubmissionDataVideoThumbnailImageTypeFilterInput>
	video_url?: Maybe<StringQueryOperatorInput>
}

export type PrismicVideoSubmissionDataVideoThumbnailImageType = {
	alt?: Maybe<Scalars["String"]>
	copyright?: Maybe<Scalars["String"]>
	dimensions?: Maybe<PrismicImageDimensionsType>
	/** A plain imgix URL with the URL and params applied. */
	url?: Maybe<Scalars["String"]>
	/** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
	fixed?: Maybe<ImgixFixed>
	/** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
	fluid?: Maybe<ImgixFluid>
	gatsbyImageData?: Maybe<Scalars["JSON"]>
	localFile?: Maybe<File>
}

export type PrismicVideoSubmissionDataVideoThumbnailImageTypeUrlArgs = {
	imgixParams?: Maybe<ImgixParamsInput>
}

export type PrismicVideoSubmissionDataVideoThumbnailImageTypeFixedArgs = {
	width?: Maybe<Scalars["Int"]>
	height?: Maybe<Scalars["Int"]>
	quality?: Maybe<Scalars["Int"]>
	imgixParams?: Maybe<ImgixParamsInput>
	placeholderImgixParams?: Maybe<ImgixParamsInput>
}

export type PrismicVideoSubmissionDataVideoThumbnailImageTypeFluidArgs = {
	imgixParams?: Maybe<ImgixParamsInput>
	maxWidth?: Maybe<Scalars["Int"]>
	maxHeight?: Maybe<Scalars["Int"]>
	srcSetBreakpoints?: Maybe<Array<Maybe<Scalars["Int"]>>>
	placeholderImgixParams?: Maybe<ImgixParamsInput>
}

export type PrismicVideoSubmissionDataVideoThumbnailImageTypeGatsbyImageDataArgs =
	{
		layout?: Maybe<GatsbyImageLayout>
		width?: Maybe<Scalars["Int"]>
		height?: Maybe<Scalars["Int"]>
		aspectRatio?: Maybe<Scalars["Float"]>
		outputPixelDensities?: Maybe<Array<Maybe<Scalars["Float"]>>>
		breakpoints?: Maybe<Array<Maybe<Scalars["Int"]>>>
		sizes?: Maybe<Scalars["String"]>
		backgroundColor?: Maybe<Scalars["String"]>
		imgixParams?: Maybe<ImgixParamsInput>
		placeholderImgixParams?: Maybe<ImgixParamsInput>
		placeholder?: Maybe<ImgixPlaceholder>
		widthTolerance?: Maybe<Scalars["Float"]>
		srcSetMinWidth?: Maybe<Scalars["Int"]>
		srcSetMaxWidth?: Maybe<Scalars["Int"]>
	}

export type PrismicVideoSubmissionDataVideoThumbnailImageTypeFilterInput = {
	alt?: Maybe<StringQueryOperatorInput>
	copyright?: Maybe<StringQueryOperatorInput>
	dimensions?: Maybe<PrismicImageDimensionsTypeFilterInput>
	url?: Maybe<StringQueryOperatorInput>
	fixed?: Maybe<ImgixFixedFilterInput>
	fluid?: Maybe<ImgixFluidFilterInput>
	gatsbyImageData?: Maybe<JsonQueryOperatorInput>
	localFile?: Maybe<FileFilterInput>
}

export type PrismicVideoSubmissionEdge = {
	next?: Maybe<PrismicVideoSubmission>
	node: PrismicVideoSubmission
	previous?: Maybe<PrismicVideoSubmission>
}

export enum PrismicVideoSubmissionFieldsEnum {
	Uid = "uid",
	DataDescriptionText = "data___description___text",
	DataDescriptionHtml = "data___description___html",
	DataDescriptionRichText = "data___description___richText",
	DataDescriptionRaw = "data___description___raw",
	DataNameText = "data___name___text",
	DataNameHtml = "data___name___html",
	DataNameRichText = "data___name___richText",
	DataNameRaw = "data___name___raw",
	DataSubtitleText = "data___subtitle___text",
	DataSubtitleHtml = "data___subtitle___html",
	DataSubtitleRichText = "data___subtitle___richText",
	DataSubtitleRaw = "data___subtitle___raw",
	DataTypeLinkType = "data___type___link_type",
	DataTypeIsBroken = "data___type___isBroken",
	DataTypeUrl = "data___type___url",
	DataTypeTarget = "data___type___target",
	DataTypeSize = "data___type___size",
	DataTypeId = "data___type___id",
	DataTypeType = "data___type___type",
	DataTypeTags = "data___type___tags",
	DataTypeLang = "data___type___lang",
	DataTypeSlug = "data___type___slug",
	DataTypeUid = "data___type___uid",
	DataTypeLocalFileSourceInstanceName = "data___type___localFile___sourceInstanceName",
	DataTypeLocalFileAbsolutePath = "data___type___localFile___absolutePath",
	DataTypeLocalFileRelativePath = "data___type___localFile___relativePath",
	DataTypeLocalFileExtension = "data___type___localFile___extension",
	DataTypeLocalFileSize = "data___type___localFile___size",
	DataTypeLocalFilePrettySize = "data___type___localFile___prettySize",
	DataTypeLocalFileModifiedTime = "data___type___localFile___modifiedTime",
	DataTypeLocalFileAccessTime = "data___type___localFile___accessTime",
	DataTypeLocalFileChangeTime = "data___type___localFile___changeTime",
	DataTypeLocalFileBirthTime = "data___type___localFile___birthTime",
	DataTypeLocalFileRoot = "data___type___localFile___root",
	DataTypeLocalFileDir = "data___type___localFile___dir",
	DataTypeLocalFileBase = "data___type___localFile___base",
	DataTypeLocalFileExt = "data___type___localFile___ext",
	DataTypeLocalFileName = "data___type___localFile___name",
	DataTypeLocalFileRelativeDirectory = "data___type___localFile___relativeDirectory",
	DataTypeLocalFileDev = "data___type___localFile___dev",
	DataTypeLocalFileMode = "data___type___localFile___mode",
	DataTypeLocalFileNlink = "data___type___localFile___nlink",
	DataTypeLocalFileUid = "data___type___localFile___uid",
	DataTypeLocalFileGid = "data___type___localFile___gid",
	DataTypeLocalFileRdev = "data___type___localFile___rdev",
	DataTypeLocalFileIno = "data___type___localFile___ino",
	DataTypeLocalFileAtimeMs = "data___type___localFile___atimeMs",
	DataTypeLocalFileMtimeMs = "data___type___localFile___mtimeMs",
	DataTypeLocalFileCtimeMs = "data___type___localFile___ctimeMs",
	DataTypeLocalFileAtime = "data___type___localFile___atime",
	DataTypeLocalFileMtime = "data___type___localFile___mtime",
	DataTypeLocalFileCtime = "data___type___localFile___ctime",
	DataTypeLocalFileBirthtime = "data___type___localFile___birthtime",
	DataTypeLocalFileBirthtimeMs = "data___type___localFile___birthtimeMs",
	DataTypeLocalFileId = "data___type___localFile___id",
	DataTypeLocalFileChildren = "data___type___localFile___children",
	DataTypeRaw = "data___type___raw",
	DataVideoThumbnailAlt = "data___video_thumbnail___alt",
	DataVideoThumbnailCopyright = "data___video_thumbnail___copyright",
	DataVideoThumbnailDimensionsWidth = "data___video_thumbnail___dimensions___width",
	DataVideoThumbnailDimensionsHeight = "data___video_thumbnail___dimensions___height",
	DataVideoThumbnailUrl = "data___video_thumbnail___url",
	DataVideoThumbnailFixedBase64 = "data___video_thumbnail___fixed___base64",
	DataVideoThumbnailFixedSrc = "data___video_thumbnail___fixed___src",
	DataVideoThumbnailFixedSrcSet = "data___video_thumbnail___fixed___srcSet",
	DataVideoThumbnailFixedSrcWebp = "data___video_thumbnail___fixed___srcWebp",
	DataVideoThumbnailFixedSrcSetWebp = "data___video_thumbnail___fixed___srcSetWebp",
	DataVideoThumbnailFixedSizes = "data___video_thumbnail___fixed___sizes",
	DataVideoThumbnailFixedWidth = "data___video_thumbnail___fixed___width",
	DataVideoThumbnailFixedHeight = "data___video_thumbnail___fixed___height",
	DataVideoThumbnailFluidBase64 = "data___video_thumbnail___fluid___base64",
	DataVideoThumbnailFluidSrc = "data___video_thumbnail___fluid___src",
	DataVideoThumbnailFluidSrcSet = "data___video_thumbnail___fluid___srcSet",
	DataVideoThumbnailFluidSrcWebp = "data___video_thumbnail___fluid___srcWebp",
	DataVideoThumbnailFluidSrcSetWebp = "data___video_thumbnail___fluid___srcSetWebp",
	DataVideoThumbnailFluidSizes = "data___video_thumbnail___fluid___sizes",
	DataVideoThumbnailFluidAspectRatio = "data___video_thumbnail___fluid___aspectRatio",
	DataVideoThumbnailGatsbyImageData = "data___video_thumbnail___gatsbyImageData",
	DataVideoThumbnailLocalFileSourceInstanceName = "data___video_thumbnail___localFile___sourceInstanceName",
	DataVideoThumbnailLocalFileAbsolutePath = "data___video_thumbnail___localFile___absolutePath",
	DataVideoThumbnailLocalFileRelativePath = "data___video_thumbnail___localFile___relativePath",
	DataVideoThumbnailLocalFileExtension = "data___video_thumbnail___localFile___extension",
	DataVideoThumbnailLocalFileSize = "data___video_thumbnail___localFile___size",
	DataVideoThumbnailLocalFilePrettySize = "data___video_thumbnail___localFile___prettySize",
	DataVideoThumbnailLocalFileModifiedTime = "data___video_thumbnail___localFile___modifiedTime",
	DataVideoThumbnailLocalFileAccessTime = "data___video_thumbnail___localFile___accessTime",
	DataVideoThumbnailLocalFileChangeTime = "data___video_thumbnail___localFile___changeTime",
	DataVideoThumbnailLocalFileBirthTime = "data___video_thumbnail___localFile___birthTime",
	DataVideoThumbnailLocalFileRoot = "data___video_thumbnail___localFile___root",
	DataVideoThumbnailLocalFileDir = "data___video_thumbnail___localFile___dir",
	DataVideoThumbnailLocalFileBase = "data___video_thumbnail___localFile___base",
	DataVideoThumbnailLocalFileExt = "data___video_thumbnail___localFile___ext",
	DataVideoThumbnailLocalFileName = "data___video_thumbnail___localFile___name",
	DataVideoThumbnailLocalFileRelativeDirectory = "data___video_thumbnail___localFile___relativeDirectory",
	DataVideoThumbnailLocalFileDev = "data___video_thumbnail___localFile___dev",
	DataVideoThumbnailLocalFileMode = "data___video_thumbnail___localFile___mode",
	DataVideoThumbnailLocalFileNlink = "data___video_thumbnail___localFile___nlink",
	DataVideoThumbnailLocalFileUid = "data___video_thumbnail___localFile___uid",
	DataVideoThumbnailLocalFileGid = "data___video_thumbnail___localFile___gid",
	DataVideoThumbnailLocalFileRdev = "data___video_thumbnail___localFile___rdev",
	DataVideoThumbnailLocalFileIno = "data___video_thumbnail___localFile___ino",
	DataVideoThumbnailLocalFileAtimeMs = "data___video_thumbnail___localFile___atimeMs",
	DataVideoThumbnailLocalFileMtimeMs = "data___video_thumbnail___localFile___mtimeMs",
	DataVideoThumbnailLocalFileCtimeMs = "data___video_thumbnail___localFile___ctimeMs",
	DataVideoThumbnailLocalFileAtime = "data___video_thumbnail___localFile___atime",
	DataVideoThumbnailLocalFileMtime = "data___video_thumbnail___localFile___mtime",
	DataVideoThumbnailLocalFileCtime = "data___video_thumbnail___localFile___ctime",
	DataVideoThumbnailLocalFileBirthtime = "data___video_thumbnail___localFile___birthtime",
	DataVideoThumbnailLocalFileBirthtimeMs = "data___video_thumbnail___localFile___birthtimeMs",
	DataVideoThumbnailLocalFileId = "data___video_thumbnail___localFile___id",
	DataVideoThumbnailLocalFileChildren = "data___video_thumbnail___localFile___children",
	DataVideoUrl = "data___video_url",
	DataRaw = "dataRaw",
	PrismicId = "prismicId",
	AlternateLanguages = "alternate_languages",
	AlternateLanguagesId = "alternate_languages___id",
	AlternateLanguagesUid = "alternate_languages___uid",
	AlternateLanguagesLang = "alternate_languages___lang",
	AlternateLanguagesType = "alternate_languages___type",
	AlternateLanguagesRaw = "alternate_languages___raw",
	FirstPublicationDate = "first_publication_date",
	Href = "href",
	Lang = "lang",
	LastPublicationDate = "last_publication_date",
	Tags = "tags",
	Type = "type",
	Url = "url",
	Previewable = "_previewable",
	Id = "id",
	ParentId = "parent___id",
	ParentParentId = "parent___parent___id",
	ParentParentParentId = "parent___parent___parent___id",
	ParentParentParentChildren = "parent___parent___parent___children",
	ParentParentChildren = "parent___parent___children",
	ParentParentChildrenId = "parent___parent___children___id",
	ParentParentChildrenChildren = "parent___parent___children___children",
	ParentParentInternalContent = "parent___parent___internal___content",
	ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
	ParentParentInternalDescription = "parent___parent___internal___description",
	ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
	ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
	ParentParentInternalMediaType = "parent___parent___internal___mediaType",
	ParentParentInternalOwner = "parent___parent___internal___owner",
	ParentParentInternalType = "parent___parent___internal___type",
	ParentParentInternalContentFilePath = "parent___parent___internal___contentFilePath",
	ParentChildren = "parent___children",
	ParentChildrenId = "parent___children___id",
	ParentChildrenParentId = "parent___children___parent___id",
	ParentChildrenParentChildren = "parent___children___parent___children",
	ParentChildrenChildren = "parent___children___children",
	ParentChildrenChildrenId = "parent___children___children___id",
	ParentChildrenChildrenChildren = "parent___children___children___children",
	ParentChildrenInternalContent = "parent___children___internal___content",
	ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
	ParentChildrenInternalDescription = "parent___children___internal___description",
	ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
	ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
	ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
	ParentChildrenInternalOwner = "parent___children___internal___owner",
	ParentChildrenInternalType = "parent___children___internal___type",
	ParentChildrenInternalContentFilePath = "parent___children___internal___contentFilePath",
	ParentInternalContent = "parent___internal___content",
	ParentInternalContentDigest = "parent___internal___contentDigest",
	ParentInternalDescription = "parent___internal___description",
	ParentInternalFieldOwners = "parent___internal___fieldOwners",
	ParentInternalIgnoreType = "parent___internal___ignoreType",
	ParentInternalMediaType = "parent___internal___mediaType",
	ParentInternalOwner = "parent___internal___owner",
	ParentInternalType = "parent___internal___type",
	ParentInternalContentFilePath = "parent___internal___contentFilePath",
	Children = "children",
	ChildrenId = "children___id",
	ChildrenParentId = "children___parent___id",
	ChildrenParentParentId = "children___parent___parent___id",
	ChildrenParentParentChildren = "children___parent___parent___children",
	ChildrenParentChildren = "children___parent___children",
	ChildrenParentChildrenId = "children___parent___children___id",
	ChildrenParentChildrenChildren = "children___parent___children___children",
	ChildrenParentInternalContent = "children___parent___internal___content",
	ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
	ChildrenParentInternalDescription = "children___parent___internal___description",
	ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
	ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
	ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
	ChildrenParentInternalOwner = "children___parent___internal___owner",
	ChildrenParentInternalType = "children___parent___internal___type",
	ChildrenParentInternalContentFilePath = "children___parent___internal___contentFilePath",
	ChildrenChildren = "children___children",
	ChildrenChildrenId = "children___children___id",
	ChildrenChildrenParentId = "children___children___parent___id",
	ChildrenChildrenParentChildren = "children___children___parent___children",
	ChildrenChildrenChildren = "children___children___children",
	ChildrenChildrenChildrenId = "children___children___children___id",
	ChildrenChildrenChildrenChildren = "children___children___children___children",
	ChildrenChildrenInternalContent = "children___children___internal___content",
	ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
	ChildrenChildrenInternalDescription = "children___children___internal___description",
	ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
	ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
	ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
	ChildrenChildrenInternalOwner = "children___children___internal___owner",
	ChildrenChildrenInternalType = "children___children___internal___type",
	ChildrenChildrenInternalContentFilePath = "children___children___internal___contentFilePath",
	ChildrenInternalContent = "children___internal___content",
	ChildrenInternalContentDigest = "children___internal___contentDigest",
	ChildrenInternalDescription = "children___internal___description",
	ChildrenInternalFieldOwners = "children___internal___fieldOwners",
	ChildrenInternalIgnoreType = "children___internal___ignoreType",
	ChildrenInternalMediaType = "children___internal___mediaType",
	ChildrenInternalOwner = "children___internal___owner",
	ChildrenInternalType = "children___internal___type",
	ChildrenInternalContentFilePath = "children___internal___contentFilePath",
	InternalContent = "internal___content",
	InternalContentDigest = "internal___contentDigest",
	InternalDescription = "internal___description",
	InternalFieldOwners = "internal___fieldOwners",
	InternalIgnoreType = "internal___ignoreType",
	InternalMediaType = "internal___mediaType",
	InternalOwner = "internal___owner",
	InternalType = "internal___type",
	InternalContentFilePath = "internal___contentFilePath",
}

export type PrismicVideoSubmissionFilterInput = {
	uid?: Maybe<StringQueryOperatorInput>
	data?: Maybe<PrismicVideoSubmissionDataTypeFilterInput>
	dataRaw?: Maybe<JsonQueryOperatorInput>
	prismicId?: Maybe<IdQueryOperatorInput>
	alternate_languages?: Maybe<PrismicAlternateLanguageTypeFilterListInput>
	first_publication_date?: Maybe<DateQueryOperatorInput>
	href?: Maybe<StringQueryOperatorInput>
	lang?: Maybe<StringQueryOperatorInput>
	last_publication_date?: Maybe<DateQueryOperatorInput>
	tags?: Maybe<StringQueryOperatorInput>
	type?: Maybe<StringQueryOperatorInput>
	url?: Maybe<StringQueryOperatorInput>
	_previewable?: Maybe<IdQueryOperatorInput>
	id?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	children?: Maybe<NodeFilterListInput>
	internal?: Maybe<InternalFilterInput>
}

export type PrismicVideoSubmissionGroupConnection = {
	totalCount: Scalars["Int"]
	edges: Array<PrismicVideoSubmissionEdge>
	nodes: Array<PrismicVideoSubmission>
	pageInfo: PageInfo
	distinct: Array<Scalars["String"]>
	max?: Maybe<Scalars["Float"]>
	min?: Maybe<Scalars["Float"]>
	sum?: Maybe<Scalars["Float"]>
	group: Array<PrismicVideoSubmissionGroupConnection>
	field: Scalars["String"]
	fieldValue?: Maybe<Scalars["String"]>
}

export type PrismicVideoSubmissionGroupConnectionDistinctArgs = {
	field: PrismicVideoSubmissionFieldsEnum
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

export type PrismicVideoSubmissionGroupConnectionGroupArgs = {
	skip?: Maybe<Scalars["Int"]>
	limit?: Maybe<Scalars["Int"]>
	field: PrismicVideoSubmissionFieldsEnum
}

export type PrismicVideoSubmissionSortInput = {
	fields?: Maybe<Array<Maybe<PrismicVideoSubmissionFieldsEnum>>>
	order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type Query = {
	file?: Maybe<File>
	allFile: FileConnection
	directory?: Maybe<Directory>
	allDirectory: DirectoryConnection
	site?: Maybe<Site>
	allSite: SiteConnection
	siteFunction?: Maybe<SiteFunction>
	allSiteFunction: SiteFunctionConnection
	sitePage?: Maybe<SitePage>
	allSitePage: SitePageConnection
	sitePlugin?: Maybe<SitePlugin>
	allSitePlugin: SitePluginConnection
	siteBuildMetadata?: Maybe<SiteBuildMetadata>
	allSiteBuildMetadata: SiteBuildMetadataConnection
	prismicEmbedType?: Maybe<PrismicEmbedType>
	allPrismicEmbedType: PrismicEmbedTypeConnection
	prismicTypePathType?: Maybe<PrismicTypePathType>
	allPrismicTypePathType: PrismicTypePathTypeConnection
	prismicSubmissionType?: Maybe<PrismicSubmissionType>
	allPrismicSubmissionType: PrismicSubmissionTypeConnection
	prismicNavigation?: Maybe<PrismicNavigation>
	allPrismicNavigation: PrismicNavigationConnection
	prismicSponsor?: Maybe<PrismicSponsor>
	allPrismicSponsor: PrismicSponsorConnection
	prismicVideoSubmission?: Maybe<PrismicVideoSubmission>
	allPrismicVideoSubmission: PrismicVideoSubmissionConnection
	prismicSponsorsList?: Maybe<PrismicSponsorsList>
	allPrismicSponsorsList: PrismicSponsorsListConnection
	prismicSettings?: Maybe<PrismicSettings>
	allPrismicSettings: PrismicSettingsConnection
	prismicEvent?: Maybe<PrismicEvent>
	allPrismicEvent: PrismicEventConnection
	prismicPage?: Maybe<PrismicPage>
	allPrismicPage: PrismicPageConnection
}

export type QueryFileArgs = {
	sourceInstanceName?: Maybe<StringQueryOperatorInput>
	absolutePath?: Maybe<StringQueryOperatorInput>
	relativePath?: Maybe<StringQueryOperatorInput>
	extension?: Maybe<StringQueryOperatorInput>
	size?: Maybe<IntQueryOperatorInput>
	prettySize?: Maybe<StringQueryOperatorInput>
	modifiedTime?: Maybe<DateQueryOperatorInput>
	accessTime?: Maybe<DateQueryOperatorInput>
	changeTime?: Maybe<DateQueryOperatorInput>
	birthTime?: Maybe<DateQueryOperatorInput>
	root?: Maybe<StringQueryOperatorInput>
	dir?: Maybe<StringQueryOperatorInput>
	base?: Maybe<StringQueryOperatorInput>
	ext?: Maybe<StringQueryOperatorInput>
	name?: Maybe<StringQueryOperatorInput>
	relativeDirectory?: Maybe<StringQueryOperatorInput>
	dev?: Maybe<IntQueryOperatorInput>
	mode?: Maybe<IntQueryOperatorInput>
	nlink?: Maybe<IntQueryOperatorInput>
	uid?: Maybe<IntQueryOperatorInput>
	gid?: Maybe<IntQueryOperatorInput>
	rdev?: Maybe<IntQueryOperatorInput>
	ino?: Maybe<FloatQueryOperatorInput>
	atimeMs?: Maybe<FloatQueryOperatorInput>
	mtimeMs?: Maybe<FloatQueryOperatorInput>
	ctimeMs?: Maybe<FloatQueryOperatorInput>
	atime?: Maybe<DateQueryOperatorInput>
	mtime?: Maybe<DateQueryOperatorInput>
	ctime?: Maybe<DateQueryOperatorInput>
	birthtime?: Maybe<DateQueryOperatorInput>
	birthtimeMs?: Maybe<FloatQueryOperatorInput>
	id?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	children?: Maybe<NodeFilterListInput>
	internal?: Maybe<InternalFilterInput>
}

export type QueryAllFileArgs = {
	filter?: Maybe<FileFilterInput>
	sort?: Maybe<FileSortInput>
	skip?: Maybe<Scalars["Int"]>
	limit?: Maybe<Scalars["Int"]>
}

export type QueryDirectoryArgs = {
	sourceInstanceName?: Maybe<StringQueryOperatorInput>
	absolutePath?: Maybe<StringQueryOperatorInput>
	relativePath?: Maybe<StringQueryOperatorInput>
	extension?: Maybe<StringQueryOperatorInput>
	size?: Maybe<IntQueryOperatorInput>
	prettySize?: Maybe<StringQueryOperatorInput>
	modifiedTime?: Maybe<DateQueryOperatorInput>
	accessTime?: Maybe<DateQueryOperatorInput>
	changeTime?: Maybe<DateQueryOperatorInput>
	birthTime?: Maybe<DateQueryOperatorInput>
	root?: Maybe<StringQueryOperatorInput>
	dir?: Maybe<StringQueryOperatorInput>
	base?: Maybe<StringQueryOperatorInput>
	ext?: Maybe<StringQueryOperatorInput>
	name?: Maybe<StringQueryOperatorInput>
	relativeDirectory?: Maybe<StringQueryOperatorInput>
	dev?: Maybe<IntQueryOperatorInput>
	mode?: Maybe<IntQueryOperatorInput>
	nlink?: Maybe<IntQueryOperatorInput>
	uid?: Maybe<IntQueryOperatorInput>
	gid?: Maybe<IntQueryOperatorInput>
	rdev?: Maybe<IntQueryOperatorInput>
	ino?: Maybe<FloatQueryOperatorInput>
	atimeMs?: Maybe<FloatQueryOperatorInput>
	mtimeMs?: Maybe<FloatQueryOperatorInput>
	ctimeMs?: Maybe<FloatQueryOperatorInput>
	atime?: Maybe<DateQueryOperatorInput>
	mtime?: Maybe<DateQueryOperatorInput>
	ctime?: Maybe<DateQueryOperatorInput>
	birthtime?: Maybe<DateQueryOperatorInput>
	birthtimeMs?: Maybe<FloatQueryOperatorInput>
	id?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	children?: Maybe<NodeFilterListInput>
	internal?: Maybe<InternalFilterInput>
}

export type QueryAllDirectoryArgs = {
	filter?: Maybe<DirectoryFilterInput>
	sort?: Maybe<DirectorySortInput>
	skip?: Maybe<Scalars["Int"]>
	limit?: Maybe<Scalars["Int"]>
}

export type QuerySiteArgs = {
	buildTime?: Maybe<DateQueryOperatorInput>
	siteMetadata?: Maybe<SiteSiteMetadataFilterInput>
	port?: Maybe<IntQueryOperatorInput>
	host?: Maybe<StringQueryOperatorInput>
	flags?: Maybe<SiteFlagsFilterInput>
	polyfill?: Maybe<BooleanQueryOperatorInput>
	pathPrefix?: Maybe<StringQueryOperatorInput>
	jsxRuntime?: Maybe<StringQueryOperatorInput>
	trailingSlash?: Maybe<StringQueryOperatorInput>
	graphqlTypegen?: Maybe<BooleanQueryOperatorInput>
	id?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	children?: Maybe<NodeFilterListInput>
	internal?: Maybe<InternalFilterInput>
}

export type QueryAllSiteArgs = {
	filter?: Maybe<SiteFilterInput>
	sort?: Maybe<SiteSortInput>
	skip?: Maybe<Scalars["Int"]>
	limit?: Maybe<Scalars["Int"]>
}

export type QuerySiteFunctionArgs = {
	functionRoute?: Maybe<StringQueryOperatorInput>
	pluginName?: Maybe<StringQueryOperatorInput>
	originalAbsoluteFilePath?: Maybe<StringQueryOperatorInput>
	originalRelativeFilePath?: Maybe<StringQueryOperatorInput>
	relativeCompiledFilePath?: Maybe<StringQueryOperatorInput>
	absoluteCompiledFilePath?: Maybe<StringQueryOperatorInput>
	matchPath?: Maybe<StringQueryOperatorInput>
	id?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	children?: Maybe<NodeFilterListInput>
	internal?: Maybe<InternalFilterInput>
}

export type QueryAllSiteFunctionArgs = {
	filter?: Maybe<SiteFunctionFilterInput>
	sort?: Maybe<SiteFunctionSortInput>
	skip?: Maybe<Scalars["Int"]>
	limit?: Maybe<Scalars["Int"]>
}

export type QuerySitePageArgs = {
	path?: Maybe<StringQueryOperatorInput>
	component?: Maybe<StringQueryOperatorInput>
	internalComponentName?: Maybe<StringQueryOperatorInput>
	componentChunkName?: Maybe<StringQueryOperatorInput>
	matchPath?: Maybe<StringQueryOperatorInput>
	pageContext?: Maybe<JsonQueryOperatorInput>
	pluginCreator?: Maybe<SitePluginFilterInput>
	id?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	children?: Maybe<NodeFilterListInput>
	internal?: Maybe<InternalFilterInput>
}

export type QueryAllSitePageArgs = {
	filter?: Maybe<SitePageFilterInput>
	sort?: Maybe<SitePageSortInput>
	skip?: Maybe<Scalars["Int"]>
	limit?: Maybe<Scalars["Int"]>
}

export type QuerySitePluginArgs = {
	resolve?: Maybe<StringQueryOperatorInput>
	name?: Maybe<StringQueryOperatorInput>
	version?: Maybe<StringQueryOperatorInput>
	nodeAPIs?: Maybe<StringQueryOperatorInput>
	browserAPIs?: Maybe<StringQueryOperatorInput>
	ssrAPIs?: Maybe<StringQueryOperatorInput>
	pluginFilepath?: Maybe<StringQueryOperatorInput>
	pluginOptions?: Maybe<JsonQueryOperatorInput>
	packageJson?: Maybe<JsonQueryOperatorInput>
	id?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	children?: Maybe<NodeFilterListInput>
	internal?: Maybe<InternalFilterInput>
}

export type QueryAllSitePluginArgs = {
	filter?: Maybe<SitePluginFilterInput>
	sort?: Maybe<SitePluginSortInput>
	skip?: Maybe<Scalars["Int"]>
	limit?: Maybe<Scalars["Int"]>
}

export type QuerySiteBuildMetadataArgs = {
	buildTime?: Maybe<DateQueryOperatorInput>
	id?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	children?: Maybe<NodeFilterListInput>
	internal?: Maybe<InternalFilterInput>
}

export type QueryAllSiteBuildMetadataArgs = {
	filter?: Maybe<SiteBuildMetadataFilterInput>
	sort?: Maybe<SiteBuildMetadataSortInput>
	skip?: Maybe<Scalars["Int"]>
	limit?: Maybe<Scalars["Int"]>
}

export type QueryPrismicEmbedTypeArgs = {
	id?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	children?: Maybe<NodeFilterListInput>
	internal?: Maybe<InternalFilterInput>
}

export type QueryAllPrismicEmbedTypeArgs = {
	filter?: Maybe<PrismicEmbedTypeFilterInput>
	sort?: Maybe<PrismicEmbedTypeSortInput>
	skip?: Maybe<Scalars["Int"]>
	limit?: Maybe<Scalars["Int"]>
}

export type QueryPrismicTypePathTypeArgs = {
	kind?: Maybe<StringQueryOperatorInput>
	path?: Maybe<StringQueryOperatorInput>
	type?: Maybe<StringQueryOperatorInput>
	id?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	children?: Maybe<NodeFilterListInput>
	internal?: Maybe<InternalFilterInput>
}

export type QueryAllPrismicTypePathTypeArgs = {
	filter?: Maybe<PrismicTypePathTypeFilterInput>
	sort?: Maybe<PrismicTypePathTypeSortInput>
	skip?: Maybe<Scalars["Int"]>
	limit?: Maybe<Scalars["Int"]>
}

export type QueryPrismicSubmissionTypeArgs = {
	uid?: Maybe<StringQueryOperatorInput>
	data?: Maybe<PrismicSubmissionTypeDataTypeFilterInput>
	dataRaw?: Maybe<JsonQueryOperatorInput>
	prismicId?: Maybe<IdQueryOperatorInput>
	alternate_languages?: Maybe<PrismicAlternateLanguageTypeFilterListInput>
	first_publication_date?: Maybe<DateQueryOperatorInput>
	href?: Maybe<StringQueryOperatorInput>
	lang?: Maybe<StringQueryOperatorInput>
	last_publication_date?: Maybe<DateQueryOperatorInput>
	tags?: Maybe<StringQueryOperatorInput>
	type?: Maybe<StringQueryOperatorInput>
	url?: Maybe<StringQueryOperatorInput>
	_previewable?: Maybe<IdQueryOperatorInput>
	id?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	children?: Maybe<NodeFilterListInput>
	internal?: Maybe<InternalFilterInput>
}

export type QueryAllPrismicSubmissionTypeArgs = {
	filter?: Maybe<PrismicSubmissionTypeFilterInput>
	sort?: Maybe<PrismicSubmissionTypeSortInput>
	skip?: Maybe<Scalars["Int"]>
	limit?: Maybe<Scalars["Int"]>
}

export type QueryPrismicNavigationArgs = {
	uid?: Maybe<StringQueryOperatorInput>
	data?: Maybe<PrismicNavigationDataTypeFilterInput>
	dataRaw?: Maybe<JsonQueryOperatorInput>
	prismicId?: Maybe<IdQueryOperatorInput>
	alternate_languages?: Maybe<PrismicAlternateLanguageTypeFilterListInput>
	first_publication_date?: Maybe<DateQueryOperatorInput>
	href?: Maybe<StringQueryOperatorInput>
	lang?: Maybe<StringQueryOperatorInput>
	last_publication_date?: Maybe<DateQueryOperatorInput>
	tags?: Maybe<StringQueryOperatorInput>
	type?: Maybe<StringQueryOperatorInput>
	url?: Maybe<StringQueryOperatorInput>
	_previewable?: Maybe<IdQueryOperatorInput>
	id?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	children?: Maybe<NodeFilterListInput>
	internal?: Maybe<InternalFilterInput>
}

export type QueryAllPrismicNavigationArgs = {
	filter?: Maybe<PrismicNavigationFilterInput>
	sort?: Maybe<PrismicNavigationSortInput>
	skip?: Maybe<Scalars["Int"]>
	limit?: Maybe<Scalars["Int"]>
}

export type QueryPrismicSponsorArgs = {
	data?: Maybe<PrismicSponsorDataTypeFilterInput>
	dataRaw?: Maybe<JsonQueryOperatorInput>
	prismicId?: Maybe<IdQueryOperatorInput>
	alternate_languages?: Maybe<PrismicAlternateLanguageTypeFilterListInput>
	first_publication_date?: Maybe<DateQueryOperatorInput>
	href?: Maybe<StringQueryOperatorInput>
	lang?: Maybe<StringQueryOperatorInput>
	last_publication_date?: Maybe<DateQueryOperatorInput>
	tags?: Maybe<StringQueryOperatorInput>
	type?: Maybe<StringQueryOperatorInput>
	url?: Maybe<StringQueryOperatorInput>
	_previewable?: Maybe<IdQueryOperatorInput>
	id?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	children?: Maybe<NodeFilterListInput>
	internal?: Maybe<InternalFilterInput>
}

export type QueryAllPrismicSponsorArgs = {
	filter?: Maybe<PrismicSponsorFilterInput>
	sort?: Maybe<PrismicSponsorSortInput>
	skip?: Maybe<Scalars["Int"]>
	limit?: Maybe<Scalars["Int"]>
}

export type QueryPrismicVideoSubmissionArgs = {
	uid?: Maybe<StringQueryOperatorInput>
	data?: Maybe<PrismicVideoSubmissionDataTypeFilterInput>
	dataRaw?: Maybe<JsonQueryOperatorInput>
	prismicId?: Maybe<IdQueryOperatorInput>
	alternate_languages?: Maybe<PrismicAlternateLanguageTypeFilterListInput>
	first_publication_date?: Maybe<DateQueryOperatorInput>
	href?: Maybe<StringQueryOperatorInput>
	lang?: Maybe<StringQueryOperatorInput>
	last_publication_date?: Maybe<DateQueryOperatorInput>
	tags?: Maybe<StringQueryOperatorInput>
	type?: Maybe<StringQueryOperatorInput>
	url?: Maybe<StringQueryOperatorInput>
	_previewable?: Maybe<IdQueryOperatorInput>
	id?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	children?: Maybe<NodeFilterListInput>
	internal?: Maybe<InternalFilterInput>
}

export type QueryAllPrismicVideoSubmissionArgs = {
	filter?: Maybe<PrismicVideoSubmissionFilterInput>
	sort?: Maybe<PrismicVideoSubmissionSortInput>
	skip?: Maybe<Scalars["Int"]>
	limit?: Maybe<Scalars["Int"]>
}

export type QueryPrismicSponsorsListArgs = {
	uid?: Maybe<StringQueryOperatorInput>
	data?: Maybe<PrismicSponsorsListDataTypeFilterInput>
	dataRaw?: Maybe<JsonQueryOperatorInput>
	prismicId?: Maybe<IdQueryOperatorInput>
	alternate_languages?: Maybe<PrismicAlternateLanguageTypeFilterListInput>
	first_publication_date?: Maybe<DateQueryOperatorInput>
	href?: Maybe<StringQueryOperatorInput>
	lang?: Maybe<StringQueryOperatorInput>
	last_publication_date?: Maybe<DateQueryOperatorInput>
	tags?: Maybe<StringQueryOperatorInput>
	type?: Maybe<StringQueryOperatorInput>
	url?: Maybe<StringQueryOperatorInput>
	_previewable?: Maybe<IdQueryOperatorInput>
	id?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	children?: Maybe<NodeFilterListInput>
	internal?: Maybe<InternalFilterInput>
}

export type QueryAllPrismicSponsorsListArgs = {
	filter?: Maybe<PrismicSponsorsListFilterInput>
	sort?: Maybe<PrismicSponsorsListSortInput>
	skip?: Maybe<Scalars["Int"]>
	limit?: Maybe<Scalars["Int"]>
}

export type QueryPrismicSettingsArgs = {
	data?: Maybe<PrismicSettingsDataTypeFilterInput>
	dataRaw?: Maybe<JsonQueryOperatorInput>
	prismicId?: Maybe<IdQueryOperatorInput>
	alternate_languages?: Maybe<PrismicAlternateLanguageTypeFilterListInput>
	first_publication_date?: Maybe<DateQueryOperatorInput>
	href?: Maybe<StringQueryOperatorInput>
	lang?: Maybe<StringQueryOperatorInput>
	last_publication_date?: Maybe<DateQueryOperatorInput>
	tags?: Maybe<StringQueryOperatorInput>
	type?: Maybe<StringQueryOperatorInput>
	url?: Maybe<StringQueryOperatorInput>
	_previewable?: Maybe<IdQueryOperatorInput>
	id?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	children?: Maybe<NodeFilterListInput>
	internal?: Maybe<InternalFilterInput>
}

export type QueryAllPrismicSettingsArgs = {
	filter?: Maybe<PrismicSettingsFilterInput>
	sort?: Maybe<PrismicSettingsSortInput>
	skip?: Maybe<Scalars["Int"]>
	limit?: Maybe<Scalars["Int"]>
}

export type QueryPrismicEventArgs = {
	uid?: Maybe<StringQueryOperatorInput>
	data?: Maybe<PrismicEventDataTypeFilterInput>
	dataRaw?: Maybe<JsonQueryOperatorInput>
	prismicId?: Maybe<IdQueryOperatorInput>
	alternate_languages?: Maybe<PrismicAlternateLanguageTypeFilterListInput>
	first_publication_date?: Maybe<DateQueryOperatorInput>
	href?: Maybe<StringQueryOperatorInput>
	lang?: Maybe<StringQueryOperatorInput>
	last_publication_date?: Maybe<DateQueryOperatorInput>
	tags?: Maybe<StringQueryOperatorInput>
	type?: Maybe<StringQueryOperatorInput>
	url?: Maybe<StringQueryOperatorInput>
	_previewable?: Maybe<IdQueryOperatorInput>
	id?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	children?: Maybe<NodeFilterListInput>
	internal?: Maybe<InternalFilterInput>
}

export type QueryAllPrismicEventArgs = {
	filter?: Maybe<PrismicEventFilterInput>
	sort?: Maybe<PrismicEventSortInput>
	skip?: Maybe<Scalars["Int"]>
	limit?: Maybe<Scalars["Int"]>
}

export type QueryPrismicPageArgs = {
	uid?: Maybe<StringQueryOperatorInput>
	data?: Maybe<PrismicPageDataTypeFilterInput>
	dataRaw?: Maybe<JsonQueryOperatorInput>
	prismicId?: Maybe<IdQueryOperatorInput>
	alternate_languages?: Maybe<PrismicAlternateLanguageTypeFilterListInput>
	first_publication_date?: Maybe<DateQueryOperatorInput>
	href?: Maybe<StringQueryOperatorInput>
	lang?: Maybe<StringQueryOperatorInput>
	last_publication_date?: Maybe<DateQueryOperatorInput>
	tags?: Maybe<StringQueryOperatorInput>
	type?: Maybe<StringQueryOperatorInput>
	url?: Maybe<StringQueryOperatorInput>
	_previewable?: Maybe<IdQueryOperatorInput>
	id?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	children?: Maybe<NodeFilterListInput>
	internal?: Maybe<InternalFilterInput>
}

export type QueryAllPrismicPageArgs = {
	filter?: Maybe<PrismicPageFilterInput>
	sort?: Maybe<PrismicPageSortInput>
	skip?: Maybe<Scalars["Int"]>
	limit?: Maybe<Scalars["Int"]>
}

export type Site = Node & {
	buildTime?: Maybe<Scalars["Date"]>
	siteMetadata?: Maybe<SiteSiteMetadata>
	port?: Maybe<Scalars["Int"]>
	host?: Maybe<Scalars["String"]>
	flags?: Maybe<SiteFlags>
	polyfill?: Maybe<Scalars["Boolean"]>
	pathPrefix?: Maybe<Scalars["String"]>
	jsxRuntime?: Maybe<Scalars["String"]>
	trailingSlash?: Maybe<Scalars["String"]>
	graphqlTypegen?: Maybe<Scalars["Boolean"]>
	id: Scalars["ID"]
	parent?: Maybe<Node>
	children: Array<Node>
	internal: Internal
}

export type SiteBuildTimeArgs = {
	formatString?: Maybe<Scalars["String"]>
	fromNow?: Maybe<Scalars["Boolean"]>
	difference?: Maybe<Scalars["String"]>
	locale?: Maybe<Scalars["String"]>
}

export type SiteBuildMetadata = Node & {
	buildTime?: Maybe<Scalars["Date"]>
	id: Scalars["ID"]
	parent?: Maybe<Node>
	children: Array<Node>
	internal: Internal
}

export type SiteBuildMetadataBuildTimeArgs = {
	formatString?: Maybe<Scalars["String"]>
	fromNow?: Maybe<Scalars["Boolean"]>
	difference?: Maybe<Scalars["String"]>
	locale?: Maybe<Scalars["String"]>
}

export type SiteBuildMetadataConnection = {
	totalCount: Scalars["Int"]
	edges: Array<SiteBuildMetadataEdge>
	nodes: Array<SiteBuildMetadata>
	pageInfo: PageInfo
	distinct: Array<Scalars["String"]>
	max?: Maybe<Scalars["Float"]>
	min?: Maybe<Scalars["Float"]>
	sum?: Maybe<Scalars["Float"]>
	group: Array<SiteBuildMetadataGroupConnection>
}

export type SiteBuildMetadataConnectionDistinctArgs = {
	field: SiteBuildMetadataFieldsEnum
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

export type SiteBuildMetadataConnectionGroupArgs = {
	skip?: Maybe<Scalars["Int"]>
	limit?: Maybe<Scalars["Int"]>
	field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataEdge = {
	next?: Maybe<SiteBuildMetadata>
	node: SiteBuildMetadata
	previous?: Maybe<SiteBuildMetadata>
}

export enum SiteBuildMetadataFieldsEnum {
	BuildTime = "buildTime",
	Id = "id",
	ParentId = "parent___id",
	ParentParentId = "parent___parent___id",
	ParentParentParentId = "parent___parent___parent___id",
	ParentParentParentChildren = "parent___parent___parent___children",
	ParentParentChildren = "parent___parent___children",
	ParentParentChildrenId = "parent___parent___children___id",
	ParentParentChildrenChildren = "parent___parent___children___children",
	ParentParentInternalContent = "parent___parent___internal___content",
	ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
	ParentParentInternalDescription = "parent___parent___internal___description",
	ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
	ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
	ParentParentInternalMediaType = "parent___parent___internal___mediaType",
	ParentParentInternalOwner = "parent___parent___internal___owner",
	ParentParentInternalType = "parent___parent___internal___type",
	ParentParentInternalContentFilePath = "parent___parent___internal___contentFilePath",
	ParentChildren = "parent___children",
	ParentChildrenId = "parent___children___id",
	ParentChildrenParentId = "parent___children___parent___id",
	ParentChildrenParentChildren = "parent___children___parent___children",
	ParentChildrenChildren = "parent___children___children",
	ParentChildrenChildrenId = "parent___children___children___id",
	ParentChildrenChildrenChildren = "parent___children___children___children",
	ParentChildrenInternalContent = "parent___children___internal___content",
	ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
	ParentChildrenInternalDescription = "parent___children___internal___description",
	ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
	ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
	ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
	ParentChildrenInternalOwner = "parent___children___internal___owner",
	ParentChildrenInternalType = "parent___children___internal___type",
	ParentChildrenInternalContentFilePath = "parent___children___internal___contentFilePath",
	ParentInternalContent = "parent___internal___content",
	ParentInternalContentDigest = "parent___internal___contentDigest",
	ParentInternalDescription = "parent___internal___description",
	ParentInternalFieldOwners = "parent___internal___fieldOwners",
	ParentInternalIgnoreType = "parent___internal___ignoreType",
	ParentInternalMediaType = "parent___internal___mediaType",
	ParentInternalOwner = "parent___internal___owner",
	ParentInternalType = "parent___internal___type",
	ParentInternalContentFilePath = "parent___internal___contentFilePath",
	Children = "children",
	ChildrenId = "children___id",
	ChildrenParentId = "children___parent___id",
	ChildrenParentParentId = "children___parent___parent___id",
	ChildrenParentParentChildren = "children___parent___parent___children",
	ChildrenParentChildren = "children___parent___children",
	ChildrenParentChildrenId = "children___parent___children___id",
	ChildrenParentChildrenChildren = "children___parent___children___children",
	ChildrenParentInternalContent = "children___parent___internal___content",
	ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
	ChildrenParentInternalDescription = "children___parent___internal___description",
	ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
	ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
	ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
	ChildrenParentInternalOwner = "children___parent___internal___owner",
	ChildrenParentInternalType = "children___parent___internal___type",
	ChildrenParentInternalContentFilePath = "children___parent___internal___contentFilePath",
	ChildrenChildren = "children___children",
	ChildrenChildrenId = "children___children___id",
	ChildrenChildrenParentId = "children___children___parent___id",
	ChildrenChildrenParentChildren = "children___children___parent___children",
	ChildrenChildrenChildren = "children___children___children",
	ChildrenChildrenChildrenId = "children___children___children___id",
	ChildrenChildrenChildrenChildren = "children___children___children___children",
	ChildrenChildrenInternalContent = "children___children___internal___content",
	ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
	ChildrenChildrenInternalDescription = "children___children___internal___description",
	ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
	ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
	ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
	ChildrenChildrenInternalOwner = "children___children___internal___owner",
	ChildrenChildrenInternalType = "children___children___internal___type",
	ChildrenChildrenInternalContentFilePath = "children___children___internal___contentFilePath",
	ChildrenInternalContent = "children___internal___content",
	ChildrenInternalContentDigest = "children___internal___contentDigest",
	ChildrenInternalDescription = "children___internal___description",
	ChildrenInternalFieldOwners = "children___internal___fieldOwners",
	ChildrenInternalIgnoreType = "children___internal___ignoreType",
	ChildrenInternalMediaType = "children___internal___mediaType",
	ChildrenInternalOwner = "children___internal___owner",
	ChildrenInternalType = "children___internal___type",
	ChildrenInternalContentFilePath = "children___internal___contentFilePath",
	InternalContent = "internal___content",
	InternalContentDigest = "internal___contentDigest",
	InternalDescription = "internal___description",
	InternalFieldOwners = "internal___fieldOwners",
	InternalIgnoreType = "internal___ignoreType",
	InternalMediaType = "internal___mediaType",
	InternalOwner = "internal___owner",
	InternalType = "internal___type",
	InternalContentFilePath = "internal___contentFilePath",
}

export type SiteBuildMetadataFilterInput = {
	buildTime?: Maybe<DateQueryOperatorInput>
	id?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	children?: Maybe<NodeFilterListInput>
	internal?: Maybe<InternalFilterInput>
}

export type SiteBuildMetadataGroupConnection = {
	totalCount: Scalars["Int"]
	edges: Array<SiteBuildMetadataEdge>
	nodes: Array<SiteBuildMetadata>
	pageInfo: PageInfo
	distinct: Array<Scalars["String"]>
	max?: Maybe<Scalars["Float"]>
	min?: Maybe<Scalars["Float"]>
	sum?: Maybe<Scalars["Float"]>
	group: Array<SiteBuildMetadataGroupConnection>
	field: Scalars["String"]
	fieldValue?: Maybe<Scalars["String"]>
}

export type SiteBuildMetadataGroupConnectionDistinctArgs = {
	field: SiteBuildMetadataFieldsEnum
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

export type SiteBuildMetadataGroupConnectionGroupArgs = {
	skip?: Maybe<Scalars["Int"]>
	limit?: Maybe<Scalars["Int"]>
	field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataSortInput = {
	fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>
	order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SiteConnection = {
	totalCount: Scalars["Int"]
	edges: Array<SiteEdge>
	nodes: Array<Site>
	pageInfo: PageInfo
	distinct: Array<Scalars["String"]>
	max?: Maybe<Scalars["Float"]>
	min?: Maybe<Scalars["Float"]>
	sum?: Maybe<Scalars["Float"]>
	group: Array<SiteGroupConnection>
}

export type SiteConnectionDistinctArgs = {
	field: SiteFieldsEnum
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

export type SiteConnectionGroupArgs = {
	skip?: Maybe<Scalars["Int"]>
	limit?: Maybe<Scalars["Int"]>
	field: SiteFieldsEnum
}

export type SiteEdge = {
	next?: Maybe<Site>
	node: Site
	previous?: Maybe<Site>
}

export enum SiteFieldsEnum {
	BuildTime = "buildTime",
	SiteMetadataTitle = "siteMetadata___title",
	SiteMetadataDescription = "siteMetadata___description",
	SiteMetadataSiteUrl = "siteMetadata___siteUrl",
	Port = "port",
	Host = "host",
	FlagsFastDev = "flags___FAST_DEV",
	FlagsDevSsr = "flags___DEV_SSR",
	Polyfill = "polyfill",
	PathPrefix = "pathPrefix",
	JsxRuntime = "jsxRuntime",
	TrailingSlash = "trailingSlash",
	GraphqlTypegen = "graphqlTypegen",
	Id = "id",
	ParentId = "parent___id",
	ParentParentId = "parent___parent___id",
	ParentParentParentId = "parent___parent___parent___id",
	ParentParentParentChildren = "parent___parent___parent___children",
	ParentParentChildren = "parent___parent___children",
	ParentParentChildrenId = "parent___parent___children___id",
	ParentParentChildrenChildren = "parent___parent___children___children",
	ParentParentInternalContent = "parent___parent___internal___content",
	ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
	ParentParentInternalDescription = "parent___parent___internal___description",
	ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
	ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
	ParentParentInternalMediaType = "parent___parent___internal___mediaType",
	ParentParentInternalOwner = "parent___parent___internal___owner",
	ParentParentInternalType = "parent___parent___internal___type",
	ParentParentInternalContentFilePath = "parent___parent___internal___contentFilePath",
	ParentChildren = "parent___children",
	ParentChildrenId = "parent___children___id",
	ParentChildrenParentId = "parent___children___parent___id",
	ParentChildrenParentChildren = "parent___children___parent___children",
	ParentChildrenChildren = "parent___children___children",
	ParentChildrenChildrenId = "parent___children___children___id",
	ParentChildrenChildrenChildren = "parent___children___children___children",
	ParentChildrenInternalContent = "parent___children___internal___content",
	ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
	ParentChildrenInternalDescription = "parent___children___internal___description",
	ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
	ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
	ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
	ParentChildrenInternalOwner = "parent___children___internal___owner",
	ParentChildrenInternalType = "parent___children___internal___type",
	ParentChildrenInternalContentFilePath = "parent___children___internal___contentFilePath",
	ParentInternalContent = "parent___internal___content",
	ParentInternalContentDigest = "parent___internal___contentDigest",
	ParentInternalDescription = "parent___internal___description",
	ParentInternalFieldOwners = "parent___internal___fieldOwners",
	ParentInternalIgnoreType = "parent___internal___ignoreType",
	ParentInternalMediaType = "parent___internal___mediaType",
	ParentInternalOwner = "parent___internal___owner",
	ParentInternalType = "parent___internal___type",
	ParentInternalContentFilePath = "parent___internal___contentFilePath",
	Children = "children",
	ChildrenId = "children___id",
	ChildrenParentId = "children___parent___id",
	ChildrenParentParentId = "children___parent___parent___id",
	ChildrenParentParentChildren = "children___parent___parent___children",
	ChildrenParentChildren = "children___parent___children",
	ChildrenParentChildrenId = "children___parent___children___id",
	ChildrenParentChildrenChildren = "children___parent___children___children",
	ChildrenParentInternalContent = "children___parent___internal___content",
	ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
	ChildrenParentInternalDescription = "children___parent___internal___description",
	ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
	ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
	ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
	ChildrenParentInternalOwner = "children___parent___internal___owner",
	ChildrenParentInternalType = "children___parent___internal___type",
	ChildrenParentInternalContentFilePath = "children___parent___internal___contentFilePath",
	ChildrenChildren = "children___children",
	ChildrenChildrenId = "children___children___id",
	ChildrenChildrenParentId = "children___children___parent___id",
	ChildrenChildrenParentChildren = "children___children___parent___children",
	ChildrenChildrenChildren = "children___children___children",
	ChildrenChildrenChildrenId = "children___children___children___id",
	ChildrenChildrenChildrenChildren = "children___children___children___children",
	ChildrenChildrenInternalContent = "children___children___internal___content",
	ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
	ChildrenChildrenInternalDescription = "children___children___internal___description",
	ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
	ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
	ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
	ChildrenChildrenInternalOwner = "children___children___internal___owner",
	ChildrenChildrenInternalType = "children___children___internal___type",
	ChildrenChildrenInternalContentFilePath = "children___children___internal___contentFilePath",
	ChildrenInternalContent = "children___internal___content",
	ChildrenInternalContentDigest = "children___internal___contentDigest",
	ChildrenInternalDescription = "children___internal___description",
	ChildrenInternalFieldOwners = "children___internal___fieldOwners",
	ChildrenInternalIgnoreType = "children___internal___ignoreType",
	ChildrenInternalMediaType = "children___internal___mediaType",
	ChildrenInternalOwner = "children___internal___owner",
	ChildrenInternalType = "children___internal___type",
	ChildrenInternalContentFilePath = "children___internal___contentFilePath",
	InternalContent = "internal___content",
	InternalContentDigest = "internal___contentDigest",
	InternalDescription = "internal___description",
	InternalFieldOwners = "internal___fieldOwners",
	InternalIgnoreType = "internal___ignoreType",
	InternalMediaType = "internal___mediaType",
	InternalOwner = "internal___owner",
	InternalType = "internal___type",
	InternalContentFilePath = "internal___contentFilePath",
}

export type SiteFilterInput = {
	buildTime?: Maybe<DateQueryOperatorInput>
	siteMetadata?: Maybe<SiteSiteMetadataFilterInput>
	port?: Maybe<IntQueryOperatorInput>
	host?: Maybe<StringQueryOperatorInput>
	flags?: Maybe<SiteFlagsFilterInput>
	polyfill?: Maybe<BooleanQueryOperatorInput>
	pathPrefix?: Maybe<StringQueryOperatorInput>
	jsxRuntime?: Maybe<StringQueryOperatorInput>
	trailingSlash?: Maybe<StringQueryOperatorInput>
	graphqlTypegen?: Maybe<BooleanQueryOperatorInput>
	id?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	children?: Maybe<NodeFilterListInput>
	internal?: Maybe<InternalFilterInput>
}

export type SiteFlags = {
	FAST_DEV?: Maybe<Scalars["Boolean"]>
	DEV_SSR?: Maybe<Scalars["Boolean"]>
}

export type SiteFlagsFilterInput = {
	FAST_DEV?: Maybe<BooleanQueryOperatorInput>
	DEV_SSR?: Maybe<BooleanQueryOperatorInput>
}

export type SiteFunction = Node & {
	functionRoute: Scalars["String"]
	pluginName: Scalars["String"]
	originalAbsoluteFilePath: Scalars["String"]
	originalRelativeFilePath: Scalars["String"]
	relativeCompiledFilePath: Scalars["String"]
	absoluteCompiledFilePath: Scalars["String"]
	matchPath?: Maybe<Scalars["String"]>
	id: Scalars["ID"]
	parent?: Maybe<Node>
	children: Array<Node>
	internal: Internal
}

export type SiteFunctionConnection = {
	totalCount: Scalars["Int"]
	edges: Array<SiteFunctionEdge>
	nodes: Array<SiteFunction>
	pageInfo: PageInfo
	distinct: Array<Scalars["String"]>
	max?: Maybe<Scalars["Float"]>
	min?: Maybe<Scalars["Float"]>
	sum?: Maybe<Scalars["Float"]>
	group: Array<SiteFunctionGroupConnection>
}

export type SiteFunctionConnectionDistinctArgs = {
	field: SiteFunctionFieldsEnum
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

export type SiteFunctionConnectionGroupArgs = {
	skip?: Maybe<Scalars["Int"]>
	limit?: Maybe<Scalars["Int"]>
	field: SiteFunctionFieldsEnum
}

export type SiteFunctionEdge = {
	next?: Maybe<SiteFunction>
	node: SiteFunction
	previous?: Maybe<SiteFunction>
}

export enum SiteFunctionFieldsEnum {
	FunctionRoute = "functionRoute",
	PluginName = "pluginName",
	OriginalAbsoluteFilePath = "originalAbsoluteFilePath",
	OriginalRelativeFilePath = "originalRelativeFilePath",
	RelativeCompiledFilePath = "relativeCompiledFilePath",
	AbsoluteCompiledFilePath = "absoluteCompiledFilePath",
	MatchPath = "matchPath",
	Id = "id",
	ParentId = "parent___id",
	ParentParentId = "parent___parent___id",
	ParentParentParentId = "parent___parent___parent___id",
	ParentParentParentChildren = "parent___parent___parent___children",
	ParentParentChildren = "parent___parent___children",
	ParentParentChildrenId = "parent___parent___children___id",
	ParentParentChildrenChildren = "parent___parent___children___children",
	ParentParentInternalContent = "parent___parent___internal___content",
	ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
	ParentParentInternalDescription = "parent___parent___internal___description",
	ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
	ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
	ParentParentInternalMediaType = "parent___parent___internal___mediaType",
	ParentParentInternalOwner = "parent___parent___internal___owner",
	ParentParentInternalType = "parent___parent___internal___type",
	ParentParentInternalContentFilePath = "parent___parent___internal___contentFilePath",
	ParentChildren = "parent___children",
	ParentChildrenId = "parent___children___id",
	ParentChildrenParentId = "parent___children___parent___id",
	ParentChildrenParentChildren = "parent___children___parent___children",
	ParentChildrenChildren = "parent___children___children",
	ParentChildrenChildrenId = "parent___children___children___id",
	ParentChildrenChildrenChildren = "parent___children___children___children",
	ParentChildrenInternalContent = "parent___children___internal___content",
	ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
	ParentChildrenInternalDescription = "parent___children___internal___description",
	ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
	ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
	ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
	ParentChildrenInternalOwner = "parent___children___internal___owner",
	ParentChildrenInternalType = "parent___children___internal___type",
	ParentChildrenInternalContentFilePath = "parent___children___internal___contentFilePath",
	ParentInternalContent = "parent___internal___content",
	ParentInternalContentDigest = "parent___internal___contentDigest",
	ParentInternalDescription = "parent___internal___description",
	ParentInternalFieldOwners = "parent___internal___fieldOwners",
	ParentInternalIgnoreType = "parent___internal___ignoreType",
	ParentInternalMediaType = "parent___internal___mediaType",
	ParentInternalOwner = "parent___internal___owner",
	ParentInternalType = "parent___internal___type",
	ParentInternalContentFilePath = "parent___internal___contentFilePath",
	Children = "children",
	ChildrenId = "children___id",
	ChildrenParentId = "children___parent___id",
	ChildrenParentParentId = "children___parent___parent___id",
	ChildrenParentParentChildren = "children___parent___parent___children",
	ChildrenParentChildren = "children___parent___children",
	ChildrenParentChildrenId = "children___parent___children___id",
	ChildrenParentChildrenChildren = "children___parent___children___children",
	ChildrenParentInternalContent = "children___parent___internal___content",
	ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
	ChildrenParentInternalDescription = "children___parent___internal___description",
	ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
	ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
	ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
	ChildrenParentInternalOwner = "children___parent___internal___owner",
	ChildrenParentInternalType = "children___parent___internal___type",
	ChildrenParentInternalContentFilePath = "children___parent___internal___contentFilePath",
	ChildrenChildren = "children___children",
	ChildrenChildrenId = "children___children___id",
	ChildrenChildrenParentId = "children___children___parent___id",
	ChildrenChildrenParentChildren = "children___children___parent___children",
	ChildrenChildrenChildren = "children___children___children",
	ChildrenChildrenChildrenId = "children___children___children___id",
	ChildrenChildrenChildrenChildren = "children___children___children___children",
	ChildrenChildrenInternalContent = "children___children___internal___content",
	ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
	ChildrenChildrenInternalDescription = "children___children___internal___description",
	ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
	ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
	ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
	ChildrenChildrenInternalOwner = "children___children___internal___owner",
	ChildrenChildrenInternalType = "children___children___internal___type",
	ChildrenChildrenInternalContentFilePath = "children___children___internal___contentFilePath",
	ChildrenInternalContent = "children___internal___content",
	ChildrenInternalContentDigest = "children___internal___contentDigest",
	ChildrenInternalDescription = "children___internal___description",
	ChildrenInternalFieldOwners = "children___internal___fieldOwners",
	ChildrenInternalIgnoreType = "children___internal___ignoreType",
	ChildrenInternalMediaType = "children___internal___mediaType",
	ChildrenInternalOwner = "children___internal___owner",
	ChildrenInternalType = "children___internal___type",
	ChildrenInternalContentFilePath = "children___internal___contentFilePath",
	InternalContent = "internal___content",
	InternalContentDigest = "internal___contentDigest",
	InternalDescription = "internal___description",
	InternalFieldOwners = "internal___fieldOwners",
	InternalIgnoreType = "internal___ignoreType",
	InternalMediaType = "internal___mediaType",
	InternalOwner = "internal___owner",
	InternalType = "internal___type",
	InternalContentFilePath = "internal___contentFilePath",
}

export type SiteFunctionFilterInput = {
	functionRoute?: Maybe<StringQueryOperatorInput>
	pluginName?: Maybe<StringQueryOperatorInput>
	originalAbsoluteFilePath?: Maybe<StringQueryOperatorInput>
	originalRelativeFilePath?: Maybe<StringQueryOperatorInput>
	relativeCompiledFilePath?: Maybe<StringQueryOperatorInput>
	absoluteCompiledFilePath?: Maybe<StringQueryOperatorInput>
	matchPath?: Maybe<StringQueryOperatorInput>
	id?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	children?: Maybe<NodeFilterListInput>
	internal?: Maybe<InternalFilterInput>
}

export type SiteFunctionGroupConnection = {
	totalCount: Scalars["Int"]
	edges: Array<SiteFunctionEdge>
	nodes: Array<SiteFunction>
	pageInfo: PageInfo
	distinct: Array<Scalars["String"]>
	max?: Maybe<Scalars["Float"]>
	min?: Maybe<Scalars["Float"]>
	sum?: Maybe<Scalars["Float"]>
	group: Array<SiteFunctionGroupConnection>
	field: Scalars["String"]
	fieldValue?: Maybe<Scalars["String"]>
}

export type SiteFunctionGroupConnectionDistinctArgs = {
	field: SiteFunctionFieldsEnum
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

export type SiteFunctionGroupConnectionGroupArgs = {
	skip?: Maybe<Scalars["Int"]>
	limit?: Maybe<Scalars["Int"]>
	field: SiteFunctionFieldsEnum
}

export type SiteFunctionSortInput = {
	fields?: Maybe<Array<Maybe<SiteFunctionFieldsEnum>>>
	order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SiteGroupConnection = {
	totalCount: Scalars["Int"]
	edges: Array<SiteEdge>
	nodes: Array<Site>
	pageInfo: PageInfo
	distinct: Array<Scalars["String"]>
	max?: Maybe<Scalars["Float"]>
	min?: Maybe<Scalars["Float"]>
	sum?: Maybe<Scalars["Float"]>
	group: Array<SiteGroupConnection>
	field: Scalars["String"]
	fieldValue?: Maybe<Scalars["String"]>
}

export type SiteGroupConnectionDistinctArgs = {
	field: SiteFieldsEnum
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

export type SiteGroupConnectionGroupArgs = {
	skip?: Maybe<Scalars["Int"]>
	limit?: Maybe<Scalars["Int"]>
	field: SiteFieldsEnum
}

export type SitePage = Node & {
	path: Scalars["String"]
	component: Scalars["String"]
	internalComponentName: Scalars["String"]
	componentChunkName: Scalars["String"]
	matchPath?: Maybe<Scalars["String"]>
	pageContext?: Maybe<Scalars["JSON"]>
	pluginCreator?: Maybe<SitePlugin>
	id: Scalars["ID"]
	parent?: Maybe<Node>
	children: Array<Node>
	internal: Internal
}

export type SitePageConnection = {
	totalCount: Scalars["Int"]
	edges: Array<SitePageEdge>
	nodes: Array<SitePage>
	pageInfo: PageInfo
	distinct: Array<Scalars["String"]>
	max?: Maybe<Scalars["Float"]>
	min?: Maybe<Scalars["Float"]>
	sum?: Maybe<Scalars["Float"]>
	group: Array<SitePageGroupConnection>
}

export type SitePageConnectionDistinctArgs = {
	field: SitePageFieldsEnum
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

export type SitePageConnectionGroupArgs = {
	skip?: Maybe<Scalars["Int"]>
	limit?: Maybe<Scalars["Int"]>
	field: SitePageFieldsEnum
}

export type SitePageEdge = {
	next?: Maybe<SitePage>
	node: SitePage
	previous?: Maybe<SitePage>
}

export enum SitePageFieldsEnum {
	Path = "path",
	Component = "component",
	InternalComponentName = "internalComponentName",
	ComponentChunkName = "componentChunkName",
	MatchPath = "matchPath",
	PageContext = "pageContext",
	PluginCreatorResolve = "pluginCreator___resolve",
	PluginCreatorName = "pluginCreator___name",
	PluginCreatorVersion = "pluginCreator___version",
	PluginCreatorNodeApIs = "pluginCreator___nodeAPIs",
	PluginCreatorBrowserApIs = "pluginCreator___browserAPIs",
	PluginCreatorSsrApIs = "pluginCreator___ssrAPIs",
	PluginCreatorPluginFilepath = "pluginCreator___pluginFilepath",
	PluginCreatorPluginOptions = "pluginCreator___pluginOptions",
	PluginCreatorPackageJson = "pluginCreator___packageJson",
	PluginCreatorId = "pluginCreator___id",
	PluginCreatorParentId = "pluginCreator___parent___id",
	PluginCreatorParentParentId = "pluginCreator___parent___parent___id",
	PluginCreatorParentParentChildren = "pluginCreator___parent___parent___children",
	PluginCreatorParentChildren = "pluginCreator___parent___children",
	PluginCreatorParentChildrenId = "pluginCreator___parent___children___id",
	PluginCreatorParentChildrenChildren = "pluginCreator___parent___children___children",
	PluginCreatorParentInternalContent = "pluginCreator___parent___internal___content",
	PluginCreatorParentInternalContentDigest = "pluginCreator___parent___internal___contentDigest",
	PluginCreatorParentInternalDescription = "pluginCreator___parent___internal___description",
	PluginCreatorParentInternalFieldOwners = "pluginCreator___parent___internal___fieldOwners",
	PluginCreatorParentInternalIgnoreType = "pluginCreator___parent___internal___ignoreType",
	PluginCreatorParentInternalMediaType = "pluginCreator___parent___internal___mediaType",
	PluginCreatorParentInternalOwner = "pluginCreator___parent___internal___owner",
	PluginCreatorParentInternalType = "pluginCreator___parent___internal___type",
	PluginCreatorParentInternalContentFilePath = "pluginCreator___parent___internal___contentFilePath",
	PluginCreatorChildren = "pluginCreator___children",
	PluginCreatorChildrenId = "pluginCreator___children___id",
	PluginCreatorChildrenParentId = "pluginCreator___children___parent___id",
	PluginCreatorChildrenParentChildren = "pluginCreator___children___parent___children",
	PluginCreatorChildrenChildren = "pluginCreator___children___children",
	PluginCreatorChildrenChildrenId = "pluginCreator___children___children___id",
	PluginCreatorChildrenChildrenChildren = "pluginCreator___children___children___children",
	PluginCreatorChildrenInternalContent = "pluginCreator___children___internal___content",
	PluginCreatorChildrenInternalContentDigest = "pluginCreator___children___internal___contentDigest",
	PluginCreatorChildrenInternalDescription = "pluginCreator___children___internal___description",
	PluginCreatorChildrenInternalFieldOwners = "pluginCreator___children___internal___fieldOwners",
	PluginCreatorChildrenInternalIgnoreType = "pluginCreator___children___internal___ignoreType",
	PluginCreatorChildrenInternalMediaType = "pluginCreator___children___internal___mediaType",
	PluginCreatorChildrenInternalOwner = "pluginCreator___children___internal___owner",
	PluginCreatorChildrenInternalType = "pluginCreator___children___internal___type",
	PluginCreatorChildrenInternalContentFilePath = "pluginCreator___children___internal___contentFilePath",
	PluginCreatorInternalContent = "pluginCreator___internal___content",
	PluginCreatorInternalContentDigest = "pluginCreator___internal___contentDigest",
	PluginCreatorInternalDescription = "pluginCreator___internal___description",
	PluginCreatorInternalFieldOwners = "pluginCreator___internal___fieldOwners",
	PluginCreatorInternalIgnoreType = "pluginCreator___internal___ignoreType",
	PluginCreatorInternalMediaType = "pluginCreator___internal___mediaType",
	PluginCreatorInternalOwner = "pluginCreator___internal___owner",
	PluginCreatorInternalType = "pluginCreator___internal___type",
	PluginCreatorInternalContentFilePath = "pluginCreator___internal___contentFilePath",
	Id = "id",
	ParentId = "parent___id",
	ParentParentId = "parent___parent___id",
	ParentParentParentId = "parent___parent___parent___id",
	ParentParentParentChildren = "parent___parent___parent___children",
	ParentParentChildren = "parent___parent___children",
	ParentParentChildrenId = "parent___parent___children___id",
	ParentParentChildrenChildren = "parent___parent___children___children",
	ParentParentInternalContent = "parent___parent___internal___content",
	ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
	ParentParentInternalDescription = "parent___parent___internal___description",
	ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
	ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
	ParentParentInternalMediaType = "parent___parent___internal___mediaType",
	ParentParentInternalOwner = "parent___parent___internal___owner",
	ParentParentInternalType = "parent___parent___internal___type",
	ParentParentInternalContentFilePath = "parent___parent___internal___contentFilePath",
	ParentChildren = "parent___children",
	ParentChildrenId = "parent___children___id",
	ParentChildrenParentId = "parent___children___parent___id",
	ParentChildrenParentChildren = "parent___children___parent___children",
	ParentChildrenChildren = "parent___children___children",
	ParentChildrenChildrenId = "parent___children___children___id",
	ParentChildrenChildrenChildren = "parent___children___children___children",
	ParentChildrenInternalContent = "parent___children___internal___content",
	ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
	ParentChildrenInternalDescription = "parent___children___internal___description",
	ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
	ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
	ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
	ParentChildrenInternalOwner = "parent___children___internal___owner",
	ParentChildrenInternalType = "parent___children___internal___type",
	ParentChildrenInternalContentFilePath = "parent___children___internal___contentFilePath",
	ParentInternalContent = "parent___internal___content",
	ParentInternalContentDigest = "parent___internal___contentDigest",
	ParentInternalDescription = "parent___internal___description",
	ParentInternalFieldOwners = "parent___internal___fieldOwners",
	ParentInternalIgnoreType = "parent___internal___ignoreType",
	ParentInternalMediaType = "parent___internal___mediaType",
	ParentInternalOwner = "parent___internal___owner",
	ParentInternalType = "parent___internal___type",
	ParentInternalContentFilePath = "parent___internal___contentFilePath",
	Children = "children",
	ChildrenId = "children___id",
	ChildrenParentId = "children___parent___id",
	ChildrenParentParentId = "children___parent___parent___id",
	ChildrenParentParentChildren = "children___parent___parent___children",
	ChildrenParentChildren = "children___parent___children",
	ChildrenParentChildrenId = "children___parent___children___id",
	ChildrenParentChildrenChildren = "children___parent___children___children",
	ChildrenParentInternalContent = "children___parent___internal___content",
	ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
	ChildrenParentInternalDescription = "children___parent___internal___description",
	ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
	ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
	ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
	ChildrenParentInternalOwner = "children___parent___internal___owner",
	ChildrenParentInternalType = "children___parent___internal___type",
	ChildrenParentInternalContentFilePath = "children___parent___internal___contentFilePath",
	ChildrenChildren = "children___children",
	ChildrenChildrenId = "children___children___id",
	ChildrenChildrenParentId = "children___children___parent___id",
	ChildrenChildrenParentChildren = "children___children___parent___children",
	ChildrenChildrenChildren = "children___children___children",
	ChildrenChildrenChildrenId = "children___children___children___id",
	ChildrenChildrenChildrenChildren = "children___children___children___children",
	ChildrenChildrenInternalContent = "children___children___internal___content",
	ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
	ChildrenChildrenInternalDescription = "children___children___internal___description",
	ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
	ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
	ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
	ChildrenChildrenInternalOwner = "children___children___internal___owner",
	ChildrenChildrenInternalType = "children___children___internal___type",
	ChildrenChildrenInternalContentFilePath = "children___children___internal___contentFilePath",
	ChildrenInternalContent = "children___internal___content",
	ChildrenInternalContentDigest = "children___internal___contentDigest",
	ChildrenInternalDescription = "children___internal___description",
	ChildrenInternalFieldOwners = "children___internal___fieldOwners",
	ChildrenInternalIgnoreType = "children___internal___ignoreType",
	ChildrenInternalMediaType = "children___internal___mediaType",
	ChildrenInternalOwner = "children___internal___owner",
	ChildrenInternalType = "children___internal___type",
	ChildrenInternalContentFilePath = "children___internal___contentFilePath",
	InternalContent = "internal___content",
	InternalContentDigest = "internal___contentDigest",
	InternalDescription = "internal___description",
	InternalFieldOwners = "internal___fieldOwners",
	InternalIgnoreType = "internal___ignoreType",
	InternalMediaType = "internal___mediaType",
	InternalOwner = "internal___owner",
	InternalType = "internal___type",
	InternalContentFilePath = "internal___contentFilePath",
}

export type SitePageFilterInput = {
	path?: Maybe<StringQueryOperatorInput>
	component?: Maybe<StringQueryOperatorInput>
	internalComponentName?: Maybe<StringQueryOperatorInput>
	componentChunkName?: Maybe<StringQueryOperatorInput>
	matchPath?: Maybe<StringQueryOperatorInput>
	pageContext?: Maybe<JsonQueryOperatorInput>
	pluginCreator?: Maybe<SitePluginFilterInput>
	id?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	children?: Maybe<NodeFilterListInput>
	internal?: Maybe<InternalFilterInput>
}

export type SitePageGroupConnection = {
	totalCount: Scalars["Int"]
	edges: Array<SitePageEdge>
	nodes: Array<SitePage>
	pageInfo: PageInfo
	distinct: Array<Scalars["String"]>
	max?: Maybe<Scalars["Float"]>
	min?: Maybe<Scalars["Float"]>
	sum?: Maybe<Scalars["Float"]>
	group: Array<SitePageGroupConnection>
	field: Scalars["String"]
	fieldValue?: Maybe<Scalars["String"]>
}

export type SitePageGroupConnectionDistinctArgs = {
	field: SitePageFieldsEnum
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

export type SitePageGroupConnectionGroupArgs = {
	skip?: Maybe<Scalars["Int"]>
	limit?: Maybe<Scalars["Int"]>
	field: SitePageFieldsEnum
}

export type SitePageSortInput = {
	fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>
	order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SitePlugin = Node & {
	resolve?: Maybe<Scalars["String"]>
	name?: Maybe<Scalars["String"]>
	version?: Maybe<Scalars["String"]>
	nodeAPIs?: Maybe<Array<Maybe<Scalars["String"]>>>
	browserAPIs?: Maybe<Array<Maybe<Scalars["String"]>>>
	ssrAPIs?: Maybe<Array<Maybe<Scalars["String"]>>>
	pluginFilepath?: Maybe<Scalars["String"]>
	pluginOptions?: Maybe<Scalars["JSON"]>
	packageJson?: Maybe<Scalars["JSON"]>
	id: Scalars["ID"]
	parent?: Maybe<Node>
	children: Array<Node>
	internal: Internal
}

export type SitePluginConnection = {
	totalCount: Scalars["Int"]
	edges: Array<SitePluginEdge>
	nodes: Array<SitePlugin>
	pageInfo: PageInfo
	distinct: Array<Scalars["String"]>
	max?: Maybe<Scalars["Float"]>
	min?: Maybe<Scalars["Float"]>
	sum?: Maybe<Scalars["Float"]>
	group: Array<SitePluginGroupConnection>
}

export type SitePluginConnectionDistinctArgs = {
	field: SitePluginFieldsEnum
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

export type SitePluginConnectionGroupArgs = {
	skip?: Maybe<Scalars["Int"]>
	limit?: Maybe<Scalars["Int"]>
	field: SitePluginFieldsEnum
}

export type SitePluginEdge = {
	next?: Maybe<SitePlugin>
	node: SitePlugin
	previous?: Maybe<SitePlugin>
}

export enum SitePluginFieldsEnum {
	Resolve = "resolve",
	Name = "name",
	Version = "version",
	NodeApIs = "nodeAPIs",
	BrowserApIs = "browserAPIs",
	SsrApIs = "ssrAPIs",
	PluginFilepath = "pluginFilepath",
	PluginOptions = "pluginOptions",
	PackageJson = "packageJson",
	Id = "id",
	ParentId = "parent___id",
	ParentParentId = "parent___parent___id",
	ParentParentParentId = "parent___parent___parent___id",
	ParentParentParentChildren = "parent___parent___parent___children",
	ParentParentChildren = "parent___parent___children",
	ParentParentChildrenId = "parent___parent___children___id",
	ParentParentChildrenChildren = "parent___parent___children___children",
	ParentParentInternalContent = "parent___parent___internal___content",
	ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
	ParentParentInternalDescription = "parent___parent___internal___description",
	ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
	ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
	ParentParentInternalMediaType = "parent___parent___internal___mediaType",
	ParentParentInternalOwner = "parent___parent___internal___owner",
	ParentParentInternalType = "parent___parent___internal___type",
	ParentParentInternalContentFilePath = "parent___parent___internal___contentFilePath",
	ParentChildren = "parent___children",
	ParentChildrenId = "parent___children___id",
	ParentChildrenParentId = "parent___children___parent___id",
	ParentChildrenParentChildren = "parent___children___parent___children",
	ParentChildrenChildren = "parent___children___children",
	ParentChildrenChildrenId = "parent___children___children___id",
	ParentChildrenChildrenChildren = "parent___children___children___children",
	ParentChildrenInternalContent = "parent___children___internal___content",
	ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
	ParentChildrenInternalDescription = "parent___children___internal___description",
	ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
	ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
	ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
	ParentChildrenInternalOwner = "parent___children___internal___owner",
	ParentChildrenInternalType = "parent___children___internal___type",
	ParentChildrenInternalContentFilePath = "parent___children___internal___contentFilePath",
	ParentInternalContent = "parent___internal___content",
	ParentInternalContentDigest = "parent___internal___contentDigest",
	ParentInternalDescription = "parent___internal___description",
	ParentInternalFieldOwners = "parent___internal___fieldOwners",
	ParentInternalIgnoreType = "parent___internal___ignoreType",
	ParentInternalMediaType = "parent___internal___mediaType",
	ParentInternalOwner = "parent___internal___owner",
	ParentInternalType = "parent___internal___type",
	ParentInternalContentFilePath = "parent___internal___contentFilePath",
	Children = "children",
	ChildrenId = "children___id",
	ChildrenParentId = "children___parent___id",
	ChildrenParentParentId = "children___parent___parent___id",
	ChildrenParentParentChildren = "children___parent___parent___children",
	ChildrenParentChildren = "children___parent___children",
	ChildrenParentChildrenId = "children___parent___children___id",
	ChildrenParentChildrenChildren = "children___parent___children___children",
	ChildrenParentInternalContent = "children___parent___internal___content",
	ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
	ChildrenParentInternalDescription = "children___parent___internal___description",
	ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
	ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
	ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
	ChildrenParentInternalOwner = "children___parent___internal___owner",
	ChildrenParentInternalType = "children___parent___internal___type",
	ChildrenParentInternalContentFilePath = "children___parent___internal___contentFilePath",
	ChildrenChildren = "children___children",
	ChildrenChildrenId = "children___children___id",
	ChildrenChildrenParentId = "children___children___parent___id",
	ChildrenChildrenParentChildren = "children___children___parent___children",
	ChildrenChildrenChildren = "children___children___children",
	ChildrenChildrenChildrenId = "children___children___children___id",
	ChildrenChildrenChildrenChildren = "children___children___children___children",
	ChildrenChildrenInternalContent = "children___children___internal___content",
	ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
	ChildrenChildrenInternalDescription = "children___children___internal___description",
	ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
	ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
	ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
	ChildrenChildrenInternalOwner = "children___children___internal___owner",
	ChildrenChildrenInternalType = "children___children___internal___type",
	ChildrenChildrenInternalContentFilePath = "children___children___internal___contentFilePath",
	ChildrenInternalContent = "children___internal___content",
	ChildrenInternalContentDigest = "children___internal___contentDigest",
	ChildrenInternalDescription = "children___internal___description",
	ChildrenInternalFieldOwners = "children___internal___fieldOwners",
	ChildrenInternalIgnoreType = "children___internal___ignoreType",
	ChildrenInternalMediaType = "children___internal___mediaType",
	ChildrenInternalOwner = "children___internal___owner",
	ChildrenInternalType = "children___internal___type",
	ChildrenInternalContentFilePath = "children___internal___contentFilePath",
	InternalContent = "internal___content",
	InternalContentDigest = "internal___contentDigest",
	InternalDescription = "internal___description",
	InternalFieldOwners = "internal___fieldOwners",
	InternalIgnoreType = "internal___ignoreType",
	InternalMediaType = "internal___mediaType",
	InternalOwner = "internal___owner",
	InternalType = "internal___type",
	InternalContentFilePath = "internal___contentFilePath",
}

export type SitePluginFilterInput = {
	resolve?: Maybe<StringQueryOperatorInput>
	name?: Maybe<StringQueryOperatorInput>
	version?: Maybe<StringQueryOperatorInput>
	nodeAPIs?: Maybe<StringQueryOperatorInput>
	browserAPIs?: Maybe<StringQueryOperatorInput>
	ssrAPIs?: Maybe<StringQueryOperatorInput>
	pluginFilepath?: Maybe<StringQueryOperatorInput>
	pluginOptions?: Maybe<JsonQueryOperatorInput>
	packageJson?: Maybe<JsonQueryOperatorInput>
	id?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	children?: Maybe<NodeFilterListInput>
	internal?: Maybe<InternalFilterInput>
}

export type SitePluginGroupConnection = {
	totalCount: Scalars["Int"]
	edges: Array<SitePluginEdge>
	nodes: Array<SitePlugin>
	pageInfo: PageInfo
	distinct: Array<Scalars["String"]>
	max?: Maybe<Scalars["Float"]>
	min?: Maybe<Scalars["Float"]>
	sum?: Maybe<Scalars["Float"]>
	group: Array<SitePluginGroupConnection>
	field: Scalars["String"]
	fieldValue?: Maybe<Scalars["String"]>
}

export type SitePluginGroupConnectionDistinctArgs = {
	field: SitePluginFieldsEnum
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

export type SitePluginGroupConnectionGroupArgs = {
	skip?: Maybe<Scalars["Int"]>
	limit?: Maybe<Scalars["Int"]>
	field: SitePluginFieldsEnum
}

export type SitePluginSortInput = {
	fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>
	order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SiteSiteMetadata = {
	title?: Maybe<Scalars["String"]>
	description?: Maybe<Scalars["String"]>
	siteUrl?: Maybe<Scalars["String"]>
}

export type SiteSiteMetadataFilterInput = {
	title?: Maybe<StringQueryOperatorInput>
	description?: Maybe<StringQueryOperatorInput>
	siteUrl?: Maybe<StringQueryOperatorInput>
}

export type SiteSortInput = {
	fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>
	order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export enum SortOrderEnum {
	Asc = "ASC",
	Desc = "DESC",
}

export type StringQueryOperatorInput = {
	eq?: Maybe<Scalars["String"]>
	ne?: Maybe<Scalars["String"]>
	in?: Maybe<Array<Maybe<Scalars["String"]>>>
	nin?: Maybe<Array<Maybe<Scalars["String"]>>>
	regex?: Maybe<Scalars["String"]>
	glob?: Maybe<Scalars["String"]>
}

export type EventAnchorFragment = { primary: { anchor?: Maybe<string> } }

export type EventCallToActionFragment = {
	primary: {
		button_text?: Maybe<string>
		heading?: Maybe<{ text?: Maybe<string> }>
		button_link?: Maybe<{ url?: Maybe<string> }>
	}
}

export type EventCallToActionCardFragment = {
	primary: {
		button_text?: Maybe<string>
		color?: Maybe<string>
		text?: Maybe<{ html?: Maybe<string> }>
		button_link?: Maybe<{ url?: Maybe<string> }>
	}
}

export type EventFeaturedPeopleFragment = {
	primary: {
		color?: Maybe<string>
		subheading?: Maybe<{ text?: Maybe<string> }>
		heading?: Maybe<{ text?: Maybe<string> }>
	}
	items: Array<{
		instagram_handle?: Maybe<string>
		website_label?: Maybe<string>
		name?: Maybe<{ text?: Maybe<string> }>
		title1?: Maybe<{ text?: Maybe<string> }>
		pronouns?: Maybe<{ text?: Maybe<string> }>
		bio?: Maybe<{ html?: Maybe<string> }>
		headshot?: Maybe<{ url?: Maybe<string>; alt?: Maybe<string> }>
		instagram_profile_url?: Maybe<{ url?: Maybe<string> }>
		website_url?: Maybe<{ url?: Maybe<string> }>
	}>
}

export type EventImageCallToActionFragment = {
	primary: {
		button_text?: Maybe<string>
		color?: Maybe<string>
		image?: Maybe<{ url?: Maybe<string>; alt?: Maybe<string> }>
		text?: Maybe<{ html?: Maybe<string> }>
		button_link?: Maybe<{ url?: Maybe<string> }>
	}
}

export type EventIntroductionFragment = {
	primary: {
		color?: Maybe<string>
		heading?: Maybe<{ text?: Maybe<string> }>
		text?: Maybe<{ html?: Maybe<string> }>
	}
}

export type EventNewsletterFormFragment = {
	primary: {
		placeholder_text?: Maybe<string>
		color?: Maybe<string>
		heading?: Maybe<{ text?: Maybe<string> }>
	}
}

export type EventPrideCalendarFragment = {
	primary: { color?: Maybe<string>; text?: Maybe<{ html?: Maybe<string> }> }
	items: Array<{
		event_description?: Maybe<{ html?: Maybe<string> }>
		event_link?: Maybe<{ url?: Maybe<string> }>
		event_title?: Maybe<{ text?: Maybe<string> }>
		image?: Maybe<{ alt?: Maybe<string>; url?: Maybe<string> }>
	}>
}

export type EventRichTextFragment = {
	primary: {
		button_text?: Maybe<string>
		color?: Maybe<string>
		text?: Maybe<{ html?: Maybe<string> }>
		button_link?: Maybe<{ url?: Maybe<string> }>
	}
}

export type EventTextAndVideoFragment = {
	primary: {
		thumbnail_side?: Maybe<string>
		video_url?: Maybe<string>
		color?: Maybe<string>
		video_thumbnail?: Maybe<{ url?: Maybe<string>; alt?: Maybe<string> }>
		text?: Maybe<{ html?: Maybe<string> }>
	}
}

export type EventTwoColumnTextFragment = {
	primary: {
		color?: Maybe<string>
		button_text?: Maybe<string>
		button_side?: Maybe<string>
		left_text?: Maybe<{ html?: Maybe<string> }>
		right_text?: Maybe<{ html?: Maybe<string> }>
		button_link?: Maybe<{ url?: Maybe<string> }>
	}
}

export type EventVideoFragment = {
	primary: {
		video_url?: Maybe<string>
		thumbnail?: Maybe<{ alt?: Maybe<string>; url?: Maybe<string> }>
	}
}

export type EventVideoGalleryFragment = {
	primary: {
		color?: Maybe<string>
		text?: Maybe<{ html?: Maybe<string> }>
		video_submission_type?: Maybe<{
			uid?: Maybe<string>
			document?: Maybe<{
				_previewable: string
				data: {
					votable?: Maybe<boolean>
					mute_videos?: Maybe<boolean>
					end_time?: Maybe<unknown>
				}
				submissions?: Maybe<
					Array<
						Maybe<{
							_previewable: string
							url?: Maybe<string>
							uid: string
							data: {
								video_url?: Maybe<string>
								name?: Maybe<{ text?: Maybe<string> }>
								description?: Maybe<{ html?: Maybe<string> }>
								subtitle?: Maybe<{ text?: Maybe<string> }>
								video_thumbnail?: Maybe<{
									url?: Maybe<string>
									alt?: Maybe<string>
								}>
							}
						}>
					>
				>
			}>
		}>
	}
}

export type EventVideoHeroFragment = {
	primary: {
		video_url?: Maybe<string>
		text?: Maybe<{ text?: Maybe<string> }>
		video_thumbnail?: Maybe<{ alt?: Maybe<string>; url?: Maybe<string> }>
	}
}

export type PrimaryNavigationQueryVariables = Exact<{ [key: string]: never }>

export type PrimaryNavigationQuery = {
	prismicNavigation?: Maybe<{
		_previewable: string
		data: {
			nav_items?: Maybe<
				Array<
					Maybe<{
						label?: Maybe<{ text?: Maybe<string> }>
						link?: Maybe<{ url?: Maybe<string> }>
					}>
				>
			>
		}
	}>
}

export type SettingsQueryVariables = Exact<{ [key: string]: never }>

export type SettingsQuery = {
	prismicSettings?: Maybe<{
		_previewable: string
		data: {
			facebook_url?: Maybe<string>
			instagram_url?: Maybe<string>
			youtube_url?: Maybe<string>
			twitter_url?: Maybe<string>
			twitter_username?: Maybe<string>
			footer_logo_url?: Maybe<string>
			enabled?: Maybe<boolean>
			site_name?: Maybe<{ text?: Maybe<string> }>
			site_description?: Maybe<{ text?: Maybe<string> }>
			site_copyright?: Maybe<{ text?: Maybe<string>; html?: Maybe<string> }>
			twitter_card_image?: Maybe<{ url?: Maybe<string> }>
			open_graph_image?: Maybe<{ url?: Maybe<string> }>
			text?: Maybe<{ html?: Maybe<string> }>
		}
	}>
}

export type AnchorFragment = { primary: { anchor?: Maybe<string> } }

export type CallToActionFragment = {
	primary: {
		button_text?: Maybe<string>
		heading?: Maybe<{ text?: Maybe<string> }>
		button_link?: Maybe<{ url?: Maybe<string> }>
	}
}

export type CallToActionCardFragment = {
	primary: {
		button_text?: Maybe<string>
		color?: Maybe<string>
		text?: Maybe<{ html?: Maybe<string> }>
		button_link?: Maybe<{ url?: Maybe<string> }>
	}
}

export type FeaturedPeopleFragment = {
	primary: {
		color?: Maybe<string>
		subheading?: Maybe<{ text?: Maybe<string> }>
		heading?: Maybe<{ text?: Maybe<string> }>
	}
	items: Array<{
		instagram_handle?: Maybe<string>
		website_label?: Maybe<string>
		name?: Maybe<{ text?: Maybe<string> }>
		title1?: Maybe<{ text?: Maybe<string> }>
		pronouns?: Maybe<{ text?: Maybe<string> }>
		bio?: Maybe<{ html?: Maybe<string> }>
		headshot?: Maybe<{ url?: Maybe<string>; alt?: Maybe<string> }>
		instagram_profile_url?: Maybe<{ url?: Maybe<string> }>
		website_url?: Maybe<{ url?: Maybe<string> }>
	}>
}

export type FilterableEventsFragment = {
	items: Array<{
		color?: Maybe<string>
		event?: Maybe<{
			url?: Maybe<string>
			document?: Maybe<{
				_previewable: string
				data: {
					date?: Maybe<unknown>
					illustration?: Maybe<string>
					type?: Maybe<string>
					description?: Maybe<{ html?: Maybe<string> }>
					title?: Maybe<{ text?: Maybe<string> }>
				}
			}>
		}>
	}>
}

export type GradientTextFragment = {
	primary: { text?: Maybe<{ text?: Maybe<string> }> }
}

export type ImageCallToActionFragment = {
	primary: {
		button_text?: Maybe<string>
		color?: Maybe<string>
		image?: Maybe<{ url?: Maybe<string>; alt?: Maybe<string> }>
		text?: Maybe<{ html?: Maybe<string> }>
		button_link?: Maybe<{ url?: Maybe<string> }>
	}
}

export type IntroductionFragment = {
	primary: {
		color?: Maybe<string>
		heading?: Maybe<{ text?: Maybe<string> }>
		text?: Maybe<{ html?: Maybe<string> }>
	}
}

export type NewsletterFormFragment = {
	primary: {
		placeholder_text?: Maybe<string>
		color?: Maybe<string>
		heading?: Maybe<{ text?: Maybe<string> }>
	}
}

export type PrideCalendarFragment = {
	primary: { color?: Maybe<string>; text?: Maybe<{ html?: Maybe<string> }> }
	items: Array<{
		event_description?: Maybe<{ html?: Maybe<string> }>
		event_link?: Maybe<{ url?: Maybe<string> }>
		event_title?: Maybe<{ text?: Maybe<string> }>
		image?: Maybe<{ alt?: Maybe<string>; gatsbyImageData?: Maybe<unknown> }>
	}>
}

export type RichTextFragment = {
	primary: {
		button_text?: Maybe<string>
		color?: Maybe<string>
		text?: Maybe<{ html?: Maybe<string> }>
		button_link?: Maybe<{ url?: Maybe<string> }>
	}
}

export type SponsorFragment = {
	data: {
		image?: Maybe<{ alt?: Maybe<string>; url?: Maybe<string> }>
		link?: Maybe<{ url?: Maybe<string> }>
		name?: Maybe<{ text?: Maybe<string> }>
	}
}

export type SponsorsFragment = {
	primary: {
		heading?: Maybe<{ text?: Maybe<string> }>
		subheading?: Maybe<{ text?: Maybe<string> }>
		sponsor_list?: Maybe<{
			document?: Maybe<{
				id: string
				data: {
					rainbows_over_waikiki_sponsor?: Maybe<{
						document?: Maybe<SponsorFragment>
					}>
					visionary_sponsors?: Maybe<
						Array<
							Maybe<{ sponsor?: Maybe<{ document?: Maybe<SponsorFragment> }> }>
						>
					>
					gold_sponsors?: Maybe<
						Array<
							Maybe<{ sponsor?: Maybe<{ document?: Maybe<SponsorFragment> }> }>
						>
					>
					silver_sponsors?: Maybe<
						Array<
							Maybe<{ sponsor?: Maybe<{ document?: Maybe<SponsorFragment> }> }>
						>
					>
					bronze_sponsors?: Maybe<
						Array<
							Maybe<{ sponsor?: Maybe<{ document?: Maybe<SponsorFragment> }> }>
						>
					>
					partner_sponsors?: Maybe<
						Array<
							Maybe<{ sponsor?: Maybe<{ document?: Maybe<SponsorFragment> }> }>
						>
					>
				}
			}>
		}>
	}
}

export type TextAndVideoFragment = {
	primary: {
		thumbnail_side?: Maybe<string>
		video_url?: Maybe<string>
		color?: Maybe<string>
		video_thumbnail?: Maybe<{ url?: Maybe<string>; alt?: Maybe<string> }>
		text?: Maybe<{ html?: Maybe<string> }>
	}
}

export type TwoColumnTextFragment = {
	primary: {
		color?: Maybe<string>
		button_text?: Maybe<string>
		button_side?: Maybe<string>
		left_text?: Maybe<{ html?: Maybe<string> }>
		right_text?: Maybe<{ html?: Maybe<string> }>
		button_link?: Maybe<{ url?: Maybe<string> }>
	}
}

export type VideoFragment = {
	primary: {
		video_url?: Maybe<string>
		thumbnail?: Maybe<{ alt?: Maybe<string>; url?: Maybe<string> }>
	}
}

export type VideoGalleryFragment = {
	primary: {
		color?: Maybe<string>
		text?: Maybe<{ html?: Maybe<string> }>
		video_submission_type?: Maybe<{
			uid?: Maybe<string>
			document?: Maybe<{
				_previewable: string
				data: {
					votable?: Maybe<boolean>
					mute_videos?: Maybe<boolean>
					end_time?: Maybe<unknown>
				}
				submissions?: Maybe<
					Array<
						Maybe<{
							_previewable: string
							url?: Maybe<string>
							uid: string
							data: {
								video_url?: Maybe<string>
								name?: Maybe<{ text?: Maybe<string> }>
								description?: Maybe<{ html?: Maybe<string> }>
								subtitle?: Maybe<{ text?: Maybe<string> }>
								video_thumbnail?: Maybe<{
									url?: Maybe<string>
									alt?: Maybe<string>
								}>
							}
						}>
					>
				>
			}>
		}>
	}
}

export type VideoHeroFragment = {
	primary: {
		video_url?: Maybe<string>
		text?: Maybe<{ text?: Maybe<string> }>
		video_thumbnail?: Maybe<{ alt?: Maybe<string>; url?: Maybe<string> }>
	}
}

export type EventTemplateQueryVariables = Exact<{
	uid: Scalars["String"]
}>

export type EventTemplateQuery = {
	prismicEvent?: Maybe<{
		_previewable: string
		uid: string
		url?: Maybe<string>
		data: {
			title?: Maybe<{ text?: Maybe<string> }>
			body: Array<
				| ({ __typename: "PrismicEventDataBodyAnchor" } & EventAnchorFragment)
				| ({
						__typename: "PrismicEventDataBodyCallToAction"
				  } & EventCallToActionFragment)
				| ({
						__typename: "PrismicEventDataBodyCallToActionCard"
				  } & EventCallToActionCardFragment)
				| ({
						__typename: "PrismicEventDataBodyFeaturedPeople"
				  } & EventFeaturedPeopleFragment)
				| ({
						__typename: "PrismicEventDataBodyImageCallToAction"
				  } & EventImageCallToActionFragment)
				| ({
						__typename: "PrismicEventDataBodyIntroduction"
				  } & EventIntroductionFragment)
				| ({
						__typename: "PrismicEventDataBodyNewsletterForm"
				  } & EventNewsletterFormFragment)
				| ({
						__typename: "PrismicEventDataBodyPrideCalendar"
				  } & EventPrideCalendarFragment)
				| ({
						__typename: "PrismicEventDataBodyRichText"
				  } & EventRichTextFragment)
				| ({
						__typename: "PrismicEventDataBodyTextAndVideo"
				  } & EventTextAndVideoFragment)
				| ({
						__typename: "PrismicEventDataBodyTwoColumnText"
				  } & EventTwoColumnTextFragment)
				| ({ __typename: "PrismicEventDataBodyVideo" } & EventVideoFragment)
				| ({
						__typename: "PrismicEventDataBodyVideoGallery"
				  } & EventVideoGalleryFragment)
				| ({
						__typename: "PrismicEventDataBodyVideoHero"
				  } & EventVideoHeroFragment)
			>
		}
	}>
}

export type PageTemplateQueryVariables = Exact<{
	uid: Scalars["String"]
}>

export type PageTemplateQuery = {
	prismicPage?: Maybe<{
		_previewable: string
		uid: string
		url?: Maybe<string>
		data: {
			meta_description?: Maybe<string>
			meta_title?: Maybe<string>
			title?: Maybe<{ text?: Maybe<string> }>
			body: Array<
				| ({ __typename: "PrismicPageDataBodyAnchor" } & AnchorFragment)
				| ({
						__typename: "PrismicPageDataBodyCallToAction"
				  } & CallToActionFragment)
				| ({
						__typename: "PrismicPageDataBodyCallToActionCard"
				  } & CallToActionCardFragment)
				| ({
						__typename: "PrismicPageDataBodyFeaturedPeople"
				  } & FeaturedPeopleFragment)
				| ({
						__typename: "PrismicPageDataBodyFilterableEvents"
				  } & FilterableEventsFragment)
				| ({
						__typename: "PrismicPageDataBodyGradientText"
				  } & GradientTextFragment)
				| ({
						__typename: "PrismicPageDataBodyImageCallToAction"
				  } & ImageCallToActionFragment)
				| ({
						__typename: "PrismicPageDataBodyIntroduction"
				  } & IntroductionFragment)
				| ({
						__typename: "PrismicPageDataBodyNewsletterForm"
				  } & NewsletterFormFragment)
				| ({
						__typename: "PrismicPageDataBodyPrideCalendar"
				  } & PrideCalendarFragment)
				| ({ __typename: "PrismicPageDataBodyRichText" } & RichTextFragment)
				| ({ __typename: "PrismicPageDataBodySponsors" } & SponsorsFragment)
				| ({
						__typename: "PrismicPageDataBodyTextAndVideo"
				  } & TextAndVideoFragment)
				| ({
						__typename: "PrismicPageDataBodyTwoColumnText"
				  } & TwoColumnTextFragment)
				| ({ __typename: "PrismicPageDataBodyVideo" } & VideoFragment)
				| ({
						__typename: "PrismicPageDataBodyVideoGallery"
				  } & VideoGalleryFragment)
				| ({ __typename: "PrismicPageDataBodyVideoHero" } & VideoHeroFragment)
			>
		}
	}>
}
