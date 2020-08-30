namespace $ {
	export class $mol_button extends $mol_view {

		/**
		 * ```tree
		 * enabled true
		 * ```
		 */
		enabled() {
			return true
		}

		/**
		 * ```tree
		 * minimal_height 40
		 * ```
		 */
		minimal_height() {
			return 40
		}

		/**
		 * ```tree
		 * click?event null
		 * ```
		 */
		@ $mol_mem
		click(event?: any) {
			if ( event !== undefined ) return event
			return null as any
		}

		/**
		 * ```tree
		 * event_click?event null
		 * ```
		 */
		@ $mol_mem
		event_click(event?: any) {
			if ( event !== undefined ) return event
			return null as any
		}

		/**
		 * ```tree
		 * event *
		 * 	^
		 * 	click?event <=> event_activate?event null
		 * 	keypress?event <=> event_key_press?event null
		 * ```
		 */
		event() {
			return {
				...super.event(),
				click: (event?: any) => this.event_activate(event),
				keypress: (event?: any) => this.event_key_press(event)
			}
		}

		/**
		 * ```tree
		 * event_activate?event null
		 * ```
		 */
		@ $mol_mem
		event_activate(event?: any) {
			if ( event !== undefined ) return event
			return null as any
		}

		/**
		 * ```tree
		 * event_key_press?event null
		 * ```
		 */
		@ $mol_mem
		event_key_press(event?: any) {
			if ( event !== undefined ) return event
			return null as any
		}

		/**
		 * ```tree
		 * attr *
		 * 	^
		 * 	disabled <= disabled false
		 * 	role \button
		 * 	tabindex <= tab_index 0
		 * 	title <= hint_or_error <= hint \
		 * ```
		 */
		attr() {
			return {
				...super.attr(),
				disabled: this.disabled(),
				role: "button",
				tabindex: this.tab_index(),
				title: this.hint_or_error()
			}
		}

		/**
		 * ```tree
		 * disabled false
		 * ```
		 */
		disabled() {
			return false
		}

		/**
		 * ```tree
		 * tab_index 0
		 * ```
		 */
		tab_index() {
			return 0
		}

		/**
		 * ```tree
		 * hint_or_error <= hint \
		 * ```
		 */
		hint_or_error() {
			return this.hint()
		}

		/**
		 * ```tree
		 * hint \
		 * ```
		 */
		hint() {
			return ""
		}

		/**
		 * ```tree
		 * sub /$mol_view_content <= title
		 * ```
		 */
		sub() {
			return [
				this.title()
			] as readonly $mol_view_content[]
		}

		/**
		 * ```tree
		 * Speck $mol_speck
		 * ```
		 */
		@ $mol_mem
		Speck() {
			const obj = new this.$.$mol_speck()

			return obj
		}
	}

}
