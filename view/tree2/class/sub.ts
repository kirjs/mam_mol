namespace $ {
	const err = $mol_view_tree2_error_str

	export function $mol_view_tree2_class_sub(
		this: $mol_ambient_context,
		klass: $mol_tree2
	) {
		if( !class_regex.test( klass.type ) ) return this.$mol_fail(
			err `Wrong class name at ${klass.span}` 
		)

		const subclass = klass.kids.length === 1 ? klass.kids[0] : undefined

		if (! subclass) return this.$mol_fail(
			err`No subclass at ${klass.span}`
		)

		if( !class_regex.test( subclass.type ) ) return this.$mol_fail(
			err`Wrong subclass name at ${subclass.span}`
		)

		return subclass
	}

	const class_regex = /^\$\w+$/
}
