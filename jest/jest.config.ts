export default {
	collectCoverageFrom: [
		'src/**/*.{ts,tsx}',
		'!src/**/*.d.ts',
	],
	// globals: {
	// 	'ts-jest': {
	// 		tsConfig: {
	// 			esModuleInterop: true
	// 		},
	// 	}
	// },
	testEnvironment: 'jsdom',
	transform: {
		'^.+\\.(js|jsx|ts|tsx)$': [
			'ts-jest',
			{
				tsconfig: {
					sourceMap: true, // Needed to get correct Uncovered Line numbers
				}
			}
		]
	},
	// tsConfig: './jest/tsconfig.json',
}
