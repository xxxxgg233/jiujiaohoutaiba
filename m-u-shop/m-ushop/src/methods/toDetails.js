export default function toDetails(id) {
    this.$router.push({
        path: "/details",
        query: {
          id
        }
      });
}

