# A very dumb and basic release script.
# Echos added to illustrate what could be done.

# These release commands should ideally only be triggered
# by some semantic versioning plugin based on the commit 
# message.

build:
	echo Building..
	echo Testing..

release-major: build
	yarn version major
	echo Releasing package to registry for external use..

release-minor: build
	yarn version minor
	echo Releasing package to registry for external use..