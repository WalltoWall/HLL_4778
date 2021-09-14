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
/**
 * All built-in and custom scalars, mapped to their actual values
 */
export type Scalars = {
	ID: string
	String: string
	Boolean: boolean
	Int: number
	Float: number
	/**
	 * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
	 * representation of dates and times using the Gregorian calendar.
	 */
	Date: unknown
	/**
	 * The `JSON` scalar type represents JSON values as specified by
	 * [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).
	 */
	JSON: unknown
}

export type BooleanQueryOperatorInput = {
	eq?: Maybe<Scalars["Boolean"]>
	in?: Maybe<Array<Maybe<Scalars["Boolean"]>>>
	ne?: Maybe<Scalars["Boolean"]>
	nin?: Maybe<Array<Maybe<Scalars["Boolean"]>>>
}

export type DateQueryOperatorInput = {
	eq?: Maybe<Scalars["Date"]>
	gt?: Maybe<Scalars["Date"]>
	gte?: Maybe<Scalars["Date"]>
	in?: Maybe<Array<Maybe<Scalars["Date"]>>>
	lt?: Maybe<Scalars["Date"]>
	lte?: Maybe<Scalars["Date"]>
	ne?: Maybe<Scalars["Date"]>
	nin?: Maybe<Array<Maybe<Scalars["Date"]>>>
}

export type Directory = Node & {
	__typename?: "Directory"
	absolutePath: Scalars["String"]
	accessTime: Scalars["Date"]
	atime: Scalars["Date"]
	atimeMs: Scalars["Float"]
	base: Scalars["String"]
	birthTime: Scalars["Date"]
	/**
	 * @deprecated Use `birthTime` instead
	 */
	birthtime?: Maybe<Scalars["Date"]>
	/**
	 * @deprecated Use `birthTime` instead
	 */
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
	difference?: Maybe<Scalars["String"]>
	formatString?: Maybe<Scalars["String"]>
	fromNow?: Maybe<Scalars["Boolean"]>
	locale?: Maybe<Scalars["String"]>
}

export type DirectoryAtimeArgs = {
	difference?: Maybe<Scalars["String"]>
	formatString?: Maybe<Scalars["String"]>
	fromNow?: Maybe<Scalars["Boolean"]>
	locale?: Maybe<Scalars["String"]>
}

export type DirectoryBirthTimeArgs = {
	difference?: Maybe<Scalars["String"]>
	formatString?: Maybe<Scalars["String"]>
	fromNow?: Maybe<Scalars["Boolean"]>
	locale?: Maybe<Scalars["String"]>
}

export type DirectoryChangeTimeArgs = {
	difference?: Maybe<Scalars["String"]>
	formatString?: Maybe<Scalars["String"]>
	fromNow?: Maybe<Scalars["Boolean"]>
	locale?: Maybe<Scalars["String"]>
}

export type DirectoryCtimeArgs = {
	difference?: Maybe<Scalars["String"]>
	formatString?: Maybe<Scalars["String"]>
	fromNow?: Maybe<Scalars["Boolean"]>
	locale?: Maybe<Scalars["String"]>
}

export type DirectoryModifiedTimeArgs = {
	difference?: Maybe<Scalars["String"]>
	formatString?: Maybe<Scalars["String"]>
	fromNow?: Maybe<Scalars["Boolean"]>
	locale?: Maybe<Scalars["String"]>
}

export type DirectoryMtimeArgs = {
	difference?: Maybe<Scalars["String"]>
	formatString?: Maybe<Scalars["String"]>
	fromNow?: Maybe<Scalars["Boolean"]>
	locale?: Maybe<Scalars["String"]>
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
	limit?: Maybe<Scalars["Int"]>
	skip?: Maybe<Scalars["Int"]>
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
	absolutePath?: Maybe<StringQueryOperatorInput>
	accessTime?: Maybe<DateQueryOperatorInput>
	atime?: Maybe<DateQueryOperatorInput>
	atimeMs?: Maybe<FloatQueryOperatorInput>
	base?: Maybe<StringQueryOperatorInput>
	birthTime?: Maybe<DateQueryOperatorInput>
	birthtime?: Maybe<DateQueryOperatorInput>
	birthtimeMs?: Maybe<FloatQueryOperatorInput>
	changeTime?: Maybe<DateQueryOperatorInput>
	children?: Maybe<NodeFilterListInput>
	ctime?: Maybe<DateQueryOperatorInput>
	ctimeMs?: Maybe<FloatQueryOperatorInput>
	dev?: Maybe<IntQueryOperatorInput>
	dir?: Maybe<StringQueryOperatorInput>
	ext?: Maybe<StringQueryOperatorInput>
	extension?: Maybe<StringQueryOperatorInput>
	gid?: Maybe<IntQueryOperatorInput>
	id?: Maybe<StringQueryOperatorInput>
	ino?: Maybe<FloatQueryOperatorInput>
	internal?: Maybe<InternalFilterInput>
	mode?: Maybe<IntQueryOperatorInput>
	modifiedTime?: Maybe<DateQueryOperatorInput>
	mtime?: Maybe<DateQueryOperatorInput>
	mtimeMs?: Maybe<FloatQueryOperatorInput>
	name?: Maybe<StringQueryOperatorInput>
	nlink?: Maybe<IntQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	prettySize?: Maybe<StringQueryOperatorInput>
	rdev?: Maybe<IntQueryOperatorInput>
	relativeDirectory?: Maybe<StringQueryOperatorInput>
	relativePath?: Maybe<StringQueryOperatorInput>
	root?: Maybe<StringQueryOperatorInput>
	size?: Maybe<IntQueryOperatorInput>
	sourceInstanceName?: Maybe<StringQueryOperatorInput>
	uid?: Maybe<IntQueryOperatorInput>
}

export type DirectoryGroupConnection = {
	__typename?: "DirectoryGroupConnection"
	edges: Array<DirectoryEdge>
	field: Scalars["String"]
	fieldValue?: Maybe<Scalars["String"]>
	nodes: Array<Directory>
	pageInfo: PageInfo
	totalCount: Scalars["Int"]
}

