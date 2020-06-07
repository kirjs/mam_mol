namespace $ {
	export class $mol_view_tree2_test_sample_array extends $mol_view {

		/**
		 * ```tree
		 * typed /string
		 * 	\some1
		 * 	\some2
		 * ```
		 */
		typed() {
			return [
				"some1",
				"some2"
			] as readonly string[]
		}

		/**
		 * ```tree
		 * const /const
		 * 	\some1
		 * 	\some2
		 * ```
		 */
		const() {
			return [
				"some1",
				"some2"
			] as const
		}

		/**
		 * ```tree
		 * super_prop /
		 * 	\some1
		 * 	^
		 * 	\some2
		 * 	^ test
		 * ```
		 */
		super_prop() {
			return [
				"some1",
				...super.super_prop(),
				"some2",
				...this.test()
			] as readonly any[]
		}

		/**
		 * ```tree
		 * simple /
		 * 	\some
		 * 	12317
		 * 	true
		 * 	null
		 * ```
		 */
		simple() {
			return [
				"some",
				12317,
				true,
				null as any
			] as readonly any[]
		}

		/**
		 * ```tree
		 * arr /readonly(number)[]
		 * ```
		 */
		arr() {
			return [

			] as readonly (readonly(number)[])[]
		}

		/**
		 * ```tree
		 * complex /
		 * 	/
		 * 		\test1
		 * 		\test2
		 * 	*
		 * 		str \some
		 * 		nul null
		 * ```
		 */
		complex() {
			return [
				[
					"test1",
					"test2"
				] as readonly any[],
				{
					str: "some",
					nul: null as any
				}
			] as readonly any[]
		}
	}

}
