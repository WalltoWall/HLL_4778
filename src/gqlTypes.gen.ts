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
	/**
	 * @deprecated Use `birthTime` instead
	 */
	birthtime?: Maybe<Scalars["Date"]>
	/**
	 * @deprecated Use `birthTime` instead
	 */
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
	ParentInternalContent = "parent___internal___content",
	ParentInternalContentDigest = "parent___internal___contentDigest",
	ParentInternalDescription = "parent___internal___description",
	ParentInternalFieldOwners = "parent___internal___fieldOwners",
	ParentInternalIgnoreType = "parent___internal___ignoreType",
	ParentInternalMediaType = "parent___internal___mediaType",
	ParentInternalOwner = "parent___internal___owner",
	ParentInternalType = "parent___internal___type",
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
	ChildrenInternalContent = "children___internal___content",
	ChildrenInternalContentDigest = "children___internal___contentDigest",
	ChildrenInternalDescription = "children___internal___description",
	ChildrenInternalFieldOwners = "children___internal___fieldOwners",
	ChildrenInternalIgnoreType = "children___internal___ignoreType",
	ChildrenInternalMediaType = "children___internal___mediaType",
	ChildrenInternalOwner = "children___internal___owner",
	ChildrenInternalType = "children___internal___type",
	InternalContent = "internal___content",
	InternalContentDigest = "internal___contentDigest",
	InternalDescription = "internal___description",
	InternalFieldOwners = "internal___fieldOwners",
	InternalIgnoreType = "internal___ignoreType",
	InternalMediaType = "internal___mediaType",
	InternalOwner = "internal___owner",
	InternalType = "internal___type",
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
	field: Scalars["String"]
	fieldValue?: Maybe<Scalars["String"]>
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
	/**
	 * @deprecated Use `birthTime` instead
	 */
	birthtime?: Maybe<Scalars["Date"]>
	/**
	 * @deprecated Use `birthTime` instead
	 */
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
	ParentInternalContent = "parent___internal___content",
	ParentInternalContentDigest = "parent___internal___contentDigest",
	ParentInternalDescription = "parent___internal___description",
	ParentInternalFieldOwners = "parent___internal___fieldOwners",
	ParentInternalIgnoreType = "parent___internal___ignoreType",
	ParentInternalMediaType = "parent___internal___mediaType",
	ParentInternalOwner = "parent___internal___owner",
	ParentInternalType = "parent___internal___type",
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
	ChildrenInternalContent = "children___internal___content",
	ChildrenInternalContentDigest = "children___internal___contentDigest",
	ChildrenInternalDescription = "children___internal___description",
	ChildrenInternalFieldOwners = "children___internal___fieldOwners",
	ChildrenInternalIgnoreType = "children___internal___ignoreType",
	ChildrenInternalMediaType = "children___internal___mediaType",
	ChildrenInternalOwner = "children___internal___owner",
	ChildrenInternalType = "children___internal___type",
	InternalContent = "internal___content",
	InternalContentDigest = "internal___contentDigest",
	InternalDescription = "internal___description",
	InternalFieldOwners = "internal___fieldOwners",
	InternalIgnoreType = "internal___ignoreType",
	InternalMediaType = "internal___mediaType",
	InternalOwner = "internal___owner",
	InternalType = "internal___type",
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
	field: Scalars["String"]
	fieldValue?: Maybe<Scalars["String"]>
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