export type DirectorySortInput = {
	fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>
	order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type File = Node & {
	__typename?: "File"
	absolutePath: Scalars["String"]
	accessTime: Scalars["Date"]
	atime: Scalars["Date"]
	atimeMs: Scalars["Float"]
	base: Scalars["String"]
	birthTime: Scalars["Date"]
	/**
	 * @deprecated Use `birthTime` instead
	 */
	birthtime?: Maybe<Scalars["Date"]>
	/**
	 * @deprecated Use `birthTime` instead
	 */
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
	difference?: Maybe<Scalars["String"]>
	formatString?: Maybe<Scalars["String"]>
	fromNow?: Maybe<Scalars["Boolean"]>
	locale?: Maybe<Scalars["String"]>
}

export type FileAtimeArgs = {
	difference?: Maybe<Scalars["String"]>
	formatString?: Maybe<Scalars["String"]>
	fromNow?: Maybe<Scalars["Boolean"]>
	locale?: Maybe<Scalars["String"]>
}

export type FileBirthTimeArgs = {
	difference?: Maybe<Scalars["String"]>
	formatString?: Maybe<Scalars["String"]>
	fromNow?: Maybe<Scalars["Boolean"]>
	locale?: Maybe<Scalars["String"]>
}

export type FileChangeTimeArgs = {
	difference?: Maybe<Scalars["String"]>
	formatString?: Maybe<Scalars["String"]>
	fromNow?: Maybe<Scalars["Boolean"]>
	locale?: Maybe<Scalars["String"]>
}

export type FileCtimeArgs = {
	difference?: Maybe<Scalars["String"]>
	formatString?: Maybe<Scalars["String"]>
	fromNow?: Maybe<Scalars["Boolean"]>
	locale?: Maybe<Scalars["String"]>
}

export type FileModifiedTimeArgs = {
	difference?: Maybe<Scalars["String"]>
	formatString?: Maybe<Scalars["String"]>
	fromNow?: Maybe<Scalars["Boolean"]>
	locale?: Maybe<Scalars["String"]>
}

export type FileMtimeArgs = {
	difference?: Maybe<Scalars["String"]>
	formatString?: Maybe<Scalars["String"]>
	fromNow?: Maybe<Scalars["Boolean"]>
	locale?: Maybe<Scalars["String"]>
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
	limit?: Maybe<Scalars["Int"]>
	skip?: Maybe<Scalars["Int"]>
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
	absolutePath?: Maybe<StringQueryOperatorInput>
	accessTime?: Maybe<DateQueryOperatorInput>
	atime?: Maybe<DateQueryOperatorInput>
	atimeMs?: Maybe<FloatQueryOperatorInput>
	base?: Maybe<StringQueryOperatorInput>
	birthTime?: Maybe<DateQueryOperatorInput>
	birthtime?: Maybe<DateQueryOperatorInput>
	birthtimeMs?: Maybe<FloatQueryOperatorInput>
	changeTime?: Maybe<DateQueryOperatorInput>
	children?: Maybe<NodeFilterListInput>
	ctime?: Maybe<DateQueryOperatorInput>
	ctimeMs?: Maybe<FloatQueryOperatorInput>
	dev?: Maybe<IntQueryOperatorInput>
	dir?: Maybe<StringQueryOperatorInput>
	ext?: Maybe<StringQueryOperatorInput>
	extension?: Maybe<StringQueryOperatorInput>
	gid?: Maybe<IntQueryOperatorInput>
	id?: Maybe<StringQueryOperatorInput>
	ino?: Maybe<FloatQueryOperatorInput>
	internal?: Maybe<InternalFilterInput>
	mode?: Maybe<IntQueryOperatorInput>
	modifiedTime?: Maybe<DateQueryOperatorInput>
	mtime?: Maybe<DateQueryOperatorInput>
	mtimeMs?: Maybe<FloatQueryOperatorInput>
	name?: Maybe<StringQueryOperatorInput>
	nlink?: Maybe<IntQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	prettySize?: Maybe<StringQueryOperatorInput>
	rdev?: Maybe<IntQueryOperatorInput>
	relativeDirectory?: Maybe<StringQueryOperatorInput>
	relativePath?: Maybe<StringQueryOperatorInput>
	root?: Maybe<StringQueryOperatorInput>
	size?: Maybe<IntQueryOperatorInput>
	sourceInstanceName?: Maybe<StringQueryOperatorInput>
	uid?: Maybe<IntQueryOperatorInput>
}

export type FileGroupConnection = {
	__typename?: "FileGroupConnection"
	edges: Array<FileEdge>
	field: Scalars["String"]
	fieldValue?: Maybe<Scalars["String"]>
	nodes: Array<File>
	pageInfo: PageInfo
	totalCount: Scalars["Int"]
}

export type FileSortInput = {
	fields?: Maybe<Array<Maybe<FileFieldsEnum>>>
	order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type FloatQueryOperatorInput = {
	eq?: Maybe<Scalars["Float"]>
	gt?: Maybe<Scalars["Float"]>
	gte?: Maybe<Scalars["Float"]>
	in?: Maybe<Array<Maybe<Scalars["Float"]>>>
	lt?: Maybe<Scalars["Float"]>
	lte?: Maybe<Scalars["Float"]>
	ne?: Maybe<Scalars["Float"]>
	nin?: Maybe<Array<Maybe<Scalars["Float"]>>>
}

export enum GatsbyImageLayout {
	Constrained = "CONSTRAINED",
	Fixed = "FIXED",
	FullWidth = "FULL_WIDTH",
}

export type IdQueryOperatorInput = {
	eq?: Maybe<Scalars["ID"]>
	in?: Maybe<Array<Maybe<Scalars["ID"]>>>
	ne?: Maybe<Scalars["ID"]>
	nin?: Maybe<Array<Maybe<Scalars["ID"]>>>
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

export type ImgixParamsInput = {
	/**
	 * Alias for `pdfAnnotation`.
	 */
	annotation?: Maybe<Scalars["Boolean"]>
	/**
	 * Specifies an aspect ratio to maintain when resizing and cropping the image.
	 * [See docs](https://docs.imgix.com/apis/url/size/ar).
	 */
	ar?: Maybe<Scalars["String"]>
	/**
	 * Applies automatic enhancements to images. [See
	 * docs](https://docs.imgix.com/apis/url/auto).
	 */
	auto?: Maybe<Scalars["String"]>
	/**
	 * Alias for `blend`.
	 */
	b?: Maybe<Scalars["String"]>
	/**
	 * Alias for `blendAlign`.
	 */
	ba?: Maybe<Scalars["String"]>
	/**
	 * Alias for `blendAlpha`.
	 */
	balph?: Maybe<Scalars["Int"]>
	/**
	 * Alias for `blendCrop`.
	 */
	bc?: Maybe<Scalars["String"]>
	/**
	 * Alias for `blendFit`.
	 */
	bf?: Maybe<Scalars["String"]>
	/**
	 * Colors the background of padded and partially-transparent images. Default:
	 * `fff`. [See docs](https://docs.imgix.com/apis/url/bg).
	 */
	bg?: Maybe<Scalars["String"]>
	/**
	 * Alias for `blendH`.
	 */
	bh?: Maybe<Scalars["Float"]>
	/**
	 * Specifies the location of the blend image. [See
	 * docs](https://docs.imgix.com/apis/url/blending/blend).
	 */
	blend?: Maybe<Scalars["String"]>
	/**
	 * Changes the blend alignment relative to the parent image. [See
	 * docs](https://docs.imgix.com/apis/url/blending/blend-align).
	 */
	blendAlign?: Maybe<Scalars["String"]>
	/**
	 * Changes the alpha of the blend image. Default: `100`. [See
	 * docs](https://docs.imgix.com/apis/url/blending/blend-alpha).
	 */
	blendAlpha?: Maybe<Scalars["Int"]>
	/**
	 * Alias for `blendColor`.
	 */
	blendClr?: Maybe<Scalars["String"]>
	/**
	 * Specifies a color to use when applying the blend. [See
	 * docs](https://docs.imgix.com/apis/url/blending/blend-color).
	 */
	blendColor?: Maybe<Scalars["String"]>
	/**
	 * Specifies the type of crop for blend images. [See
	 * docs](https://docs.imgix.com/apis/url/blending/blend-crop).
	 */
	blendCrop?: Maybe<Scalars["String"]>
	/**
	 * Specifies the fit mode for blend images. Default: `clip`. [See
	 * docs](https://docs.imgix.com/apis/url/blending/blend-fit).
	 */
	blendFit?: Maybe<Scalars["String"]>
	/**
	 * Adjusts the height of the blend image. [See
	 * docs](https://docs.imgix.com/apis/url/blending/blend-h).
	 */
	blendH?: Maybe<Scalars["Float"]>
	/**
	 * Sets the blend mode for a blend image. Default: `overlay`. [See
	 * docs](https://docs.imgix.com/apis/url/blending/blend-mode).
	 */
	blendMode?: Maybe<Scalars["String"]>
	/**
	 * Applies padding to the blend image. Default: `0`. [See
	 * docs](https://docs.imgix.com/apis/url/blending/blend-pad).
	 */
	blendPad?: Maybe<Scalars["Int"]>
	/**
	 * Adjusts the size of the blend image. [See
	 * docs](https://docs.imgix.com/apis/url/blending/blend-size).
	 */
	blendSize?: Maybe<Scalars["String"]>
	/**
	 * Adjusts the width of the blend image. [See
	 * docs](https://docs.imgix.com/apis/url/blending/blend-w).
	 */
	blendW?: Maybe<Scalars["Float"]>
	/**
	 * Adjusts the x-offset of the blend image relative to its parent. Default:
	 * `0`. [See docs](https://docs.imgix.com/apis/url/blending/blend-x).
	 */
	blendX?: Maybe<Scalars["Int"]>
	/**
	 * Adjusts the y-offset of the blend image relative to its parent. Default:
	 * `0`. [See docs](https://docs.imgix.com/apis/url/blending/blend-y).
	 */
	blendY?: Maybe<Scalars["Int"]>
	/**
	 * Alias for `blendAlign`.
	 */
	blendalign?: Maybe<Scalars["String"]>
	/**
	 * Alias for `blendAlpha`.
	 */
	blendalpha?: Maybe<Scalars["Int"]>
	/**
	 * Alias for `blendColor`.
	 */
	blendclr?: Maybe<Scalars["String"]>
	/**
	 * Alias for `blendColor`.
	 */
	blendcolor?: Maybe<Scalars["String"]>
	/**
	 * Alias for `blendCrop`.
	 */
	blendcrop?: Maybe<Scalars["String"]>
	/**
	 * Alias for `blendFit`.
	 */
	blendfit?: Maybe<Scalars["String"]>
	/**
	 * Alias for `blendH`.
	 */
	blendh?: Maybe<Scalars["Float"]>
	/**
	 * Alias for `blendMode`.
	 */
	blendmode?: Maybe<Scalars["String"]>
	/**
	 * Alias for `blendPad`.
	 */
	blendpad?: Maybe<Scalars["Int"]>
	/**
	 * Alias for `blendSize`.
	 */
	blendsize?: Maybe<Scalars["String"]>
	/**
	 * Alias for `blendW`.
	 */
	blendw?: Maybe<Scalars["Float"]>
	/**
	 * Alias for `blendX`.
	 */
	blendx?: Maybe<Scalars["Int"]>
	/**
	 * Alias for `blendY`.
	 */
	blendy?: Maybe<Scalars["Int"]>
	/**
	 * Applies a gaussian blur to an image. Default: `0`. [See
	 * docs](https://docs.imgix.com/apis/url/stylize/blur).
	 */
	blur?: Maybe<Scalars["Int"]>
	/**
	 * Alias for `blendMode`.
	 */
	bm?: Maybe<Scalars["String"]>
	/**
	 * Applies a border to an image. [See
	 * docs](https://docs.imgix.com/apis/url/border-and-padding/border).
	 */
	border?: Maybe<Scalars["String"]>
	/**
	 * Sets bottom border of an image. [See
	 * docs](https://docs.imgix.com/apis/url/border-and-padding/border-bottom).
	 */
	borderBottom?: Maybe<Scalars["Int"]>
	/**
	 * Sets left border of an image. [See
	 * docs](https://docs.imgix.com/apis/url/border-and-padding/border-left).
	 */
	borderLeft?: Maybe<Scalars["Int"]>
	/**
	 * Sets the outer radius of the image's border in pixels. [See
	 * docs](https://docs.imgix.com/apis/url/border-and-padding/border-radius).
	 */
	borderRadius?: Maybe<Scalars["String"]>
	/**
	 * Sets the inner radius of the image's border in pixels. [See
	 * docs](https://docs.imgix.com/apis/url/border-and-padding/border-radius-inner).
	 */
	borderRadiusInner?: Maybe<Scalars["String"]>
	/**
	 * Sets right border of an image. [See
	 * docs](https://docs.imgix.com/apis/url/border-and-padding/border-right).
	 */
	borderRight?: Maybe<Scalars["Int"]>
	/**
	 * Sets top border of an image. [See
	 * docs](https://docs.imgix.com/apis/url/border-and-padding/border-top).
	 */
	borderTop?: Maybe<Scalars["Int"]>
	/**
	 * Alias for `blendPad`.
	 */
	bp?: Maybe<Scalars["Int"]>
	/**
	 * Adjusts the brightness of the source image. Default: `0`. [See
	 * docs](https://docs.imgix.com/apis/url/adjustment/bri).
	 */
	bri?: Maybe<Scalars["Int"]>
	/**
	 * Alias for `blendSize`.
	 */
	bs?: Maybe<Scalars["String"]>
	/**
	 * Alias for `blendW`.
	 */
	bw?: Maybe<Scalars["Float"]>
	/**
	 * Alias for `blendX`.
	 */
	bx?: Maybe<Scalars["Int"]>
	/**
	 * Alias for `blendY`.
	 */
	by?: Maybe<Scalars["Int"]>
	/**
	 * Sets one or more Client-Hints headers. [See
	 * docs](https://docs.imgix.com/apis/url/format/ch).
	 */
	ch?: Maybe<Scalars["String"]>
	/**
	 * Specifies the output chroma subsampling rate. Default: `420`. [See
	 * docs](https://docs.imgix.com/apis/url/format/chromasub).
	 */
	chromasub?: Maybe<Scalars["Int"]>
	/**
	 * Limits the number of unique colors in an image. [See
	 * docs](https://docs.imgix.com/apis/url/format/colorquant).
	 */
	colorquant?: Maybe<Scalars["Int"]>
	/**
	 * Specifies how many colors to include in a palette-extraction response.
	 * Default: `6`. [See docs](https://docs.imgix.com/apis/url/color-palette/colors).
	 */
	colors?: Maybe<Scalars["Int"]>
	/**
	 * Adjusts the contrast of the source image. Default: `0`. [See
	 * docs](https://docs.imgix.com/apis/url/adjustment/con).
	 */
	con?: Maybe<Scalars["Int"]>
	/**
	 * Specifies the radius value for a rounded corner mask. [See
	 * docs](https://docs.imgix.com/apis/url/mask/corner-radius).
	 */
	cornerRadius?: Maybe<Scalars["String"]>
	/**
	 * Specifies how to crop an image. [See
	 * docs](https://docs.imgix.com/apis/url/size/crop).
	 */
	crop?: Maybe<Scalars["String"]>
	/**
	 * Specifies the color space of the output image. [See
	 * docs](https://docs.imgix.com/apis/url/format/cs).
	 */
	cs?: Maybe<Scalars["String"]>
	/**
	 * Forces a URL to use send-file in its response. [See
	 * docs](https://docs.imgix.com/apis/url/format/dl).
	 */
	dl?: Maybe<Scalars["String"]>
	/**
	 * Sets the DPI value in the EXIF header. [See
	 * docs](https://docs.imgix.com/apis/url/format/dpi).
	 */
	dpi?: Maybe<Scalars["Int"]>
	/**
	 * Adjusts the device-pixel ratio of the output image. Default: `1`. [See
	 * docs](https://docs.imgix.com/apis/url/dpr).
	 */
	dpr?: Maybe<Scalars["Float"]>
	/**
	 * Applies a duotone effect to the source image. [See
	 * docs](https://docs.imgix.com/apis/url/stylize/duotone).
	 */
	duotone?: Maybe<Scalars["String"]>
	/**
	 * Changes the alpha of the duotone effect atop the source image. Default:
	 * `100`. [See docs](https://docs.imgix.com/apis/url/stylize/duotone-alpha).
	 */
	duotoneAlpha?: Maybe<Scalars["Int"]>
	/**
	 * Adjusts the exposure of the output image. Default: `0`. [See
	 * docs](https://docs.imgix.com/apis/url/adjustment/exp).
	 */
	exp?: Maybe<Scalars["Int"]>
	/**
	 * A Unix timestamp specifying a UTC time. Requests made to this URL after
	 * that time will output a 404 status code. [See
	 * docs](https://docs.imgix.com/apis/url/expires).
	 */
	expires?: Maybe<Scalars["String"]>
	/**
	 * Alias for `fit`.
	 */
	f?: Maybe<Scalars["String"]>
	/**
	 * Selects a face to crop to. [See
	 * docs](https://docs.imgix.com/apis/url/face-detection/faceindex).
	 */
	faceindex?: Maybe<Scalars["Int"]>
	/**
	 * Adjusts padding around a selected face. Default: `1`. [See
	 * docs](https://docs.imgix.com/apis/url/face-detection/facepad).
	 */
	facepad?: Maybe<Scalars["Float"]>
	/**
	 * Specifies that face data should be included in output when combined with
	 * `fm=json`. [See docs](https://docs.imgix.com/apis/url/face-detection/faces).
	 */
	faces?: Maybe<Scalars["Int"]>
	/**
	 * Determines how to fill in additional space created by the fit setting. [See
	 * docs](https://docs.imgix.com/apis/url/fill/fill).
	 */
	fill?: Maybe<Scalars["String"]>
	/**
	 * Sets the fill color for images with additional space created by the fit
	 * setting. Default: `fff`. [See
	 * docs](https://docs.imgix.com/apis/url/fill/fill-color).
	 */
	fillColor?: Maybe<Scalars["String"]>
	/**
	 * Alias for `fillColor`.
	 */
	fillcolor?: Maybe<Scalars["String"]>
	/**
	 * Specifies how to map the source image to the output image dimensions.
	 * Default: `clip`. [See docs](https://docs.imgix.com/apis/url/size/fit).
	 */
	fit?: Maybe<Scalars["String"]>
	/**
	 * Flips an image on a specified axis. [See
	 * docs](https://docs.imgix.com/apis/url/rotation/flip).
	 */
	flip?: Maybe<Scalars["String"]>
	/**
	 * Changes the format of the output image. [See
	 * docs](https://docs.imgix.com/apis/url/format/fm).
	 */
	fm?: Maybe<Scalars["String"]>
	/**
	 * Displays crosshairs identifying the location of the set focal point.
	 * Default: `false`. [See
	 * docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-debug).
	 */
	fpDebug?: Maybe<Scalars["Boolean"]>
	/**
	 * Sets the relative horizontal value for the focal point of an image. [See
	 * docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-x).
	 */
	fpX?: Maybe<Scalars["Float"]>
	/**
	 * Sets the relative vertical value for the focal point of an image. [See
	 * docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-y).
	 */
	fpY?: Maybe<Scalars["Float"]>
	/**
	 * Sets the relative zoom value for the focal point of an image. [See
	 * docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-z).
	 */
	fpZ?: Maybe<Scalars["Float"]>
	/**
	 * Adjusts the gamma of the source image. Default: `0`. [See
	 * docs](https://docs.imgix.com/apis/url/adjustment/gam).
	 */
	gam?: Maybe<Scalars["Int"]>
	/**
	 * Sets grid colors for the transparency checkerboard grid.
	 */
	gridColors?: Maybe<Scalars["String"]>
	/**
	 * Sets grid size for the transparency checkerboard grid.
	 */
	gridSize?: Maybe<Scalars["Int"]>
	/**
	 * Adjusts the height of the output image. [See
	 * docs](https://docs.imgix.com/apis/url/size/h).
	 */
	h?: Maybe<Scalars["Float"]>
	/**
	 * Alias for `h`.
	 */
	height?: Maybe<Scalars["Float"]>
	/**
	 * Adjusts the highlights of the source image. Default: `0`. [See
	 * docs](https://docs.imgix.com/apis/url/adjustment/high).
	 */
	high?: Maybe<Scalars["Int"]>
	/**
	 * Applies a half-tone effect to the source image. Default: `0`. [See
	 * docs](https://docs.imgix.com/apis/url/stylize/htn).
	 */
	htn?: Maybe<Scalars["Int"]>
	/**
	 * Adjusts the hue of the source image. Default: `0`. [See
	 * docs](https://docs.imgix.com/apis/url/adjustment/hue).
	 */
	hue?: Maybe<Scalars["Int"]>
	/**
	 * Alias for `invert`.
	 */
	inv?: Maybe<Scalars["Boolean"]>
	/**
	 * Inverts the colors on the source image. Default: `false`. [See
	 * docs](https://docs.imgix.com/apis/url/adjustment/invert).
	 */
	invert?: Maybe<Scalars["Boolean"]>
	/**
	 * Specifies that the output image should be a lossless variant. Default:
	 * `false`. [See docs](https://docs.imgix.com/apis/url/format/lossless).
	 */
	lossless?: Maybe<Scalars["Boolean"]>
	/**
	 * Alias for `mark`.
	 */
	m?: Maybe<Scalars["String"]>
	/**
	 * Alias for `markAlign`.
	 */
	ma?: Maybe<Scalars["String"]>
	/**
	 * Alias for `markAlpha`.
	 */
	malph?: Maybe<Scalars["Int"]>
	/**
	 * Specifies the location of the watermark image. [See
	 * docs](https://docs.imgix.com/apis/url/watermark/mark).
	 */
	mark?: Maybe<Scalars["String"]>
	/**
	 * Changes the watermark alignment relative to the parent image. [See
	 * docs](https://docs.imgix.com/apis/url/watermark/mark-align).
	 */
	markAlign?: Maybe<Scalars["String"]>
	/**
	 * Changes the alpha of the watermark image. Default: `100`. [See
	 * docs](https://docs.imgix.com/apis/url/watermark/mark-alpha).
	 */
	markAlpha?: Maybe<Scalars["Int"]>
	/**
	 * Changes base URL of the watermark image. [See
	 * docs](https://docs.imgix.com/apis/url/watermark/mark-base).
	 */
	markBase?: Maybe<Scalars["String"]>
	/**
	 * Specifies the fit mode for watermark images. Default: `clip`. [See
	 * docs](https://docs.imgix.com/apis/url/watermark/mark-fit).
	 */
	markFit?: Maybe<Scalars["String"]>
	/**
	 * Adjusts the height of the watermark image. [See
	 * docs](https://docs.imgix.com/apis/url/watermark/mark-h).
	 */
	markH?: Maybe<Scalars["Float"]>
	/**
	 * Applies padding to the watermark image. Default: `5`. [See
	 * docs](https://docs.imgix.com/apis/url/watermark/mark-pad).
	 */
	markPad?: Maybe<Scalars["Int"]>
	/**
	 * Rotates a watermark or tiled watermarks by a specified number of degrees.
	 * Default: `0`. [See docs](https://docs.imgix.com/apis/url/watermark/mark-rot).
	 */
	markRot?: Maybe<Scalars["Float"]>
	/**
	 * Adjusts the scale of the watermark image. [See
	 * docs](https://docs.imgix.com/apis/url/watermark/mark-scale).
	 */
	markScale?: Maybe<Scalars["Int"]>
	/**
	 * Adds tiled watermark. [See
	 * docs](https://docs.imgix.com/apis/url/watermark/mark-tile).
	 */
	markTile?: Maybe<Scalars["String"]>
	/**
	 * Adjusts the width of the watermark image. [See
	 * docs](https://docs.imgix.com/apis/url/watermark/mark-w).
	 */
	markW?: Maybe<Scalars["Float"]>
	/**
	 * Adjusts the x-offset of the watermark image relative to its parent. [See
	 * docs](https://docs.imgix.com/apis/url/watermark/mark-x).
	 */
	markX?: Maybe<Scalars["Int"]>
	/**
	 * Adjusts the y-offset of the watermark image relative to its parent. [See
	 * docs](https://docs.imgix.com/apis/url/watermark/mark-y).
	 */
	markY?: Maybe<Scalars["Int"]>
	/**
	 * Alias for `markAlign`.
	 */
	markalign?: Maybe<Scalars["String"]>
	/**
	 * Alias for `markAlpha`.
	 */
	markalpha?: Maybe<Scalars["Int"]>
	/**
	 * Alias for `markBase`.
	 */
	markbase?: Maybe<Scalars["String"]>
	/**
	 * Alias for `markFit`.
	 */
	markfit?: Maybe<Scalars["String"]>
	/**
	 * Alias for `markH`.
	 */
	markh?: Maybe<Scalars["Float"]>
	/**
	 * Alias for `markPad`.
	 */
	markpad?: Maybe<Scalars["Int"]>
	/**
	 * Alias for `markScale`.
	 */
	markscale?: Maybe<Scalars["Int"]>
	/**
	 * Alias for `markTile`.
	 */
	marktile?: Maybe<Scalars["String"]>
	/**
	 * Alias for `markW`.
	 */
	markw?: Maybe<Scalars["Float"]>
	/**
	 * Alias for `markX`.
	 */
	markx?: Maybe<Scalars["Int"]>
	/**
	 * Alias for `markY`.
	 */
	marky?: Maybe<Scalars["Int"]>
	/**
	 * Defines the type of mask and specifies the URL if that type is selected.
	 * [See docs](https://docs.imgix.com/apis/url/mask).
	 */
	mask?: Maybe<Scalars["String"]>
	/**
	 * Colors the background of the transparent mask area of images. Default:
	 * `fff`. [See docs](https://docs.imgix.com/apis/url/mask/mask-bg).
	 */
	maskBg?: Maybe<Scalars["String"]>
	/**
	 * Alias for `maskBg`.
	 */
	maskbg?: Maybe<Scalars["String"]>
	/**
	 * Specifies the maximum height of the output image in pixels. [See
	 * docs](https://docs.imgix.com/apis/url/size/max-height).
	 */
	maxH?: Maybe<Scalars["Int"]>
	/**
	 * Alias for `maxH`.
	 */
	maxHeight?: Maybe<Scalars["Int"]>
	/**
	 * Specifies the maximum width of the output image in pixels. [See
	 * docs](https://docs.imgix.com/apis/url/size/max-width).
	 */
	maxW?: Maybe<Scalars["Int"]>
	/**
	 * Alias for `maxW`.
	 */
	maxWidth?: Maybe<Scalars["Int"]>
	/**
	 * Alias for `markBase`.
	 */
	mb?: Maybe<Scalars["String"]>
	/**
	 * Alias for `markFit`.
	 */
	mf?: Maybe<Scalars["String"]>
	/**
	 * Alias for `markH`.
	 */
	mh?: Maybe<Scalars["Float"]>
	/**
	 * Specifies the minimum height of the output image in pixels. [See
	 * docs](https://docs.imgix.com/apis/url/size/min-height).
	 */
	minH?: Maybe<Scalars["Int"]>
	/**
	 * Alias for `minH`.
	 */
	minHeight?: Maybe<Scalars["Int"]>
	/**
	 * Specifies the minimum width of the output image in pixels. [See
	 * docs](https://docs.imgix.com/apis/url/size/min-width).
	 */
	minW?: Maybe<Scalars["Int"]>
	/**
	 * Alias for `minW`.
	 */
	minWidth?: Maybe<Scalars["Int"]>
	/**
	 * Alias for `monochrome`.
	 */
	mono?: Maybe<Scalars["String"]>
	/**
	 * Applies a monochrome effect to the source image. [See
	 * docs](https://docs.imgix.com/apis/url/stylize/monochrome).
	 */
	monochrome?: Maybe<Scalars["String"]>
	/**
	 * Alias for `markPad`.
	 */
	mp?: Maybe<Scalars["Int"]>
	/**
	 * Alias for `markScale`.
	 */
	ms?: Maybe<Scalars["Int"]>
	/**
	 * Alias for `markTile`.
	 */
	mtile?: Maybe<Scalars["String"]>
	/**
	 * Alias for `markW`.
	 */
	mw?: Maybe<Scalars["Float"]>
	/**
	 * Alias for `markX`.
	 */
	mx?: Maybe<Scalars["Int"]>
	/**
	 * Alias for `markY`.
	 */
	my?: Maybe<Scalars["Int"]>
	/**
	 * Reduces the noise in an image. Default: `20`. [See
	 * docs](https://docs.imgix.com/apis/url/noise-reduction/nr).
	 */
	nr?: Maybe<Scalars["Int"]>
	/**
	 * Provides a threshold by which to sharpen an image. Default: `20`. [See
	 * docs](https://docs.imgix.com/apis/url/noise-reduction/nrs).
	 */
	nrs?: Maybe<Scalars["Int"]>
	/**
	 * Alias for `orient`.
	 */
	or?: Maybe<Scalars["Int"]>
	/**
	 * Changes the image orientation. [See
	 * docs](https://docs.imgix.com/apis/url/rotation/orient).
	 */
	orient?: Maybe<Scalars["Int"]>
	/**
	 * Pads an image. Default: `0`. [See
	 * docs](https://docs.imgix.com/apis/url/border-and-padding/pad).
	 */
	pad?: Maybe<Scalars["Int"]>
	/**
	 * Sets bottom padding of an image. [See
	 * docs](https://docs.imgix.com/apis/url/border-and-padding/pad-bottom).
	 */
	padBottom?: Maybe<Scalars["Int"]>
	/**
	 * Sets left padding of an image. [See
	 * docs](https://docs.imgix.com/apis/url/border-and-padding/pad-left).
	 */
	padLeft?: Maybe<Scalars["Int"]>
	/**
	 * Sets right padding of an image. [See
	 * docs](https://docs.imgix.com/apis/url/border-and-padding/pad-right).
	 */
	padRight?: Maybe<Scalars["Int"]>
	/**
	 * Sets top padding of an image. [See
	 * docs](https://docs.imgix.com/apis/url/border-and-padding/pad-top).
	 */
	padTop?: Maybe<Scalars["Int"]>
	/**
	 * Selects a page from a PDF for display. Default: `1`. [See
	 * docs](https://docs.imgix.com/apis/url/pdf/page).
	 */
	page?: Maybe<Scalars["Int"]>
	/**
	 * Specifies an output format for palette-extraction. [See
	 * docs](https://docs.imgix.com/apis/url/color-palette/palette).
	 */
	palette?: Maybe<Scalars["String"]>
	/**
	 * Enables or disables PDF annotation. Default: `true`. [See
	 * docs](https://docs.imgix.com/apis/url/pdf/pdf-annotation).
	 */
	pdfAnnotation?: Maybe<Scalars["Boolean"]>
	/**
	 * Specifies a CSS prefix for all classes in palette-extraction. Default:
	 * `image`. [See docs](https://docs.imgix.com/apis/url/color-palette/prefix).
	 */
	prefix?: Maybe<Scalars["String"]>
	/**
	 * Applies a pixelation effect to an image. Default: `0`. [See
	 * docs](https://docs.imgix.com/apis/url/stylize/px).
	 */
	px?: Maybe<Scalars["Int"]>
	/**
	 * Adjusts the quality of an output image. Default: `75`. [See
	 * docs](https://docs.imgix.com/apis/url/format/q).
	 */
	q?: Maybe<Scalars["Int"]>
	/**
	 * Crops an image to a specified rectangle. [See
	 * docs](https://docs.imgix.com/apis/url/size/rect).
	 */
	rect?: Maybe<Scalars["String"]>
	/**
	 * Rotates an image by a specified number of degrees. Default: `0`. [See
	 * docs](https://docs.imgix.com/apis/url/rotation/rot).
	 */
	rot?: Maybe<Scalars["Float"]>
	/**
	 * Adjusts the saturation of an image. Default: `0`. [See
	 * docs](https://docs.imgix.com/apis/url/adjustment/sat).
	 */
	sat?: Maybe<Scalars["Int"]>
	/**
	 * Applies a sepia effect to an image. Default: `0`. [See
	 * docs](https://docs.imgix.com/apis/url/stylize/sepia).
	 */
	sepia?: Maybe<Scalars["Int"]>
	/**
	 * Adjusts the highlights of the source image. Default: `0`. [See
	 * docs](https://docs.imgix.com/apis/url/adjustment/shad).
	 */
	shad?: Maybe<Scalars["Float"]>
	/**
	 * Adjusts the sharpness of the source image. Default: `0`. [See
	 * docs](https://docs.imgix.com/apis/url/adjustment/sharp).
	 */
	sharp?: Maybe<Scalars["Float"]>
	/**
	 * Alias for `txt`.
	 */
	t?: Maybe<Scalars["String"]>
	/**
	 * Alias for `txtAlign`.
	 */
	ta?: Maybe<Scalars["String"]>
	/**
	 * Alias for `txtColor`.
	 */
	tc?: Maybe<Scalars["String"]>
	/**
	 * Alias for `txtClip`.
	 */
	tcl?: Maybe<Scalars["String"]>
	/**
	 * Alias for `txtFont`.
	 */
	tf?: Maybe<Scalars["String"]>
	/**
	 * Alias for `txtLine`.
	 */
	tl?: Maybe<Scalars["Int"]>
	/**
	 * Alias for `txtPad`.
	 */
	tp?: Maybe<Scalars["Int"]>
	/**
	 * Adds checkerboard behind images which support transparency. [See
	 * docs](https://docs.imgix.com/apis/url/fill/transparency).
	 */
	transparency?: Maybe<Scalars["String"]>
	/**
	 * Trims the source image. [See docs](https://docs.imgix.com/apis/url/trim/trim).
	 */
	trim?: Maybe<Scalars["String"]>
	/**
	 * Specifies a trim color on a trim operation. [See
	 * docs](https://docs.imgix.com/apis/url/trim/trim-color).
	 */
	trimColor?: Maybe<Scalars["String"]>
	/**
	 * Specifies the mean difference on a trim operation. Default: `11`. [See
	 * docs](https://docs.imgix.com/apis/url/trim/trim-md).
	 */
	trimMd?: Maybe<Scalars["Float"]>
	/**
	 * Pads the area of the source image before trimming. Default: `0`. [See
	 * docs](https://docs.imgix.com/apis/url/trim/trim-pad).
	 */
	trimPad?: Maybe<Scalars["Int"]>
	/**
	 * Specifies the standard deviation on a trim operation. Default: `10`. [See
	 * docs](https://docs.imgix.com/apis/url/trim/trim-sd).
	 */
	trimSd?: Maybe<Scalars["Float"]>
	/**
	 * Specifies the tolerance on a trim operation. Default: `0`. [See
	 * docs](https://docs.imgix.com/apis/url/trim/trim-tol).
	 */
	trimTol?: Maybe<Scalars["Float"]>
	/**
	 * Alias for `trimColor`.
	 */
	trimcolor?: Maybe<Scalars["String"]>
	/**
	 * Alias for `trimMd`.
	 */
	trimmd?: Maybe<Scalars["Float"]>
	/**
	 * Alias for `trimPad`.
	 */
	trimpad?: Maybe<Scalars["Int"]>
	/**
	 * Alias for `trimSd`.
	 */
	trimsd?: Maybe<Scalars["Float"]>
	/**
	 * Alias for `trimTol`.
	 */
	trimtol?: Maybe<Scalars["Float"]>
	/**
	 * Alias for `txtShad`.
	 */
	tsh?: Maybe<Scalars["Float"]>
	/**
	 * Alias for `txtSize`.
	 */
	tsz?: Maybe<Scalars["Int"]>
	/**
	 * Alias for `txtTrack`.
	 */
	tt?: Maybe<Scalars["Int"]>
	/**
	 * Sets the text string to render. [See docs](https://docs.imgix.com/apis/url/text/txt).
	 */
	txt?: Maybe<Scalars["String"]>
	/**
	 * Sets the vertical and horizontal alignment of rendered text relative to the
	 * base image. [See docs](https://docs.imgix.com/apis/url/text/txt-align).
	 */
	txtAlign?: Maybe<Scalars["String"]>
	/**
	 * Sets the clipping properties of rendered text. Default: `end`. [See
	 * docs](https://docs.imgix.com/apis/url/text/txt-clip).
	 */
	txtClip?: Maybe<Scalars["String"]>
	/**
	 * Alias for `txtColor`.
	 */
	txtClr?: Maybe<Scalars["String"]>
	/**
	 * Specifies the color of rendered text. [See
	 * docs](https://docs.imgix.com/apis/url/text/txt-color).
	 */
	txtColor?: Maybe<Scalars["String"]>
	/**
	 * Specifies the fit approach for rendered text. [See
	 * docs](https://docs.imgix.com/apis/url/text/txt-fit).
	 */
	txtFit?: Maybe<Scalars["String"]>
	/**
	 * Selects a font for rendered text. [See
	 * docs](https://docs.imgix.com/apis/url/text/txt-font).
	 */
	txtFont?: Maybe<Scalars["String"]>
	/**
	 * Sets the leading (line spacing) for rendered text. Only works on the
	 * multi-line text endpoint. Default: `0`. [See
	 * docs](https://docs.imgix.com/apis/url/typesetting/txt-lead).
	 */
	txtLead?: Maybe<Scalars["Int"]>
	/**
	 * Controls the level of ligature substitution. [See
	 * docs](https://docs.imgix.com/apis/url/text/txt-lig).
	 */
	txtLig?: Maybe<Scalars["Int"]>
	/**
	 * Outlines the rendered text with a specified color. Default: `0`. [See
	 * docs](https://docs.imgix.com/apis/url/text/txt-line).
	 */
	txtLine?: Maybe<Scalars["Int"]>
	/**
	 * Alias for `txtLineColor`.
	 */
	txtLineClr?: Maybe<Scalars["String"]>
	/**
	 * Specifies a text outline color. Default: `fff`. [See
	 * docs](https://docs.imgix.com/apis/url/text/txt-line-color).
	 */
	txtLineColor?: Maybe<Scalars["String"]>
	/**
	 * Specifies the padding (in device-independent pixels) between a textbox and
	 * the edges of the base image. [See
	 * docs](https://docs.imgix.com/apis/url/text/txt-pad).
	 */
	txtPad?: Maybe<Scalars["Int"]>
	/**
	 * Applies a shadow to rendered text. Default: `0`. [See
	 * docs](https://docs.imgix.com/apis/url/text/txt-shad).
	 */
	txtShad?: Maybe<Scalars["Float"]>
	/**
	 * Sets the font size of rendered text. Default: `12`. [See
	 * docs](https://docs.imgix.com/apis/url/text/txt-size).
	 */
	txtSize?: Maybe<Scalars["Int"]>
	/**
	 * Sets the tracking (letter spacing) for rendered text. Only works on the
	 * multi-line text endpoint. Default: `0`. [See
	 * docs](https://docs.imgix.com/apis/url/typesetting/txt-track).
	 */
	txtTrack?: Maybe<Scalars["Int"]>
	/**
	 * Sets the width of rendered text. [See
	 * docs](https://docs.imgix.com/apis/url/text/txt-width).
	 */
	txtWidth?: Maybe<Scalars["Int"]>
	/**
	 * Alias for `txtAlign`.
	 */
	txtalign?: Maybe<Scalars["String"]>
	/**
	 * Alias for `txtClip`.
	 */
	txtclip?: Maybe<Scalars["String"]>
	/**
	 * Alias for `txtColor`.
	 */
	txtclr?: Maybe<Scalars["String"]>
	/**
	 * Alias for `txtColor`.
	 */
	txtcolor?: Maybe<Scalars["String"]>
	/**
	 * Alias for `txtFit`.
	 */
	txtfit?: Maybe<Scalars["String"]>
	/**
	 * Alias for `txtFont`.
	 */
	txtfont?: Maybe<Scalars["String"]>
	/**
	 * Alias for `txtLead`.
	 */
	txtlead?: Maybe<Scalars["Int"]>
	/**
	 * Alias for `txtLig`.
	 */
	txtlig?: Maybe<Scalars["Int"]>
	/**
	 * Alias for `txtLine`.
	 */
	txtline?: Maybe<Scalars["Int"]>
	/**
	 * Alias for `txtLineColor`.
	 */
	txtlineclr?: Maybe<Scalars["String"]>
	/**
	 * Alias for `txtLineColor`.
	 */
	txtlinecolor?: Maybe<Scalars["String"]>
	/**
	 * Alias for `txtPad`.
	 */
	txtpad?: Maybe<Scalars["Int"]>
	/**
	 * Alias for `txtShad`.
	 */
	txtshad?: Maybe<Scalars["Float"]>
	/**
	 * Alias for `txtSize`.
	 */
	txtsize?: Maybe<Scalars["Int"]>
	/**
	 * Alias for `txtTrack`.
	 */
	txttrack?: Maybe<Scalars["Int"]>
	/**
	 * Alias for `txtWidth`.
	 */
	txtwidth?: Maybe<Scalars["Int"]>
	/**
	 * Sharpens the source image using an unsharp mask. Default: `0`. [See
	 * docs](https://docs.imgix.com/apis/url/adjustment/usm).
	 */
	usm?: Maybe<Scalars["Int"]>
	/**
	 * Specifies the radius for an unsharp mask operation. Default: `2.5`. [See
	 * docs](https://docs.imgix.com/apis/url/adjustment/usmrad).
	 */
	usmrad?: Maybe<Scalars["Float"]>
	/**
	 * Adjusts the vibrance of an image. Default: `0`. [See
	 * docs](https://docs.imgix.com/apis/url/adjustment/vib).
	 */
	vib?: Maybe<Scalars["Int"]>
	/**
	 * Adjusts the width of the output image. [See
	 * docs](https://docs.imgix.com/apis/url/size/w).
	 */
	w?: Maybe<Scalars["Float"]>
	/**
	 * Alias for `w`.
	 */
	width?: Maybe<Scalars["Float"]>
}

export enum ImgixPlaceholder {
	Blurred = "BLURRED",
	DominantColor = "DOMINANT_COLOR",
	None = "NONE",
}

export type IntQueryOperatorInput = {
	eq?: Maybe<Scalars["Int"]>
	gt?: Maybe<Scalars["Int"]>
	gte?: Maybe<Scalars["Int"]>
	in?: Maybe<Array<Maybe<Scalars["Int"]>>>
	lt?: Maybe<Scalars["Int"]>
	lte?: Maybe<Scalars["Int"]>
	ne?: Maybe<Scalars["Int"]>
	nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
}

export type Internal = {
	__typename?: "Internal"
	content?: Maybe<Scalars["String"]>
	contentDigest: Scalars["String"]
	description?: Maybe<Scalars["String"]>
	fieldOwners?: Maybe<Array<Maybe<Scalars["String"]>>>
	ignoreType?: Maybe<Scalars["Boolean"]>
	mediaType?: Maybe<Scalars["String"]>
	owner: Scalars["String"]
	type: Scalars["String"]
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
}

export type JsonQueryOperatorInput = {
	eq?: Maybe<Scalars["JSON"]>
	glob?: Maybe<Scalars["JSON"]>
	in?: Maybe<Array<Maybe<Scalars["JSON"]>>>
	ne?: Maybe<Scalars["JSON"]>
	nin?: Maybe<Array<Maybe<Scalars["JSON"]>>>
	regex?: Maybe<Scalars["JSON"]>
}

/**
 * Node Interface
 */
export type Node = {
	children: Array<Node>
	id: Scalars["ID"]
	internal: Internal
	parent?: Maybe<Node>
}

export type NodeFilterInput = {
	children?: Maybe<NodeFilterListInput>
	id?: Maybe<StringQueryOperatorInput>
	internal?: Maybe<InternalFilterInput>
	parent?: Maybe<NodeFilterInput>
}

export type NodeFilterListInput = {
	elemMatch?: Maybe<NodeFilterInput>
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
	id?: Maybe<IdQueryOperatorInput>
	lang?: Maybe<StringQueryOperatorInput>
	raw?: Maybe<JsonQueryOperatorInput>
	type?: Maybe<StringQueryOperatorInput>
	uid?: Maybe<StringQueryOperatorInput>
}

export type PrismicAlternateLanguageTypeFilterListInput = {
	elemMatch?: Maybe<PrismicAlternateLanguageTypeFilterInput>
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
	limit?: Maybe<Scalars["Int"]>
	skip?: Maybe<Scalars["Int"]>
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
	children?: Maybe<NodeFilterListInput>
	id?: Maybe<StringQueryOperatorInput>
	internal?: Maybe<InternalFilterInput>
	parent?: Maybe<NodeFilterInput>
}

export type PrismicEmbedTypeGroupConnection = {
	__typename?: "PrismicEmbedTypeGroupConnection"
	edges: Array<PrismicEmbedTypeEdge>
	field: Scalars["String"]
	fieldValue?: Maybe<Scalars["String"]>
	nodes: Array<PrismicEmbedType>
	pageInfo: PageInfo
	totalCount: Scalars["Int"]
}

export type PrismicEmbedTypeSortInput = {
	fields?: Maybe<Array<Maybe<PrismicEmbedTypeFieldsEnum>>>
	order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type PrismicEvent = Node & {
	__typename?: "PrismicEvent"
	_previewable: Scalars["ID"]
	alternate_languages: Array<PrismicAlternateLanguageType>
	children: Array<Node>
	data?: Maybe<PrismicEventDataType>
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
	difference?: Maybe<Scalars["String"]>
	formatString?: Maybe<Scalars["String"]>
	fromNow?: Maybe<Scalars["Boolean"]>
	locale?: Maybe<Scalars["String"]>
}

export type PrismicEventLast_Publication_DateArgs = {
	difference?: Maybe<Scalars["String"]>
	formatString?: Maybe<Scalars["String"]>
	fromNow?: Maybe<Scalars["Boolean"]>
	locale?: Maybe<Scalars["String"]>
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
	limit?: Maybe<Scalars["Int"]>
	skip?: Maybe<Scalars["Int"]>
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

export type PrismicEventDataType = {
	__typename?: "PrismicEventDataType"
	date?: Maybe<Scalars["Date"]>
	description?: Maybe<PrismicStructuredTextType>
	title?: Maybe<PrismicStructuredTextType>
	type?: Maybe<Scalars["String"]>
}

export type PrismicEventDataTypeDateArgs = {
	difference?: Maybe<Scalars["String"]>
	formatString?: Maybe<Scalars["String"]>
	fromNow?: Maybe<Scalars["Boolean"]>
	locale?: Maybe<Scalars["String"]>
}

export type PrismicEventDataTypeFilterInput = {
	date?: Maybe<DateQueryOperatorInput>
	description?: Maybe<PrismicStructuredTextTypeFilterInput>
	title?: Maybe<PrismicStructuredTextTypeFilterInput>
	type?: Maybe<StringQueryOperatorInput>
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
	DataDescriptionText = "data___description___text",
	DataTitleHtml = "data___title___html",
	DataTitleRaw = "data___title___raw",
	DataTitleText = "data___title___text",
	DataType = "data___type",
	FirstPublicationDate = "first_publication_date",
	Href = "href",
	Id = "id",
	InternalContent = "internal___content",
	InternalContentDigest = "internal___contentDigest",
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
	_previewable?: Maybe<IdQueryOperatorInput>
	alternate_languages?: Maybe<PrismicAlternateLanguageTypeFilterListInput>
	children?: Maybe<NodeFilterListInput>
	data?: Maybe<PrismicEventDataTypeFilterInput>
	dataRaw?: Maybe<JsonQueryOperatorInput>
	first_publication_date?: Maybe<DateQueryOperatorInput>
	href?: Maybe<StringQueryOperatorInput>
	id?: Maybe<StringQueryOperatorInput>
	internal?: Maybe<InternalFilterInput>
	lang?: Maybe<StringQueryOperatorInput>
	last_publication_date?: Maybe<DateQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	prismicId?: Maybe<IdQueryOperatorInput>
	tags?: Maybe<StringQueryOperatorInput>
	type?: Maybe<StringQueryOperatorInput>
	uid?: Maybe<StringQueryOperatorInput>
	url?: Maybe<StringQueryOperatorInput>
}

export type PrismicEventGroupConnection = {
	__typename?: "PrismicEventGroupConnection"
	edges: Array<PrismicEventEdge>
	field: Scalars["String"]
	fieldValue?: Maybe<Scalars["String"]>
	nodes: Array<PrismicEvent>
	pageInfo: PageInfo
	totalCount: Scalars["Int"]
}

export type PrismicEventSortInput = {
	fields?: Maybe<Array<Maybe<PrismicEventFieldsEnum>>>
	order?: Maybe<Array<Maybe<SortOrderEnum>>>
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

export type PrismicImageThumbnailType = {
	__typename?: "PrismicImageThumbnailType"
	alt?: Maybe<Scalars["String"]>
	copyright?: Maybe<Scalars["String"]>
	dimensions?: Maybe<PrismicImageDimensionsType>
	/**
	 * Should be used to generate fixed-width images (i.e. the size of the image
	 * doesn't change when the size of the browser changes, and are "fixed").
	 * Returns data compatible with gatsby-image. Instead of accessing this data
	 * directly, the GatsbySourceImgixFixed fragment should be used. See the
	 * project's README for more information.
	 */
	fixed?: Maybe<ImgixFixed>
	/**
	 * Should be used to generate fluid-width images (i.e. images that change when
	 * the size of the browser changes). Returns data compatible with
	 * gatsby-image. Instead of accessing this data directly, the
	 * GatsbySourceImgixFluid fragment should be used. See the project's README
	 * for more information.
	 */
	fluid?: Maybe<ImgixFluid>
	gatsbyImageData?: Maybe<Scalars["JSON"]>
	localFile?: Maybe<File>
	/**
	 * A plain imgix URL with the URL and params applied.
	 */
	url?: Maybe<Scalars["String"]>
}

export type PrismicImageThumbnailTypeFixedArgs = {
	height?: Maybe<Scalars["Int"]>
	imgixParams?: Maybe<ImgixParamsInput>
	placeholderImgixParams?: Maybe<ImgixParamsInput>
	quality?: Maybe<Scalars["Int"]>
	width?: Maybe<Scalars["Int"]>
}

export type PrismicImageThumbnailTypeFluidArgs = {
	imgixParams?: Maybe<ImgixParamsInput>
	maxHeight?: Maybe<Scalars["Int"]>
	maxWidth?: Maybe<Scalars["Int"]>
	placeholderImgixParams?: Maybe<ImgixParamsInput>
	srcSetBreakpoints?: Maybe<Array<Maybe<Scalars["Int"]>>>
}

export type PrismicImageThumbnailTypeGatsbyImageDataArgs = {
	aspectRatio?: Maybe<Scalars["Float"]>
	backgroundColor?: Maybe<Scalars["String"]>
	breakpoints?: Maybe<Array<Maybe<Scalars["Int"]>>>
	height?: Maybe<Scalars["Int"]>
	imgixParams?: Maybe<ImgixParamsInput>
	layout?: Maybe<GatsbyImageLayout>
	outputPixelDensities?: Maybe<Array<Maybe<Scalars["Float"]>>>
	placeholder?: Maybe<ImgixPlaceholder>
	placeholderImgixParams?: Maybe<ImgixParamsInput>
	sizes?: Maybe<Scalars["String"]>
	srcSetMaxWidth?: Maybe<Scalars["Int"]>
	srcSetMinWidth?: Maybe<Scalars["Int"]>
	width?: Maybe<Scalars["Int"]>
	widthTolerance?: Maybe<Scalars["Float"]>
}

export type PrismicImageThumbnailTypeUrlArgs = {
	imgixParams?: Maybe<ImgixParamsInput>
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
	eq?: Maybe<PrismicLinkTypeEnum>
	in?: Maybe<Array<Maybe<PrismicLinkTypeEnum>>>
	ne?: Maybe<PrismicLinkTypeEnum>
	nin?: Maybe<Array<Maybe<PrismicLinkTypeEnum>>>
}

export type PrismicLinkTypeFilterInput = {
	id?: Maybe<IdQueryOperatorInput>
	isBroken?: Maybe<BooleanQueryOperatorInput>
	lang?: Maybe<StringQueryOperatorInput>
	link_type?: Maybe<PrismicLinkTypeEnumQueryOperatorInput>
	localFile?: Maybe<FileFilterInput>
	raw?: Maybe<JsonQueryOperatorInput>
	size?: Maybe<IntQueryOperatorInput>
	slug?: Maybe<StringQueryOperatorInput>
	tags?: Maybe<StringQueryOperatorInput>
	target?: Maybe<StringQueryOperatorInput>
	type?: Maybe<StringQueryOperatorInput>
	uid?: Maybe<StringQueryOperatorInput>
	url?: Maybe<StringQueryOperatorInput>
}

export type PrismicNavigation = Node & {
	__typename?: "PrismicNavigation"
	_previewable: Scalars["ID"]
	alternate_languages: Array<PrismicAlternateLanguageType>
	children: Array<Node>
	data?: Maybe<PrismicNavigationDataType>
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
	difference?: Maybe<Scalars["String"]>
	formatString?: Maybe<Scalars["String"]>
	fromNow?: Maybe<Scalars["Boolean"]>
	locale?: Maybe<Scalars["String"]>
}

export type PrismicNavigationLast_Publication_DateArgs = {
	difference?: Maybe<Scalars["String"]>
	formatString?: Maybe<Scalars["String"]>
	fromNow?: Maybe<Scalars["Boolean"]>
	locale?: Maybe<Scalars["String"]>
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
	limit?: Maybe<Scalars["Int"]>
	skip?: Maybe<Scalars["Int"]>
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
	label?: Maybe<PrismicStructuredTextTypeFilterInput>
	link?: Maybe<PrismicLinkTypeFilterInput>
}

export type PrismicNavigationDataNavItemsFilterListInput = {
	elemMatch?: Maybe<PrismicNavigationDataNavItemsFilterInput>
}

export type PrismicNavigationDataType = {
	__typename?: "PrismicNavigationDataType"
	nav_items?: Maybe<Array<Maybe<PrismicNavigationDataNavItems>>>
	title?: Maybe<PrismicStructuredTextType>
}

export type PrismicNavigationDataTypeFilterInput = {
	nav_items?: Maybe<PrismicNavigationDataNavItemsFilterListInput>
	title?: Maybe<PrismicStructuredTextTypeFilterInput>
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
	DataTitleText = "data___title___text",
	FirstPublicationDate = "first_publication_date",
	Href = "href",
	Id = "id",
	InternalContent = "internal___content",
	InternalContentDigest = "internal___contentDigest",
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
	_previewable?: Maybe<IdQueryOperatorInput>
	alternate_languages?: Maybe<PrismicAlternateLanguageTypeFilterListInput>
	children?: Maybe<NodeFilterListInput>
	data?: Maybe<PrismicNavigationDataTypeFilterInput>
	dataRaw?: Maybe<JsonQueryOperatorInput>
	first_publication_date?: Maybe<DateQueryOperatorInput>
	href?: Maybe<StringQueryOperatorInput>
	id?: Maybe<StringQueryOperatorInput>
	internal?: Maybe<InternalFilterInput>
	lang?: Maybe<StringQueryOperatorInput>
	last_publication_date?: Maybe<DateQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	prismicId?: Maybe<IdQueryOperatorInput>
	tags?: Maybe<StringQueryOperatorInput>
	type?: Maybe<StringQueryOperatorInput>
	uid?: Maybe<StringQueryOperatorInput>
	url?: Maybe<StringQueryOperatorInput>
}

export type PrismicNavigationGroupConnection = {
	__typename?: "PrismicNavigationGroupConnection"
	edges: Array<PrismicNavigationEdge>
	field: Scalars["String"]
	fieldValue?: Maybe<Scalars["String"]>
	nodes: Array<PrismicNavigation>
	pageInfo: PageInfo
	totalCount: Scalars["Int"]
}

export type PrismicNavigationSortInput = {
	fields?: Maybe<Array<Maybe<PrismicNavigationFieldsEnum>>>
	order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type PrismicPage = Node & {
	__typename?: "PrismicPage"
	_previewable: Scalars["ID"]
	alternate_languages: Array<PrismicAlternateLanguageType>
	children: Array<Node>
	data?: Maybe<PrismicPageDataType>
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
	difference?: Maybe<Scalars["String"]>
	formatString?: Maybe<Scalars["String"]>
	fromNow?: Maybe<Scalars["Boolean"]>
	locale?: Maybe<Scalars["String"]>
}

export type PrismicPageLast_Publication_DateArgs = {
	difference?: Maybe<Scalars["String"]>
	formatString?: Maybe<Scalars["String"]>
	fromNow?: Maybe<Scalars["Boolean"]>
	locale?: Maybe<Scalars["String"]>
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
	limit?: Maybe<Scalars["Int"]>
	skip?: Maybe<Scalars["Int"]>
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
	primary?: Maybe<PrismicPageDataBodyAnchorPrimary>
	slice_label?: Maybe<Scalars["String"]>
	slice_type: Scalars["String"]
}

export type PrismicPageDataBodyAnchorPrimary = {
	__typename?: "PrismicPageDataBodyAnchorPrimary"
	anchor?: Maybe<Scalars["String"]>
}

export type PrismicPageDataBodyFilterableEvents = PrismicSliceType & {
	__typename?: "PrismicPageDataBodyFilterableEvents"
	id: Scalars["ID"]
	items?: Maybe<Array<Maybe<PrismicPageDataBodyFilterableEventsItem>>>
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
	primary?: Maybe<PrismicPageDataBodyGradientTextPrimary>
	slice_label?: Maybe<Scalars["String"]>
	slice_type: Scalars["String"]
}

export type PrismicPageDataBodyGradientTextPrimary = {
	__typename?: "PrismicPageDataBodyGradientTextPrimary"
	text?: Maybe<PrismicStructuredTextType>
}

export type PrismicPageDataBodyIntroduction = PrismicSliceType & {
	__typename?: "PrismicPageDataBodyIntroduction"
	id: Scalars["ID"]
	primary?: Maybe<PrismicPageDataBodyIntroductionPrimary>
	slice_label?: Maybe<Scalars["String"]>
	slice_type: Scalars["String"]
}

export type PrismicPageDataBodyIntroductionPrimary = {
	__typename?: "PrismicPageDataBodyIntroductionPrimary"
	color?: Maybe<Scalars["String"]>
	heading?: Maybe<PrismicStructuredTextType>
	text?: Maybe<PrismicStructuredTextType>
}

export type PrismicPageDataBodySlicesType =
	| PrismicPageDataBodyAnchor
	| PrismicPageDataBodyFilterableEvents
	| PrismicPageDataBodyGradientText
	| PrismicPageDataBodyIntroduction
	| PrismicPageDataBodyVideoHero

export type PrismicPageDataBodyVideoHero = PrismicSliceType & {
	__typename?: "PrismicPageDataBodyVideoHero"
	id: Scalars["ID"]
	primary?: Maybe<PrismicPageDataBodyVideoHeroPrimary>
	slice_label?: Maybe<Scalars["String"]>
	slice_type: Scalars["String"]
}

export type PrismicPageDataBodyVideoHeroPrimary = {
	__typename?: "PrismicPageDataBodyVideoHeroPrimary"
	text?: Maybe<PrismicStructuredTextType>
	video?: Maybe<PrismicEmbedType>
	video_thumbnail?: Maybe<PrismicPageDataBodyVideoHeroPrimaryVideoThumbnailImageType>
}

export type PrismicPageDataBodyVideoHeroPrimaryVideoThumbnailImageType = {
	__typename?: "PrismicPageDataBodyVideoHeroPrimaryVideoThumbnailImageType"
	alt?: Maybe<Scalars["String"]>
	copyright?: Maybe<Scalars["String"]>
	dimensions?: Maybe<PrismicImageDimensionsType>
	/**
	 * Should be used to generate fixed-width images (i.e. the size of the image
	 * doesn't change when the size of the browser changes, and are "fixed").
	 * Returns data compatible with gatsby-image. Instead of accessing this data
	 * directly, the GatsbySourceImgixFixed fragment should be used. See the
	 * project's README for more information.
	 */
	fixed?: Maybe<ImgixFixed>
	/**
	 * Should be used to generate fluid-width images (i.e. images that change when
	 * the size of the browser changes). Returns data compatible with
	 * gatsby-image. Instead of accessing this data directly, the
	 * GatsbySourceImgixFluid fragment should be used. See the project's README
	 * for more information.
	 */
	fluid?: Maybe<ImgixFluid>
	gatsbyImageData?: Maybe<Scalars["JSON"]>
	localFile?: Maybe<File>
	/**
	 * A plain imgix URL with the URL and params applied.
	 */
	url?: Maybe<Scalars["String"]>
}

export type PrismicPageDataBodyVideoHeroPrimaryVideoThumbnailImageTypeFixedArgs =
	{
		height?: Maybe<Scalars["Int"]>
		imgixParams?: Maybe<ImgixParamsInput>
		placeholderImgixParams?: Maybe<ImgixParamsInput>
		quality?: Maybe<Scalars["Int"]>
		width?: Maybe<Scalars["Int"]>
	}

export type PrismicPageDataBodyVideoHeroPrimaryVideoThumbnailImageTypeFluidArgs =
	{
		imgixParams?: Maybe<ImgixParamsInput>
		maxHeight?: Maybe<Scalars["Int"]>
		maxWidth?: Maybe<Scalars["Int"]>
		placeholderImgixParams?: Maybe<ImgixParamsInput>
		srcSetBreakpoints?: Maybe<Array<Maybe<Scalars["Int"]>>>
	}

export type PrismicPageDataBodyVideoHeroPrimaryVideoThumbnailImageTypeGatsbyImageDataArgs =
	{
		aspectRatio?: Maybe<Scalars["Float"]>
		backgroundColor?: Maybe<Scalars["String"]>
		breakpoints?: Maybe<Array<Maybe<Scalars["Int"]>>>
		height?: Maybe<Scalars["Int"]>
		imgixParams?: Maybe<ImgixParamsInput>
		layout?: Maybe<GatsbyImageLayout>
		outputPixelDensities?: Maybe<Array<Maybe<Scalars["Float"]>>>
		placeholder?: Maybe<ImgixPlaceholder>
		placeholderImgixParams?: Maybe<ImgixParamsInput>
		sizes?: Maybe<Scalars["String"]>
		srcSetMaxWidth?: Maybe<Scalars["Int"]>
		srcSetMinWidth?: Maybe<Scalars["Int"]>
		width?: Maybe<Scalars["Int"]>
		widthTolerance?: Maybe<Scalars["Float"]>
	}

export type PrismicPageDataBodyVideoHeroPrimaryVideoThumbnailImageTypeUrlArgs =
	{
		imgixParams?: Maybe<ImgixParamsInput>
	}

export type PrismicPageDataType = {
	__typename?: "PrismicPageDataType"
	body?: Maybe<Array<Maybe<PrismicPageDataBodySlicesType>>>
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
	DataTitleText = "data___title___text",
	FirstPublicationDate = "first_publication_date",
	Href = "href",
	Id = "id",
	InternalContent = "internal___content",
	InternalContentDigest = "internal___contentDigest",
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
	_previewable?: Maybe<IdQueryOperatorInput>
	alternate_languages?: Maybe<PrismicAlternateLanguageTypeFilterListInput>
	children?: Maybe<NodeFilterListInput>
	data?: Maybe<PrismicPageDataTypeFilterInput>
	dataRaw?: Maybe<JsonQueryOperatorInput>
	first_publication_date?: Maybe<DateQueryOperatorInput>
	href?: Maybe<StringQueryOperatorInput>
	id?: Maybe<StringQueryOperatorInput>
	internal?: Maybe<InternalFilterInput>
	lang?: Maybe<StringQueryOperatorInput>
	last_publication_date?: Maybe<DateQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	prismicId?: Maybe<IdQueryOperatorInput>
	tags?: Maybe<StringQueryOperatorInput>
	type?: Maybe<StringQueryOperatorInput>
	uid?: Maybe<StringQueryOperatorInput>
	url?: Maybe<StringQueryOperatorInput>
}

export type PrismicPageGroupConnection = {
	__typename?: "PrismicPageGroupConnection"
	edges: Array<PrismicPageEdge>
	field: Scalars["String"]
	fieldValue?: Maybe<Scalars["String"]>
	nodes: Array<PrismicPage>
	pageInfo: PageInfo
	totalCount: Scalars["Int"]
}

export type PrismicPageSortInput = {
	fields?: Maybe<Array<Maybe<PrismicPageFieldsEnum>>>
	order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type PrismicSettings = Node & {
	__typename?: "PrismicSettings"
	_previewable: Scalars["ID"]
	alternate_languages: Array<PrismicAlternateLanguageType>
	children: Array<Node>
	data?: Maybe<PrismicSettingsDataType>
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
	difference?: Maybe<Scalars["String"]>
	formatString?: Maybe<Scalars["String"]>
	fromNow?: Maybe<Scalars["Boolean"]>
	locale?: Maybe<Scalars["String"]>
}

export type PrismicSettingsLast_Publication_DateArgs = {
	difference?: Maybe<Scalars["String"]>
	formatString?: Maybe<Scalars["String"]>
	fromNow?: Maybe<Scalars["Boolean"]>
	locale?: Maybe<Scalars["String"]>
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
	limit?: Maybe<Scalars["Int"]>
	skip?: Maybe<Scalars["Int"]>
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

export type PrismicSettingsDataRedirects = {
	__typename?: "PrismicSettingsDataRedirects"
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

export type PrismicSettingsDataType = {
	__typename?: "PrismicSettingsDataType"
	redirects?: Maybe<Array<Maybe<PrismicSettingsDataRedirects>>>
	site_copyright?: Maybe<PrismicStructuredTextType>
	site_description?: Maybe<PrismicStructuredTextType>
	site_disclaimer?: Maybe<PrismicStructuredTextType>
	site_name?: Maybe<PrismicStructuredTextType>
	title?: Maybe<PrismicStructuredTextType>
}

export type PrismicSettingsDataTypeFilterInput = {
	redirects?: Maybe<PrismicSettingsDataRedirectsFilterListInput>
	site_copyright?: Maybe<PrismicStructuredTextTypeFilterInput>
	site_description?: Maybe<PrismicStructuredTextTypeFilterInput>
	site_disclaimer?: Maybe<PrismicStructuredTextTypeFilterInput>
	site_name?: Maybe<PrismicStructuredTextTypeFilterInput>
	title?: Maybe<PrismicStructuredTextTypeFilterInput>
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
	ChildrenParentInternalDescription = "children___parent___internal___description",
	ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
	ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
	ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
	ChildrenParentInternalOwner = "children___parent___internal___owner",
	ChildrenParentInternalType = "children___parent___internal___type",
	ChildrenParentParentChildren = "children___parent___parent___children",
	ChildrenParentParentId = "children___parent___parent___id",
	DataRaw = "dataRaw",
	DataRedirects = "data___redirects",
	DataRedirectsFromPath = "data___redirects___from_path",
	DataRedirectsIsPermanent = "data___redirects___is_permanent",
	DataRedirectsToPath = "data___redirects___to_path",
	DataSiteCopyrightHtml = "data___site_copyright___html",
	DataSiteCopyrightRaw = "data___site_copyright___raw",
	DataSiteCopyrightText = "data___site_copyright___text",
	DataSiteDescriptionHtml = "data___site_description___html",
	DataSiteDescriptionRaw = "data___site_description___raw",
	DataSiteDescriptionText = "data___site_description___text",
	DataSiteDisclaimerHtml = "data___site_disclaimer___html",
	DataSiteDisclaimerRaw = "data___site_disclaimer___raw",
	DataSiteDisclaimerText = "data___site_disclaimer___text",
	DataSiteNameHtml = "data___site_name___html",
	DataSiteNameRaw = "data___site_name___raw",
	DataSiteNameText = "data___site_name___text",
	DataTitleHtml = "data___title___html",
	DataTitleRaw = "data___title___raw",
	DataTitleText = "data___title___text",
	FirstPublicationDate = "first_publication_date",
	Href = "href",
	Id = "id",
	InternalContent = "internal___content",
	InternalContentDigest = "internal___contentDigest",
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
	_previewable?: Maybe<IdQueryOperatorInput>
	alternate_languages?: Maybe<PrismicAlternateLanguageTypeFilterListInput>
	children?: Maybe<NodeFilterListInput>
	data?: Maybe<PrismicSettingsDataTypeFilterInput>
	dataRaw?: Maybe<JsonQueryOperatorInput>
	first_publication_date?: Maybe<DateQueryOperatorInput>
	href?: Maybe<StringQueryOperatorInput>
	id?: Maybe<StringQueryOperatorInput>
	internal?: Maybe<InternalFilterInput>
	lang?: Maybe<StringQueryOperatorInput>
	last_publication_date?: Maybe<DateQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	prismicId?: Maybe<IdQueryOperatorInput>
	tags?: Maybe<StringQueryOperatorInput>
	type?: Maybe<StringQueryOperatorInput>
	url?: Maybe<StringQueryOperatorInput>
}

export type PrismicSettingsGroupConnection = {
	__typename?: "PrismicSettingsGroupConnection"
	edges: Array<PrismicSettingsEdge>
	field: Scalars["String"]
	fieldValue?: Maybe<Scalars["String"]>
	nodes: Array<PrismicSettings>
	pageInfo: PageInfo
	totalCount: Scalars["Int"]
}

export type PrismicSettingsSortInput = {
	fields?: Maybe<Array<Maybe<PrismicSettingsFieldsEnum>>>
	order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type PrismicSliceType = {
	id: Scalars["ID"]
	slice_label?: Maybe<Scalars["String"]>
	slice_type: Scalars["String"]
}

export type PrismicStructuredTextType = {
	__typename?: "PrismicStructuredTextType"
	html?: Maybe<Scalars["String"]>
	raw?: Maybe<Scalars["JSON"]>
	text?: Maybe<Scalars["String"]>
}

export type PrismicStructuredTextTypeFilterInput = {
	html?: Maybe<StringQueryOperatorInput>
	raw?: Maybe<JsonQueryOperatorInput>
	text?: Maybe<StringQueryOperatorInput>
}

export type PrismicTypePathType = Node & {
	__typename?: "PrismicTypePathType"
	children: Array<Node>
	id: Scalars["ID"]
	internal: Internal
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
	limit?: Maybe<Scalars["Int"]>
	skip?: Maybe<Scalars["Int"]>
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
	children?: Maybe<NodeFilterListInput>
	id?: Maybe<StringQueryOperatorInput>
	internal?: Maybe<InternalFilterInput>
	parent?: Maybe<NodeFilterInput>
	path?: Maybe<StringQueryOperatorInput>
	type?: Maybe<StringQueryOperatorInput>
}

export type PrismicTypePathTypeGroupConnection = {
	__typename?: "PrismicTypePathTypeGroupConnection"
	edges: Array<PrismicTypePathTypeEdge>
	field: Scalars["String"]
	fieldValue?: Maybe<Scalars["String"]>
	nodes: Array<PrismicTypePathType>
	pageInfo: PageInfo
	totalCount: Scalars["Int"]
}

export type PrismicTypePathTypeSortInput = {
	fields?: Maybe<Array<Maybe<PrismicTypePathTypeFieldsEnum>>>
	order?: Maybe<Array<Maybe<SortOrderEnum>>>
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
	allPrismicTypePathType: PrismicTypePathTypeConnection
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
	prismicTypePathType?: Maybe<PrismicTypePathType>
	site?: Maybe<Site>
	siteBuildMetadata?: Maybe<SiteBuildMetadata>
	siteFunction?: Maybe<SiteFunction>
	sitePage?: Maybe<SitePage>
	sitePlugin?: Maybe<SitePlugin>
}

export type QueryAllDirectoryArgs = {
	filter?: Maybe<DirectoryFilterInput>
	limit?: Maybe<Scalars["Int"]>
	skip?: Maybe<Scalars["Int"]>
	sort?: Maybe<DirectorySortInput>
}

export type QueryAllFileArgs = {
	filter?: Maybe<FileFilterInput>
	limit?: Maybe<Scalars["Int"]>
	skip?: Maybe<Scalars["Int"]>
	sort?: Maybe<FileSortInput>
}

export type QueryAllPrismicEmbedTypeArgs = {
	filter?: Maybe<PrismicEmbedTypeFilterInput>
	limit?: Maybe<Scalars["Int"]>
	skip?: Maybe<Scalars["Int"]>
	sort?: Maybe<PrismicEmbedTypeSortInput>
}

export type QueryAllPrismicEventArgs = {
	filter?: Maybe<PrismicEventFilterInput>
	limit?: Maybe<Scalars["Int"]>
	skip?: Maybe<Scalars["Int"]>
	sort?: Maybe<PrismicEventSortInput>
}

export type QueryAllPrismicNavigationArgs = {
	filter?: Maybe<PrismicNavigationFilterInput>
	limit?: Maybe<Scalars["Int"]>
	skip?: Maybe<Scalars["Int"]>
	sort?: Maybe<PrismicNavigationSortInput>
}

export type QueryAllPrismicPageArgs = {
	filter?: Maybe<PrismicPageFilterInput>
	limit?: Maybe<Scalars["Int"]>
	skip?: Maybe<Scalars["Int"]>
	sort?: Maybe<PrismicPageSortInput>
}

export type QueryAllPrismicSettingsArgs = {
	filter?: Maybe<PrismicSettingsFilterInput>
	limit?: Maybe<Scalars["Int"]>
	skip?: Maybe<Scalars["Int"]>
	sort?: Maybe<PrismicSettingsSortInput>
}

export type QueryAllPrismicTypePathTypeArgs = {
	filter?: Maybe<PrismicTypePathTypeFilterInput>
	limit?: Maybe<Scalars["Int"]>
	skip?: Maybe<Scalars["Int"]>
	sort?: Maybe<PrismicTypePathTypeSortInput>
}

export type QueryAllSiteArgs = {
	filter?: Maybe<SiteFilterInput>
	limit?: Maybe<Scalars["Int"]>
	skip?: Maybe<Scalars["Int"]>
	sort?: Maybe<SiteSortInput>
}

export type QueryAllSiteBuildMetadataArgs = {
	filter?: Maybe<SiteBuildMetadataFilterInput>
	limit?: Maybe<Scalars["Int"]>
	skip?: Maybe<Scalars["Int"]>
	sort?: Maybe<SiteBuildMetadataSortInput>
}

export type QueryAllSiteFunctionArgs = {
	filter?: Maybe<SiteFunctionFilterInput>
	limit?: Maybe<Scalars["Int"]>
	skip?: Maybe<Scalars["Int"]>
	sort?: Maybe<SiteFunctionSortInput>
}

export type QueryAllSitePageArgs = {
	filter?: Maybe<SitePageFilterInput>
	limit?: Maybe<Scalars["Int"]>
	skip?: Maybe<Scalars["Int"]>
	sort?: Maybe<SitePageSortInput>
}

export type QueryAllSitePluginArgs = {
	filter?: Maybe<SitePluginFilterInput>
	limit?: Maybe<Scalars["Int"]>
	skip?: Maybe<Scalars["Int"]>
	sort?: Maybe<SitePluginSortInput>
}

export type QueryDirectoryArgs = {
	absolutePath?: Maybe<StringQueryOperatorInput>
	accessTime?: Maybe<DateQueryOperatorInput>
	atime?: Maybe<DateQueryOperatorInput>
	atimeMs?: Maybe<FloatQueryOperatorInput>
	base?: Maybe<StringQueryOperatorInput>
	birthTime?: Maybe<DateQueryOperatorInput>
	birthtime?: Maybe<DateQueryOperatorInput>
	birthtimeMs?: Maybe<FloatQueryOperatorInput>
	changeTime?: Maybe<DateQueryOperatorInput>
	children?: Maybe<NodeFilterListInput>
	ctime?: Maybe<DateQueryOperatorInput>
	ctimeMs?: Maybe<FloatQueryOperatorInput>
	dev?: Maybe<IntQueryOperatorInput>
	dir?: Maybe<StringQueryOperatorInput>
	ext?: Maybe<StringQueryOperatorInput>
	extension?: Maybe<StringQueryOperatorInput>
	gid?: Maybe<IntQueryOperatorInput>
	id?: Maybe<StringQueryOperatorInput>
	ino?: Maybe<FloatQueryOperatorInput>
	internal?: Maybe<InternalFilterInput>
	mode?: Maybe<IntQueryOperatorInput>
	modifiedTime?: Maybe<DateQueryOperatorInput>
	mtime?: Maybe<DateQueryOperatorInput>
	mtimeMs?: Maybe<FloatQueryOperatorInput>
	name?: Maybe<StringQueryOperatorInput>
	nlink?: Maybe<IntQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	prettySize?: Maybe<StringQueryOperatorInput>
	rdev?: Maybe<IntQueryOperatorInput>
	relativeDirectory?: Maybe<StringQueryOperatorInput>
	relativePath?: Maybe<StringQueryOperatorInput>
	root?: Maybe<StringQueryOperatorInput>
	size?: Maybe<IntQueryOperatorInput>
	sourceInstanceName?: Maybe<StringQueryOperatorInput>
	uid?: Maybe<IntQueryOperatorInput>
}

export type QueryFileArgs = {
	absolutePath?: Maybe<StringQueryOperatorInput>
	accessTime?: Maybe<DateQueryOperatorInput>
	atime?: Maybe<DateQueryOperatorInput>
	atimeMs?: Maybe<FloatQueryOperatorInput>
	base?: Maybe<StringQueryOperatorInput>
	birthTime?: Maybe<DateQueryOperatorInput>
	birthtime?: Maybe<DateQueryOperatorInput>
	birthtimeMs?: Maybe<FloatQueryOperatorInput>
	changeTime?: Maybe<DateQueryOperatorInput>
	children?: Maybe<NodeFilterListInput>
	ctime?: Maybe<DateQueryOperatorInput>
	ctimeMs?: Maybe<FloatQueryOperatorInput>
	dev?: Maybe<IntQueryOperatorInput>
	dir?: Maybe<StringQueryOperatorInput>
	ext?: Maybe<StringQueryOperatorInput>
	extension?: Maybe<StringQueryOperatorInput>
	gid?: Maybe<IntQueryOperatorInput>
	id?: Maybe<StringQueryOperatorInput>
	ino?: Maybe<FloatQueryOperatorInput>
	internal?: Maybe<InternalFilterInput>
	mode?: Maybe<IntQueryOperatorInput>
	modifiedTime?: Maybe<DateQueryOperatorInput>
	mtime?: Maybe<DateQueryOperatorInput>
	mtimeMs?: Maybe<FloatQueryOperatorInput>
	name?: Maybe<StringQueryOperatorInput>
	nlink?: Maybe<IntQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	prettySize?: Maybe<StringQueryOperatorInput>
	rdev?: Maybe<IntQueryOperatorInput>
	relativeDirectory?: Maybe<StringQueryOperatorInput>
	relativePath?: Maybe<StringQueryOperatorInput>
	root?: Maybe<StringQueryOperatorInput>
	size?: Maybe<IntQueryOperatorInput>
	sourceInstanceName?: Maybe<StringQueryOperatorInput>
	uid?: Maybe<IntQueryOperatorInput>
}

export type QueryPrismicEmbedTypeArgs = {
	children?: Maybe<NodeFilterListInput>
	id?: Maybe<StringQueryOperatorInput>
	internal?: Maybe<InternalFilterInput>
	parent?: Maybe<NodeFilterInput>
}

export type QueryPrismicEventArgs = {
	_previewable?: Maybe<IdQueryOperatorInput>
	alternate_languages?: Maybe<PrismicAlternateLanguageTypeFilterListInput>
	children?: Maybe<NodeFilterListInput>
	data?: Maybe<PrismicEventDataTypeFilterInput>
	dataRaw?: Maybe<JsonQueryOperatorInput>
	first_publication_date?: Maybe<DateQueryOperatorInput>
	href?: Maybe<StringQueryOperatorInput>
	id?: Maybe<StringQueryOperatorInput>
	internal?: Maybe<InternalFilterInput>
	lang?: Maybe<StringQueryOperatorInput>
	last_publication_date?: Maybe<DateQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	prismicId?: Maybe<IdQueryOperatorInput>
	tags?: Maybe<StringQueryOperatorInput>
	type?: Maybe<StringQueryOperatorInput>
	uid?: Maybe<StringQueryOperatorInput>
	url?: Maybe<StringQueryOperatorInput>
}

export type QueryPrismicNavigationArgs = {
	_previewable?: Maybe<IdQueryOperatorInput>
	alternate_languages?: Maybe<PrismicAlternateLanguageTypeFilterListInput>
	children?: Maybe<NodeFilterListInput>
	data?: Maybe<PrismicNavigationDataTypeFilterInput>
	dataRaw?: Maybe<JsonQueryOperatorInput>
	first_publication_date?: Maybe<DateQueryOperatorInput>
	href?: Maybe<StringQueryOperatorInput>
	id?: Maybe<StringQueryOperatorInput>
	internal?: Maybe<InternalFilterInput>
	lang?: Maybe<StringQueryOperatorInput>
	last_publication_date?: Maybe<DateQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	prismicId?: Maybe<IdQueryOperatorInput>
	tags?: Maybe<StringQueryOperatorInput>
	type?: Maybe<StringQueryOperatorInput>
	uid?: Maybe<StringQueryOperatorInput>
	url?: Maybe<StringQueryOperatorInput>
}

export type QueryPrismicPageArgs = {
	_previewable?: Maybe<IdQueryOperatorInput>
	alternate_languages?: Maybe<PrismicAlternateLanguageTypeFilterListInput>
	children?: Maybe<NodeFilterListInput>
	data?: Maybe<PrismicPageDataTypeFilterInput>
	dataRaw?: Maybe<JsonQueryOperatorInput>
	first_publication_date?: Maybe<DateQueryOperatorInput>
	href?: Maybe<StringQueryOperatorInput>
	id?: Maybe<StringQueryOperatorInput>
	internal?: Maybe<InternalFilterInput>
	lang?: Maybe<StringQueryOperatorInput>
	last_publication_date?: Maybe<DateQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	prismicId?: Maybe<IdQueryOperatorInput>
	tags?: Maybe<StringQueryOperatorInput>
	type?: Maybe<StringQueryOperatorInput>
	uid?: Maybe<StringQueryOperatorInput>
	url?: Maybe<StringQueryOperatorInput>
}

export type QueryPrismicSettingsArgs = {
	_previewable?: Maybe<IdQueryOperatorInput>
	alternate_languages?: Maybe<PrismicAlternateLanguageTypeFilterListInput>
	children?: Maybe<NodeFilterListInput>
	data?: Maybe<PrismicSettingsDataTypeFilterInput>
	dataRaw?: Maybe<JsonQueryOperatorInput>
	first_publication_date?: Maybe<DateQueryOperatorInput>
	href?: Maybe<StringQueryOperatorInput>
	id?: Maybe<StringQueryOperatorInput>
	internal?: Maybe<InternalFilterInput>
	lang?: Maybe<StringQueryOperatorInput>
	last_publication_date?: Maybe<DateQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	prismicId?: Maybe<IdQueryOperatorInput>
	tags?: Maybe<StringQueryOperatorInput>
	type?: Maybe<StringQueryOperatorInput>
	url?: Maybe<StringQueryOperatorInput>
}

export type QueryPrismicTypePathTypeArgs = {
	children?: Maybe<NodeFilterListInput>
	id?: Maybe<StringQueryOperatorInput>
	internal?: Maybe<InternalFilterInput>
	parent?: Maybe<NodeFilterInput>
	path?: Maybe<StringQueryOperatorInput>
	type?: Maybe<StringQueryOperatorInput>
}

export type QuerySiteArgs = {
	buildTime?: Maybe<DateQueryOperatorInput>
	children?: Maybe<NodeFilterListInput>
	flags?: Maybe<SiteFlagsFilterInput>
	host?: Maybe<StringQueryOperatorInput>
	id?: Maybe<StringQueryOperatorInput>
	internal?: Maybe<InternalFilterInput>
	parent?: Maybe<NodeFilterInput>
	pathPrefix?: Maybe<StringQueryOperatorInput>
	polyfill?: Maybe<BooleanQueryOperatorInput>
	port?: Maybe<IntQueryOperatorInput>
	siteMetadata?: Maybe<SiteSiteMetadataFilterInput>
}

export type QuerySiteBuildMetadataArgs = {
	buildTime?: Maybe<DateQueryOperatorInput>
	children?: Maybe<NodeFilterListInput>
	id?: Maybe<StringQueryOperatorInput>
	internal?: Maybe<InternalFilterInput>
	parent?: Maybe<NodeFilterInput>
}

export type QuerySiteFunctionArgs = {
	absoluteCompiledFilePath?: Maybe<StringQueryOperatorInput>
	children?: Maybe<NodeFilterListInput>
	functionRoute?: Maybe<StringQueryOperatorInput>
	id?: Maybe<StringQueryOperatorInput>
	internal?: Maybe<InternalFilterInput>
	matchPath?: Maybe<StringQueryOperatorInput>
	originalAbsoluteFilePath?: Maybe<StringQueryOperatorInput>
	originalRelativeFilePath?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	pluginName?: Maybe<StringQueryOperatorInput>
	relativeCompiledFilePath?: Maybe<StringQueryOperatorInput>
}

export type QuerySitePageArgs = {
	children?: Maybe<NodeFilterListInput>
	component?: Maybe<StringQueryOperatorInput>
	componentChunkName?: Maybe<StringQueryOperatorInput>
	context?: Maybe<SitePageContextFilterInput>
	id?: Maybe<StringQueryOperatorInput>
	internal?: Maybe<InternalFilterInput>
	internalComponentName?: Maybe<StringQueryOperatorInput>
	isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>
	matchPath?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	path?: Maybe<StringQueryOperatorInput>
	pluginCreator?: Maybe<SitePluginFilterInput>
	pluginCreatorId?: Maybe<StringQueryOperatorInput>
}

export type QuerySitePluginArgs = {
	browserAPIs?: Maybe<StringQueryOperatorInput>
	children?: Maybe<NodeFilterListInput>
	id?: Maybe<StringQueryOperatorInput>
	internal?: Maybe<InternalFilterInput>
	name?: Maybe<StringQueryOperatorInput>
	nodeAPIs?: Maybe<StringQueryOperatorInput>
	packageJson?: Maybe<SitePluginPackageJsonFilterInput>
	parent?: Maybe<NodeFilterInput>
	pluginFilepath?: Maybe<StringQueryOperatorInput>
	pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>
	resolve?: Maybe<StringQueryOperatorInput>
	ssrAPIs?: Maybe<StringQueryOperatorInput>
	version?: Maybe<StringQueryOperatorInput>
}

export type Site = Node & {
	__typename?: "Site"
	buildTime?: Maybe<Scalars["Date"]>
	children: Array<Node>
	flags?: Maybe<SiteFlags>
	host?: Maybe<Scalars["String"]>
	id: Scalars["ID"]
	internal: Internal
	parent?: Maybe<Node>
	pathPrefix?: Maybe<Scalars["String"]>
	polyfill?: Maybe<Scalars["Boolean"]>
	port?: Maybe<Scalars["Int"]>
	siteMetadata?: Maybe<SiteSiteMetadata>
}

export type SiteBuildTimeArgs = {
	difference?: Maybe<Scalars["String"]>
	formatString?: Maybe<Scalars["String"]>
	fromNow?: Maybe<Scalars["Boolean"]>
	locale?: Maybe<Scalars["String"]>
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
	difference?: Maybe<Scalars["String"]>
	formatString?: Maybe<Scalars["String"]>
	fromNow?: Maybe<Scalars["Boolean"]>
	locale?: Maybe<Scalars["String"]>
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
	limit?: Maybe<Scalars["Int"]>
	skip?: Maybe<Scalars["Int"]>
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
	buildTime?: Maybe<DateQueryOperatorInput>
	children?: Maybe<NodeFilterListInput>
	id?: Maybe<StringQueryOperatorInput>
	internal?: Maybe<InternalFilterInput>
	parent?: Maybe<NodeFilterInput>
}

export type SiteBuildMetadataGroupConnection = {
	__typename?: "SiteBuildMetadataGroupConnection"
	edges: Array<SiteBuildMetadataEdge>
	field: Scalars["String"]
	fieldValue?: Maybe<Scalars["String"]>
	nodes: Array<SiteBuildMetadata>
	pageInfo: PageInfo
	totalCount: Scalars["Int"]
}

export type SiteBuildMetadataSortInput = {
	fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>
	order?: Maybe<Array<Maybe<SortOrderEnum>>>
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
	limit?: Maybe<Scalars["Int"]>
	skip?: Maybe<Scalars["Int"]>
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
	Host = "host",
	Id = "id",
	InternalContent = "internal___content",
	InternalContentDigest = "internal___contentDigest",
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
	SiteMetadataTitleShort = "siteMetadata___titleShort",
}

export type SiteFilterInput = {
	buildTime?: Maybe<DateQueryOperatorInput>
	children?: Maybe<NodeFilterListInput>
	flags?: Maybe<SiteFlagsFilterInput>
	host?: Maybe<StringQueryOperatorInput>
	id?: Maybe<StringQueryOperatorInput>
	internal?: Maybe<InternalFilterInput>
	parent?: Maybe<NodeFilterInput>
	pathPrefix?: Maybe<StringQueryOperatorInput>
	polyfill?: Maybe<BooleanQueryOperatorInput>
	port?: Maybe<IntQueryOperatorInput>
	siteMetadata?: Maybe<SiteSiteMetadataFilterInput>
}

export type SiteFlags = {
	__typename?: "SiteFlags"
	DEV_SSR?: Maybe<Scalars["Boolean"]>
	FAST_DEV?: Maybe<Scalars["Boolean"]>
}

export type SiteFlagsFilterInput = {
	DEV_SSR?: Maybe<BooleanQueryOperatorInput>
	FAST_DEV?: Maybe<BooleanQueryOperatorInput>
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
	limit?: Maybe<Scalars["Int"]>
	skip?: Maybe<Scalars["Int"]>
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
	absoluteCompiledFilePath?: Maybe<StringQueryOperatorInput>
	children?: Maybe<NodeFilterListInput>
	functionRoute?: Maybe<StringQueryOperatorInput>
	id?: Maybe<StringQueryOperatorInput>
	internal?: Maybe<InternalFilterInput>
	matchPath?: Maybe<StringQueryOperatorInput>
	originalAbsoluteFilePath?: Maybe<StringQueryOperatorInput>
	originalRelativeFilePath?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	pluginName?: Maybe<StringQueryOperatorInput>
	relativeCompiledFilePath?: Maybe<StringQueryOperatorInput>
}

export type SiteFunctionGroupConnection = {
	__typename?: "SiteFunctionGroupConnection"
	edges: Array<SiteFunctionEdge>
	field: Scalars["String"]
	fieldValue?: Maybe<Scalars["String"]>
	nodes: Array<SiteFunction>
	pageInfo: PageInfo
	totalCount: Scalars["Int"]
}

export type SiteFunctionSortInput = {
	fields?: Maybe<Array<Maybe<SiteFunctionFieldsEnum>>>
	order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SiteGroupConnection = {
	__typename?: "SiteGroupConnection"
	edges: Array<SiteEdge>
	field: Scalars["String"]
	fieldValue?: Maybe<Scalars["String"]>
	nodes: Array<Site>
	pageInfo: PageInfo
	totalCount: Scalars["Int"]
}

export type SitePage = Node & {
	__typename?: "SitePage"
	children: Array<Node>
	component: Scalars["String"]
	componentChunkName: Scalars["String"]
	context?: Maybe<SitePageContext>
	id: Scalars["ID"]
	internal: Internal
	internalComponentName: Scalars["String"]
	isCreatedByStatefulCreatePages?: Maybe<Scalars["Boolean"]>
	matchPath?: Maybe<Scalars["String"]>
	parent?: Maybe<Node>
	path: Scalars["String"]
	pluginCreator?: Maybe<SitePlugin>
	pluginCreatorId?: Maybe<Scalars["String"]>
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
	limit?: Maybe<Scalars["Int"]>
	skip?: Maybe<Scalars["Int"]>
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

export type SitePageContext = {
	__typename?: "SitePageContext"
	uid?: Maybe<Scalars["String"]>
}

export type SitePageContextFilterInput = {
	uid?: Maybe<StringQueryOperatorInput>
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
	ContextUid = "context___uid",
	Id = "id",
	InternalComponentName = "internalComponentName",
	InternalContent = "internal___content",
	InternalContentDigest = "internal___contentDigest",
	InternalDescription = "internal___description",
	InternalFieldOwners = "internal___fieldOwners",
	InternalIgnoreType = "internal___ignoreType",
	InternalMediaType = "internal___mediaType",
	InternalOwner = "internal___owner",
	InternalType = "internal___type",
	IsCreatedByStatefulCreatePages = "isCreatedByStatefulCreatePages",
	MatchPath = "matchPath",
	ParentChildren = "parent___children",
	ParentChildrenChildren = "parent___children___children",
	ParentChildrenChildrenChildren = "parent___children___children___children",
	ParentChildrenChildrenId = "parent___children___children___id",
	ParentChildrenId = "parent___children___id",
	ParentChildrenInternalContent = "parent___children___internal___content",
	ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
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
	ParentParentInternalDescription = "parent___parent___internal___description",
	ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
	ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
	ParentParentInternalMediaType = "parent___parent___internal___mediaType",
	ParentParentInternalOwner = "parent___parent___internal___owner",
	ParentParentInternalType = "parent___parent___internal___type",
	ParentParentParentChildren = "parent___parent___parent___children",
	ParentParentParentId = "parent___parent___parent___id",
	Path = "path",
	PluginCreatorId = "pluginCreatorId",
	PluginCreatorBrowserApIs = "pluginCreator___browserAPIs",
	PluginCreatorChildren = "pluginCreator___children",
	PluginCreatorChildrenChildren = "pluginCreator___children___children",
	PluginCreatorChildrenChildrenChildren = "pluginCreator___children___children___children",
	PluginCreatorChildrenChildrenId = "pluginCreator___children___children___id",
	PluginCreatorChildrenId = "pluginCreator___children___id",
	PluginCreatorChildrenInternalContent = "pluginCreator___children___internal___content",
	PluginCreatorChildrenInternalContentDigest = "pluginCreator___children___internal___contentDigest",
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
	PluginCreatorInternalDescription = "pluginCreator___internal___description",
	PluginCreatorInternalFieldOwners = "pluginCreator___internal___fieldOwners",
	PluginCreatorInternalIgnoreType = "pluginCreator___internal___ignoreType",
	PluginCreatorInternalMediaType = "pluginCreator___internal___mediaType",
	PluginCreatorInternalOwner = "pluginCreator___internal___owner",
	PluginCreatorInternalType = "pluginCreator___internal___type",
	PluginCreatorName = "pluginCreator___name",
	PluginCreatorNodeApIs = "pluginCreator___nodeAPIs",
	PluginCreatorPackageJsonAuthor = "pluginCreator___packageJson___author",
	PluginCreatorPackageJsonDependencies = "pluginCreator___packageJson___dependencies",
	PluginCreatorPackageJsonDependenciesName = "pluginCreator___packageJson___dependencies___name",
	PluginCreatorPackageJsonDependenciesVersion = "pluginCreator___packageJson___dependencies___version",
	PluginCreatorPackageJsonDescription = "pluginCreator___packageJson___description",
	PluginCreatorPackageJsonDevDependencies = "pluginCreator___packageJson___devDependencies",
	PluginCreatorPackageJsonDevDependenciesName = "pluginCreator___packageJson___devDependencies___name",
	PluginCreatorPackageJsonDevDependenciesVersion = "pluginCreator___packageJson___devDependencies___version",
	PluginCreatorPackageJsonKeywords = "pluginCreator___packageJson___keywords",
	PluginCreatorPackageJsonLicense = "pluginCreator___packageJson___license",
	PluginCreatorPackageJsonMain = "pluginCreator___packageJson___main",
	PluginCreatorPackageJsonName = "pluginCreator___packageJson___name",
	PluginCreatorPackageJsonPeerDependencies = "pluginCreator___packageJson___peerDependencies",
	PluginCreatorPackageJsonPeerDependenciesName = "pluginCreator___packageJson___peerDependencies___name",
	PluginCreatorPackageJsonPeerDependenciesVersion = "pluginCreator___packageJson___peerDependencies___version",
	PluginCreatorPackageJsonVersion = "pluginCreator___packageJson___version",
	PluginCreatorParentChildren = "pluginCreator___parent___children",
	PluginCreatorParentChildrenChildren = "pluginCreator___parent___children___children",
	PluginCreatorParentChildrenId = "pluginCreator___parent___children___id",
	PluginCreatorParentId = "pluginCreator___parent___id",
	PluginCreatorParentInternalContent = "pluginCreator___parent___internal___content",
	PluginCreatorParentInternalContentDigest = "pluginCreator___parent___internal___contentDigest",
	PluginCreatorParentInternalDescription = "pluginCreator___parent___internal___description",
	PluginCreatorParentInternalFieldOwners = "pluginCreator___parent___internal___fieldOwners",
	PluginCreatorParentInternalIgnoreType = "pluginCreator___parent___internal___ignoreType",
	PluginCreatorParentInternalMediaType = "pluginCreator___parent___internal___mediaType",
	PluginCreatorParentInternalOwner = "pluginCreator___parent___internal___owner",
	PluginCreatorParentInternalType = "pluginCreator___parent___internal___type",
	PluginCreatorParentParentChildren = "pluginCreator___parent___parent___children",
	PluginCreatorParentParentId = "pluginCreator___parent___parent___id",
	PluginCreatorPluginFilepath = "pluginCreator___pluginFilepath",
	PluginCreatorPluginOptionsAccessToken = "pluginCreator___pluginOptions___accessToken",
	PluginCreatorPluginOptionsAllExtensions = "pluginCreator___pluginOptions___allExtensions",
	PluginCreatorPluginOptionsApiEndpoint = "pluginCreator___pluginOptions___apiEndpoint",
	PluginCreatorPluginOptionsBackgroundColor = "pluginCreator___pluginOptions___background_color",
	PluginCreatorPluginOptionsCacheDigest = "pluginCreator___pluginOptions___cacheDigest",
	PluginCreatorPluginOptionsCacheBustingMode = "pluginCreator___pluginOptions___cache_busting_mode",
	PluginCreatorPluginOptionsCreateLinkInHead = "pluginCreator___pluginOptions___createLinkInHead",
	PluginCreatorPluginOptionsCrossOrigin = "pluginCreator___pluginOptions___crossOrigin",
	PluginCreatorPluginOptionsDisplay = "pluginCreator___pluginOptions___display",
	PluginCreatorPluginOptionsEntryLimit = "pluginCreator___pluginOptions___entryLimit",
	PluginCreatorPluginOptionsIcon = "pluginCreator___pluginOptions___icon",
	PluginCreatorPluginOptionsImageImgixParamsAuto = "pluginCreator___pluginOptions___imageImgixParams___auto",
	PluginCreatorPluginOptionsImageImgixParamsFit = "pluginCreator___pluginOptions___imageImgixParams___fit",
	PluginCreatorPluginOptionsImageImgixParamsQ = "pluginCreator___pluginOptions___imageImgixParams___q",
	PluginCreatorPluginOptionsImagePlaceholderImgixParamsBlur = "pluginCreator___pluginOptions___imagePlaceholderImgixParams___blur",
	PluginCreatorPluginOptionsImagePlaceholderImgixParamsW = "pluginCreator___pluginOptions___imagePlaceholderImgixParams___w",
	PluginCreatorPluginOptionsIncludeFavicon = "pluginCreator___pluginOptions___include_favicon",
	PluginCreatorPluginOptionsIsTsx = "pluginCreator___pluginOptions___isTSX",
	PluginCreatorPluginOptionsJsxPragma = "pluginCreator___pluginOptions___jsxPragma",
	PluginCreatorPluginOptionsLang = "pluginCreator___pluginOptions___lang",
	PluginCreatorPluginOptionsLegacy = "pluginCreator___pluginOptions___legacy",
	PluginCreatorPluginOptionsName = "pluginCreator___pluginOptions___name",
	PluginCreatorPluginOptionsOutput = "pluginCreator___pluginOptions___output",
	PluginCreatorPluginOptionsPath = "pluginCreator___pluginOptions___path",
	PluginCreatorPluginOptionsPathCheck = "pluginCreator___pluginOptions___pathCheck",
	PluginCreatorPluginOptionsPromptForAccessToken = "pluginCreator___pluginOptions___promptForAccessToken",
	PluginCreatorPluginOptionsQuery = "pluginCreator___pluginOptions___query",
	PluginCreatorPluginOptionsRepositoryName = "pluginCreator___pluginOptions___repositoryName",
	PluginCreatorPluginOptionsShortName = "pluginCreator___pluginOptions___short_name",
	PluginCreatorPluginOptionsStartUrl = "pluginCreator___pluginOptions___start_url",
	PluginCreatorPluginOptionsThemeColor = "pluginCreator___pluginOptions___theme_color",
	PluginCreatorPluginOptionsThemeColorInHead = "pluginCreator___pluginOptions___theme_color_in_head",
	PluginCreatorPluginOptionsToolbar = "pluginCreator___pluginOptions___toolbar",
	PluginCreatorResolve = "pluginCreator___resolve",
	PluginCreatorSsrApIs = "pluginCreator___ssrAPIs",
	PluginCreatorVersion = "pluginCreator___version",
}

export type SitePageFilterInput = {
	children?: Maybe<NodeFilterListInput>
	component?: Maybe<StringQueryOperatorInput>
	componentChunkName?: Maybe<StringQueryOperatorInput>
	context?: Maybe<SitePageContextFilterInput>
	id?: Maybe<StringQueryOperatorInput>
	internal?: Maybe<InternalFilterInput>
	internalComponentName?: Maybe<StringQueryOperatorInput>
	isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>
	matchPath?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	path?: Maybe<StringQueryOperatorInput>
	pluginCreator?: Maybe<SitePluginFilterInput>
	pluginCreatorId?: Maybe<StringQueryOperatorInput>
}

export type SitePageGroupConnection = {
	__typename?: "SitePageGroupConnection"
	edges: Array<SitePageEdge>
	field: Scalars["String"]
	fieldValue?: Maybe<Scalars["String"]>
	nodes: Array<SitePage>
	pageInfo: PageInfo
	totalCount: Scalars["Int"]
}

export type SitePageSortInput = {
	fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>
	order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SitePlugin = Node & {
	__typename?: "SitePlugin"
	browserAPIs?: Maybe<Array<Maybe<Scalars["String"]>>>
	children: Array<Node>
	id: Scalars["ID"]
	internal: Internal
	name?: Maybe<Scalars["String"]>
	nodeAPIs?: Maybe<Array<Maybe<Scalars["String"]>>>
	packageJson?: Maybe<SitePluginPackageJson>
	parent?: Maybe<Node>
	pluginFilepath?: Maybe<Scalars["String"]>
	pluginOptions?: Maybe<SitePluginPluginOptions>
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
	limit?: Maybe<Scalars["Int"]>
	skip?: Maybe<Scalars["Int"]>
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
	InternalDescription = "internal___description",
	InternalFieldOwners = "internal___fieldOwners",
	InternalIgnoreType = "internal___ignoreType",
	InternalMediaType = "internal___mediaType",
	InternalOwner = "internal___owner",
	InternalType = "internal___type",
	Name = "name",
	NodeApIs = "nodeAPIs",
	PackageJsonAuthor = "packageJson___author",
	PackageJsonDependencies = "packageJson___dependencies",
	PackageJsonDependenciesName = "packageJson___dependencies___name",
	PackageJsonDependenciesVersion = "packageJson___dependencies___version",
	PackageJsonDescription = "packageJson___description",
	PackageJsonDevDependencies = "packageJson___devDependencies",
	PackageJsonDevDependenciesName = "packageJson___devDependencies___name",
	PackageJsonDevDependenciesVersion = "packageJson___devDependencies___version",
	PackageJsonKeywords = "packageJson___keywords",
	PackageJsonLicense = "packageJson___license",
	PackageJsonMain = "packageJson___main",
	PackageJsonName = "packageJson___name",
	PackageJsonPeerDependencies = "packageJson___peerDependencies",
	PackageJsonPeerDependenciesName = "packageJson___peerDependencies___name",
	PackageJsonPeerDependenciesVersion = "packageJson___peerDependencies___version",
	PackageJsonVersion = "packageJson___version",
	ParentChildren = "parent___children",
	ParentChildrenChildren = "parent___children___children",
	ParentChildrenChildrenChildren = "parent___children___children___children",
	ParentChildrenChildrenId = "parent___children___children___id",
	ParentChildrenId = "parent___children___id",
	ParentChildrenInternalContent = "parent___children___internal___content",
	ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
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
	ParentParentInternalDescription = "parent___parent___internal___description",
	ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
	ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
	ParentParentInternalMediaType = "parent___parent___internal___mediaType",
	ParentParentInternalOwner = "parent___parent___internal___owner",
	ParentParentInternalType = "parent___parent___internal___type",
	ParentParentParentChildren = "parent___parent___parent___children",
	ParentParentParentId = "parent___parent___parent___id",
	PluginFilepath = "pluginFilepath",
	PluginOptionsAccessToken = "pluginOptions___accessToken",
	PluginOptionsAllExtensions = "pluginOptions___allExtensions",
	PluginOptionsApiEndpoint = "pluginOptions___apiEndpoint",
	PluginOptionsBackgroundColor = "pluginOptions___background_color",
	PluginOptionsCacheDigest = "pluginOptions___cacheDigest",
	PluginOptionsCacheBustingMode = "pluginOptions___cache_busting_mode",
	PluginOptionsCreateLinkInHead = "pluginOptions___createLinkInHead",
	PluginOptionsCrossOrigin = "pluginOptions___crossOrigin",
	PluginOptionsDisplay = "pluginOptions___display",
	PluginOptionsEntryLimit = "pluginOptions___entryLimit",
	PluginOptionsIcon = "pluginOptions___icon",
	PluginOptionsImageImgixParamsAuto = "pluginOptions___imageImgixParams___auto",
	PluginOptionsImageImgixParamsFit = "pluginOptions___imageImgixParams___fit",
	PluginOptionsImageImgixParamsQ = "pluginOptions___imageImgixParams___q",
	PluginOptionsImagePlaceholderImgixParamsBlur = "pluginOptions___imagePlaceholderImgixParams___blur",
	PluginOptionsImagePlaceholderImgixParamsW = "pluginOptions___imagePlaceholderImgixParams___w",
	PluginOptionsIncludeFavicon = "pluginOptions___include_favicon",
	PluginOptionsIsTsx = "pluginOptions___isTSX",
	PluginOptionsJsxPragma = "pluginOptions___jsxPragma",
	PluginOptionsLang = "pluginOptions___lang",
	PluginOptionsLegacy = "pluginOptions___legacy",
	PluginOptionsName = "pluginOptions___name",
	PluginOptionsOutput = "pluginOptions___output",
	PluginOptionsPath = "pluginOptions___path",
	PluginOptionsPathCheck = "pluginOptions___pathCheck",
	PluginOptionsPromptForAccessToken = "pluginOptions___promptForAccessToken",
	PluginOptionsQuery = "pluginOptions___query",
	PluginOptionsRepositoryName = "pluginOptions___repositoryName",
	PluginOptionsShortName = "pluginOptions___short_name",
	PluginOptionsStartUrl = "pluginOptions___start_url",
	PluginOptionsThemeColor = "pluginOptions___theme_color",
	PluginOptionsThemeColorInHead = "pluginOptions___theme_color_in_head",
	PluginOptionsToolbar = "pluginOptions___toolbar",
	Resolve = "resolve",
	SsrApIs = "ssrAPIs",
	Version = "version",
}

export type SitePluginFilterInput = {
	browserAPIs?: Maybe<StringQueryOperatorInput>
	children?: Maybe<NodeFilterListInput>
	id?: Maybe<StringQueryOperatorInput>
	internal?: Maybe<InternalFilterInput>
	name?: Maybe<StringQueryOperatorInput>
	nodeAPIs?: Maybe<StringQueryOperatorInput>
	packageJson?: Maybe<SitePluginPackageJsonFilterInput>
	parent?: Maybe<NodeFilterInput>
	pluginFilepath?: Maybe<StringQueryOperatorInput>
	pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>
	resolve?: Maybe<StringQueryOperatorInput>
	ssrAPIs?: Maybe<StringQueryOperatorInput>
	version?: Maybe<StringQueryOperatorInput>
}

export type SitePluginGroupConnection = {
	__typename?: "SitePluginGroupConnection"
	edges: Array<SitePluginEdge>
	field: Scalars["String"]
	fieldValue?: Maybe<Scalars["String"]>
	nodes: Array<SitePlugin>
	pageInfo: PageInfo
	totalCount: Scalars["Int"]
}

export type SitePluginPackageJson = {
	__typename?: "SitePluginPackageJson"
	author?: Maybe<Scalars["String"]>
	dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>
	description?: Maybe<Scalars["String"]>
	devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>
	keywords?: Maybe<Array<Maybe<Scalars["String"]>>>
	license?: Maybe<Scalars["String"]>
	main?: Maybe<Scalars["String"]>
	name?: Maybe<Scalars["String"]>
	peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>
	version?: Maybe<Scalars["String"]>
}

export type SitePluginPackageJsonDependencies = {
	__typename?: "SitePluginPackageJsonDependencies"
	name?: Maybe<Scalars["String"]>
	version?: Maybe<Scalars["String"]>
}

export type SitePluginPackageJsonDependenciesFilterInput = {
	name?: Maybe<StringQueryOperatorInput>
	version?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonDependenciesFilterListInput = {
	elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>
}

export type SitePluginPackageJsonDevDependencies = {
	__typename?: "SitePluginPackageJsonDevDependencies"
	name?: Maybe<Scalars["String"]>
	version?: Maybe<Scalars["String"]>
}

export type SitePluginPackageJsonDevDependenciesFilterInput = {
	name?: Maybe<StringQueryOperatorInput>
	version?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
	elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>
}

export type SitePluginPackageJsonFilterInput = {
	author?: Maybe<StringQueryOperatorInput>
	dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>
	description?: Maybe<StringQueryOperatorInput>
	devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>
	keywords?: Maybe<StringQueryOperatorInput>
	license?: Maybe<StringQueryOperatorInput>
	main?: Maybe<StringQueryOperatorInput>
	name?: Maybe<StringQueryOperatorInput>
	peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>
	version?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonPeerDependencies = {
	__typename?: "SitePluginPackageJsonPeerDependencies"
	name?: Maybe<Scalars["String"]>
	version?: Maybe<Scalars["String"]>
}

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
	name?: Maybe<StringQueryOperatorInput>
	version?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
	elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>
}

export type SitePluginPluginOptions = {
	__typename?: "SitePluginPluginOptions"
	accessToken?: Maybe<Scalars["String"]>
	allExtensions?: Maybe<Scalars["Boolean"]>
	apiEndpoint?: Maybe<Scalars["String"]>
	background_color?: Maybe<Scalars["String"]>
	cacheDigest?: Maybe<Scalars["String"]>
	cache_busting_mode?: Maybe<Scalars["String"]>
	createLinkInHead?: Maybe<Scalars["Boolean"]>
	crossOrigin?: Maybe<Scalars["String"]>
	display?: Maybe<Scalars["String"]>
	entryLimit?: Maybe<Scalars["Int"]>
	icon?: Maybe<Scalars["String"]>
	imageImgixParams?: Maybe<SitePluginPluginOptionsImageImgixParams>
	imagePlaceholderImgixParams?: Maybe<SitePluginPluginOptionsImagePlaceholderImgixParams>
	include_favicon?: Maybe<Scalars["Boolean"]>
	isTSX?: Maybe<Scalars["Boolean"]>
	jsxPragma?: Maybe<Scalars["String"]>
	lang?: Maybe<Scalars["String"]>
	legacy?: Maybe<Scalars["Boolean"]>
	name?: Maybe<Scalars["String"]>
	output?: Maybe<Scalars["String"]>
	path?: Maybe<Scalars["String"]>
	pathCheck?: Maybe<Scalars["Boolean"]>
	promptForAccessToken?: Maybe<Scalars["Boolean"]>
	query?: Maybe<Scalars["String"]>
	repositoryName?: Maybe<Scalars["String"]>
	schemas?: Maybe<SitePluginPluginOptionsSchemas>
	short_name?: Maybe<Scalars["String"]>
	start_url?: Maybe<Scalars["String"]>
	theme_color?: Maybe<Scalars["String"]>
	theme_color_in_head?: Maybe<Scalars["Boolean"]>
	toolbar?: Maybe<Scalars["String"]>
}

export type SitePluginPluginOptionsFilterInput = {
	accessToken?: Maybe<StringQueryOperatorInput>
	allExtensions?: Maybe<BooleanQueryOperatorInput>
	apiEndpoint?: Maybe<StringQueryOperatorInput>
	background_color?: Maybe<StringQueryOperatorInput>
	cacheDigest?: Maybe<StringQueryOperatorInput>
	cache_busting_mode?: Maybe<StringQueryOperatorInput>
	createLinkInHead?: Maybe<BooleanQueryOperatorInput>
	crossOrigin?: Maybe<StringQueryOperatorInput>
	display?: Maybe<StringQueryOperatorInput>
	entryLimit?: Maybe<IntQueryOperatorInput>
	icon?: Maybe<StringQueryOperatorInput>
	imageImgixParams?: Maybe<SitePluginPluginOptionsImageImgixParamsFilterInput>
	imagePlaceholderImgixParams?: Maybe<SitePluginPluginOptionsImagePlaceholderImgixParamsFilterInput>
	include_favicon?: Maybe<BooleanQueryOperatorInput>
	isTSX?: Maybe<BooleanQueryOperatorInput>
	jsxPragma?: Maybe<StringQueryOperatorInput>
	lang?: Maybe<StringQueryOperatorInput>
	legacy?: Maybe<BooleanQueryOperatorInput>
	name?: Maybe<StringQueryOperatorInput>
	output?: Maybe<StringQueryOperatorInput>
	path?: Maybe<StringQueryOperatorInput>
	pathCheck?: Maybe<BooleanQueryOperatorInput>
	promptForAccessToken?: Maybe<BooleanQueryOperatorInput>
	query?: Maybe<StringQueryOperatorInput>
	repositoryName?: Maybe<StringQueryOperatorInput>
	schemas?: Maybe<SitePluginPluginOptionsSchemasFilterInput>
	short_name?: Maybe<StringQueryOperatorInput>
	start_url?: Maybe<StringQueryOperatorInput>
	theme_color?: Maybe<StringQueryOperatorInput>
	theme_color_in_head?: Maybe<BooleanQueryOperatorInput>
	toolbar?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsImageImgixParams = {
	__typename?: "SitePluginPluginOptionsImageImgixParams"
	auto?: Maybe<Scalars["String"]>
	fit?: Maybe<Scalars["String"]>
	q?: Maybe<Scalars["Int"]>
}

export type SitePluginPluginOptionsImageImgixParamsFilterInput = {
	auto?: Maybe<StringQueryOperatorInput>
	fit?: Maybe<StringQueryOperatorInput>
	q?: Maybe<IntQueryOperatorInput>
}

export type SitePluginPluginOptionsImagePlaceholderImgixParams = {
	__typename?: "SitePluginPluginOptionsImagePlaceholderImgixParams"
	blur?: Maybe<Scalars["Int"]>
	w?: Maybe<Scalars["Int"]>
}

export type SitePluginPluginOptionsImagePlaceholderImgixParamsFilterInput = {
	blur?: Maybe<IntQueryOperatorInput>
	w?: Maybe<IntQueryOperatorInput>
}

export type SitePluginPluginOptionsSchemas = {
	__typename?: "SitePluginPluginOptionsSchemas"
	event?: Maybe<SitePluginPluginOptionsSchemasEvent>
	navigation?: Maybe<SitePluginPluginOptionsSchemasNavigation>
	page?: Maybe<SitePluginPluginOptionsSchemasPage>
	settings?: Maybe<SitePluginPluginOptionsSchemasSettings>
}

export type SitePluginPluginOptionsSchemasEvent = {
	__typename?: "SitePluginPluginOptionsSchemasEvent"
	Main?: Maybe<SitePluginPluginOptionsSchemasEventMain>
}

export type SitePluginPluginOptionsSchemasEventFilterInput = {
	Main?: Maybe<SitePluginPluginOptionsSchemasEventMainFilterInput>
}

export type SitePluginPluginOptionsSchemasEventMain = {
	__typename?: "SitePluginPluginOptionsSchemasEventMain"
	date?: Maybe<SitePluginPluginOptionsSchemasEventMainDate>
	description?: Maybe<SitePluginPluginOptionsSchemasEventMainDescription>
	title?: Maybe<SitePluginPluginOptionsSchemasEventMainTitle>
	type?: Maybe<SitePluginPluginOptionsSchemasEventMainType>
	uid?: Maybe<SitePluginPluginOptionsSchemasEventMainUid>
}

export type SitePluginPluginOptionsSchemasEventMainDate = {
	__typename?: "SitePluginPluginOptionsSchemasEventMainDate"
	config?: Maybe<SitePluginPluginOptionsSchemasEventMainDateConfig>
	type?: Maybe<Scalars["String"]>
}

export type SitePluginPluginOptionsSchemasEventMainDateConfig = {
	__typename?: "SitePluginPluginOptionsSchemasEventMainDateConfig"
	label?: Maybe<Scalars["String"]>
}

export type SitePluginPluginOptionsSchemasEventMainDateConfigFilterInput = {
	label?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsSchemasEventMainDateFilterInput = {
	config?: Maybe<SitePluginPluginOptionsSchemasEventMainDateConfigFilterInput>
	type?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsSchemasEventMainDescription = {
	__typename?: "SitePluginPluginOptionsSchemasEventMainDescription"
	config?: Maybe<SitePluginPluginOptionsSchemasEventMainDescriptionConfig>
	type?: Maybe<Scalars["String"]>
}

export type SitePluginPluginOptionsSchemasEventMainDescriptionConfig = {
	__typename?: "SitePluginPluginOptionsSchemasEventMainDescriptionConfig"
	allowTargetBlank?: Maybe<Scalars["Boolean"]>
	label?: Maybe<Scalars["String"]>
	single?: Maybe<Scalars["String"]>
}

export type SitePluginPluginOptionsSchemasEventMainDescriptionConfigFilterInput =
	{
		allowTargetBlank?: Maybe<BooleanQueryOperatorInput>
		label?: Maybe<StringQueryOperatorInput>
		single?: Maybe<StringQueryOperatorInput>
	}

export type SitePluginPluginOptionsSchemasEventMainDescriptionFilterInput = {
	config?: Maybe<SitePluginPluginOptionsSchemasEventMainDescriptionConfigFilterInput>
	type?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsSchemasEventMainFilterInput = {
	date?: Maybe<SitePluginPluginOptionsSchemasEventMainDateFilterInput>
	description?: Maybe<SitePluginPluginOptionsSchemasEventMainDescriptionFilterInput>
	title?: Maybe<SitePluginPluginOptionsSchemasEventMainTitleFilterInput>
	type?: Maybe<SitePluginPluginOptionsSchemasEventMainTypeFilterInput>
	uid?: Maybe<SitePluginPluginOptionsSchemasEventMainUidFilterInput>
}

export type SitePluginPluginOptionsSchemasEventMainTitle = {
	__typename?: "SitePluginPluginOptionsSchemasEventMainTitle"
	config?: Maybe<SitePluginPluginOptionsSchemasEventMainTitleConfig>
	type?: Maybe<Scalars["String"]>
}

export type SitePluginPluginOptionsSchemasEventMainTitleConfig = {
	__typename?: "SitePluginPluginOptionsSchemasEventMainTitleConfig"
	label?: Maybe<Scalars["String"]>
	single?: Maybe<Scalars["String"]>
}

export type SitePluginPluginOptionsSchemasEventMainTitleConfigFilterInput = {
	label?: Maybe<StringQueryOperatorInput>
	single?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsSchemasEventMainTitleFilterInput = {
	config?: Maybe<SitePluginPluginOptionsSchemasEventMainTitleConfigFilterInput>
	type?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsSchemasEventMainType = {
	__typename?: "SitePluginPluginOptionsSchemasEventMainType"
	config?: Maybe<SitePluginPluginOptionsSchemasEventMainTypeConfig>
	type?: Maybe<Scalars["String"]>
}

export type SitePluginPluginOptionsSchemasEventMainTypeConfig = {
	__typename?: "SitePluginPluginOptionsSchemasEventMainTypeConfig"
	default_value?: Maybe<Scalars["String"]>
	label?: Maybe<Scalars["String"]>
	options?: Maybe<Array<Maybe<Scalars["String"]>>>
}

export type SitePluginPluginOptionsSchemasEventMainTypeConfigFilterInput = {
	default_value?: Maybe<StringQueryOperatorInput>
	label?: Maybe<StringQueryOperatorInput>
	options?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsSchemasEventMainTypeFilterInput = {
	config?: Maybe<SitePluginPluginOptionsSchemasEventMainTypeConfigFilterInput>
	type?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsSchemasEventMainUid = {
	__typename?: "SitePluginPluginOptionsSchemasEventMainUid"
	config?: Maybe<SitePluginPluginOptionsSchemasEventMainUidConfig>
	type?: Maybe<Scalars["String"]>
}

export type SitePluginPluginOptionsSchemasEventMainUidConfig = {
	__typename?: "SitePluginPluginOptionsSchemasEventMainUidConfig"
	label?: Maybe<Scalars["String"]>
}

export type SitePluginPluginOptionsSchemasEventMainUidConfigFilterInput = {
	label?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsSchemasEventMainUidFilterInput = {
	config?: Maybe<SitePluginPluginOptionsSchemasEventMainUidConfigFilterInput>
	type?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsSchemasFilterInput = {
	event?: Maybe<SitePluginPluginOptionsSchemasEventFilterInput>
	navigation?: Maybe<SitePluginPluginOptionsSchemasNavigationFilterInput>
	page?: Maybe<SitePluginPluginOptionsSchemasPageFilterInput>
	settings?: Maybe<SitePluginPluginOptionsSchemasSettingsFilterInput>
}

export type SitePluginPluginOptionsSchemasNavigation = {
	__typename?: "SitePluginPluginOptionsSchemasNavigation"
	Main?: Maybe<SitePluginPluginOptionsSchemasNavigationMain>
}

export type SitePluginPluginOptionsSchemasNavigationFilterInput = {
	Main?: Maybe<SitePluginPluginOptionsSchemasNavigationMainFilterInput>
}

export type SitePluginPluginOptionsSchemasNavigationMain = {
	__typename?: "SitePluginPluginOptionsSchemasNavigationMain"
	nav_items?: Maybe<SitePluginPluginOptionsSchemasNavigationMainNav_Items>
	title?: Maybe<SitePluginPluginOptionsSchemasNavigationMainTitle>
	uid?: Maybe<SitePluginPluginOptionsSchemasNavigationMainUid>
}

export type SitePluginPluginOptionsSchemasNavigationMainFilterInput = {
	nav_items?: Maybe<SitePluginPluginOptionsSchemasNavigationMainNav_ItemsFilterInput>
	title?: Maybe<SitePluginPluginOptionsSchemasNavigationMainTitleFilterInput>
	uid?: Maybe<SitePluginPluginOptionsSchemasNavigationMainUidFilterInput>
}

export type SitePluginPluginOptionsSchemasNavigationMainNav_Items = {
	__typename?: "SitePluginPluginOptionsSchemasNavigationMainNav_items"
	config?: Maybe<SitePluginPluginOptionsSchemasNavigationMainNav_ItemsConfig>
	type?: Maybe<Scalars["String"]>
}

export type SitePluginPluginOptionsSchemasNavigationMainNav_ItemsConfig = {
	__typename?: "SitePluginPluginOptionsSchemasNavigationMainNav_itemsConfig"
	fields?: Maybe<SitePluginPluginOptionsSchemasNavigationMainNav_ItemsConfigFields>
	label?: Maybe<Scalars["String"]>
}

export type SitePluginPluginOptionsSchemasNavigationMainNav_ItemsConfigFields =
	{
		__typename?: "SitePluginPluginOptionsSchemasNavigationMainNav_itemsConfigFields"
		label?: Maybe<SitePluginPluginOptionsSchemasNavigationMainNav_ItemsConfigFieldsLabel>
		link?: Maybe<SitePluginPluginOptionsSchemasNavigationMainNav_ItemsConfigFieldsLink>
	}

export type SitePluginPluginOptionsSchemasNavigationMainNav_ItemsConfigFieldsFilterInput =
	{
		label?: Maybe<SitePluginPluginOptionsSchemasNavigationMainNav_ItemsConfigFieldsLabelFilterInput>
		link?: Maybe<SitePluginPluginOptionsSchemasNavigationMainNav_ItemsConfigFieldsLinkFilterInput>
	}

export type SitePluginPluginOptionsSchemasNavigationMainNav_ItemsConfigFieldsLabel =
	{
		__typename?: "SitePluginPluginOptionsSchemasNavigationMainNav_itemsConfigFieldsLabel"
		config?: Maybe<SitePluginPluginOptionsSchemasNavigationMainNav_ItemsConfigFieldsLabelConfig>
		type?: Maybe<Scalars["String"]>
	}

export type SitePluginPluginOptionsSchemasNavigationMainNav_ItemsConfigFieldsLabelConfig =
	{
		__typename?: "SitePluginPluginOptionsSchemasNavigationMainNav_itemsConfigFieldsLabelConfig"
		label?: Maybe<Scalars["String"]>
		single?: Maybe<Scalars["String"]>
	}

export type SitePluginPluginOptionsSchemasNavigationMainNav_ItemsConfigFieldsLabelConfigFilterInput =
	{
		label?: Maybe<StringQueryOperatorInput>
		single?: Maybe<StringQueryOperatorInput>
	}

export type SitePluginPluginOptionsSchemasNavigationMainNav_ItemsConfigFieldsLabelFilterInput =
	{
		config?: Maybe<SitePluginPluginOptionsSchemasNavigationMainNav_ItemsConfigFieldsLabelConfigFilterInput>
		type?: Maybe<StringQueryOperatorInput>
	}

export type SitePluginPluginOptionsSchemasNavigationMainNav_ItemsConfigFieldsLink =
	{
		__typename?: "SitePluginPluginOptionsSchemasNavigationMainNav_itemsConfigFieldsLink"
		config?: Maybe<SitePluginPluginOptionsSchemasNavigationMainNav_ItemsConfigFieldsLinkConfig>
		type?: Maybe<Scalars["String"]>
	}

export type SitePluginPluginOptionsSchemasNavigationMainNav_ItemsConfigFieldsLinkConfig =
	{
		__typename?: "SitePluginPluginOptionsSchemasNavigationMainNav_itemsConfigFieldsLinkConfig"
		allowTargetBlank?: Maybe<Scalars["Boolean"]>
		label?: Maybe<Scalars["String"]>
	}

export type SitePluginPluginOptionsSchemasNavigationMainNav_ItemsConfigFieldsLinkConfigFilterInput =
	{
		allowTargetBlank?: Maybe<BooleanQueryOperatorInput>
		label?: Maybe<StringQueryOperatorInput>
	}

export type SitePluginPluginOptionsSchemasNavigationMainNav_ItemsConfigFieldsLinkFilterInput =
	{
		config?: Maybe<SitePluginPluginOptionsSchemasNavigationMainNav_ItemsConfigFieldsLinkConfigFilterInput>
		type?: Maybe<StringQueryOperatorInput>
	}

export type SitePluginPluginOptionsSchemasNavigationMainNav_ItemsConfigFilterInput =
	{
		fields?: Maybe<SitePluginPluginOptionsSchemasNavigationMainNav_ItemsConfigFieldsFilterInput>
		label?: Maybe<StringQueryOperatorInput>
	}

export type SitePluginPluginOptionsSchemasNavigationMainNav_ItemsFilterInput = {
	config?: Maybe<SitePluginPluginOptionsSchemasNavigationMainNav_ItemsConfigFilterInput>
	type?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsSchemasNavigationMainTitle = {
	__typename?: "SitePluginPluginOptionsSchemasNavigationMainTitle"
	config?: Maybe<SitePluginPluginOptionsSchemasNavigationMainTitleConfig>
	type?: Maybe<Scalars["String"]>
}

export type SitePluginPluginOptionsSchemasNavigationMainTitleConfig = {
	__typename?: "SitePluginPluginOptionsSchemasNavigationMainTitleConfig"
	label?: Maybe<Scalars["String"]>
	single?: Maybe<Scalars["String"]>
}

export type SitePluginPluginOptionsSchemasNavigationMainTitleConfigFilterInput =
	{
		label?: Maybe<StringQueryOperatorInput>
		single?: Maybe<StringQueryOperatorInput>
	}

export type SitePluginPluginOptionsSchemasNavigationMainTitleFilterInput = {
	config?: Maybe<SitePluginPluginOptionsSchemasNavigationMainTitleConfigFilterInput>
	type?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsSchemasNavigationMainUid = {
	__typename?: "SitePluginPluginOptionsSchemasNavigationMainUid"
	config?: Maybe<SitePluginPluginOptionsSchemasNavigationMainUidConfig>
	type?: Maybe<Scalars["String"]>
}

export type SitePluginPluginOptionsSchemasNavigationMainUidConfig = {
	__typename?: "SitePluginPluginOptionsSchemasNavigationMainUidConfig"
	label?: Maybe<Scalars["String"]>
}

export type SitePluginPluginOptionsSchemasNavigationMainUidConfigFilterInput = {
	label?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsSchemasNavigationMainUidFilterInput = {
	config?: Maybe<SitePluginPluginOptionsSchemasNavigationMainUidConfigFilterInput>
	type?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsSchemasPage = {
	__typename?: "SitePluginPluginOptionsSchemasPage"
	Body?: Maybe<SitePluginPluginOptionsSchemasPageBody>
	Main?: Maybe<SitePluginPluginOptionsSchemasPageMain>
}

export type SitePluginPluginOptionsSchemasPageBody = {
	__typename?: "SitePluginPluginOptionsSchemasPageBody"
	body?: Maybe<SitePluginPluginOptionsSchemasPageBodyBody>
}

export type SitePluginPluginOptionsSchemasPageBodyBody = {
	__typename?: "SitePluginPluginOptionsSchemasPageBodyBody"
	config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfig>
	fieldset?: Maybe<Scalars["String"]>
	type?: Maybe<Scalars["String"]>
}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfig = {
	__typename?: "SitePluginPluginOptionsSchemasPageBodyBodyConfig"
	choices?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoices>
}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoices = {
	__typename?: "SitePluginPluginOptionsSchemasPageBodyBodyConfigChoices"
	anchor?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAnchor>
	filterable_events?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesFilterable_Events>
	gradient_text?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesGradient_Text>
	introduction?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesIntroduction>
	video_hero?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesVideo_Hero>
}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAnchor = {
	__typename?: "SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAnchor"
	description?: Maybe<Scalars["String"]>
	display?: Maybe<Scalars["String"]>
	fieldset?: Maybe<Scalars["String"]>
	icon?: Maybe<Scalars["String"]>
	non_repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAnchorNon_Repeat>
	type?: Maybe<Scalars["String"]>
}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAnchorFilterInput =
	{
		description?: Maybe<StringQueryOperatorInput>
		display?: Maybe<StringQueryOperatorInput>
		fieldset?: Maybe<StringQueryOperatorInput>
		icon?: Maybe<StringQueryOperatorInput>
		non_repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAnchorNon_RepeatFilterInput>
		type?: Maybe<StringQueryOperatorInput>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAnchorNon_Repeat =
	{
		__typename?: "SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAnchorNon_repeat"
		anchor?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAnchorNon_RepeatAnchor>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAnchorNon_RepeatAnchor =
	{
		__typename?: "SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAnchorNon_repeatAnchor"
		config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAnchorNon_RepeatAnchorConfig>
		type?: Maybe<Scalars["String"]>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAnchorNon_RepeatAnchorConfig =
	{
		__typename?: "SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAnchorNon_repeatAnchorConfig"
		label?: Maybe<Scalars["String"]>
		placeholder?: Maybe<Scalars["String"]>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAnchorNon_RepeatAnchorConfigFilterInput =
	{
		label?: Maybe<StringQueryOperatorInput>
		placeholder?: Maybe<StringQueryOperatorInput>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAnchorNon_RepeatAnchorFilterInput =
	{
		config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAnchorNon_RepeatAnchorConfigFilterInput>
		type?: Maybe<StringQueryOperatorInput>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAnchorNon_RepeatFilterInput =
	{
		anchor?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAnchorNon_RepeatAnchorFilterInput>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesFilterInput =
	{
		anchor?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAnchorFilterInput>
		filterable_events?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesFilterable_EventsFilterInput>
		gradient_text?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesGradient_TextFilterInput>
		introduction?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesIntroductionFilterInput>
		video_hero?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesVideo_HeroFilterInput>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesFilterable_Events =
	{
		__typename?: "SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesFilterable_events"
		description?: Maybe<Scalars["String"]>
		display?: Maybe<Scalars["String"]>
		fieldset?: Maybe<Scalars["String"]>
		icon?: Maybe<Scalars["String"]>
		repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesFilterable_EventsRepeat>
		type?: Maybe<Scalars["String"]>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesFilterable_EventsFilterInput =
	{
		description?: Maybe<StringQueryOperatorInput>
		display?: Maybe<StringQueryOperatorInput>
		fieldset?: Maybe<StringQueryOperatorInput>
		icon?: Maybe<StringQueryOperatorInput>
		repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesFilterable_EventsRepeatFilterInput>
		type?: Maybe<StringQueryOperatorInput>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesFilterable_EventsRepeat =
	{
		__typename?: "SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesFilterable_eventsRepeat"
		color?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesFilterable_EventsRepeatColor>
		event?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesFilterable_EventsRepeatEvent>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesFilterable_EventsRepeatColor =
	{
		__typename?: "SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesFilterable_eventsRepeatColor"
		config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesFilterable_EventsRepeatColorConfig>
		type?: Maybe<Scalars["String"]>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesFilterable_EventsRepeatColorConfig =
	{
		__typename?: "SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesFilterable_eventsRepeatColorConfig"
		default_value?: Maybe<Scalars["String"]>
		label?: Maybe<Scalars["String"]>
		options?: Maybe<Array<Maybe<Scalars["String"]>>>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesFilterable_EventsRepeatColorConfigFilterInput =
	{
		default_value?: Maybe<StringQueryOperatorInput>
		label?: Maybe<StringQueryOperatorInput>
		options?: Maybe<StringQueryOperatorInput>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesFilterable_EventsRepeatColorFilterInput =
	{
		config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesFilterable_EventsRepeatColorConfigFilterInput>
		type?: Maybe<StringQueryOperatorInput>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesFilterable_EventsRepeatEvent =
	{
		__typename?: "SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesFilterable_eventsRepeatEvent"
		config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesFilterable_EventsRepeatEventConfig>
		type?: Maybe<Scalars["String"]>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesFilterable_EventsRepeatEventConfig =
	{
		__typename?: "SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesFilterable_eventsRepeatEventConfig"
		customtypes?: Maybe<Array<Maybe<Scalars["String"]>>>
		label?: Maybe<Scalars["String"]>
		select?: Maybe<Scalars["String"]>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesFilterable_EventsRepeatEventConfigFilterInput =
	{
		customtypes?: Maybe<StringQueryOperatorInput>
		label?: Maybe<StringQueryOperatorInput>
		select?: Maybe<StringQueryOperatorInput>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesFilterable_EventsRepeatEventFilterInput =
	{
		config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesFilterable_EventsRepeatEventConfigFilterInput>
		type?: Maybe<StringQueryOperatorInput>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesFilterable_EventsRepeatFilterInput =
	{
		color?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesFilterable_EventsRepeatColorFilterInput>
		event?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesFilterable_EventsRepeatEventFilterInput>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesGradient_Text =
	{
		__typename?: "SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesGradient_text"
		description?: Maybe<Scalars["String"]>
		display?: Maybe<Scalars["String"]>
		fieldset?: Maybe<Scalars["String"]>
		icon?: Maybe<Scalars["String"]>
		non_repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesGradient_TextNon_Repeat>
		type?: Maybe<Scalars["String"]>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesGradient_TextFilterInput =
	{
		description?: Maybe<StringQueryOperatorInput>
		display?: Maybe<StringQueryOperatorInput>
		fieldset?: Maybe<StringQueryOperatorInput>
		icon?: Maybe<StringQueryOperatorInput>
		non_repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesGradient_TextNon_RepeatFilterInput>
		type?: Maybe<StringQueryOperatorInput>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesGradient_TextNon_Repeat =
	{
		__typename?: "SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesGradient_textNon_repeat"
		text?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesGradient_TextNon_RepeatText>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesGradient_TextNon_RepeatFilterInput =
	{
		text?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesGradient_TextNon_RepeatTextFilterInput>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesGradient_TextNon_RepeatText =
	{
		__typename?: "SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesGradient_textNon_repeatText"
		config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesGradient_TextNon_RepeatTextConfig>
		type?: Maybe<Scalars["String"]>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesGradient_TextNon_RepeatTextConfig =
	{
		__typename?: "SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesGradient_textNon_repeatTextConfig"
		label?: Maybe<Scalars["String"]>
		multi?: Maybe<Scalars["String"]>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesGradient_TextNon_RepeatTextConfigFilterInput =
	{
		label?: Maybe<StringQueryOperatorInput>
		multi?: Maybe<StringQueryOperatorInput>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesGradient_TextNon_RepeatTextFilterInput =
	{
		config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesGradient_TextNon_RepeatTextConfigFilterInput>
		type?: Maybe<StringQueryOperatorInput>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesIntroduction =
	{
		__typename?: "SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesIntroduction"
		description?: Maybe<Scalars["String"]>
		display?: Maybe<Scalars["String"]>
		fieldset?: Maybe<Scalars["String"]>
		icon?: Maybe<Scalars["String"]>
		non_repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesIntroductionNon_Repeat>
		type?: Maybe<Scalars["String"]>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesIntroductionFilterInput =
	{
		description?: Maybe<StringQueryOperatorInput>
		display?: Maybe<StringQueryOperatorInput>
		fieldset?: Maybe<StringQueryOperatorInput>
		icon?: Maybe<StringQueryOperatorInput>
		non_repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesIntroductionNon_RepeatFilterInput>
		type?: Maybe<StringQueryOperatorInput>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesIntroductionNon_Repeat =
	{
		__typename?: "SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesIntroductionNon_repeat"
		color?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesIntroductionNon_RepeatColor>
		heading?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesIntroductionNon_RepeatHeading>
		text?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesIntroductionNon_RepeatText>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesIntroductionNon_RepeatColor =
	{
		__typename?: "SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesIntroductionNon_repeatColor"
		config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesIntroductionNon_RepeatColorConfig>
		type?: Maybe<Scalars["String"]>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesIntroductionNon_RepeatColorConfig =
	{
		__typename?: "SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesIntroductionNon_repeatColorConfig"
		default_value?: Maybe<Scalars["String"]>
		label?: Maybe<Scalars["String"]>
		options?: Maybe<Array<Maybe<Scalars["String"]>>>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesIntroductionNon_RepeatColorConfigFilterInput =
	{
		default_value?: Maybe<StringQueryOperatorInput>
		label?: Maybe<StringQueryOperatorInput>
		options?: Maybe<StringQueryOperatorInput>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesIntroductionNon_RepeatColorFilterInput =
	{
		config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesIntroductionNon_RepeatColorConfigFilterInput>
		type?: Maybe<StringQueryOperatorInput>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesIntroductionNon_RepeatFilterInput =
	{
		color?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesIntroductionNon_RepeatColorFilterInput>
		heading?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesIntroductionNon_RepeatHeadingFilterInput>
		text?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesIntroductionNon_RepeatTextFilterInput>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesIntroductionNon_RepeatHeading =
	{
		__typename?: "SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesIntroductionNon_repeatHeading"
		config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesIntroductionNon_RepeatHeadingConfig>
		type?: Maybe<Scalars["String"]>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesIntroductionNon_RepeatHeadingConfig =
	{
		__typename?: "SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesIntroductionNon_repeatHeadingConfig"
		label?: Maybe<Scalars["String"]>
		single?: Maybe<Scalars["String"]>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesIntroductionNon_RepeatHeadingConfigFilterInput =
	{
		label?: Maybe<StringQueryOperatorInput>
		single?: Maybe<StringQueryOperatorInput>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesIntroductionNon_RepeatHeadingFilterInput =
	{
		config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesIntroductionNon_RepeatHeadingConfigFilterInput>
		type?: Maybe<StringQueryOperatorInput>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesIntroductionNon_RepeatText =
	{
		__typename?: "SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesIntroductionNon_repeatText"
		config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesIntroductionNon_RepeatTextConfig>
		type?: Maybe<Scalars["String"]>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesIntroductionNon_RepeatTextConfig =
	{
		__typename?: "SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesIntroductionNon_repeatTextConfig"
		allowTargetBlank?: Maybe<Scalars["Boolean"]>
		label?: Maybe<Scalars["String"]>
		multi?: Maybe<Scalars["String"]>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesIntroductionNon_RepeatTextConfigFilterInput =
	{
		allowTargetBlank?: Maybe<BooleanQueryOperatorInput>
		label?: Maybe<StringQueryOperatorInput>
		multi?: Maybe<StringQueryOperatorInput>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesIntroductionNon_RepeatTextFilterInput =
	{
		config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesIntroductionNon_RepeatTextConfigFilterInput>
		type?: Maybe<StringQueryOperatorInput>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesVideo_Hero =
	{
		__typename?: "SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesVideo_hero"
		description?: Maybe<Scalars["String"]>
		display?: Maybe<Scalars["String"]>
		fieldset?: Maybe<Scalars["String"]>
		icon?: Maybe<Scalars["String"]>
		non_repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesVideo_HeroNon_Repeat>
		type?: Maybe<Scalars["String"]>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesVideo_HeroFilterInput =
	{
		description?: Maybe<StringQueryOperatorInput>
		display?: Maybe<StringQueryOperatorInput>
		fieldset?: Maybe<StringQueryOperatorInput>
		icon?: Maybe<StringQueryOperatorInput>
		non_repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesVideo_HeroNon_RepeatFilterInput>
		type?: Maybe<StringQueryOperatorInput>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesVideo_HeroNon_Repeat =
	{
		__typename?: "SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesVideo_heroNon_repeat"
		text?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesVideo_HeroNon_RepeatText>
		video?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesVideo_HeroNon_RepeatVideo>
		video_thumbnail?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesVideo_HeroNon_RepeatVideo_Thumbnail>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesVideo_HeroNon_RepeatFilterInput =
	{
		text?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesVideo_HeroNon_RepeatTextFilterInput>
		video?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesVideo_HeroNon_RepeatVideoFilterInput>
		video_thumbnail?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesVideo_HeroNon_RepeatVideo_ThumbnailFilterInput>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesVideo_HeroNon_RepeatText =
	{
		__typename?: "SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesVideo_heroNon_repeatText"
		config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesVideo_HeroNon_RepeatTextConfig>
		type?: Maybe<Scalars["String"]>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesVideo_HeroNon_RepeatTextConfig =
	{
		__typename?: "SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesVideo_heroNon_repeatTextConfig"
		label?: Maybe<Scalars["String"]>
		multi?: Maybe<Scalars["String"]>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesVideo_HeroNon_RepeatTextConfigFilterInput =
	{
		label?: Maybe<StringQueryOperatorInput>
		multi?: Maybe<StringQueryOperatorInput>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesVideo_HeroNon_RepeatTextFilterInput =
	{
		config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesVideo_HeroNon_RepeatTextConfigFilterInput>
		type?: Maybe<StringQueryOperatorInput>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesVideo_HeroNon_RepeatVideo =
	{
		__typename?: "SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesVideo_heroNon_repeatVideo"
		config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesVideo_HeroNon_RepeatVideoConfig>
		type?: Maybe<Scalars["String"]>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesVideo_HeroNon_RepeatVideoConfig =
	{
		__typename?: "SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesVideo_heroNon_repeatVideoConfig"
		label?: Maybe<Scalars["String"]>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesVideo_HeroNon_RepeatVideoConfigFilterInput =
	{
		label?: Maybe<StringQueryOperatorInput>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesVideo_HeroNon_RepeatVideoFilterInput =
	{
		config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesVideo_HeroNon_RepeatVideoConfigFilterInput>
		type?: Maybe<StringQueryOperatorInput>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesVideo_HeroNon_RepeatVideo_Thumbnail =
	{
		__typename?: "SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesVideo_heroNon_repeatVideo_thumbnail"
		config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesVideo_HeroNon_RepeatVideo_ThumbnailConfig>
		type?: Maybe<Scalars["String"]>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesVideo_HeroNon_RepeatVideo_ThumbnailConfig =
	{
		__typename?: "SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesVideo_heroNon_repeatVideo_thumbnailConfig"
		label?: Maybe<Scalars["String"]>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesVideo_HeroNon_RepeatVideo_ThumbnailConfigFilterInput =
	{
		label?: Maybe<StringQueryOperatorInput>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesVideo_HeroNon_RepeatVideo_ThumbnailFilterInput =
	{
		config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesVideo_HeroNon_RepeatVideo_ThumbnailConfigFilterInput>
		type?: Maybe<StringQueryOperatorInput>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigFilterInput = {
	choices?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesFilterInput>
}

export type SitePluginPluginOptionsSchemasPageBodyBodyFilterInput = {
	config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigFilterInput>
	fieldset?: Maybe<StringQueryOperatorInput>
	type?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsSchemasPageBodyFilterInput = {
	body?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyFilterInput>
}

export type SitePluginPluginOptionsSchemasPageFilterInput = {
	Body?: Maybe<SitePluginPluginOptionsSchemasPageBodyFilterInput>
	Main?: Maybe<SitePluginPluginOptionsSchemasPageMainFilterInput>
}

export type SitePluginPluginOptionsSchemasPageMain = {
	__typename?: "SitePluginPluginOptionsSchemasPageMain"
	meta_description?: Maybe<SitePluginPluginOptionsSchemasPageMainMeta_Description>
	meta_title?: Maybe<SitePluginPluginOptionsSchemasPageMainMeta_Title>
	redirect_is_permanent?: Maybe<SitePluginPluginOptionsSchemasPageMainRedirect_Is_Permanent>
	redirect_to?: Maybe<SitePluginPluginOptionsSchemasPageMainRedirect_To>
	title?: Maybe<SitePluginPluginOptionsSchemasPageMainTitle>
	uid?: Maybe<SitePluginPluginOptionsSchemasPageMainUid>
}

export type SitePluginPluginOptionsSchemasPageMainFilterInput = {
	meta_description?: Maybe<SitePluginPluginOptionsSchemasPageMainMeta_DescriptionFilterInput>
	meta_title?: Maybe<SitePluginPluginOptionsSchemasPageMainMeta_TitleFilterInput>
	redirect_is_permanent?: Maybe<SitePluginPluginOptionsSchemasPageMainRedirect_Is_PermanentFilterInput>
	redirect_to?: Maybe<SitePluginPluginOptionsSchemasPageMainRedirect_ToFilterInput>
	title?: Maybe<SitePluginPluginOptionsSchemasPageMainTitleFilterInput>
	uid?: Maybe<SitePluginPluginOptionsSchemasPageMainUidFilterInput>
}

export type SitePluginPluginOptionsSchemasPageMainMeta_Description = {
	__typename?: "SitePluginPluginOptionsSchemasPageMainMeta_description"
	config?: Maybe<SitePluginPluginOptionsSchemasPageMainMeta_DescriptionConfig>
	type?: Maybe<Scalars["String"]>
}

export type SitePluginPluginOptionsSchemasPageMainMeta_DescriptionConfig = {
	__typename?: "SitePluginPluginOptionsSchemasPageMainMeta_descriptionConfig"
	label?: Maybe<Scalars["String"]>
	placeholder?: Maybe<Scalars["String"]>
}

export type SitePluginPluginOptionsSchemasPageMainMeta_DescriptionConfigFilterInput =
	{
		label?: Maybe<StringQueryOperatorInput>
		placeholder?: Maybe<StringQueryOperatorInput>
	}

export type SitePluginPluginOptionsSchemasPageMainMeta_DescriptionFilterInput =
	{
		config?: Maybe<SitePluginPluginOptionsSchemasPageMainMeta_DescriptionConfigFilterInput>
		type?: Maybe<StringQueryOperatorInput>
	}

export type SitePluginPluginOptionsSchemasPageMainMeta_Title = {
	__typename?: "SitePluginPluginOptionsSchemasPageMainMeta_title"
	config?: Maybe<SitePluginPluginOptionsSchemasPageMainMeta_TitleConfig>
	type?: Maybe<Scalars["String"]>
}

export type SitePluginPluginOptionsSchemasPageMainMeta_TitleConfig = {
	__typename?: "SitePluginPluginOptionsSchemasPageMainMeta_titleConfig"
	label?: Maybe<Scalars["String"]>
	placeholder?: Maybe<Scalars["String"]>
}

export type SitePluginPluginOptionsSchemasPageMainMeta_TitleConfigFilterInput =
	{
		label?: Maybe<StringQueryOperatorInput>
		placeholder?: Maybe<StringQueryOperatorInput>
	}

export type SitePluginPluginOptionsSchemasPageMainMeta_TitleFilterInput = {
	config?: Maybe<SitePluginPluginOptionsSchemasPageMainMeta_TitleConfigFilterInput>
	type?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsSchemasPageMainRedirect_Is_Permanent = {
	__typename?: "SitePluginPluginOptionsSchemasPageMainRedirect_is_permanent"
	config?: Maybe<SitePluginPluginOptionsSchemasPageMainRedirect_Is_PermanentConfig>
	type?: Maybe<Scalars["String"]>
}

export type SitePluginPluginOptionsSchemasPageMainRedirect_Is_PermanentConfig =
	{
		__typename?: "SitePluginPluginOptionsSchemasPageMainRedirect_is_permanentConfig"
		default_value?: Maybe<Scalars["Boolean"]>
		label?: Maybe<Scalars["String"]>
		placeholder_false?: Maybe<Scalars["String"]>
		placeholder_true?: Maybe<Scalars["String"]>
	}

export type SitePluginPluginOptionsSchemasPageMainRedirect_Is_PermanentConfigFilterInput =
	{
		default_value?: Maybe<BooleanQueryOperatorInput>
		label?: Maybe<StringQueryOperatorInput>
		placeholder_false?: Maybe<StringQueryOperatorInput>
		placeholder_true?: Maybe<StringQueryOperatorInput>
	}

export type SitePluginPluginOptionsSchemasPageMainRedirect_Is_PermanentFilterInput =
	{
		config?: Maybe<SitePluginPluginOptionsSchemasPageMainRedirect_Is_PermanentConfigFilterInput>
		type?: Maybe<StringQueryOperatorInput>
	}

export type SitePluginPluginOptionsSchemasPageMainRedirect_To = {
	__typename?: "SitePluginPluginOptionsSchemasPageMainRedirect_to"
	config?: Maybe<SitePluginPluginOptionsSchemasPageMainRedirect_ToConfig>
	type?: Maybe<Scalars["String"]>
}

export type SitePluginPluginOptionsSchemasPageMainRedirect_ToConfig = {
	__typename?: "SitePluginPluginOptionsSchemasPageMainRedirect_toConfig"
	label?: Maybe<Scalars["String"]>
	placeholder?: Maybe<Scalars["String"]>
}

export type SitePluginPluginOptionsSchemasPageMainRedirect_ToConfigFilterInput =
	{
		label?: Maybe<StringQueryOperatorInput>
		placeholder?: Maybe<StringQueryOperatorInput>
	}

export type SitePluginPluginOptionsSchemasPageMainRedirect_ToFilterInput = {
	config?: Maybe<SitePluginPluginOptionsSchemasPageMainRedirect_ToConfigFilterInput>
	type?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsSchemasPageMainTitle = {
	__typename?: "SitePluginPluginOptionsSchemasPageMainTitle"
	config?: Maybe<SitePluginPluginOptionsSchemasPageMainTitleConfig>
	type?: Maybe<Scalars["String"]>
}

export type SitePluginPluginOptionsSchemasPageMainTitleConfig = {
	__typename?: "SitePluginPluginOptionsSchemasPageMainTitleConfig"
	label?: Maybe<Scalars["String"]>
	single?: Maybe<Scalars["String"]>
}

export type SitePluginPluginOptionsSchemasPageMainTitleConfigFilterInput = {
	label?: Maybe<StringQueryOperatorInput>
	single?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsSchemasPageMainTitleFilterInput = {
	config?: Maybe<SitePluginPluginOptionsSchemasPageMainTitleConfigFilterInput>
	type?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsSchemasPageMainUid = {
	__typename?: "SitePluginPluginOptionsSchemasPageMainUid"
	config?: Maybe<SitePluginPluginOptionsSchemasPageMainUidConfig>
	type?: Maybe<Scalars["String"]>
}

export type SitePluginPluginOptionsSchemasPageMainUidConfig = {
	__typename?: "SitePluginPluginOptionsSchemasPageMainUidConfig"
	label?: Maybe<Scalars["String"]>
}

export type SitePluginPluginOptionsSchemasPageMainUidConfigFilterInput = {
	label?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsSchemasPageMainUidFilterInput = {
	config?: Maybe<SitePluginPluginOptionsSchemasPageMainUidConfigFilterInput>
	type?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsSchemasSettings = {
	__typename?: "SitePluginPluginOptionsSchemasSettings"
	Main?: Maybe<SitePluginPluginOptionsSchemasSettingsMain>
	Redirects?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirects>
}

export type SitePluginPluginOptionsSchemasSettingsFilterInput = {
	Main?: Maybe<SitePluginPluginOptionsSchemasSettingsMainFilterInput>
	Redirects?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsFilterInput>
}

export type SitePluginPluginOptionsSchemasSettingsMain = {
	__typename?: "SitePluginPluginOptionsSchemasSettingsMain"
	site_copyright?: Maybe<SitePluginPluginOptionsSchemasSettingsMainSite_Copyright>
	site_description?: Maybe<SitePluginPluginOptionsSchemasSettingsMainSite_Description>
	site_disclaimer?: Maybe<SitePluginPluginOptionsSchemasSettingsMainSite_Disclaimer>
	site_name?: Maybe<SitePluginPluginOptionsSchemasSettingsMainSite_Name>
	title?: Maybe<SitePluginPluginOptionsSchemasSettingsMainTitle>
}

export type SitePluginPluginOptionsSchemasSettingsMainFilterInput = {
	site_copyright?: Maybe<SitePluginPluginOptionsSchemasSettingsMainSite_CopyrightFilterInput>
	site_description?: Maybe<SitePluginPluginOptionsSchemasSettingsMainSite_DescriptionFilterInput>
	site_disclaimer?: Maybe<SitePluginPluginOptionsSchemasSettingsMainSite_DisclaimerFilterInput>
	site_name?: Maybe<SitePluginPluginOptionsSchemasSettingsMainSite_NameFilterInput>
	title?: Maybe<SitePluginPluginOptionsSchemasSettingsMainTitleFilterInput>
}

export type SitePluginPluginOptionsSchemasSettingsMainSite_Copyright = {
	__typename?: "SitePluginPluginOptionsSchemasSettingsMainSite_copyright"
	config?: Maybe<SitePluginPluginOptionsSchemasSettingsMainSite_CopyrightConfig>
	type?: Maybe<Scalars["String"]>
}

export type SitePluginPluginOptionsSchemasSettingsMainSite_CopyrightConfig = {
	__typename?: "SitePluginPluginOptionsSchemasSettingsMainSite_copyrightConfig"
	label?: Maybe<Scalars["String"]>
	single?: Maybe<Scalars["String"]>
}

export type SitePluginPluginOptionsSchemasSettingsMainSite_CopyrightConfigFilterInput =
	{
		label?: Maybe<StringQueryOperatorInput>
		single?: Maybe<StringQueryOperatorInput>
	}

export type SitePluginPluginOptionsSchemasSettingsMainSite_CopyrightFilterInput =
	{
		config?: Maybe<SitePluginPluginOptionsSchemasSettingsMainSite_CopyrightConfigFilterInput>
		type?: Maybe<StringQueryOperatorInput>
	}

export type SitePluginPluginOptionsSchemasSettingsMainSite_Description = {
	__typename?: "SitePluginPluginOptionsSchemasSettingsMainSite_description"
	config?: Maybe<SitePluginPluginOptionsSchemasSettingsMainSite_DescriptionConfig>
	type?: Maybe<Scalars["String"]>
}

export type SitePluginPluginOptionsSchemasSettingsMainSite_DescriptionConfig = {
	__typename?: "SitePluginPluginOptionsSchemasSettingsMainSite_descriptionConfig"
	label?: Maybe<Scalars["String"]>
	single?: Maybe<Scalars["String"]>
}

export type SitePluginPluginOptionsSchemasSettingsMainSite_DescriptionConfigFilterInput =
	{
		label?: Maybe<StringQueryOperatorInput>
		single?: Maybe<StringQueryOperatorInput>
	}

export type SitePluginPluginOptionsSchemasSettingsMainSite_DescriptionFilterInput =
	{
		config?: Maybe<SitePluginPluginOptionsSchemasSettingsMainSite_DescriptionConfigFilterInput>
		type?: Maybe<StringQueryOperatorInput>
	}

export type SitePluginPluginOptionsSchemasSettingsMainSite_Disclaimer = {
	__typename?: "SitePluginPluginOptionsSchemasSettingsMainSite_disclaimer"
	config?: Maybe<SitePluginPluginOptionsSchemasSettingsMainSite_DisclaimerConfig>
	type?: Maybe<Scalars["String"]>
}

export type SitePluginPluginOptionsSchemasSettingsMainSite_DisclaimerConfig = {
	__typename?: "SitePluginPluginOptionsSchemasSettingsMainSite_disclaimerConfig"
	allowTargetBlank?: Maybe<Scalars["Boolean"]>
	label?: Maybe<Scalars["String"]>
	multi?: Maybe<Scalars["String"]>
}

export type SitePluginPluginOptionsSchemasSettingsMainSite_DisclaimerConfigFilterInput =
	{
		allowTargetBlank?: Maybe<BooleanQueryOperatorInput>
		label?: Maybe<StringQueryOperatorInput>
		multi?: Maybe<StringQueryOperatorInput>
	}

export type SitePluginPluginOptionsSchemasSettingsMainSite_DisclaimerFilterInput =
	{
		config?: Maybe<SitePluginPluginOptionsSchemasSettingsMainSite_DisclaimerConfigFilterInput>
		type?: Maybe<StringQueryOperatorInput>
	}

export type SitePluginPluginOptionsSchemasSettingsMainSite_Name = {
	__typename?: "SitePluginPluginOptionsSchemasSettingsMainSite_name"
	config?: Maybe<SitePluginPluginOptionsSchemasSettingsMainSite_NameConfig>
	type?: Maybe<Scalars["String"]>
}

export type SitePluginPluginOptionsSchemasSettingsMainSite_NameConfig = {
	__typename?: "SitePluginPluginOptionsSchemasSettingsMainSite_nameConfig"
	label?: Maybe<Scalars["String"]>
	single?: Maybe<Scalars["String"]>
}

export type SitePluginPluginOptionsSchemasSettingsMainSite_NameConfigFilterInput =
	{
		label?: Maybe<StringQueryOperatorInput>
		single?: Maybe<StringQueryOperatorInput>
	}

export type SitePluginPluginOptionsSchemasSettingsMainSite_NameFilterInput = {
	config?: Maybe<SitePluginPluginOptionsSchemasSettingsMainSite_NameConfigFilterInput>
	type?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsSchemasSettingsMainTitle = {
	__typename?: "SitePluginPluginOptionsSchemasSettingsMainTitle"
	config?: Maybe<SitePluginPluginOptionsSchemasSettingsMainTitleConfig>
	type?: Maybe<Scalars["String"]>
}

export type SitePluginPluginOptionsSchemasSettingsMainTitleConfig = {
	__typename?: "SitePluginPluginOptionsSchemasSettingsMainTitleConfig"
	label?: Maybe<Scalars["String"]>
	single?: Maybe<Scalars["String"]>
}

export type SitePluginPluginOptionsSchemasSettingsMainTitleConfigFilterInput = {
	label?: Maybe<StringQueryOperatorInput>
	single?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsSchemasSettingsMainTitleFilterInput = {
	config?: Maybe<SitePluginPluginOptionsSchemasSettingsMainTitleConfigFilterInput>
	type?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsSchemasSettingsRedirects = {
	__typename?: "SitePluginPluginOptionsSchemasSettingsRedirects"
	redirects?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirects>
}

export type SitePluginPluginOptionsSchemasSettingsRedirectsFilterInput = {
	redirects?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsFilterInput>
}

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirects = {
	__typename?: "SitePluginPluginOptionsSchemasSettingsRedirectsRedirects"
	config?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfig>
	type?: Maybe<Scalars["String"]>
}

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfig = {
	__typename?: "SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfig"
	fields?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFields>
	label?: Maybe<Scalars["String"]>
}

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFields =
	{
		__typename?: "SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFields"
		from_path?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsFrom_Path>
		is_permanent?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsIs_Permanent>
		to_path?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsTo_Path>
	}

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsFilterInput =
	{
		from_path?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsFrom_PathFilterInput>
		is_permanent?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsIs_PermanentFilterInput>
		to_path?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsTo_PathFilterInput>
	}

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsFrom_Path =
	{
		__typename?: "SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsFrom_path"
		config?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsFrom_PathConfig>
		type?: Maybe<Scalars["String"]>
	}

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsFrom_PathConfig =
	{
		__typename?: "SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsFrom_pathConfig"
		label?: Maybe<Scalars["String"]>
	}

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsFrom_PathConfigFilterInput =
	{
		label?: Maybe<StringQueryOperatorInput>
	}

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsFrom_PathFilterInput =
	{
		config?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsFrom_PathConfigFilterInput>
		type?: Maybe<StringQueryOperatorInput>
	}

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsIs_Permanent =
	{
		__typename?: "SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsIs_permanent"
		config?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsIs_PermanentConfig>
		type?: Maybe<Scalars["String"]>
	}

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsIs_PermanentConfig =
	{
		__typename?: "SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsIs_permanentConfig"
		default_value?: Maybe<Scalars["Boolean"]>
		label?: Maybe<Scalars["String"]>
		placeholder_false?: Maybe<Scalars["String"]>
		placeholder_true?: Maybe<Scalars["String"]>
	}

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsIs_PermanentConfigFilterInput =
	{
		default_value?: Maybe<BooleanQueryOperatorInput>
		label?: Maybe<StringQueryOperatorInput>
		placeholder_false?: Maybe<StringQueryOperatorInput>
		placeholder_true?: Maybe<StringQueryOperatorInput>
	}

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsIs_PermanentFilterInput =
	{
		config?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsIs_PermanentConfigFilterInput>
		type?: Maybe<StringQueryOperatorInput>
	}

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsTo_Path =
	{
		__typename?: "SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsTo_path"
		config?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsTo_PathConfig>
		type?: Maybe<Scalars["String"]>
	}

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsTo_PathConfig =
	{
		__typename?: "SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsTo_pathConfig"
		label?: Maybe<Scalars["String"]>
	}

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsTo_PathConfigFilterInput =
	{
		label?: Maybe<StringQueryOperatorInput>
	}

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsTo_PathFilterInput =
	{
		config?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsTo_PathConfigFilterInput>
		type?: Maybe<StringQueryOperatorInput>
	}

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFilterInput =
	{
		fields?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsFilterInput>
		label?: Maybe<StringQueryOperatorInput>
	}

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsFilterInput =
	{
		config?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFilterInput>
		type?: Maybe<StringQueryOperatorInput>
	}

export type SitePluginSortInput = {
	fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>
	order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SiteSiteMetadata = {
	__typename?: "SiteSiteMetadata"
	description?: Maybe<Scalars["String"]>
	siteUrl?: Maybe<Scalars["String"]>
	title?: Maybe<Scalars["String"]>
	titleShort?: Maybe<Scalars["String"]>
}

export type SiteSiteMetadataFilterInput = {
	description?: Maybe<StringQueryOperatorInput>
	siteUrl?: Maybe<StringQueryOperatorInput>
	title?: Maybe<StringQueryOperatorInput>
	titleShort?: Maybe<StringQueryOperatorInput>
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
	glob?: Maybe<Scalars["String"]>
	in?: Maybe<Array<Maybe<Scalars["String"]>>>
	ne?: Maybe<Scalars["String"]>
	nin?: Maybe<Array<Maybe<Scalars["String"]>>>
	regex?: Maybe<Scalars["String"]>
}

export type SettingsQueryVariables = Exact<{ [key: string]: never }>

export type SettingsQuery = {
	__typename?: "Query"
	prismicSettings?: Maybe<{
		__typename?: "PrismicSettings"
		_previewable: string
		data?: Maybe<{
			__typename?: "PrismicSettingsDataType"
			site_name?: Maybe<{
				__typename?: "PrismicStructuredTextType"
				text?: Maybe<string>
			}>
			site_disclaimer?: Maybe<{
				__typename?: "PrismicStructuredTextType"
				text?: Maybe<string>
			}>
			site_description?: Maybe<{
				__typename?: "PrismicStructuredTextType"
				text?: Maybe<string>
			}>
			site_copyright?: Maybe<{
				__typename?: "PrismicStructuredTextType"
				text?: Maybe<string>
			}>
		}>
	}>
}

export type VideoHeroFragment = {
	__typename?: "PrismicPageDataBodyVideoHero"
	slice_type: string
	primary?: Maybe<{
		__typename?: "PrismicPageDataBodyVideoHeroPrimary"
		text?: Maybe<{
			__typename?: "PrismicStructuredTextType"
			text?: Maybe<string>
		}>
		video_thumbnail?: Maybe<{
			__typename?: "PrismicPageDataBodyVideoHeroPrimaryVideoThumbnailImageType"
			alt?: Maybe<string>
			gatsbyImageData?: Maybe<unknown>
		}>
	}>
}

export type PageTemplateQueryVariables = Exact<{
	uid: Scalars["String"]
}>

export type PageTemplateQuery = {
	__typename?: "Query"
	prismicPage?: Maybe<{
		__typename?: "PrismicPage"
		_previewable: string
		uid: string
		url?: Maybe<string>
		data?: Maybe<{
			__typename?: "PrismicPageDataType"
			meta_description?: Maybe<string>
			meta_title?: Maybe<string>
			title?: Maybe<{
				__typename?: "PrismicStructuredTextType"
				text?: Maybe<string>
			}>
			body?: Maybe<
				Array<
					Maybe<
						| { __typename: "PrismicPageDataBodyAnchor" }
						| { __typename: "PrismicPageDataBodyFilterableEvents" }
						| { __typename: "PrismicPageDataBodyGradientText" }
						| { __typename: "PrismicPageDataBodyIntroduction" }
						| { __typename: "PrismicPageDataBodyVideoHero" }
					>
				>
			>
		}>
	}>
}
