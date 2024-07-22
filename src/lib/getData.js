export default async function getData(api) {
  const res = await fetch(process.env.API + api, {
    cache: "no-store",
  });
  return res.json();
}
