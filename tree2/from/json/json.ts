namespace $ {

	export function $mol_tree2_from_json( json: any, span = $mol_span.unknown ): $mol_tree2 {

		switch( true ) {

			case typeof json === 'boolean':
			case typeof json === 'number':
			case json === null:
			{
				return new $mol_tree2( String( json ) , '' , [] , span )
			}
			
			case typeof json === 'string':
			{
				return $mol_tree2.data( json as string , [], span )
			}

			case Array.isArray( json ):
			{
				const sub = ( json as any[] ).map( json => $mol_tree2_from_json( json , span ) )
				return new $mol_tree2( '/' , '', sub, span )
			}

			case json instanceof Date:
			{
				return new $mol_tree2( '', ( json as Date ).toISOString() , [] , span )
			}
		
		}

		if( typeof json.toJSON === 'function' ) {
			return $mol_tree2_from_json( json.toJSON() )
		}

		if( json instanceof Error ) {
			const { name , message , stack } = json
			json = { ... json, name, message, stack }
		}

		const sub = [] as $mol_tree2[]
		
		for( var key in json ) {

			const val = json[ key ]

			if( val === undefined ) continue

			const subsub = $mol_tree2_from_json( val, span )
			
			if( /^[^\n\t\\ ]+$/.test( key ) ) {
				sub.push( new $mol_tree2( key, '', [ subsub ], span ) )
			} else {
				sub.push( $mol_tree2.data( key, [ subsub ], span ) )
			}
			
		}
		
		return new $mol_tree2( '*' , '', sub , span )
			
	}

}