export enum GatsbyImageLayout {
	Fixed = "FIXED",
	FullWidth = "FULL_WIDTH",
	Constrained = "CONSTRAINED",
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

export type ImgixFluid = {
	base64: Scalars["String"]
	src: Scalars["String"]
	srcSet: Scalars["String"]
	srcWebp: Scalars["String"]
	srcSetWebp: Scalars["String"]
	sizes: Scalars["String"]
	aspectRatio: Scalars["Float"]
}

export type ImgixParamsInput = {
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
	 * Colors the background of padded and partially-transparent images. Default:
	 * `fff`. [See docs](https://docs.imgix.com/apis/url/bg).
	 */
	bg?: Maybe<Scalars["String"]>
	/**
	 * Changes the blend alignment relative to the parent image. [See
	 * docs](https://docs.imgix.com/apis/url/blending/blend-align).
	 */
	blendAlign?: Maybe<Scalars["String"]>
	/**
	 * Alias for `blendAlign`.
	 */
	blendalign?: Maybe<Scalars["String"]>
	/**
	 * Alias for `blendAlign`.
	 */
	ba?: Maybe<Scalars["String"]>
	/**
	 * Changes the alpha of the blend image. Default: `100`. [See
	 * docs](https://docs.imgix.com/apis/url/blending/blend-alpha).
	 */
	blendAlpha?: Maybe<Scalars["Int"]>
	/**
	 * Alias for `blendAlpha`.
	 */
	blendalpha?: Maybe<Scalars["Int"]>
	/**
	 * Alias for `blendAlpha`.
	 */
	balph?: Maybe<Scalars["Int"]>
	/**
	 * Specifies a color to use when applying the blend. [See
	 * docs](https://docs.imgix.com/apis/url/blending/blend-color).
	 */
	blendColor?: Maybe<Scalars["String"]>
	/**
	 * Alias for `blendColor`.
	 */
	blendcolor?: Maybe<Scalars["String"]>
	/**
	 * Alias for `blendColor`.
	 */
	blendClr?: Maybe<Scalars["String"]>
	/**
	 * Alias for `blendColor`.
	 */
	blendclr?: Maybe<Scalars["String"]>
	/**
	 * Specifies the type of crop for blend images. [See
	 * docs](https://docs.imgix.com/apis/url/blending/blend-crop).
	 */
	blendCrop?: Maybe<Scalars["String"]>
	/**
	 * Alias for `blendCrop`.
	 */
	blendcrop?: Maybe<Scalars["String"]>
	/**
	 * Alias for `blendCrop`.
	 */
	bc?: Maybe<Scalars["String"]>
	/**
	 * Specifies the fit mode for blend images. Default: `clip`. [See
	 * docs](https://docs.imgix.com/apis/url/blending/blend-fit).
	 */
	blendFit?: Maybe<Scalars["String"]>
	/**
	 * Alias for `blendFit`.
	 */
	blendfit?: Maybe<Scalars["String"]>
	/**
	 * Alias for `blendFit`.
	 */
	bf?: Maybe<Scalars["String"]>
	/**
	 * Adjusts the height of the blend image. [See
	 * docs](https://docs.imgix.com/apis/url/blending/blend-h).
	 */
	blendH?: Maybe<Scalars["Float"]>
	/**
	 * Alias for `blendH`.
	 */
	blendh?: Maybe<Scalars["Float"]>
	/**
	 * Alias for `blendH`.
	 */
	bh?: Maybe<Scalars["Float"]>
	/**
	 * Sets the blend mode for a blend image. Default: `overlay`. [See
	 * docs](https://docs.imgix.com/apis/url/blending/blend-mode).
	 */
	blendMode?: Maybe<Scalars["String"]>
	/**
	 * Alias for `blendMode`.
	 */
	blendmode?: Maybe<Scalars["String"]>
	/**
	 * Alias for `blendMode`.
	 */
	bm?: Maybe<Scalars["String"]>
	/**
	 * Applies padding to the blend image. Default: `0`. [See
	 * docs](https://docs.imgix.com/apis/url/blending/blend-pad).
	 */
	blendPad?: Maybe<Scalars["Int"]>
	/**
	 * Alias for `blendPad`.
	 */
	blendpad?: Maybe<Scalars["Int"]>
	/**
	 * Alias for `blendPad`.
	 */
	bp?: Maybe<Scalars["Int"]>
	/**
	 * Adjusts the size of the blend image. [See
	 * docs](https://docs.imgix.com/apis/url/blending/blend-size).
	 */
	blendSize?: Maybe<Scalars["String"]>
	/**
	 * Alias for `blendSize`.
	 */
	blendsize?: Maybe<Scalars["String"]>
	/**
	 * Alias for `blendSize`.
	 */
	bs?: Maybe<Scalars["String"]>
	/**
	 * Adjusts the width of the blend image. [See
	 * docs](https://docs.imgix.com/apis/url/blending/blend-w).
	 */
	blendW?: Maybe<Scalars["Float"]>
	/**
	 * Alias for `blendW`.
	 */
	blendw?: Maybe<Scalars["Float"]>
	/**
	 * Alias for `blendW`.
	 */
	bw?: Maybe<Scalars["Float"]>
	/**
	 * Adjusts the x-offset of the blend image relative to its parent. Default:
	 * `0`. [See docs](https://docs.imgix.com/apis/url/blending/blend-x).
	 */
	blendX?: Maybe<Scalars["Int"]>
	/**
	 * Alias for `blendX`.
	 */
	blendx?: Maybe<Scalars["Int"]>
	/**
	 * Alias for `blendX`.
	 */
	bx?: Maybe<Scalars["Int"]>
	/**
	 * Adjusts the y-offset of the blend image relative to its parent. Default:
	 * `0`. [See docs](https://docs.imgix.com/apis/url/blending/blend-y).
	 */
	blendY?: Maybe<Scalars["Int"]>
	/**
	 * Alias for `blendY`.
	 */
	blendy?: Maybe<Scalars["Int"]>
	/**
	 * Alias for `blendY`.
	 */
	by?: Maybe<Scalars["Int"]>
	/**
	 * Specifies the location of the blend image. [See
	 * docs](https://docs.imgix.com/apis/url/blending/blend).
	 */
	blend?: Maybe<Scalars["String"]>
	/**
	 * Alias for `blend`.
	 */
	b?: Maybe<Scalars["String"]>
	/**
	 * Applies a gaussian blur to an image. Default: `0`. [See
	 * docs](https://docs.imgix.com/apis/url/stylize/blur).
	 */
	blur?: Maybe<Scalars["Int"]>
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
	 * Sets the inner radius of the image's border in pixels. [See
	 * docs](https://docs.imgix.com/apis/url/border-and-padding/border-radius-inner).
	 */
	borderRadiusInner?: Maybe<Scalars["String"]>
	/**
	 * Sets the outer radius of the image's border in pixels. [See
	 * docs](https://docs.imgix.com/apis/url/border-and-padding/border-radius).
	 */
	borderRadius?: Maybe<Scalars["String"]>
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
	 * Applies a border to an image. [See
	 * docs](https://docs.imgix.com/apis/url/border-and-padding/border).
	 */
	border?: Maybe<Scalars["String"]>
	/**
	 * Adjusts the brightness of the source image. Default: `0`. [See
	 * docs](https://docs.imgix.com/apis/url/adjustment/bri).
	 */
	bri?: Maybe<Scalars["Int"]>
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
	 * Changes the alpha of the duotone effect atop the source image. Default:
	 * `100`. [See docs](https://docs.imgix.com/apis/url/stylize/duotone-alpha).
	 */
	duotoneAlpha?: Maybe<Scalars["Int"]>
	/**
	 * Applies a duotone effect to the source image. [See
	 * docs](https://docs.imgix.com/apis/url/stylize/duotone).
	 */
	duotone?: Maybe<Scalars["String"]>
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
	 * Determines how to fill in additional space created by the fit setting. [See
	 * docs](https://docs.imgix.com/apis/url/fill/fill).
	 */
	fill?: Maybe<Scalars["String"]>
	/**
	 * Specifies how to map the source image to the output image dimensions.
	 * Default: `clip`. [See docs](https://docs.imgix.com/apis/url/size/fit).
	 */
	fit?: Maybe<Scalars["String"]>
	/**
	 * Alias for `fit`.
	 */
	f?: Maybe<Scalars["String"]>
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
	 * Inverts the colors on the source image. Default: `false`. [See
	 * docs](https://docs.imgix.com/apis/url/adjustment/invert).
	 */
	invert?: Maybe<Scalars["Boolean"]>
	/**
	 * Alias for `invert`.
	 */
	inv?: Maybe<Scalars["Boolean"]>
	/**
	 * Specifies that the output image should be a lossless variant. Default:
	 * `false`. [See docs](https://docs.imgix.com/apis/url/format/lossless).
	 */
	lossless?: Maybe<Scalars["Boolean"]>
	/**
	 * Changes the watermark alignment relative to the parent image. [See
	 * docs](https://docs.imgix.com/apis/url/watermark/mark-align).
	 */
	markAlign?: Maybe<Scalars["String"]>
	/**
	 * Alias for `markAlign`.
	 */
	ma?: Maybe<Scalars["String"]>
	/**
	 * Alias for `markAlign`.
	 */
	markalign?: Maybe<Scalars["String"]>
	/**
	 * Changes the alpha of the watermark image. Default: `100`. [See
	 * docs](https://docs.imgix.com/apis/url/watermark/mark-alpha).
	 */
	markAlpha?: Maybe<Scalars["Int"]>
	/**
	 * Alias for `markAlpha`.
	 */
	markalpha?: Maybe<Scalars["Int"]>
	/**
	 * Alias for `markAlpha`.
	 */
	malph?: Maybe<Scalars["Int"]>
	/**
	 * Changes base URL of the watermark image. [See
	 * docs](https://docs.imgix.com/apis/url/watermark/mark-base).
	 */
	markBase?: Maybe<Scalars["String"]>
	/**
	 * Alias for `markBase`.
	 */
	mb?: Maybe<Scalars["String"]>
	/**
	 * Alias for `markBase`.
	 */
	markbase?: Maybe<Scalars["String"]>
	/**
	 * Specifies the fit mode for watermark images. Default: `clip`. [See
	 * docs](https://docs.imgix.com/apis/url/watermark/mark-fit).
	 */
	markFit?: Maybe<Scalars["String"]>
	/**
	 * Alias for `markFit`.
	 */
	mf?: Maybe<Scalars["String"]>
	/**
	 * Alias for `markFit`.
	 */
	markfit?: Maybe<Scalars["String"]>
	/**
	 * Adjusts the height of the watermark image. [See
	 * docs](https://docs.imgix.com/apis/url/watermark/mark-h).
	 */
	markH?: Maybe<Scalars["Float"]>
	/**
	 * Alias for `markH`.
	 */
	mh?: Maybe<Scalars["Float"]>
	/**
	 * Alias for `markH`.
	 */
	markh?: Maybe<Scalars["Float"]>
	/**
	 * Applies padding to the watermark image. Default: `5`. [See
	 * docs](https://docs.imgix.com/apis/url/watermark/mark-pad).
	 */
	markPad?: Maybe<Scalars["Int"]>
	/**
	 * Alias for `markPad`.
	 */
	mp?: Maybe<Scalars["Int"]>
	/**
	 * Alias for `markPad`.
	 */
	markpad?: Maybe<Scalars["Int"]>
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
	 * Alias for `markScale`.
	 */
	ms?: Maybe<Scalars["Int"]>
	/**
	 * Alias for `markScale`.
	 */
	markscale?: Maybe<Scalars["Int"]>
	/**
	 * Adds tiled watermark. [See
	 * docs](https://docs.imgix.com/apis/url/watermark/mark-tile).
	 */
	markTile?: Maybe<Scalars["String"]>
	/**
	 * Alias for `markTile`.
	 */
	mtile?: Maybe<Scalars["String"]>
	/**
	 * Alias for `markTile`.
	 */
	marktile?: Maybe<Scalars["String"]>
	/**
	 * Adjusts the width of the watermark image. [See
	 * docs](https://docs.imgix.com/apis/url/watermark/mark-w).
	 */
	markW?: Maybe<Scalars["Float"]>
	/**
	 * Alias for `markW`.
	 */
	mw?: Maybe<Scalars["Float"]>
	/**
	 * Alias for `markW`.
	 */
	markw?: Maybe<Scalars["Float"]>
	/**
	 * Adjusts the x-offset of the watermark image relative to its parent. [See
	 * docs](https://docs.imgix.com/apis/url/watermark/mark-x).
	 */
	markX?: Maybe<Scalars["Int"]>
	/**
	 * Alias for `markX`.
	 */
	mx?: Maybe<Scalars["Int"]>
	/**
	 * Alias for `markX`.
	 */
	markx?: Maybe<Scalars["Int"]>
	/**
	 * Adjusts the y-offset of the watermark image relative to its parent. [See
	 * docs](https://docs.imgix.com/apis/url/watermark/mark-y).
	 */
	markY?: Maybe<Scalars["Int"]>
	/**
	 * Alias for `markY`.
	 */
	my?: Maybe<Scalars["Int"]>
	/**
	 * Alias for `markY`.
	 */
	marky?: Maybe<Scalars["Int"]>
	/**
	 * Specifies the location of the watermark image. [See
	 * docs](https://docs.imgix.com/apis/url/watermark/mark).
	 */
	mark?: Maybe<Scalars["String"]>
	/**
	 * Alias for `mark`.
	 */
	m?: Maybe<Scalars["String"]>
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
	 * Defines the type of mask and specifies the URL if that type is selected.
	 * [See docs](https://docs.imgix.com/apis/url/mask).
	 */
	mask?: Maybe<Scalars["String"]>
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
	 * Applies a monochrome effect to the source image. [See
	 * docs](https://docs.imgix.com/apis/url/stylize/monochrome).
	 */
	monochrome?: Maybe<Scalars["String"]>
	/**
	 * Alias for `monochrome`.
	 */
	mono?: Maybe<Scalars["String"]>
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
	 * Changes the image orientation. [See
	 * docs](https://docs.imgix.com/apis/url/rotation/orient).
	 */
	orient?: Maybe<Scalars["Int"]>
	/**
	 * Alias for `orient`.
	 */
	or?: Maybe<Scalars["Int"]>
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
	 * Pads an image. Default: `0`. [See
	 * docs](https://docs.imgix.com/apis/url/border-and-padding/pad).
	 */
	pad?: Maybe<Scalars["Int"]>
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
	 * Alias for `pdfAnnotation`.
	 */
	annotation?: Maybe<Scalars["Boolean"]>
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
	 * Adds checkerboard behind images which support transparency. [See
	 * docs](https://docs.imgix.com/apis/url/fill/transparency).
	 */
	transparency?: Maybe<Scalars["String"]>
	/**
	 * Specifies a trim color on a trim operation. [See
	 * docs](https://docs.imgix.com/apis/url/trim/trim-color).
	 */
	trimColor?: Maybe<Scalars["String"]>
	/**
	 * Alias for `trimColor`.
	 */
	trimcolor?: Maybe<Scalars["String"]>
	/**
	 * Specifies the mean difference on a trim operation. Default: `11`. [See
	 * docs](https://docs.imgix.com/apis/url/trim/trim-md).
	 */
	trimMd?: Maybe<Scalars["Float"]>
	/**
	 * Alias for `trimMd`.
	 */
	trimmd?: Maybe<Scalars["Float"]>
	/**
	 * Pads the area of the source image before trimming. Default: `0`. [See
	 * docs](https://docs.imgix.com/apis/url/trim/trim-pad).
	 */
	trimPad?: Maybe<Scalars["Int"]>
	/**
	 * Alias for `trimPad`.
	 */
	trimpad?: Maybe<Scalars["Int"]>
	/**
	 * Specifies the standard deviation on a trim operation. Default: `10`. [See
	 * docs](https://docs.imgix.com/apis/url/trim/trim-sd).
	 */
	trimSd?: Maybe<Scalars["Float"]>
	/**
	 * Alias for `trimSd`.
	 */
	trimsd?: Maybe<Scalars["Float"]>
	/**
	 * Specifies the tolerance on a trim operation. Default: `0`. [See
	 * docs](https://docs.imgix.com/apis/url/trim/trim-tol).
	 */
	trimTol?: Maybe<Scalars["Float"]>
	/**
	 * Alias for `trimTol`.
	 */
	trimtol?: Maybe<Scalars["Float"]>
	/**
	 * Trims the source image. [See docs](https://docs.imgix.com/apis/url/trim/trim).
	 */
	trim?: Maybe<Scalars["String"]>
	/**
	 * Sets the vertical and horizontal alignment of rendered text relative to the
	 * base image. [See docs](https://docs.imgix.com/apis/url/text/txt-align).
	 */
	txtAlign?: Maybe<Scalars["String"]>
	/**
	 * Alias for `txtAlign`.
	 */
	txtalign?: Maybe<Scalars["String"]>
	/**
	 * Alias for `txtAlign`.
	 */
	ta?: Maybe<Scalars["String"]>
	/**
	 * Sets the clipping properties of rendered text. Default: `end`. [See
	 * docs](https://docs.imgix.com/apis/url/text/txt-clip).
	 */
	txtClip?: Maybe<Scalars["String"]>
	/**
	 * Alias for `txtClip`.
	 */
	txtclip?: Maybe<Scalars["String"]>
	/**
	 * Alias for `txtClip`.
	 */
	tcl?: Maybe<Scalars["String"]>
	/**
	 * Specifies the color of rendered text. [See
	 * docs](https://docs.imgix.com/apis/url/text/txt-color).
	 */
	txtColor?: Maybe<Scalars["String"]>
	/**
	 * Alias for `txtColor`.
	 */
	txtcolor?: Maybe<Scalars["String"]>
	/**
	 * Alias for `txtColor`.
	 */
	txtClr?: Maybe<Scalars["String"]>
	/**
	 * Alias for `txtColor`.
	 */
	txtclr?: Maybe<Scalars["String"]>
	/**
	 * Alias for `txtColor`.
	 */
	tc?: Maybe<Scalars["String"]>
	/**
	 * Specifies the fit approach for rendered text. [See
	 * docs](https://docs.imgix.com/apis/url/text/txt-fit).
	 */
	txtFit?: Maybe<Scalars["String"]>
	/**
	 * Alias for `txtFit`.
	 */
	txtfit?: Maybe<Scalars["String"]>
	/**
	 * Selects a font for rendered text. [See
	 * docs](https://docs.imgix.com/apis/url/text/txt-font).
	 */
	txtFont?: Maybe<Scalars["String"]>
	/**
	 * Alias for `txtFont`.
	 */
	tf?: Maybe<Scalars["String"]>
	/**
	 * Alias for `txtFont`.
	 */
	txtfont?: Maybe<Scalars["String"]>
	/**
	 * Sets the leading (line spacing) for rendered text. Only works on the
	 * multi-line text endpoint. Default: `0`. [See
	 * docs](https://docs.imgix.com/apis/url/typesetting/txt-lead).
	 */
	txtLead?: Maybe<Scalars["Int"]>
	/**
	 * Alias for `txtLead`.
	 */
	txtlead?: Maybe<Scalars["Int"]>
	/**
	 * Controls the level of ligature substitution. [See
	 * docs](https://docs.imgix.com/apis/url/text/txt-lig).
	 */
	txtLig?: Maybe<Scalars["Int"]>
	/**
	 * Alias for `txtLig`.
	 */
	txtlig?: Maybe<Scalars["Int"]>
	/**
	 * Specifies a text outline color. Default: `fff`. [See
	 * docs](https://docs.imgix.com/apis/url/text/txt-line-color).
	 */
	txtLineColor?: Maybe<Scalars["String"]>
	/**
	 * Alias for `txtLineColor`.
	 */
	txtlinecolor?: Maybe<Scalars["String"]>
	/**
	 * Alias for `txtLineColor`.
	 */
	txtLineClr?: Maybe<Scalars["String"]>
	/**
	 * Alias for `txtLineColor`.
	 */
	txtlineclr?: Maybe<Scalars["String"]>
	/**
	 * Outlines the rendered text with a specified color. Default: `0`. [See
	 * docs](https://docs.imgix.com/apis/url/text/txt-line).
	 */
	txtLine?: Maybe<Scalars["Int"]>
	/**
	 * Alias for `txtLine`.
	 */
	txtline?: Maybe<Scalars["Int"]>
	/**
	 * Alias for `txtLine`.
	 */
	tl?: Maybe<Scalars["Int"]>
	/**
	 * Specifies the padding (in device-independent pixels) between a textbox and
	 * the edges of the base image. [See
	 * docs](https://docs.imgix.com/apis/url/text/txt-pad).
	 */
	txtPad?: Maybe<Scalars["Int"]>
	/**
	 * Alias for `txtPad`.
	 */
	txtpad?: Maybe<Scalars["Int"]>
	/**
	 * Alias for `txtPad`.
	 */
	tp?: Maybe<Scalars["Int"]>
	/**
	 * Applies a shadow to rendered text. Default: `0`. [See
	 * docs](https://docs.imgix.com/apis/url/text/txt-shad).
	 */
	txtShad?: Maybe<Scalars["Float"]>
	/**
	 * Alias for `txtShad`.
	 */
	txtshad?: Maybe<Scalars["Float"]>
	/**
	 * Alias for `txtShad`.
	 */
	tsh?: Maybe<Scalars["Float"]>
	/**
	 * Sets the font size of rendered text. Default: `12`. [See
	 * docs](https://docs.imgix.com/apis/url/text/txt-size).
	 */
	txtSize?: Maybe<Scalars["Int"]>
	/**
	 * Alias for `txtSize`.
	 */
	tsz?: Maybe<Scalars["Int"]>
	/**
	 * Alias for `txtSize`.
	 */
	txtsize?: Maybe<Scalars["Int"]>
	/**
	 * Sets the tracking (letter spacing) for rendered text. Only works on the
	 * multi-line text endpoint. Default: `0`. [See
	 * docs](https://docs.imgix.com/apis/url/typesetting/txt-track).
	 */
	txtTrack?: Maybe<Scalars["Int"]>
	/**
	 * Alias for `txtTrack`.
	 */
	txttrack?: Maybe<Scalars["Int"]>
	/**
	 * Alias for `txtTrack`.
	 */
	tt?: Maybe<Scalars["Int"]>
	/**
	 * Sets the width of rendered text. [See
	 * docs](https://docs.imgix.com/apis/url/text/txt-width).
	 */
	txtWidth?: Maybe<Scalars["Int"]>
	/**
	 * Alias for `txtWidth`.
	 */
	txtwidth?: Maybe<Scalars["Int"]>
	/**
	 * Sets the text string to render. [See docs](https://docs.imgix.com/apis/url/text/txt).
	 */
	txt?: Maybe<Scalars["String"]>
	/**
	 * Alias for `txt`.
	 */
	t?: Maybe<Scalars["String"]>
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
	ne?: Maybe<Scalars["JSON"]>
	in?: Maybe<Array<Maybe<Scalars["JSON"]>>>
	nin?: Maybe<Array<Maybe<Scalars["JSON"]>>>
	regex?: Maybe<Scalars["JSON"]>
	glob?: Maybe<Scalars["JSON"]>
}

/**
 * Node Interface
 */
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
	ParentInternalContent = "parent___internal___content",
	ParentInternalContentDigest = "parent___internal___contentDigest",
	ParentInternalDescription = "parent___internal___description",
	ParentInternalFieldOwners = "parent___internal___fieldOwners",
	ParentInternalIgnoreType = "parent___internal___ignoreType",
	ParentInternalMediaType = "parent___internal___mediaType",
	ParentInternalOwner = "parent___internal___owner",
	ParentInternalType = "parent___internal___type",
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
	ChildrenInternalContent = "children___internal___content",
	ChildrenInternalContentDigest = "children___internal___contentDigest",
	ChildrenInternalDescription = "children___internal___description",
	ChildrenInternalFieldOwners = "children___internal___fieldOwners",
	ChildrenInternalIgnoreType = "children___internal___ignoreType",
	ChildrenInternalMediaType = "children___internal___mediaType",
	ChildrenInternalOwner = "children___internal___owner",
	ChildrenInternalType = "children___internal___type",
	InternalContent = "internal___content",
	InternalContentDigest = "internal___contentDigest",
	InternalDescription = "internal___description",
	InternalFieldOwners = "internal___fieldOwners",
	InternalIgnoreType = "internal___ignoreType",
	InternalMediaType = "internal___mediaType",
	InternalOwner = "internal___owner",
	InternalType = "internal___type",
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
	field: Scalars["String"]
	fieldValue?: Maybe<Scalars["String"]>
}

export type PrismicEmbedTypeSortInput = {
	fields?: Maybe<Array<Maybe<PrismicEmbedTypeFieldsEnum>>>
	order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type PrismicEvent = Node & {
	uid: Scalars["String"]
	data?: Maybe<PrismicEventDataType>
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

export type PrismicEventDataType = {
	date?: Maybe<Scalars["Date"]>
	description?: Maybe<PrismicStructuredTextType>
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
	DataDescriptionRaw = "data___description___raw",
	DataTitleText = "data___title___text",
	DataTitleHtml = "data___title___html",
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
	ParentInternalContent = "parent___internal___content",
	ParentInternalContentDigest = "parent___internal___contentDigest",
	ParentInternalDescription = "parent___internal___description",
	ParentInternalFieldOwners = "parent___internal___fieldOwners",
	ParentInternalIgnoreType = "parent___internal___ignoreType",
	ParentInternalMediaType = "parent___internal___mediaType",
	ParentInternalOwner = "parent___internal___owner",
	ParentInternalType = "parent___internal___type",
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
	ChildrenInternalContent = "children___internal___content",
	ChildrenInternalContentDigest = "children___internal___contentDigest",
	ChildrenInternalDescription = "children___internal___description",
	ChildrenInternalFieldOwners = "children___internal___fieldOwners",
	ChildrenInternalIgnoreType = "children___internal___ignoreType",
	ChildrenInternalMediaType = "children___internal___mediaType",
	ChildrenInternalOwner = "children___internal___owner",
	ChildrenInternalType = "children___internal___type",
	InternalContent = "internal___content",
	InternalContentDigest = "internal___contentDigest",
	InternalDescription = "internal___description",
	InternalFieldOwners = "internal___fieldOwners",
	InternalIgnoreType = "internal___ignoreType",
	InternalMediaType = "internal___mediaType",
	InternalOwner = "internal___owner",
	InternalType = "internal___type",
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
	field: Scalars["String"]
	fieldValue?: Maybe<Scalars["String"]>
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

export type PrismicImageThumbnailType = {
	alt?: Maybe<Scalars["String"]>
	copyright?: Maybe<Scalars["String"]>
	dimensions?: Maybe<PrismicImageDimensionsType>
	/**
	 * A plain imgix URL with the URL and params applied.
	 */
	url?: Maybe<Scalars["String"]>
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
	data?: Maybe<PrismicNavigationDataType>
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
	ParentInternalContent = "parent___internal___content",
	ParentInternalContentDigest = "parent___internal___contentDigest",
	ParentInternalDescription = "parent___internal___description",
	ParentInternalFieldOwners = "parent___internal___fieldOwners",
	ParentInternalIgnoreType = "parent___internal___ignoreType",
	ParentInternalMediaType = "parent___internal___mediaType",
	ParentInternalOwner = "parent___internal___owner",
	ParentInternalType = "parent___internal___type",
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
	ChildrenInternalContent = "children___internal___content",
	ChildrenInternalContentDigest = "children___internal___contentDigest",
	ChildrenInternalDescription = "children___internal___description",
	ChildrenInternalFieldOwners = "children___internal___fieldOwners",
	ChildrenInternalIgnoreType = "children___internal___ignoreType",
	ChildrenInternalMediaType = "children___internal___mediaType",
	ChildrenInternalOwner = "children___internal___owner",
	ChildrenInternalType = "children___internal___type",
	InternalContent = "internal___content",
	InternalContentDigest = "internal___contentDigest",
	InternalDescription = "internal___description",
	InternalFieldOwners = "internal___fieldOwners",
	InternalIgnoreType = "internal___ignoreType",
	InternalMediaType = "internal___mediaType",
	InternalOwner = "internal___owner",
	InternalType = "internal___type",
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
	field: Scalars["String"]
	fieldValue?: Maybe<Scalars["String"]>
}

export type PrismicNavigationSortInput = {
	fields?: Maybe<Array<Maybe<PrismicNavigationFieldsEnum>>>
	order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type PrismicPage = Node & {
	uid: Scalars["String"]
	data?: Maybe<PrismicPageDataType>
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
	primary?: Maybe<PrismicPageDataBodyAnchorPrimary>
	id: Scalars["ID"]
	slice_type: Scalars["String"]
	slice_label?: Maybe<Scalars["String"]>
}

export type PrismicPageDataBodyAnchorPrimary = {
	anchor?: Maybe<Scalars["String"]>
}

export type PrismicPageDataBodyCarousel = PrismicSliceType & {
	items?: Maybe<Array<Maybe<PrismicPageDataBodyCarouselItem>>>
	primary?: Maybe<PrismicPageDataBodyCarouselPrimary>
	id: Scalars["ID"]
	slice_type: Scalars["String"]
	slice_label?: Maybe<Scalars["String"]>
}

export type PrismicPageDataBodyCarouselItem = {
	image?: Maybe<PrismicPageDataBodyCarouselItemsImageImageType>
}

export type PrismicPageDataBodyCarouselItemsImageImageType = {
	alt?: Maybe<Scalars["String"]>
	copyright?: Maybe<Scalars["String"]>
	dimensions?: Maybe<PrismicImageDimensionsType>
	/**
	 * A plain imgix URL with the URL and params applied.
	 */
	url?: Maybe<Scalars["String"]>
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
}

export type PrismicPageDataBodyCarouselItemsImageImageTypeUrlArgs = {
	imgixParams?: Maybe<ImgixParamsInput>
}

export type PrismicPageDataBodyCarouselItemsImageImageTypeFixedArgs = {
	width?: Maybe<Scalars["Int"]>
	height?: Maybe<Scalars["Int"]>
	quality?: Maybe<Scalars["Int"]>
	imgixParams?: Maybe<ImgixParamsInput>
	placeholderImgixParams?: Maybe<ImgixParamsInput>
}

export type PrismicPageDataBodyCarouselItemsImageImageTypeFluidArgs = {
	imgixParams?: Maybe<ImgixParamsInput>
	maxWidth?: Maybe<Scalars["Int"]>
	maxHeight?: Maybe<Scalars["Int"]>
	srcSetBreakpoints?: Maybe<Array<Maybe<Scalars["Int"]>>>
	placeholderImgixParams?: Maybe<ImgixParamsInput>
}

export type PrismicPageDataBodyCarouselItemsImageImageTypeGatsbyImageDataArgs =
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

export type PrismicPageDataBodyCarouselPrimary = {
	button_link?: Maybe<PrismicLinkType>
	button_text?: Maybe<Scalars["String"]>
	heading?: Maybe<PrismicStructuredTextType>
	subheading?: Maybe<PrismicStructuredTextType>
}

export type PrismicPageDataBodyFilterableEvents = PrismicSliceType & {
	items?: Maybe<Array<Maybe<PrismicPageDataBodyFilterableEventsItem>>>
	id: Scalars["ID"]
	slice_type: Scalars["String"]
	slice_label?: Maybe<Scalars["String"]>
}

export type PrismicPageDataBodyFilterableEventsItem = {
	color?: Maybe<Scalars["String"]>
	event?: Maybe<PrismicLinkType>
}

export type PrismicPageDataBodyGradientText = PrismicSliceType & {
	primary?: Maybe<PrismicPageDataBodyGradientTextPrimary>
	id: Scalars["ID"]
	slice_type: Scalars["String"]
	slice_label?: Maybe<Scalars["String"]>
}

export type PrismicPageDataBodyGradientTextPrimary = {
	text?: Maybe<PrismicStructuredTextType>
}

export type PrismicPageDataBodyIntroduction = PrismicSliceType & {
	primary?: Maybe<PrismicPageDataBodyIntroductionPrimary>
	id: Scalars["ID"]
	slice_type: Scalars["String"]
	slice_label?: Maybe<Scalars["String"]>
}

export type PrismicPageDataBodyIntroductionPrimary = {
	color?: Maybe<Scalars["String"]>
	heading?: Maybe<PrismicStructuredTextType>
	text?: Maybe<PrismicStructuredTextType>
}

export type PrismicPageDataBodySlicesType =
	| PrismicPageDataBodyAnchor
	| PrismicPageDataBodyCarousel
	| PrismicPageDataBodyFilterableEvents
	| PrismicPageDataBodyGradientText
	| PrismicPageDataBodyIntroduction
	| PrismicPageDataBodyTwoColumnText
	| PrismicPageDataBodyVideoHero

export type PrismicPageDataBodyTwoColumnText = PrismicSliceType & {
	primary?: Maybe<PrismicPageDataBodyTwoColumnTextPrimary>
	id: Scalars["ID"]
	slice_type: Scalars["String"]
	slice_label?: Maybe<Scalars["String"]>
}

export type PrismicPageDataBodyTwoColumnTextPrimary = {
	left_text?: Maybe<PrismicStructuredTextType>
	right_text?: Maybe<PrismicStructuredTextType>
}

export type PrismicPageDataBodyVideoHero = PrismicSliceType & {
	primary?: Maybe<PrismicPageDataBodyVideoHeroPrimary>
	id: Scalars["ID"]
	slice_type: Scalars["String"]
	slice_label?: Maybe<Scalars["String"]>
}

export type PrismicPageDataBodyVideoHeroPrimary = {
	text?: Maybe<PrismicStructuredTextType>
	video?: Maybe<PrismicEmbedType>
	video_thumbnail?: Maybe<PrismicPageDataBodyVideoHeroPrimaryVideoThumbnailImageType>
}

export type PrismicPageDataBodyVideoHeroPrimaryVideoThumbnailImageType = {
	alt?: Maybe<Scalars["String"]>
	copyright?: Maybe<Scalars["String"]>
	dimensions?: Maybe<PrismicImageDimensionsType>
	/**
	 * A plain imgix URL with the URL and params applied.
	 */
	url?: Maybe<Scalars["String"]>
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

export type PrismicPageDataType = {
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
	ParentInternalContent = "parent___internal___content",
	ParentInternalContentDigest = "parent___internal___contentDigest",
	ParentInternalDescription = "parent___internal___description",
	ParentInternalFieldOwners = "parent___internal___fieldOwners",
	ParentInternalIgnoreType = "parent___internal___ignoreType",
	ParentInternalMediaType = "parent___internal___mediaType",
	ParentInternalOwner = "parent___internal___owner",
	ParentInternalType = "parent___internal___type",
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
	ChildrenInternalContent = "children___internal___content",
	ChildrenInternalContentDigest = "children___internal___contentDigest",
	ChildrenInternalDescription = "children___internal___description",
	ChildrenInternalFieldOwners = "children___internal___fieldOwners",
	ChildrenInternalIgnoreType = "children___internal___ignoreType",
	ChildrenInternalMediaType = "children___internal___mediaType",
	ChildrenInternalOwner = "children___internal___owner",
	ChildrenInternalType = "children___internal___type",
	InternalContent = "internal___content",
	InternalContentDigest = "internal___contentDigest",
	InternalDescription = "internal___description",
	InternalFieldOwners = "internal___fieldOwners",
	InternalIgnoreType = "internal___ignoreType",
	InternalMediaType = "internal___mediaType",
	InternalOwner = "internal___owner",
	InternalType = "internal___type",
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
	field: Scalars["String"]
	fieldValue?: Maybe<Scalars["String"]>
}

export type PrismicPageSortInput = {
	fields?: Maybe<Array<Maybe<PrismicPageFieldsEnum>>>
	order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type PrismicSettings = Node & {
	data?: Maybe<PrismicSettingsDataType>
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

export type PrismicSettingsDataType = {
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
	next?: Maybe<PrismicSettings>
	node: PrismicSettings
	previous?: Maybe<PrismicSettings>
}

export enum PrismicSettingsFieldsEnum {
	DataRedirects = "data___redirects",
	DataRedirectsFromPath = "data___redirects___from_path",
	DataRedirectsIsPermanent = "data___redirects___is_permanent",
	DataRedirectsToPath = "data___redirects___to_path",
	DataSiteCopyrightText = "data___site_copyright___text",
	DataSiteCopyrightHtml = "data___site_copyright___html",
	DataSiteCopyrightRaw = "data___site_copyright___raw",
	DataSiteDescriptionText = "data___site_description___text",
	DataSiteDescriptionHtml = "data___site_description___html",
	DataSiteDescriptionRaw = "data___site_description___raw",
	DataSiteDisclaimerText = "data___site_disclaimer___text",
	DataSiteDisclaimerHtml = "data___site_disclaimer___html",
	DataSiteDisclaimerRaw = "data___site_disclaimer___raw",
	DataSiteNameText = "data___site_name___text",
	DataSiteNameHtml = "data___site_name___html",
	DataSiteNameRaw = "data___site_name___raw",
	DataTitleText = "data___title___text",
	DataTitleHtml = "data___title___html",
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
	ParentInternalContent = "parent___internal___content",
	ParentInternalContentDigest = "parent___internal___contentDigest",
	ParentInternalDescription = "parent___internal___description",
	ParentInternalFieldOwners = "parent___internal___fieldOwners",
	ParentInternalIgnoreType = "parent___internal___ignoreType",
	ParentInternalMediaType = "parent___internal___mediaType",
	ParentInternalOwner = "parent___internal___owner",
	ParentInternalType = "parent___internal___type",
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
	ChildrenInternalContent = "children___internal___content",
	ChildrenInternalContentDigest = "children___internal___contentDigest",
	ChildrenInternalDescription = "children___internal___description",
	ChildrenInternalFieldOwners = "children___internal___fieldOwners",
	ChildrenInternalIgnoreType = "children___internal___ignoreType",
	ChildrenInternalMediaType = "children___internal___mediaType",
	ChildrenInternalOwner = "children___internal___owner",
	ChildrenInternalType = "children___internal___type",
	InternalContent = "internal___content",
	InternalContentDigest = "internal___contentDigest",
	InternalDescription = "internal___description",
	InternalFieldOwners = "internal___fieldOwners",
	InternalIgnoreType = "internal___ignoreType",
	InternalMediaType = "internal___mediaType",
	InternalOwner = "internal___owner",
	InternalType = "internal___type",
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
	field: Scalars["String"]
	fieldValue?: Maybe<Scalars["String"]>
}

export type PrismicSettingsSortInput = {
	fields?: Maybe<Array<Maybe<PrismicSettingsFieldsEnum>>>
	order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type PrismicSliceType = {
	id: Scalars["ID"]
	slice_type: Scalars["String"]
	slice_label?: Maybe<Scalars["String"]>
}

export type PrismicStructuredTextType = {
	text?: Maybe<Scalars["String"]>
	html?: Maybe<Scalars["String"]>
	raw?: Maybe<Scalars["JSON"]>
}

export type PrismicStructuredTextTypeFilterInput = {
	text?: Maybe<StringQueryOperatorInput>
	html?: Maybe<StringQueryOperatorInput>
	raw?: Maybe<JsonQueryOperatorInput>
}

export type PrismicTypePathType = Node & {
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
	ParentInternalContent = "parent___internal___content",
	ParentInternalContentDigest = "parent___internal___contentDigest",
	ParentInternalDescription = "parent___internal___description",
	ParentInternalFieldOwners = "parent___internal___fieldOwners",
	ParentInternalIgnoreType = "parent___internal___ignoreType",
	ParentInternalMediaType = "parent___internal___mediaType",
	ParentInternalOwner = "parent___internal___owner",
	ParentInternalType = "parent___internal___type",
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
	ChildrenInternalContent = "children___internal___content",
	ChildrenInternalContentDigest = "children___internal___contentDigest",
	ChildrenInternalDescription = "children___internal___description",
	ChildrenInternalFieldOwners = "children___internal___fieldOwners",
	ChildrenInternalIgnoreType = "children___internal___ignoreType",
	ChildrenInternalMediaType = "children___internal___mediaType",
	ChildrenInternalOwner = "children___internal___owner",
	ChildrenInternalType = "children___internal___type",
	InternalContent = "internal___content",
	InternalContentDigest = "internal___contentDigest",
	InternalDescription = "internal___description",
	InternalFieldOwners = "internal___fieldOwners",
	InternalIgnoreType = "internal___ignoreType",
	InternalMediaType = "internal___mediaType",
	InternalOwner = "internal___owner",
	InternalType = "internal___type",
}

export type PrismicTypePathTypeFilterInput = {
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
	field: Scalars["String"]
	fieldValue?: Maybe<Scalars["String"]>
}

export type PrismicTypePathTypeSortInput = {
	fields?: Maybe<Array<Maybe<PrismicTypePathTypeFieldsEnum>>>
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
	prismicEmbedType?: Maybe<PrismicEmbedType>
	allPrismicEmbedType: PrismicEmbedTypeConnection
	prismicTypePathType?: Maybe<PrismicTypePathType>
	allPrismicTypePathType: PrismicTypePathTypeConnection
	prismicEvent?: Maybe<PrismicEvent>
	allPrismicEvent: PrismicEventConnection
	prismicNavigation?: Maybe<PrismicNavigation>
	allPrismicNavigation: PrismicNavigationConnection
	prismicPage?: Maybe<PrismicPage>
	allPrismicPage: PrismicPageConnection
	prismicSettings?: Maybe<PrismicSettings>
	allPrismicSettings: PrismicSettingsConnection
	sitePlugin?: Maybe<SitePlugin>
	allSitePlugin: SitePluginConnection
	siteBuildMetadata?: Maybe<SiteBuildMetadata>
	allSiteBuildMetadata: SiteBuildMetadataConnection
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
	id?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	children?: Maybe<NodeFilterListInput>
	internal?: Maybe<InternalFilterInput>
	isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>
	context?: Maybe<SitePageContextFilterInput>
	pluginCreator?: Maybe<SitePluginFilterInput>
	pluginCreatorId?: Maybe<StringQueryOperatorInput>
}

export type QueryAllSitePageArgs = {
	filter?: Maybe<SitePageFilterInput>
	sort?: Maybe<SitePageSortInput>
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

export type QuerySitePluginArgs = {
	id?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	children?: Maybe<NodeFilterListInput>
	internal?: Maybe<InternalFilterInput>
	resolve?: Maybe<StringQueryOperatorInput>
	name?: Maybe<StringQueryOperatorInput>
	version?: Maybe<StringQueryOperatorInput>
	pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>
	nodeAPIs?: Maybe<StringQueryOperatorInput>
	browserAPIs?: Maybe<StringQueryOperatorInput>
	ssrAPIs?: Maybe<StringQueryOperatorInput>
	pluginFilepath?: Maybe<StringQueryOperatorInput>
	packageJson?: Maybe<SitePluginPackageJsonFilterInput>
}

export type QueryAllSitePluginArgs = {
	filter?: Maybe<SitePluginFilterInput>
	sort?: Maybe<SitePluginSortInput>
	skip?: Maybe<Scalars["Int"]>
	limit?: Maybe<Scalars["Int"]>
}

export type QuerySiteBuildMetadataArgs = {
	id?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	children?: Maybe<NodeFilterListInput>
	internal?: Maybe<InternalFilterInput>
	buildTime?: Maybe<DateQueryOperatorInput>
}

export type QueryAllSiteBuildMetadataArgs = {
	filter?: Maybe<SiteBuildMetadataFilterInput>
	sort?: Maybe<SiteBuildMetadataSortInput>
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
	id: Scalars["ID"]
	parent?: Maybe<Node>
	children: Array<Node>
	internal: Internal
	buildTime?: Maybe<Scalars["Date"]>
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
	ParentInternalContent = "parent___internal___content",
	ParentInternalContentDigest = "parent___internal___contentDigest",
	ParentInternalDescription = "parent___internal___description",
	ParentInternalFieldOwners = "parent___internal___fieldOwners",
	ParentInternalIgnoreType = "parent___internal___ignoreType",
	ParentInternalMediaType = "parent___internal___mediaType",
	ParentInternalOwner = "parent___internal___owner",
	ParentInternalType = "parent___internal___type",
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
	ChildrenInternalContent = "children___internal___content",
	ChildrenInternalContentDigest = "children___internal___contentDigest",
	ChildrenInternalDescription = "children___internal___description",
	ChildrenInternalFieldOwners = "children___internal___fieldOwners",
	ChildrenInternalIgnoreType = "children___internal___ignoreType",
	ChildrenInternalMediaType = "children___internal___mediaType",
	ChildrenInternalOwner = "children___internal___owner",
	ChildrenInternalType = "children___internal___type",
	InternalContent = "internal___content",
	InternalContentDigest = "internal___contentDigest",
	InternalDescription = "internal___description",
	InternalFieldOwners = "internal___fieldOwners",
	InternalIgnoreType = "internal___ignoreType",
	InternalMediaType = "internal___mediaType",
	InternalOwner = "internal___owner",
	InternalType = "internal___type",
	BuildTime = "buildTime",
}

export type SiteBuildMetadataFilterInput = {
	id?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	children?: Maybe<NodeFilterListInput>
	internal?: Maybe<InternalFilterInput>
	buildTime?: Maybe<DateQueryOperatorInput>
}

export type SiteBuildMetadataGroupConnection = {
	totalCount: Scalars["Int"]
	edges: Array<SiteBuildMetadataEdge>
	nodes: Array<SiteBuildMetadata>
	pageInfo: PageInfo
	field: Scalars["String"]
	fieldValue?: Maybe<Scalars["String"]>
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
	SiteMetadataTitleShort = "siteMetadata___titleShort",
	SiteMetadataSiteUrl = "siteMetadata___siteUrl",
	Port = "port",
	Host = "host",
	FlagsFastDev = "flags___FAST_DEV",
	FlagsDevSsr = "flags___DEV_SSR",
	Polyfill = "polyfill",
	PathPrefix = "pathPrefix",
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
	ParentInternalContent = "parent___internal___content",
	ParentInternalContentDigest = "parent___internal___contentDigest",
	ParentInternalDescription = "parent___internal___description",
	ParentInternalFieldOwners = "parent___internal___fieldOwners",
	ParentInternalIgnoreType = "parent___internal___ignoreType",
	ParentInternalMediaType = "parent___internal___mediaType",
	ParentInternalOwner = "parent___internal___owner",
	ParentInternalType = "parent___internal___type",
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
	ChildrenInternalContent = "children___internal___content",
	ChildrenInternalContentDigest = "children___internal___contentDigest",
	ChildrenInternalDescription = "children___internal___description",
	ChildrenInternalFieldOwners = "children___internal___fieldOwners",
	ChildrenInternalIgnoreType = "children___internal___ignoreType",
	ChildrenInternalMediaType = "children___internal___mediaType",
	ChildrenInternalOwner = "children___internal___owner",
	ChildrenInternalType = "children___internal___type",
	InternalContent = "internal___content",
	InternalContentDigest = "internal___contentDigest",
	InternalDescription = "internal___description",
	InternalFieldOwners = "internal___fieldOwners",
	InternalIgnoreType = "internal___ignoreType",
	InternalMediaType = "internal___mediaType",
	InternalOwner = "internal___owner",
	InternalType = "internal___type",
}

export type SiteFilterInput = {
	buildTime?: Maybe<DateQueryOperatorInput>
	siteMetadata?: Maybe<SiteSiteMetadataFilterInput>
	port?: Maybe<IntQueryOperatorInput>
	host?: Maybe<StringQueryOperatorInput>
	flags?: Maybe<SiteFlagsFilterInput>
	polyfill?: Maybe<BooleanQueryOperatorInput>
	pathPrefix?: Maybe<StringQueryOperatorInput>
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
	ParentInternalContent = "parent___internal___content",
	ParentInternalContentDigest = "parent___internal___contentDigest",
	ParentInternalDescription = "parent___internal___description",
	ParentInternalFieldOwners = "parent___internal___fieldOwners",
	ParentInternalIgnoreType = "parent___internal___ignoreType",
	ParentInternalMediaType = "parent___internal___mediaType",
	ParentInternalOwner = "parent___internal___owner",
	ParentInternalType = "parent___internal___type",
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
	ChildrenInternalContent = "children___internal___content",
	ChildrenInternalContentDigest = "children___internal___contentDigest",
	ChildrenInternalDescription = "children___internal___description",
	ChildrenInternalFieldOwners = "children___internal___fieldOwners",
	ChildrenInternalIgnoreType = "children___internal___ignoreType",
	ChildrenInternalMediaType = "children___internal___mediaType",
	ChildrenInternalOwner = "children___internal___owner",
	ChildrenInternalType = "children___internal___type",
	InternalContent = "internal___content",
	InternalContentDigest = "internal___contentDigest",
	InternalDescription = "internal___description",
	InternalFieldOwners = "internal___fieldOwners",
	InternalIgnoreType = "internal___ignoreType",
	InternalMediaType = "internal___mediaType",
	InternalOwner = "internal___owner",
	InternalType = "internal___type",
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
	field: Scalars["String"]
	fieldValue?: Maybe<Scalars["String"]>
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
	field: Scalars["String"]
	fieldValue?: Maybe<Scalars["String"]>
}

export type SitePage = Node & {
	path: Scalars["String"]
	component: Scalars["String"]
	internalComponentName: Scalars["String"]
	componentChunkName: Scalars["String"]
	matchPath?: Maybe<Scalars["String"]>
	id: Scalars["ID"]
	parent?: Maybe<Node>
	children: Array<Node>
	internal: Internal
	isCreatedByStatefulCreatePages?: Maybe<Scalars["Boolean"]>
	context?: Maybe<SitePageContext>
	pluginCreator?: Maybe<SitePlugin>
	pluginCreatorId?: Maybe<Scalars["String"]>
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

export type SitePageContext = {
	uid?: Maybe<Scalars["String"]>
}

export type SitePageContextFilterInput = {
	uid?: Maybe<StringQueryOperatorInput>
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
	ParentInternalContent = "parent___internal___content",
	ParentInternalContentDigest = "parent___internal___contentDigest",
	ParentInternalDescription = "parent___internal___description",
	ParentInternalFieldOwners = "parent___internal___fieldOwners",
	ParentInternalIgnoreType = "parent___internal___ignoreType",
	ParentInternalMediaType = "parent___internal___mediaType",
	ParentInternalOwner = "parent___internal___owner",
	ParentInternalType = "parent___internal___type",
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
	ChildrenInternalContent = "children___internal___content",
	ChildrenInternalContentDigest = "children___internal___contentDigest",
	ChildrenInternalDescription = "children___internal___description",
	ChildrenInternalFieldOwners = "children___internal___fieldOwners",
	ChildrenInternalIgnoreType = "children___internal___ignoreType",
	ChildrenInternalMediaType = "children___internal___mediaType",
	ChildrenInternalOwner = "children___internal___owner",
	ChildrenInternalType = "children___internal___type",
	InternalContent = "internal___content",
	InternalContentDigest = "internal___contentDigest",
	InternalDescription = "internal___description",
	InternalFieldOwners = "internal___fieldOwners",
	InternalIgnoreType = "internal___ignoreType",
	InternalMediaType = "internal___mediaType",
	InternalOwner = "internal___owner",
	InternalType = "internal___type",
	IsCreatedByStatefulCreatePages = "isCreatedByStatefulCreatePages",
	ContextUid = "context___uid",
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
	PluginCreatorInternalContent = "pluginCreator___internal___content",
	PluginCreatorInternalContentDigest = "pluginCreator___internal___contentDigest",
	PluginCreatorInternalDescription = "pluginCreator___internal___description",
	PluginCreatorInternalFieldOwners = "pluginCreator___internal___fieldOwners",
	PluginCreatorInternalIgnoreType = "pluginCreator___internal___ignoreType",
	PluginCreatorInternalMediaType = "pluginCreator___internal___mediaType",
	PluginCreatorInternalOwner = "pluginCreator___internal___owner",
	PluginCreatorInternalType = "pluginCreator___internal___type",
	PluginCreatorResolve = "pluginCreator___resolve",
	PluginCreatorName = "pluginCreator___name",
	PluginCreatorVersion = "pluginCreator___version",
	PluginCreatorPluginOptionsOutput = "pluginCreator___pluginOptions___output",
	PluginCreatorPluginOptionsCreateLinkInHead = "pluginCreator___pluginOptions___createLinkInHead",
	PluginCreatorPluginOptionsEntryLimit = "pluginCreator___pluginOptions___entryLimit",
	PluginCreatorPluginOptionsQuery = "pluginCreator___pluginOptions___query",
	PluginCreatorPluginOptionsName = "pluginCreator___pluginOptions___name",
	PluginCreatorPluginOptionsShortName = "pluginCreator___pluginOptions___short_name",
	PluginCreatorPluginOptionsStartUrl = "pluginCreator___pluginOptions___start_url",
	PluginCreatorPluginOptionsBackgroundColor = "pluginCreator___pluginOptions___background_color",
	PluginCreatorPluginOptionsThemeColor = "pluginCreator___pluginOptions___theme_color",
	PluginCreatorPluginOptionsDisplay = "pluginCreator___pluginOptions___display",
	PluginCreatorPluginOptionsIcon = "pluginCreator___pluginOptions___icon",
	PluginCreatorPluginOptionsLegacy = "pluginCreator___pluginOptions___legacy",
	PluginCreatorPluginOptionsThemeColorInHead = "pluginCreator___pluginOptions___theme_color_in_head",
	PluginCreatorPluginOptionsCacheBustingMode = "pluginCreator___pluginOptions___cache_busting_mode",
	PluginCreatorPluginOptionsCrossOrigin = "pluginCreator___pluginOptions___crossOrigin",
	PluginCreatorPluginOptionsIncludeFavicon = "pluginCreator___pluginOptions___include_favicon",
	PluginCreatorPluginOptionsCacheDigest = "pluginCreator___pluginOptions___cacheDigest",
	PluginCreatorPluginOptionsRepositoryName = "pluginCreator___pluginOptions___repositoryName",
	PluginCreatorPluginOptionsAccessToken = "pluginCreator___pluginOptions___accessToken",
	PluginCreatorPluginOptionsApiEndpoint = "pluginCreator___pluginOptions___apiEndpoint",
	PluginCreatorPluginOptionsLang = "pluginCreator___pluginOptions___lang",
	PluginCreatorPluginOptionsImageImgixParamsAuto = "pluginCreator___pluginOptions___imageImgixParams___auto",
	PluginCreatorPluginOptionsImageImgixParamsFit = "pluginCreator___pluginOptions___imageImgixParams___fit",
	PluginCreatorPluginOptionsImageImgixParamsQ = "pluginCreator___pluginOptions___imageImgixParams___q",
	PluginCreatorPluginOptionsImagePlaceholderImgixParamsW = "pluginCreator___pluginOptions___imagePlaceholderImgixParams___w",
	PluginCreatorPluginOptionsImagePlaceholderImgixParamsBlur = "pluginCreator___pluginOptions___imagePlaceholderImgixParams___blur",
	PluginCreatorPluginOptionsPromptForAccessToken = "pluginCreator___pluginOptions___promptForAccessToken",
	PluginCreatorPluginOptionsToolbar = "pluginCreator___pluginOptions___toolbar",
	PluginCreatorPluginOptionsPath = "pluginCreator___pluginOptions___path",
	PluginCreatorPluginOptionsPathCheck = "pluginCreator___pluginOptions___pathCheck",
	PluginCreatorPluginOptionsAllExtensions = "pluginCreator___pluginOptions___allExtensions",
	PluginCreatorPluginOptionsIsTsx = "pluginCreator___pluginOptions___isTSX",
	PluginCreatorPluginOptionsJsxPragma = "pluginCreator___pluginOptions___jsxPragma",
	PluginCreatorNodeApIs = "pluginCreator___nodeAPIs",
	PluginCreatorBrowserApIs = "pluginCreator___browserAPIs",
	PluginCreatorSsrApIs = "pluginCreator___ssrAPIs",
	PluginCreatorPluginFilepath = "pluginCreator___pluginFilepath",
	PluginCreatorPackageJsonName = "pluginCreator___packageJson___name",
	PluginCreatorPackageJsonDescription = "pluginCreator___packageJson___description",
	PluginCreatorPackageJsonVersion = "pluginCreator___packageJson___version",
	PluginCreatorPackageJsonMain = "pluginCreator___packageJson___main",
	PluginCreatorPackageJsonAuthor = "pluginCreator___packageJson___author",
	PluginCreatorPackageJsonLicense = "pluginCreator___packageJson___license",
	PluginCreatorPackageJsonDependencies = "pluginCreator___packageJson___dependencies",
	PluginCreatorPackageJsonDependenciesName = "pluginCreator___packageJson___dependencies___name",
	PluginCreatorPackageJsonDependenciesVersion = "pluginCreator___packageJson___dependencies___version",
	PluginCreatorPackageJsonDevDependencies = "pluginCreator___packageJson___devDependencies",
	PluginCreatorPackageJsonDevDependenciesName = "pluginCreator___packageJson___devDependencies___name",
	PluginCreatorPackageJsonDevDependenciesVersion = "pluginCreator___packageJson___devDependencies___version",
	PluginCreatorPackageJsonPeerDependencies = "pluginCreator___packageJson___peerDependencies",
	PluginCreatorPackageJsonPeerDependenciesName = "pluginCreator___packageJson___peerDependencies___name",
	PluginCreatorPackageJsonPeerDependenciesVersion = "pluginCreator___packageJson___peerDependencies___version",
	PluginCreatorPackageJsonKeywords = "pluginCreator___packageJson___keywords",
	PluginCreatorId = "pluginCreatorId",
}

export type SitePageFilterInput = {
	path?: Maybe<StringQueryOperatorInput>
	component?: Maybe<StringQueryOperatorInput>
	internalComponentName?: Maybe<StringQueryOperatorInput>
	componentChunkName?: Maybe<StringQueryOperatorInput>
	matchPath?: Maybe<StringQueryOperatorInput>
	id?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	children?: Maybe<NodeFilterListInput>
	internal?: Maybe<InternalFilterInput>
	isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>
	context?: Maybe<SitePageContextFilterInput>
	pluginCreator?: Maybe<SitePluginFilterInput>
	pluginCreatorId?: Maybe<StringQueryOperatorInput>
}

export type SitePageGroupConnection = {
	totalCount: Scalars["Int"]
	edges: Array<SitePageEdge>
	nodes: Array<SitePage>
	pageInfo: PageInfo
	field: Scalars["String"]
	fieldValue?: Maybe<Scalars["String"]>
}

export type SitePageSortInput = {
	fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>
	order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SitePlugin = Node & {
	id: Scalars["ID"]
	parent?: Maybe<Node>
	children: Array<Node>
	internal: Internal
	resolve?: Maybe<Scalars["String"]>
	name?: Maybe<Scalars["String"]>
	version?: Maybe<Scalars["String"]>
	pluginOptions?: Maybe<SitePluginPluginOptions>
	nodeAPIs?: Maybe<Array<Maybe<Scalars["String"]>>>
	browserAPIs?: Maybe<Array<Maybe<Scalars["String"]>>>
	ssrAPIs?: Maybe<Array<Maybe<Scalars["String"]>>>
	pluginFilepath?: Maybe<Scalars["String"]>
	packageJson?: Maybe<SitePluginPackageJson>
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
	ParentInternalContent = "parent___internal___content",
	ParentInternalContentDigest = "parent___internal___contentDigest",
	ParentInternalDescription = "parent___internal___description",
	ParentInternalFieldOwners = "parent___internal___fieldOwners",
	ParentInternalIgnoreType = "parent___internal___ignoreType",
	ParentInternalMediaType = "parent___internal___mediaType",
	ParentInternalOwner = "parent___internal___owner",
	ParentInternalType = "parent___internal___type",
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
	ChildrenInternalContent = "children___internal___content",
	ChildrenInternalContentDigest = "children___internal___contentDigest",
	ChildrenInternalDescription = "children___internal___description",
	ChildrenInternalFieldOwners = "children___internal___fieldOwners",
	ChildrenInternalIgnoreType = "children___internal___ignoreType",
	ChildrenInternalMediaType = "children___internal___mediaType",
	ChildrenInternalOwner = "children___internal___owner",
	ChildrenInternalType = "children___internal___type",
	InternalContent = "internal___content",
	InternalContentDigest = "internal___contentDigest",
	InternalDescription = "internal___description",
	InternalFieldOwners = "internal___fieldOwners",
	InternalIgnoreType = "internal___ignoreType",
	InternalMediaType = "internal___mediaType",
	InternalOwner = "internal___owner",
	InternalType = "internal___type",
	Resolve = "resolve",
	Name = "name",
	Version = "version",
	PluginOptionsOutput = "pluginOptions___output",
	PluginOptionsCreateLinkInHead = "pluginOptions___createLinkInHead",
	PluginOptionsEntryLimit = "pluginOptions___entryLimit",
	PluginOptionsQuery = "pluginOptions___query",
	PluginOptionsName = "pluginOptions___name",
	PluginOptionsShortName = "pluginOptions___short_name",
	PluginOptionsStartUrl = "pluginOptions___start_url",
	PluginOptionsBackgroundColor = "pluginOptions___background_color",
	PluginOptionsThemeColor = "pluginOptions___theme_color",
	PluginOptionsDisplay = "pluginOptions___display",
	PluginOptionsIcon = "pluginOptions___icon",
	PluginOptionsLegacy = "pluginOptions___legacy",
	PluginOptionsThemeColorInHead = "pluginOptions___theme_color_in_head",
	PluginOptionsCacheBustingMode = "pluginOptions___cache_busting_mode",
	PluginOptionsCrossOrigin = "pluginOptions___crossOrigin",
	PluginOptionsIncludeFavicon = "pluginOptions___include_favicon",
	PluginOptionsCacheDigest = "pluginOptions___cacheDigest",
	PluginOptionsRepositoryName = "pluginOptions___repositoryName",
	PluginOptionsAccessToken = "pluginOptions___accessToken",
	PluginOptionsApiEndpoint = "pluginOptions___apiEndpoint",
	PluginOptionsLang = "pluginOptions___lang",
	PluginOptionsImageImgixParamsAuto = "pluginOptions___imageImgixParams___auto",
	PluginOptionsImageImgixParamsFit = "pluginOptions___imageImgixParams___fit",
	PluginOptionsImageImgixParamsQ = "pluginOptions___imageImgixParams___q",
	PluginOptionsImagePlaceholderImgixParamsW = "pluginOptions___imagePlaceholderImgixParams___w",
	PluginOptionsImagePlaceholderImgixParamsBlur = "pluginOptions___imagePlaceholderImgixParams___blur",
	PluginOptionsPromptForAccessToken = "pluginOptions___promptForAccessToken",
	PluginOptionsToolbar = "pluginOptions___toolbar",
	PluginOptionsPath = "pluginOptions___path",
	PluginOptionsPathCheck = "pluginOptions___pathCheck",
	PluginOptionsAllExtensions = "pluginOptions___allExtensions",
	PluginOptionsIsTsx = "pluginOptions___isTSX",
	PluginOptionsJsxPragma = "pluginOptions___jsxPragma",
	NodeApIs = "nodeAPIs",
	BrowserApIs = "browserAPIs",
	SsrApIs = "ssrAPIs",
	PluginFilepath = "pluginFilepath",
	PackageJsonName = "packageJson___name",
	PackageJsonDescription = "packageJson___description",
	PackageJsonVersion = "packageJson___version",
	PackageJsonMain = "packageJson___main",
	PackageJsonAuthor = "packageJson___author",
	PackageJsonLicense = "packageJson___license",
	PackageJsonDependencies = "packageJson___dependencies",
	PackageJsonDependenciesName = "packageJson___dependencies___name",
	PackageJsonDependenciesVersion = "packageJson___dependencies___version",
	PackageJsonDevDependencies = "packageJson___devDependencies",
	PackageJsonDevDependenciesName = "packageJson___devDependencies___name",
	PackageJsonDevDependenciesVersion = "packageJson___devDependencies___version",
	PackageJsonPeerDependencies = "packageJson___peerDependencies",
	PackageJsonPeerDependenciesName = "packageJson___peerDependencies___name",
	PackageJsonPeerDependenciesVersion = "packageJson___peerDependencies___version",
	PackageJsonKeywords = "packageJson___keywords",
}

export type SitePluginFilterInput = {
	id?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	children?: Maybe<NodeFilterListInput>
	internal?: Maybe<InternalFilterInput>
	resolve?: Maybe<StringQueryOperatorInput>
	name?: Maybe<StringQueryOperatorInput>
	version?: Maybe<StringQueryOperatorInput>
	pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>
	nodeAPIs?: Maybe<StringQueryOperatorInput>
	browserAPIs?: Maybe<StringQueryOperatorInput>
	ssrAPIs?: Maybe<StringQueryOperatorInput>
	pluginFilepath?: Maybe<StringQueryOperatorInput>
	packageJson?: Maybe<SitePluginPackageJsonFilterInput>
}

export type SitePluginGroupConnection = {
	totalCount: Scalars["Int"]
	edges: Array<SitePluginEdge>
	nodes: Array<SitePlugin>
	pageInfo: PageInfo
	field: Scalars["String"]
	fieldValue?: Maybe<Scalars["String"]>
}

export type SitePluginPackageJson = {
	name?: Maybe<Scalars["String"]>
	description?: Maybe<Scalars["String"]>
	version?: Maybe<Scalars["String"]>
	main?: Maybe<Scalars["String"]>
	author?: Maybe<Scalars["String"]>
	license?: Maybe<Scalars["String"]>
	dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>
	devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>
	peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>
	keywords?: Maybe<Array<Maybe<Scalars["String"]>>>
}

export type SitePluginPackageJsonDependencies = {
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
	name?: Maybe<StringQueryOperatorInput>
	description?: Maybe<StringQueryOperatorInput>
	version?: Maybe<StringQueryOperatorInput>
	main?: Maybe<StringQueryOperatorInput>
	author?: Maybe<StringQueryOperatorInput>
	license?: Maybe<StringQueryOperatorInput>
	dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>
	devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>
	peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>
	keywords?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonPeerDependencies = {
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
	output?: Maybe<Scalars["String"]>
	createLinkInHead?: Maybe<Scalars["Boolean"]>
	entryLimit?: Maybe<Scalars["Int"]>
	query?: Maybe<Scalars["String"]>
	name?: Maybe<Scalars["String"]>
	short_name?: Maybe<Scalars["String"]>
	start_url?: Maybe<Scalars["String"]>
	background_color?: Maybe<Scalars["String"]>
	theme_color?: Maybe<Scalars["String"]>
	display?: Maybe<Scalars["String"]>
	icon?: Maybe<Scalars["String"]>
	legacy?: Maybe<Scalars["Boolean"]>
	theme_color_in_head?: Maybe<Scalars["Boolean"]>
	cache_busting_mode?: Maybe<Scalars["String"]>
	crossOrigin?: Maybe<Scalars["String"]>
	include_favicon?: Maybe<Scalars["Boolean"]>
	cacheDigest?: Maybe<Scalars["String"]>
	repositoryName?: Maybe<Scalars["String"]>
	accessToken?: Maybe<Scalars["String"]>
	schemas?: Maybe<SitePluginPluginOptionsSchemas>
	apiEndpoint?: Maybe<Scalars["String"]>
	lang?: Maybe<Scalars["String"]>
	imageImgixParams?: Maybe<SitePluginPluginOptionsImageImgixParams>
	imagePlaceholderImgixParams?: Maybe<SitePluginPluginOptionsImagePlaceholderImgixParams>
	promptForAccessToken?: Maybe<Scalars["Boolean"]>
	toolbar?: Maybe<Scalars["String"]>
	path?: Maybe<Scalars["String"]>
	pathCheck?: Maybe<Scalars["Boolean"]>
	allExtensions?: Maybe<Scalars["Boolean"]>
	isTSX?: Maybe<Scalars["Boolean"]>
	jsxPragma?: Maybe<Scalars["String"]>
}

export type SitePluginPluginOptionsFilterInput = {
	output?: Maybe<StringQueryOperatorInput>
	createLinkInHead?: Maybe<BooleanQueryOperatorInput>
	entryLimit?: Maybe<IntQueryOperatorInput>
	query?: Maybe<StringQueryOperatorInput>
	name?: Maybe<StringQueryOperatorInput>
	short_name?: Maybe<StringQueryOperatorInput>
	start_url?: Maybe<StringQueryOperatorInput>
	background_color?: Maybe<StringQueryOperatorInput>
	theme_color?: Maybe<StringQueryOperatorInput>
	display?: Maybe<StringQueryOperatorInput>
	icon?: Maybe<StringQueryOperatorInput>
	legacy?: Maybe<BooleanQueryOperatorInput>
	theme_color_in_head?: Maybe<BooleanQueryOperatorInput>
	cache_busting_mode?: Maybe<StringQueryOperatorInput>
	crossOrigin?: Maybe<StringQueryOperatorInput>
	include_favicon?: Maybe<BooleanQueryOperatorInput>
	cacheDigest?: Maybe<StringQueryOperatorInput>
	repositoryName?: Maybe<StringQueryOperatorInput>
	accessToken?: Maybe<StringQueryOperatorInput>
	schemas?: Maybe<SitePluginPluginOptionsSchemasFilterInput>
	apiEndpoint?: Maybe<StringQueryOperatorInput>
	lang?: Maybe<StringQueryOperatorInput>
	imageImgixParams?: Maybe<SitePluginPluginOptionsImageImgixParamsFilterInput>
	imagePlaceholderImgixParams?: Maybe<SitePluginPluginOptionsImagePlaceholderImgixParamsFilterInput>
	promptForAccessToken?: Maybe<BooleanQueryOperatorInput>
	toolbar?: Maybe<StringQueryOperatorInput>
	path?: Maybe<StringQueryOperatorInput>
	pathCheck?: Maybe<BooleanQueryOperatorInput>
	allExtensions?: Maybe<BooleanQueryOperatorInput>
	isTSX?: Maybe<BooleanQueryOperatorInput>
	jsxPragma?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsImageImgixParams = {
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
	w?: Maybe<Scalars["Int"]>
	blur?: Maybe<Scalars["Int"]>
}

export type SitePluginPluginOptionsImagePlaceholderImgixParamsFilterInput = {
	w?: Maybe<IntQueryOperatorInput>
	blur?: Maybe<IntQueryOperatorInput>
}

export type SitePluginPluginOptionsSchemas = {
	event?: Maybe<SitePluginPluginOptionsSchemasEvent>
	navigation?: Maybe<SitePluginPluginOptionsSchemasNavigation>
	page?: Maybe<SitePluginPluginOptionsSchemasPage>
	settings?: Maybe<SitePluginPluginOptionsSchemasSettings>
}

export type SitePluginPluginOptionsSchemasEvent = {
	Main?: Maybe<SitePluginPluginOptionsSchemasEventMain>
}

export type SitePluginPluginOptionsSchemasEventFilterInput = {
	Main?: Maybe<SitePluginPluginOptionsSchemasEventMainFilterInput>
}

export type SitePluginPluginOptionsSchemasEventMain = {
	title?: Maybe<SitePluginPluginOptionsSchemasEventMainTitle>
	uid?: Maybe<SitePluginPluginOptionsSchemasEventMainUid>
	type?: Maybe<SitePluginPluginOptionsSchemasEventMainType>
	description?: Maybe<SitePluginPluginOptionsSchemasEventMainDescription>
	date?: Maybe<SitePluginPluginOptionsSchemasEventMainDate>
}

export type SitePluginPluginOptionsSchemasEventMainDate = {
	type?: Maybe<Scalars["String"]>
	config?: Maybe<SitePluginPluginOptionsSchemasEventMainDateConfig>
}

export type SitePluginPluginOptionsSchemasEventMainDateConfig = {
	label?: Maybe<Scalars["String"]>
}

export type SitePluginPluginOptionsSchemasEventMainDateConfigFilterInput = {
	label?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsSchemasEventMainDateFilterInput = {
	type?: Maybe<StringQueryOperatorInput>
	config?: Maybe<SitePluginPluginOptionsSchemasEventMainDateConfigFilterInput>
}

export type SitePluginPluginOptionsSchemasEventMainDescription = {
	type?: Maybe<Scalars["String"]>
	config?: Maybe<SitePluginPluginOptionsSchemasEventMainDescriptionConfig>
}

export type SitePluginPluginOptionsSchemasEventMainDescriptionConfig = {
	single?: Maybe<Scalars["String"]>
	allowTargetBlank?: Maybe<Scalars["Boolean"]>
	label?: Maybe<Scalars["String"]>
}

export type SitePluginPluginOptionsSchemasEventMainDescriptionConfigFilterInput =
	{
		single?: Maybe<StringQueryOperatorInput>
		allowTargetBlank?: Maybe<BooleanQueryOperatorInput>
		label?: Maybe<StringQueryOperatorInput>
	}

export type SitePluginPluginOptionsSchemasEventMainDescriptionFilterInput = {
	type?: Maybe<StringQueryOperatorInput>
	config?: Maybe<SitePluginPluginOptionsSchemasEventMainDescriptionConfigFilterInput>
}

export type SitePluginPluginOptionsSchemasEventMainFilterInput = {
	title?: Maybe<SitePluginPluginOptionsSchemasEventMainTitleFilterInput>
	uid?: Maybe<SitePluginPluginOptionsSchemasEventMainUidFilterInput>
	type?: Maybe<SitePluginPluginOptionsSchemasEventMainTypeFilterInput>
	description?: Maybe<SitePluginPluginOptionsSchemasEventMainDescriptionFilterInput>
	date?: Maybe<SitePluginPluginOptionsSchemasEventMainDateFilterInput>
}

export type SitePluginPluginOptionsSchemasEventMainTitle = {
	type?: Maybe<Scalars["String"]>
	config?: Maybe<SitePluginPluginOptionsSchemasEventMainTitleConfig>
}

export type SitePluginPluginOptionsSchemasEventMainTitleConfig = {
	single?: Maybe<Scalars["String"]>
	label?: Maybe<Scalars["String"]>
}

export type SitePluginPluginOptionsSchemasEventMainTitleConfigFilterInput = {
	single?: Maybe<StringQueryOperatorInput>
	label?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsSchemasEventMainTitleFilterInput = {
	type?: Maybe<StringQueryOperatorInput>
	config?: Maybe<SitePluginPluginOptionsSchemasEventMainTitleConfigFilterInput>
}

export type SitePluginPluginOptionsSchemasEventMainType = {
	type?: Maybe<Scalars["String"]>
	config?: Maybe<SitePluginPluginOptionsSchemasEventMainTypeConfig>
}

export type SitePluginPluginOptionsSchemasEventMainTypeConfig = {
	options?: Maybe<Array<Maybe<Scalars["String"]>>>
	default_value?: Maybe<Scalars["String"]>
	label?: Maybe<Scalars["String"]>
}

export type SitePluginPluginOptionsSchemasEventMainTypeConfigFilterInput = {
	options?: Maybe<StringQueryOperatorInput>
	default_value?: Maybe<StringQueryOperatorInput>
	label?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsSchemasEventMainTypeFilterInput = {
	type?: Maybe<StringQueryOperatorInput>
	config?: Maybe<SitePluginPluginOptionsSchemasEventMainTypeConfigFilterInput>
}

export type SitePluginPluginOptionsSchemasEventMainUid = {
	type?: Maybe<Scalars["String"]>
	config?: Maybe<SitePluginPluginOptionsSchemasEventMainUidConfig>
}

export type SitePluginPluginOptionsSchemasEventMainUidConfig = {
	label?: Maybe<Scalars["String"]>
}

export type SitePluginPluginOptionsSchemasEventMainUidConfigFilterInput = {
	label?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsSchemasEventMainUidFilterInput = {
	type?: Maybe<StringQueryOperatorInput>
	config?: Maybe<SitePluginPluginOptionsSchemasEventMainUidConfigFilterInput>
}

export type SitePluginPluginOptionsSchemasFilterInput = {
	event?: Maybe<SitePluginPluginOptionsSchemasEventFilterInput>
	navigation?: Maybe<SitePluginPluginOptionsSchemasNavigationFilterInput>
	page?: Maybe<SitePluginPluginOptionsSchemasPageFilterInput>
	settings?: Maybe<SitePluginPluginOptionsSchemasSettingsFilterInput>
}

export type SitePluginPluginOptionsSchemasNavigation = {
	Main?: Maybe<SitePluginPluginOptionsSchemasNavigationMain>
}

export type SitePluginPluginOptionsSchemasNavigationFilterInput = {
	Main?: Maybe<SitePluginPluginOptionsSchemasNavigationMainFilterInput>
}

export type SitePluginPluginOptionsSchemasNavigationMain = {
	title?: Maybe<SitePluginPluginOptionsSchemasNavigationMainTitle>
	uid?: Maybe<SitePluginPluginOptionsSchemasNavigationMainUid>
	nav_items?: Maybe<SitePluginPluginOptionsSchemasNavigationMainNav_Items>
}

export type SitePluginPluginOptionsSchemasNavigationMainFilterInput = {
	title?: Maybe<SitePluginPluginOptionsSchemasNavigationMainTitleFilterInput>
	uid?: Maybe<SitePluginPluginOptionsSchemasNavigationMainUidFilterInput>
	nav_items?: Maybe<SitePluginPluginOptionsSchemasNavigationMainNav_ItemsFilterInput>
}

export type SitePluginPluginOptionsSchemasNavigationMainNav_Items = {
	type?: Maybe<Scalars["String"]>
	config?: Maybe<SitePluginPluginOptionsSchemasNavigationMainNav_ItemsConfig>
}

export type SitePluginPluginOptionsSchemasNavigationMainNav_ItemsConfig = {
	fields?: Maybe<SitePluginPluginOptionsSchemasNavigationMainNav_ItemsConfigFields>
	label?: Maybe<Scalars["String"]>
}

export type SitePluginPluginOptionsSchemasNavigationMainNav_ItemsConfigFields =
	{
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
		type?: Maybe<Scalars["String"]>
		config?: Maybe<SitePluginPluginOptionsSchemasNavigationMainNav_ItemsConfigFieldsLabelConfig>
	}

export type SitePluginPluginOptionsSchemasNavigationMainNav_ItemsConfigFieldsLabelConfig =
	{
		single?: Maybe<Scalars["String"]>
		label?: Maybe<Scalars["String"]>
	}

export type SitePluginPluginOptionsSchemasNavigationMainNav_ItemsConfigFieldsLabelConfigFilterInput =
	{
		single?: Maybe<StringQueryOperatorInput>
		label?: Maybe<StringQueryOperatorInput>
	}

export type SitePluginPluginOptionsSchemasNavigationMainNav_ItemsConfigFieldsLabelFilterInput =
	{
		type?: Maybe<StringQueryOperatorInput>
		config?: Maybe<SitePluginPluginOptionsSchemasNavigationMainNav_ItemsConfigFieldsLabelConfigFilterInput>
	}

export type SitePluginPluginOptionsSchemasNavigationMainNav_ItemsConfigFieldsLink =
	{
		type?: Maybe<Scalars["String"]>
		config?: Maybe<SitePluginPluginOptionsSchemasNavigationMainNav_ItemsConfigFieldsLinkConfig>
	}

export type SitePluginPluginOptionsSchemasNavigationMainNav_ItemsConfigFieldsLinkConfig =
	{
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
		type?: Maybe<StringQueryOperatorInput>
		config?: Maybe<SitePluginPluginOptionsSchemasNavigationMainNav_ItemsConfigFieldsLinkConfigFilterInput>
	}

export type SitePluginPluginOptionsSchemasNavigationMainNav_ItemsConfigFilterInput =
	{
		fields?: Maybe<SitePluginPluginOptionsSchemasNavigationMainNav_ItemsConfigFieldsFilterInput>
		label?: Maybe<StringQueryOperatorInput>
	}

export type SitePluginPluginOptionsSchemasNavigationMainNav_ItemsFilterInput = {
	type?: Maybe<StringQueryOperatorInput>
	config?: Maybe<SitePluginPluginOptionsSchemasNavigationMainNav_ItemsConfigFilterInput>
}

export type SitePluginPluginOptionsSchemasNavigationMainTitle = {
	type?: Maybe<Scalars["String"]>
	config?: Maybe<SitePluginPluginOptionsSchemasNavigationMainTitleConfig>
}

export type SitePluginPluginOptionsSchemasNavigationMainTitleConfig = {
	single?: Maybe<Scalars["String"]>
	label?: Maybe<Scalars["String"]>
}

export type SitePluginPluginOptionsSchemasNavigationMainTitleConfigFilterInput =
	{
		single?: Maybe<StringQueryOperatorInput>
		label?: Maybe<StringQueryOperatorInput>
	}

export type SitePluginPluginOptionsSchemasNavigationMainTitleFilterInput = {
	type?: Maybe<StringQueryOperatorInput>
	config?: Maybe<SitePluginPluginOptionsSchemasNavigationMainTitleConfigFilterInput>
}

export type SitePluginPluginOptionsSchemasNavigationMainUid = {
	type?: Maybe<Scalars["String"]>
	config?: Maybe<SitePluginPluginOptionsSchemasNavigationMainUidConfig>
}

export type SitePluginPluginOptionsSchemasNavigationMainUidConfig = {
	label?: Maybe<Scalars["String"]>
}

export type SitePluginPluginOptionsSchemasNavigationMainUidConfigFilterInput = {
	label?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsSchemasNavigationMainUidFilterInput = {
	type?: Maybe<StringQueryOperatorInput>
	config?: Maybe<SitePluginPluginOptionsSchemasNavigationMainUidConfigFilterInput>
}

export type SitePluginPluginOptionsSchemasPage = {
	Main?: Maybe<SitePluginPluginOptionsSchemasPageMain>
	Body?: Maybe<SitePluginPluginOptionsSchemasPageBody>
}

export type SitePluginPluginOptionsSchemasPageBody = {
	body?: Maybe<SitePluginPluginOptionsSchemasPageBodyBody>
}

export type SitePluginPluginOptionsSchemasPageBodyBody = {
	type?: Maybe<Scalars["String"]>
	fieldset?: Maybe<Scalars["String"]>
	config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfig>
}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfig = {
	choices?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoices>
}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoices = {
	anchor?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAnchor>
	gradient_text?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesGradient_Text>
	video_hero?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesVideo_Hero>
	introduction?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesIntroduction>
	filterable_events?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesFilterable_Events>
	carousel?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCarousel>
	two_column_text?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTwo_Column_Text>
}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAnchor = {
	type?: Maybe<Scalars["String"]>
	fieldset?: Maybe<Scalars["String"]>
	description?: Maybe<Scalars["String"]>
	icon?: Maybe<Scalars["String"]>
	display?: Maybe<Scalars["String"]>
	non_repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAnchorNon_Repeat>
}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAnchorFilterInput =
	{
		type?: Maybe<StringQueryOperatorInput>
		fieldset?: Maybe<StringQueryOperatorInput>
		description?: Maybe<StringQueryOperatorInput>
		icon?: Maybe<StringQueryOperatorInput>
		display?: Maybe<StringQueryOperatorInput>
		non_repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAnchorNon_RepeatFilterInput>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAnchorNon_Repeat =
	{
		anchor?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAnchorNon_RepeatAnchor>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAnchorNon_RepeatAnchor =
	{
		type?: Maybe<Scalars["String"]>
		config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAnchorNon_RepeatAnchorConfig>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAnchorNon_RepeatAnchorConfig =
	{
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
		type?: Maybe<StringQueryOperatorInput>
		config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAnchorNon_RepeatAnchorConfigFilterInput>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAnchorNon_RepeatFilterInput =
	{
		anchor?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAnchorNon_RepeatAnchorFilterInput>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCarousel = {
	type?: Maybe<Scalars["String"]>
	fieldset?: Maybe<Scalars["String"]>
	description?: Maybe<Scalars["String"]>
	icon?: Maybe<Scalars["String"]>
	display?: Maybe<Scalars["String"]>
	non_repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCarouselNon_Repeat>
	repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCarouselRepeat>
}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCarouselFilterInput =
	{
		type?: Maybe<StringQueryOperatorInput>
		fieldset?: Maybe<StringQueryOperatorInput>
		description?: Maybe<StringQueryOperatorInput>
		icon?: Maybe<StringQueryOperatorInput>
		display?: Maybe<StringQueryOperatorInput>
		non_repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCarouselNon_RepeatFilterInput>
		repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCarouselRepeatFilterInput>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCarouselNon_Repeat =
	{
		subheading?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCarouselNon_RepeatSubheading>
		heading?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCarouselNon_RepeatHeading>
		button_link?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCarouselNon_RepeatButton_Link>
		button_text?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCarouselNon_RepeatButton_Text>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCarouselNon_RepeatButton_Link =
	{
		type?: Maybe<Scalars["String"]>
		config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCarouselNon_RepeatButton_LinkConfig>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCarouselNon_RepeatButton_LinkConfig =
	{
		allowTargetBlank?: Maybe<Scalars["Boolean"]>
		label?: Maybe<Scalars["String"]>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCarouselNon_RepeatButton_LinkConfigFilterInput =
	{
		allowTargetBlank?: Maybe<BooleanQueryOperatorInput>
		label?: Maybe<StringQueryOperatorInput>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCarouselNon_RepeatButton_LinkFilterInput =
	{
		type?: Maybe<StringQueryOperatorInput>
		config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCarouselNon_RepeatButton_LinkConfigFilterInput>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCarouselNon_RepeatButton_Text =
	{
		type?: Maybe<Scalars["String"]>
		config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCarouselNon_RepeatButton_TextConfig>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCarouselNon_RepeatButton_TextConfig =
	{
		label?: Maybe<Scalars["String"]>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCarouselNon_RepeatButton_TextConfigFilterInput =
	{
		label?: Maybe<StringQueryOperatorInput>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCarouselNon_RepeatButton_TextFilterInput =
	{
		type?: Maybe<StringQueryOperatorInput>
		config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCarouselNon_RepeatButton_TextConfigFilterInput>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCarouselNon_RepeatFilterInput =
	{
		subheading?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCarouselNon_RepeatSubheadingFilterInput>
		heading?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCarouselNon_RepeatHeadingFilterInput>
		button_link?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCarouselNon_RepeatButton_LinkFilterInput>
		button_text?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCarouselNon_RepeatButton_TextFilterInput>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCarouselNon_RepeatHeading =
	{
		type?: Maybe<Scalars["String"]>
		config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCarouselNon_RepeatHeadingConfig>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCarouselNon_RepeatHeadingConfig =
	{
		single?: Maybe<Scalars["String"]>
		label?: Maybe<Scalars["String"]>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCarouselNon_RepeatHeadingConfigFilterInput =
	{
		single?: Maybe<StringQueryOperatorInput>
		label?: Maybe<StringQueryOperatorInput>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCarouselNon_RepeatHeadingFilterInput =
	{
		type?: Maybe<StringQueryOperatorInput>
		config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCarouselNon_RepeatHeadingConfigFilterInput>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCarouselNon_RepeatSubheading =
	{
		type?: Maybe<Scalars["String"]>
		config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCarouselNon_RepeatSubheadingConfig>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCarouselNon_RepeatSubheadingConfig =
	{
		single?: Maybe<Scalars["String"]>
		label?: Maybe<Scalars["String"]>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCarouselNon_RepeatSubheadingConfigFilterInput =
	{
		single?: Maybe<StringQueryOperatorInput>
		label?: Maybe<StringQueryOperatorInput>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCarouselNon_RepeatSubheadingFilterInput =
	{
		type?: Maybe<StringQueryOperatorInput>
		config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCarouselNon_RepeatSubheadingConfigFilterInput>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCarouselRepeat =
	{
		image?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCarouselRepeatImage>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCarouselRepeatFilterInput =
	{
		image?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCarouselRepeatImageFilterInput>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCarouselRepeatImage =
	{
		type?: Maybe<Scalars["String"]>
		config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCarouselRepeatImageConfig>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCarouselRepeatImageConfig =
	{
		label?: Maybe<Scalars["String"]>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCarouselRepeatImageConfigFilterInput =
	{
		label?: Maybe<StringQueryOperatorInput>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCarouselRepeatImageFilterInput =
	{
		type?: Maybe<StringQueryOperatorInput>
		config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCarouselRepeatImageConfigFilterInput>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesFilterInput =
	{
		anchor?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAnchorFilterInput>
		gradient_text?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesGradient_TextFilterInput>
		video_hero?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesVideo_HeroFilterInput>
		introduction?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesIntroductionFilterInput>
		filterable_events?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesFilterable_EventsFilterInput>
		carousel?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCarouselFilterInput>
		two_column_text?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTwo_Column_TextFilterInput>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesFilterable_Events =
	{
		type?: Maybe<Scalars["String"]>
		fieldset?: Maybe<Scalars["String"]>
		description?: Maybe<Scalars["String"]>
		icon?: Maybe<Scalars["String"]>
		display?: Maybe<Scalars["String"]>
		repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesFilterable_EventsRepeat>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesFilterable_EventsFilterInput =
	{
		type?: Maybe<StringQueryOperatorInput>
		fieldset?: Maybe<StringQueryOperatorInput>
		description?: Maybe<StringQueryOperatorInput>
		icon?: Maybe<StringQueryOperatorInput>
		display?: Maybe<StringQueryOperatorInput>
		repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesFilterable_EventsRepeatFilterInput>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesFilterable_EventsRepeat =
	{
		event?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesFilterable_EventsRepeatEvent>
		color?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesFilterable_EventsRepeatColor>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesFilterable_EventsRepeatColor =
	{
		type?: Maybe<Scalars["String"]>
		config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesFilterable_EventsRepeatColorConfig>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesFilterable_EventsRepeatColorConfig =
	{
		options?: Maybe<Array<Maybe<Scalars["String"]>>>
		default_value?: Maybe<Scalars["String"]>
		label?: Maybe<Scalars["String"]>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesFilterable_EventsRepeatColorConfigFilterInput =
	{
		options?: Maybe<StringQueryOperatorInput>
		default_value?: Maybe<StringQueryOperatorInput>
		label?: Maybe<StringQueryOperatorInput>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesFilterable_EventsRepeatColorFilterInput =
	{
		type?: Maybe<StringQueryOperatorInput>
		config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesFilterable_EventsRepeatColorConfigFilterInput>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesFilterable_EventsRepeatEvent =
	{
		type?: Maybe<Scalars["String"]>
		config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesFilterable_EventsRepeatEventConfig>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesFilterable_EventsRepeatEventConfig =
	{
		select?: Maybe<Scalars["String"]>
		customtypes?: Maybe<Array<Maybe<Scalars["String"]>>>
		label?: Maybe<Scalars["String"]>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesFilterable_EventsRepeatEventConfigFilterInput =
	{
		select?: Maybe<StringQueryOperatorInput>
		customtypes?: Maybe<StringQueryOperatorInput>
		label?: Maybe<StringQueryOperatorInput>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesFilterable_EventsRepeatEventFilterInput =
	{
		type?: Maybe<StringQueryOperatorInput>
		config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesFilterable_EventsRepeatEventConfigFilterInput>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesFilterable_EventsRepeatFilterInput =
	{
		event?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesFilterable_EventsRepeatEventFilterInput>
		color?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesFilterable_EventsRepeatColorFilterInput>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesGradient_Text =
	{
		type?: Maybe<Scalars["String"]>
		fieldset?: Maybe<Scalars["String"]>
		description?: Maybe<Scalars["String"]>
		icon?: Maybe<Scalars["String"]>
		display?: Maybe<Scalars["String"]>
		non_repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesGradient_TextNon_Repeat>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesGradient_TextFilterInput =
	{
		type?: Maybe<StringQueryOperatorInput>
		fieldset?: Maybe<StringQueryOperatorInput>
		description?: Maybe<StringQueryOperatorInput>
		icon?: Maybe<StringQueryOperatorInput>
		display?: Maybe<StringQueryOperatorInput>
		non_repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesGradient_TextNon_RepeatFilterInput>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesGradient_TextNon_Repeat =
	{
		text?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesGradient_TextNon_RepeatText>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesGradient_TextNon_RepeatFilterInput =
	{
		text?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesGradient_TextNon_RepeatTextFilterInput>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesGradient_TextNon_RepeatText =
	{
		type?: Maybe<Scalars["String"]>
		config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesGradient_TextNon_RepeatTextConfig>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesGradient_TextNon_RepeatTextConfig =
	{
		multi?: Maybe<Scalars["String"]>
		label?: Maybe<Scalars["String"]>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesGradient_TextNon_RepeatTextConfigFilterInput =
	{
		multi?: Maybe<StringQueryOperatorInput>
		label?: Maybe<StringQueryOperatorInput>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesGradient_TextNon_RepeatTextFilterInput =
	{
		type?: Maybe<StringQueryOperatorInput>
		config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesGradient_TextNon_RepeatTextConfigFilterInput>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesIntroduction =
	{
		type?: Maybe<Scalars["String"]>
		fieldset?: Maybe<Scalars["String"]>
		description?: Maybe<Scalars["String"]>
		icon?: Maybe<Scalars["String"]>
		display?: Maybe<Scalars["String"]>
		non_repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesIntroductionNon_Repeat>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesIntroductionFilterInput =
	{
		type?: Maybe<StringQueryOperatorInput>
		fieldset?: Maybe<StringQueryOperatorInput>
		description?: Maybe<StringQueryOperatorInput>
		icon?: Maybe<StringQueryOperatorInput>
		display?: Maybe<StringQueryOperatorInput>
		non_repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesIntroductionNon_RepeatFilterInput>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesIntroductionNon_Repeat =
	{
		heading?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesIntroductionNon_RepeatHeading>
		text?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesIntroductionNon_RepeatText>
		color?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesIntroductionNon_RepeatColor>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesIntroductionNon_RepeatColor =
	{
		type?: Maybe<Scalars["String"]>
		config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesIntroductionNon_RepeatColorConfig>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesIntroductionNon_RepeatColorConfig =
	{
		options?: Maybe<Array<Maybe<Scalars["String"]>>>
		default_value?: Maybe<Scalars["String"]>
		label?: Maybe<Scalars["String"]>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesIntroductionNon_RepeatColorConfigFilterInput =
	{
		options?: Maybe<StringQueryOperatorInput>
		default_value?: Maybe<StringQueryOperatorInput>
		label?: Maybe<StringQueryOperatorInput>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesIntroductionNon_RepeatColorFilterInput =
	{
		type?: Maybe<StringQueryOperatorInput>
		config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesIntroductionNon_RepeatColorConfigFilterInput>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesIntroductionNon_RepeatFilterInput =
	{
		heading?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesIntroductionNon_RepeatHeadingFilterInput>
		text?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesIntroductionNon_RepeatTextFilterInput>
		color?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesIntroductionNon_RepeatColorFilterInput>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesIntroductionNon_RepeatHeading =
	{
		type?: Maybe<Scalars["String"]>
		config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesIntroductionNon_RepeatHeadingConfig>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesIntroductionNon_RepeatHeadingConfig =
	{
		single?: Maybe<Scalars["String"]>
		label?: Maybe<Scalars["String"]>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesIntroductionNon_RepeatHeadingConfigFilterInput =
	{
		single?: Maybe<StringQueryOperatorInput>
		label?: Maybe<StringQueryOperatorInput>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesIntroductionNon_RepeatHeadingFilterInput =
	{
		type?: Maybe<StringQueryOperatorInput>
		config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesIntroductionNon_RepeatHeadingConfigFilterInput>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesIntroductionNon_RepeatText =
	{
		type?: Maybe<Scalars["String"]>
		config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesIntroductionNon_RepeatTextConfig>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesIntroductionNon_RepeatTextConfig =
	{
		multi?: Maybe<Scalars["String"]>
		allowTargetBlank?: Maybe<Scalars["Boolean"]>
		label?: Maybe<Scalars["String"]>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesIntroductionNon_RepeatTextConfigFilterInput =
	{
		multi?: Maybe<StringQueryOperatorInput>
		allowTargetBlank?: Maybe<BooleanQueryOperatorInput>
		label?: Maybe<StringQueryOperatorInput>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesIntroductionNon_RepeatTextFilterInput =
	{
		type?: Maybe<StringQueryOperatorInput>
		config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesIntroductionNon_RepeatTextConfigFilterInput>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTwo_Column_Text =
	{
		type?: Maybe<Scalars["String"]>
		fieldset?: Maybe<Scalars["String"]>
		description?: Maybe<Scalars["String"]>
		icon?: Maybe<Scalars["String"]>
		display?: Maybe<Scalars["String"]>
		non_repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTwo_Column_TextNon_Repeat>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTwo_Column_TextFilterInput =
	{
		type?: Maybe<StringQueryOperatorInput>
		fieldset?: Maybe<StringQueryOperatorInput>
		description?: Maybe<StringQueryOperatorInput>
		icon?: Maybe<StringQueryOperatorInput>
		display?: Maybe<StringQueryOperatorInput>
		non_repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTwo_Column_TextNon_RepeatFilterInput>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTwo_Column_TextNon_Repeat =
	{
		left_text?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTwo_Column_TextNon_RepeatLeft_Text>
		right_text?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTwo_Column_TextNon_RepeatRight_Text>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTwo_Column_TextNon_RepeatFilterInput =
	{
		left_text?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTwo_Column_TextNon_RepeatLeft_TextFilterInput>
		right_text?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTwo_Column_TextNon_RepeatRight_TextFilterInput>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTwo_Column_TextNon_RepeatLeft_Text =
	{
		type?: Maybe<Scalars["String"]>
		config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTwo_Column_TextNon_RepeatLeft_TextConfig>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTwo_Column_TextNon_RepeatLeft_TextConfig =
	{
		multi?: Maybe<Scalars["String"]>
		allowTargetBlank?: Maybe<Scalars["Boolean"]>
		label?: Maybe<Scalars["String"]>
		placeholder?: Maybe<Scalars["String"]>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTwo_Column_TextNon_RepeatLeft_TextConfigFilterInput =
	{
		multi?: Maybe<StringQueryOperatorInput>
		allowTargetBlank?: Maybe<BooleanQueryOperatorInput>
		label?: Maybe<StringQueryOperatorInput>
		placeholder?: Maybe<StringQueryOperatorInput>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTwo_Column_TextNon_RepeatLeft_TextFilterInput =
	{
		type?: Maybe<StringQueryOperatorInput>
		config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTwo_Column_TextNon_RepeatLeft_TextConfigFilterInput>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTwo_Column_TextNon_RepeatRight_Text =
	{
		type?: Maybe<Scalars["String"]>
		config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTwo_Column_TextNon_RepeatRight_TextConfig>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTwo_Column_TextNon_RepeatRight_TextConfig =
	{
		multi?: Maybe<Scalars["String"]>
		allowTargetBlank?: Maybe<Scalars["Boolean"]>
		label?: Maybe<Scalars["String"]>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTwo_Column_TextNon_RepeatRight_TextConfigFilterInput =
	{
		multi?: Maybe<StringQueryOperatorInput>
		allowTargetBlank?: Maybe<BooleanQueryOperatorInput>
		label?: Maybe<StringQueryOperatorInput>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTwo_Column_TextNon_RepeatRight_TextFilterInput =
	{
		type?: Maybe<StringQueryOperatorInput>
		config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTwo_Column_TextNon_RepeatRight_TextConfigFilterInput>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesVideo_Hero =
	{
		type?: Maybe<Scalars["String"]>
		fieldset?: Maybe<Scalars["String"]>
		description?: Maybe<Scalars["String"]>
		icon?: Maybe<Scalars["String"]>
		display?: Maybe<Scalars["String"]>
		non_repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesVideo_HeroNon_Repeat>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesVideo_HeroFilterInput =
	{
		type?: Maybe<StringQueryOperatorInput>
		fieldset?: Maybe<StringQueryOperatorInput>
		description?: Maybe<StringQueryOperatorInput>
		icon?: Maybe<StringQueryOperatorInput>
		display?: Maybe<StringQueryOperatorInput>
		non_repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesVideo_HeroNon_RepeatFilterInput>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesVideo_HeroNon_Repeat =
	{
		text?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesVideo_HeroNon_RepeatText>
		video_thumbnail?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesVideo_HeroNon_RepeatVideo_Thumbnail>
		video?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesVideo_HeroNon_RepeatVideo>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesVideo_HeroNon_RepeatFilterInput =
	{
		text?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesVideo_HeroNon_RepeatTextFilterInput>
		video_thumbnail?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesVideo_HeroNon_RepeatVideo_ThumbnailFilterInput>
		video?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesVideo_HeroNon_RepeatVideoFilterInput>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesVideo_HeroNon_RepeatText =
	{
		type?: Maybe<Scalars["String"]>
		config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesVideo_HeroNon_RepeatTextConfig>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesVideo_HeroNon_RepeatTextConfig =
	{
		multi?: Maybe<Scalars["String"]>
		label?: Maybe<Scalars["String"]>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesVideo_HeroNon_RepeatTextConfigFilterInput =
	{
		multi?: Maybe<StringQueryOperatorInput>
		label?: Maybe<StringQueryOperatorInput>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesVideo_HeroNon_RepeatTextFilterInput =
	{
		type?: Maybe<StringQueryOperatorInput>
		config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesVideo_HeroNon_RepeatTextConfigFilterInput>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesVideo_HeroNon_RepeatVideo =
	{
		type?: Maybe<Scalars["String"]>
		config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesVideo_HeroNon_RepeatVideoConfig>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesVideo_HeroNon_RepeatVideoConfig =
	{
		label?: Maybe<Scalars["String"]>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesVideo_HeroNon_RepeatVideoConfigFilterInput =
	{
		label?: Maybe<StringQueryOperatorInput>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesVideo_HeroNon_RepeatVideoFilterInput =
	{
		type?: Maybe<StringQueryOperatorInput>
		config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesVideo_HeroNon_RepeatVideoConfigFilterInput>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesVideo_HeroNon_RepeatVideo_Thumbnail =
	{
		type?: Maybe<Scalars["String"]>
		config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesVideo_HeroNon_RepeatVideo_ThumbnailConfig>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesVideo_HeroNon_RepeatVideo_ThumbnailConfig =
	{
		label?: Maybe<Scalars["String"]>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesVideo_HeroNon_RepeatVideo_ThumbnailConfigFilterInput =
	{
		label?: Maybe<StringQueryOperatorInput>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesVideo_HeroNon_RepeatVideo_ThumbnailFilterInput =
	{
		type?: Maybe<StringQueryOperatorInput>
		config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesVideo_HeroNon_RepeatVideo_ThumbnailConfigFilterInput>
	}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigFilterInput = {
	choices?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesFilterInput>
}

export type SitePluginPluginOptionsSchemasPageBodyBodyFilterInput = {
	type?: Maybe<StringQueryOperatorInput>
	fieldset?: Maybe<StringQueryOperatorInput>
	config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigFilterInput>
}

export type SitePluginPluginOptionsSchemasPageBodyFilterInput = {
	body?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyFilterInput>
}

export type SitePluginPluginOptionsSchemasPageFilterInput = {
	Main?: Maybe<SitePluginPluginOptionsSchemasPageMainFilterInput>
	Body?: Maybe<SitePluginPluginOptionsSchemasPageBodyFilterInput>
}

export type SitePluginPluginOptionsSchemasPageMain = {
	title?: Maybe<SitePluginPluginOptionsSchemasPageMainTitle>
	uid?: Maybe<SitePluginPluginOptionsSchemasPageMainUid>
	meta_title?: Maybe<SitePluginPluginOptionsSchemasPageMainMeta_Title>
	meta_description?: Maybe<SitePluginPluginOptionsSchemasPageMainMeta_Description>
	redirect_to?: Maybe<SitePluginPluginOptionsSchemasPageMainRedirect_To>
	redirect_is_permanent?: Maybe<SitePluginPluginOptionsSchemasPageMainRedirect_Is_Permanent>
}

export type SitePluginPluginOptionsSchemasPageMainFilterInput = {
	title?: Maybe<SitePluginPluginOptionsSchemasPageMainTitleFilterInput>
	uid?: Maybe<SitePluginPluginOptionsSchemasPageMainUidFilterInput>
	meta_title?: Maybe<SitePluginPluginOptionsSchemasPageMainMeta_TitleFilterInput>
	meta_description?: Maybe<SitePluginPluginOptionsSchemasPageMainMeta_DescriptionFilterInput>
	redirect_to?: Maybe<SitePluginPluginOptionsSchemasPageMainRedirect_ToFilterInput>
	redirect_is_permanent?: Maybe<SitePluginPluginOptionsSchemasPageMainRedirect_Is_PermanentFilterInput>
}

export type SitePluginPluginOptionsSchemasPageMainMeta_Description = {
	type?: Maybe<Scalars["String"]>
	config?: Maybe<SitePluginPluginOptionsSchemasPageMainMeta_DescriptionConfig>
}

export type SitePluginPluginOptionsSchemasPageMainMeta_DescriptionConfig = {
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
		type?: Maybe<StringQueryOperatorInput>
		config?: Maybe<SitePluginPluginOptionsSchemasPageMainMeta_DescriptionConfigFilterInput>
	}

export type SitePluginPluginOptionsSchemasPageMainMeta_Title = {
	type?: Maybe<Scalars["String"]>
	config?: Maybe<SitePluginPluginOptionsSchemasPageMainMeta_TitleConfig>
}

export type SitePluginPluginOptionsSchemasPageMainMeta_TitleConfig = {
	label?: Maybe<Scalars["String"]>
	placeholder?: Maybe<Scalars["String"]>
}

export type SitePluginPluginOptionsSchemasPageMainMeta_TitleConfigFilterInput =
	{
		label?: Maybe<StringQueryOperatorInput>
		placeholder?: Maybe<StringQueryOperatorInput>
	}

export type SitePluginPluginOptionsSchemasPageMainMeta_TitleFilterInput = {
	type?: Maybe<StringQueryOperatorInput>
	config?: Maybe<SitePluginPluginOptionsSchemasPageMainMeta_TitleConfigFilterInput>
}

export type SitePluginPluginOptionsSchemasPageMainRedirect_Is_Permanent = {
	type?: Maybe<Scalars["String"]>
	config?: Maybe<SitePluginPluginOptionsSchemasPageMainRedirect_Is_PermanentConfig>
}

export type SitePluginPluginOptionsSchemasPageMainRedirect_Is_PermanentConfig =
	{
		placeholder_false?: Maybe<Scalars["String"]>
		placeholder_true?: Maybe<Scalars["String"]>
		default_value?: Maybe<Scalars["Boolean"]>
		label?: Maybe<Scalars["String"]>
	}

export type SitePluginPluginOptionsSchemasPageMainRedirect_Is_PermanentConfigFilterInput =
	{
		placeholder_false?: Maybe<StringQueryOperatorInput>
		placeholder_true?: Maybe<StringQueryOperatorInput>
		default_value?: Maybe<BooleanQueryOperatorInput>
		label?: Maybe<StringQueryOperatorInput>
	}

export type SitePluginPluginOptionsSchemasPageMainRedirect_Is_PermanentFilterInput =
	{
		type?: Maybe<StringQueryOperatorInput>
		config?: Maybe<SitePluginPluginOptionsSchemasPageMainRedirect_Is_PermanentConfigFilterInput>
	}

export type SitePluginPluginOptionsSchemasPageMainRedirect_To = {
	type?: Maybe<Scalars["String"]>
	config?: Maybe<SitePluginPluginOptionsSchemasPageMainRedirect_ToConfig>
}

export type SitePluginPluginOptionsSchemasPageMainRedirect_ToConfig = {
	label?: Maybe<Scalars["String"]>
	placeholder?: Maybe<Scalars["String"]>
}

export type SitePluginPluginOptionsSchemasPageMainRedirect_ToConfigFilterInput =
	{
		label?: Maybe<StringQueryOperatorInput>
		placeholder?: Maybe<StringQueryOperatorInput>
	}

export type SitePluginPluginOptionsSchemasPageMainRedirect_ToFilterInput = {
	type?: Maybe<StringQueryOperatorInput>
	config?: Maybe<SitePluginPluginOptionsSchemasPageMainRedirect_ToConfigFilterInput>
}

export type SitePluginPluginOptionsSchemasPageMainTitle = {
	type?: Maybe<Scalars["String"]>
	config?: Maybe<SitePluginPluginOptionsSchemasPageMainTitleConfig>
}

export type SitePluginPluginOptionsSchemasPageMainTitleConfig = {
	single?: Maybe<Scalars["String"]>
	label?: Maybe<Scalars["String"]>
}

export type SitePluginPluginOptionsSchemasPageMainTitleConfigFilterInput = {
	single?: Maybe<StringQueryOperatorInput>
	label?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsSchemasPageMainTitleFilterInput = {
	type?: Maybe<StringQueryOperatorInput>
	config?: Maybe<SitePluginPluginOptionsSchemasPageMainTitleConfigFilterInput>
}

export type SitePluginPluginOptionsSchemasPageMainUid = {
	type?: Maybe<Scalars["String"]>
	config?: Maybe<SitePluginPluginOptionsSchemasPageMainUidConfig>
}

export type SitePluginPluginOptionsSchemasPageMainUidConfig = {
	label?: Maybe<Scalars["String"]>
}

export type SitePluginPluginOptionsSchemasPageMainUidConfigFilterInput = {
	label?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsSchemasPageMainUidFilterInput = {
	type?: Maybe<StringQueryOperatorInput>
	config?: Maybe<SitePluginPluginOptionsSchemasPageMainUidConfigFilterInput>
}

export type SitePluginPluginOptionsSchemasSettings = {
	Main?: Maybe<SitePluginPluginOptionsSchemasSettingsMain>
	Redirects?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirects>
}

export type SitePluginPluginOptionsSchemasSettingsFilterInput = {
	Main?: Maybe<SitePluginPluginOptionsSchemasSettingsMainFilterInput>
	Redirects?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsFilterInput>
}

export type SitePluginPluginOptionsSchemasSettingsMain = {
	title?: Maybe<SitePluginPluginOptionsSchemasSettingsMainTitle>
	site_name?: Maybe<SitePluginPluginOptionsSchemasSettingsMainSite_Name>
	site_description?: Maybe<SitePluginPluginOptionsSchemasSettingsMainSite_Description>
	site_copyright?: Maybe<SitePluginPluginOptionsSchemasSettingsMainSite_Copyright>
	site_disclaimer?: Maybe<SitePluginPluginOptionsSchemasSettingsMainSite_Disclaimer>
}

export type SitePluginPluginOptionsSchemasSettingsMainFilterInput = {
	title?: Maybe<SitePluginPluginOptionsSchemasSettingsMainTitleFilterInput>
	site_name?: Maybe<SitePluginPluginOptionsSchemasSettingsMainSite_NameFilterInput>
	site_description?: Maybe<SitePluginPluginOptionsSchemasSettingsMainSite_DescriptionFilterInput>
	site_copyright?: Maybe<SitePluginPluginOptionsSchemasSettingsMainSite_CopyrightFilterInput>
	site_disclaimer?: Maybe<SitePluginPluginOptionsSchemasSettingsMainSite_DisclaimerFilterInput>
}

export type SitePluginPluginOptionsSchemasSettingsMainSite_Copyright = {
	type?: Maybe<Scalars["String"]>
	config?: Maybe<SitePluginPluginOptionsSchemasSettingsMainSite_CopyrightConfig>
}

export type SitePluginPluginOptionsSchemasSettingsMainSite_CopyrightConfig = {
	multi?: Maybe<Scalars["String"]>
	label?: Maybe<Scalars["String"]>
}

export type SitePluginPluginOptionsSchemasSettingsMainSite_CopyrightConfigFilterInput =
	{
		multi?: Maybe<StringQueryOperatorInput>
		label?: Maybe<StringQueryOperatorInput>
	}

export type SitePluginPluginOptionsSchemasSettingsMainSite_CopyrightFilterInput =
	{
		type?: Maybe<StringQueryOperatorInput>
		config?: Maybe<SitePluginPluginOptionsSchemasSettingsMainSite_CopyrightConfigFilterInput>
	}

export type SitePluginPluginOptionsSchemasSettingsMainSite_Description = {
	type?: Maybe<Scalars["String"]>
	config?: Maybe<SitePluginPluginOptionsSchemasSettingsMainSite_DescriptionConfig>
}

export type SitePluginPluginOptionsSchemasSettingsMainSite_DescriptionConfig = {
	single?: Maybe<Scalars["String"]>
	label?: Maybe<Scalars["String"]>
}

export type SitePluginPluginOptionsSchemasSettingsMainSite_DescriptionConfigFilterInput =
	{
		single?: Maybe<StringQueryOperatorInput>
		label?: Maybe<StringQueryOperatorInput>
	}

export type SitePluginPluginOptionsSchemasSettingsMainSite_DescriptionFilterInput =
	{
		type?: Maybe<StringQueryOperatorInput>
		config?: Maybe<SitePluginPluginOptionsSchemasSettingsMainSite_DescriptionConfigFilterInput>
	}

export type SitePluginPluginOptionsSchemasSettingsMainSite_Disclaimer = {
	type?: Maybe<Scalars["String"]>
	config?: Maybe<SitePluginPluginOptionsSchemasSettingsMainSite_DisclaimerConfig>
}

export type SitePluginPluginOptionsSchemasSettingsMainSite_DisclaimerConfig = {
	multi?: Maybe<Scalars["String"]>
	allowTargetBlank?: Maybe<Scalars["Boolean"]>
	label?: Maybe<Scalars["String"]>
}

export type SitePluginPluginOptionsSchemasSettingsMainSite_DisclaimerConfigFilterInput =
	{
		multi?: Maybe<StringQueryOperatorInput>
		allowTargetBlank?: Maybe<BooleanQueryOperatorInput>
		label?: Maybe<StringQueryOperatorInput>
	}

export type SitePluginPluginOptionsSchemasSettingsMainSite_DisclaimerFilterInput =
	{
		type?: Maybe<StringQueryOperatorInput>
		config?: Maybe<SitePluginPluginOptionsSchemasSettingsMainSite_DisclaimerConfigFilterInput>
	}

export type SitePluginPluginOptionsSchemasSettingsMainSite_Name = {
	type?: Maybe<Scalars["String"]>
	config?: Maybe<SitePluginPluginOptionsSchemasSettingsMainSite_NameConfig>
}

export type SitePluginPluginOptionsSchemasSettingsMainSite_NameConfig = {
	single?: Maybe<Scalars["String"]>
	label?: Maybe<Scalars["String"]>
}

export type SitePluginPluginOptionsSchemasSettingsMainSite_NameConfigFilterInput =
	{
		single?: Maybe<StringQueryOperatorInput>
		label?: Maybe<StringQueryOperatorInput>
	}

export type SitePluginPluginOptionsSchemasSettingsMainSite_NameFilterInput = {
	type?: Maybe<StringQueryOperatorInput>
	config?: Maybe<SitePluginPluginOptionsSchemasSettingsMainSite_NameConfigFilterInput>
}

export type SitePluginPluginOptionsSchemasSettingsMainTitle = {
	type?: Maybe<Scalars["String"]>
	config?: Maybe<SitePluginPluginOptionsSchemasSettingsMainTitleConfig>
}

export type SitePluginPluginOptionsSchemasSettingsMainTitleConfig = {
	single?: Maybe<Scalars["String"]>
	label?: Maybe<Scalars["String"]>
}

export type SitePluginPluginOptionsSchemasSettingsMainTitleConfigFilterInput = {
	single?: Maybe<StringQueryOperatorInput>
	label?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsSchemasSettingsMainTitleFilterInput = {
	type?: Maybe<StringQueryOperatorInput>
	config?: Maybe<SitePluginPluginOptionsSchemasSettingsMainTitleConfigFilterInput>
}

export type SitePluginPluginOptionsSchemasSettingsRedirects = {
	redirects?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirects>
}

export type SitePluginPluginOptionsSchemasSettingsRedirectsFilterInput = {
	redirects?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsFilterInput>
}

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirects = {
	type?: Maybe<Scalars["String"]>
	config?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfig>
}

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfig = {
	fields?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFields>
	label?: Maybe<Scalars["String"]>
}

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFields =
	{
		from_path?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsFrom_Path>
		to_path?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsTo_Path>
		is_permanent?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsIs_Permanent>
	}

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsFilterInput =
	{
		from_path?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsFrom_PathFilterInput>
		to_path?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsTo_PathFilterInput>
		is_permanent?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsIs_PermanentFilterInput>
	}

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsFrom_Path =
	{
		type?: Maybe<Scalars["String"]>
		config?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsFrom_PathConfig>
	}

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsFrom_PathConfig =
	{
		label?: Maybe<Scalars["String"]>
	}

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsFrom_PathConfigFilterInput =
	{
		label?: Maybe<StringQueryOperatorInput>
	}

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsFrom_PathFilterInput =
	{
		type?: Maybe<StringQueryOperatorInput>
		config?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsFrom_PathConfigFilterInput>
	}

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsIs_Permanent =
	{
		type?: Maybe<Scalars["String"]>
		config?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsIs_PermanentConfig>
	}

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsIs_PermanentConfig =
	{
		placeholder_false?: Maybe<Scalars["String"]>
		placeholder_true?: Maybe<Scalars["String"]>
		default_value?: Maybe<Scalars["Boolean"]>
		label?: Maybe<Scalars["String"]>
	}

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsIs_PermanentConfigFilterInput =
	{
		placeholder_false?: Maybe<StringQueryOperatorInput>
		placeholder_true?: Maybe<StringQueryOperatorInput>
		default_value?: Maybe<BooleanQueryOperatorInput>
		label?: Maybe<StringQueryOperatorInput>
	}

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsIs_PermanentFilterInput =
	{
		type?: Maybe<StringQueryOperatorInput>
		config?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsIs_PermanentConfigFilterInput>
	}

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsTo_Path =
	{
		type?: Maybe<Scalars["String"]>
		config?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsTo_PathConfig>
	}

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsTo_PathConfig =
	{
		label?: Maybe<Scalars["String"]>
	}

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsTo_PathConfigFilterInput =
	{
		label?: Maybe<StringQueryOperatorInput>
	}

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsTo_PathFilterInput =
	{
		type?: Maybe<StringQueryOperatorInput>
		config?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsTo_PathConfigFilterInput>
	}

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFilterInput =
	{
		fields?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsFilterInput>
		label?: Maybe<StringQueryOperatorInput>
	}

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsFilterInput =
	{
		type?: Maybe<StringQueryOperatorInput>
		config?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFilterInput>
	}

export type SitePluginSortInput = {
	fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>
	order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SiteSiteMetadata = {
	title?: Maybe<Scalars["String"]>
	description?: Maybe<Scalars["String"]>
	titleShort?: Maybe<Scalars["String"]>
	siteUrl?: Maybe<Scalars["String"]>
}

export type SiteSiteMetadataFilterInput = {
	title?: Maybe<StringQueryOperatorInput>
	description?: Maybe<StringQueryOperatorInput>
	titleShort?: Maybe<StringQueryOperatorInput>
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

export type SettingsQueryVariables = Exact<{ [key: string]: never }>

export type SettingsQuery = {
	prismicSettings?: Maybe<{
		_previewable: string
		data?: Maybe<{
			site_name?: Maybe<{ text?: Maybe<string> }>
			site_disclaimer?: Maybe<{ text?: Maybe<string> }>
			site_description?: Maybe<{ text?: Maybe<string> }>
			site_copyright?: Maybe<{ text?: Maybe<string>; html?: Maybe<string> }>
		}>
	}>
}

export type CarouselFragment = {
	primary?: Maybe<{
		button_text?: Maybe<string>
		subheading?: Maybe<{ text?: Maybe<string> }>
		heading?: Maybe<{ text?: Maybe<string> }>
		button_link?: Maybe<{ url?: Maybe<string> }>
	}>
	items?: Maybe<
		Array<
			Maybe<{ image?: Maybe<{ alt?: Maybe<string>; url?: Maybe<string> }> }>
		>
	>
}

export type FilterableEventsFragment = {
	items?: Maybe<
		Array<
			Maybe<{
				color?: Maybe<string>
				event?: Maybe<{
					url?: Maybe<string>
					document?: Maybe<{
						_previewable: string
						data?: Maybe<{
							date?: Maybe<unknown>
							type?: Maybe<string>
							description?: Maybe<{ html?: Maybe<string> }>
							title?: Maybe<{ text?: Maybe<string> }>
						}>
					}>
				}>
			}>
		>
	>
}

export type GradientTextFragment = {
	primary?: Maybe<{ text?: Maybe<{ text?: Maybe<string> }> }>
}

export type IntroductionFragment = {
	primary?: Maybe<{
		color?: Maybe<string>
		heading?: Maybe<{ text?: Maybe<string> }>
		text?: Maybe<{ html?: Maybe<string> }>
	}>
}

export type TwoColumnTextFragment = {
	primary?: Maybe<{
		left_text?: Maybe<{ html?: Maybe<string> }>
		right_text?: Maybe<{ html?: Maybe<string> }>
	}>
}

export type VideoHeroFragment = {
	primary?: Maybe<{
		text?: Maybe<{ text?: Maybe<string> }>
		video_thumbnail?: Maybe<{ alt?: Maybe<string>; url?: Maybe<string> }>
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
		data?: Maybe<{
			meta_description?: Maybe<string>
			meta_title?: Maybe<string>
			title?: Maybe<{ text?: Maybe<string> }>
			body?: Maybe<
				Array<
					Maybe<
						| { __typename: "PrismicPageDataBodyAnchor" }
						| ({ __typename: "PrismicPageDataBodyCarousel" } & CarouselFragment)
						| ({
								__typename: "PrismicPageDataBodyFilterableEvents"
						  } & FilterableEventsFragment)
						| ({
								__typename: "PrismicPageDataBodyGradientText"
						  } & GradientTextFragment)
						| ({
								__typename: "PrismicPageDataBodyIntroduction"
						  } & IntroductionFragment)
						| ({
								__typename: "PrismicPageDataBodyTwoColumnText"
						  } & TwoColumnTextFragment)
						| ({
								__typename: "PrismicPageDataBodyVideoHero"
						  } & VideoHeroFragment)
					>
				>
			>
		}>
	}>
}
