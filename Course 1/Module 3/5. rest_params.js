function setPermissionLevel(permissionLevel, ...rest) {
  rest.forEach((element) => {
    console.log(`${element} now has ${permissionLevel} level access.`);
  });
}

setPermissionLevel("admin", "Dave", "Sally", "Mike", "Clare");
