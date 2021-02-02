export default ({ route, store }) => {
  const title = route.meta.find(meta => meta.title)?.title ?? 'This is the default title'
  store.commit('setTitle', title)
}
