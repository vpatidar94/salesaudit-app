/**
 * app-data-type
 *
 * - this will show message '1' which is number representation of enum member
 * console.log(DbKey.TOKEN);
 *
 * - this will show message 'TOKEN' as string representation of enum member
 * console.log(DbKey[DbKey.TOKEN]);
 *
 * To get number value of enum member from string value, use this:
 * - this will show message '2'
 * console.log(DbKey['TOKEN']);
 *
 * - this will show message 'TOKEN'
 * console.log(DbKey[2]);
 */
export enum DbKey {

  /* ************************************ Static Fields ************************************ */

  TOKEN_JWT, /* JWT - String */

}
