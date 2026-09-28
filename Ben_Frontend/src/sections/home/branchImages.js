// Branch photos, keyed by the branch's `locations.id` in Supabase so a rename
// in the admin dashboard doesn't break the mapping. Branches without an entry
// show a neutral placeholder.
//
// To add one: drop `src/assets/branches/<city>.jpg` and add
//   import benin from "../../assets/branches/benin.jpg";
//   "06497d52-711b-48d8-98cc-02d1686c23c1": benin,
const branchImages = {};

export default branchImages;
