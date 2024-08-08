import accessEnum from "@/access/accessEnum";

/**
 检查权限，判断当前用户是否具有某个权限
 @param loginUser 登录用户
 @param needAccess 需要的权限
 @return boolean 是否有权限
 */

// 原始代码
const chickAccess = (loginUser: any, needAccess = accessEnum.NOT_LOGIN) => {
  const loginUserAccess = loginUser?.userRole ?? accessEnum.NOT_LOGIN;

  // 如果不需要权限，直接跳过
  if (needAccess === accessEnum.NOT_LOGIN) {
    return true;
  }

  // 如果是需要用户权限
  if (needAccess === accessEnum.USER) {
    if (loginUserAccess === accessEnum.NOT_LOGIN) {
      return false;
    }
  }

  // 如果需要的是admin
  if (needAccess === accessEnum.ADMIN) {
    if (loginUserAccess !== accessEnum.ADMIN) {
      return false;
    }
  }
  return true;
};

// 简化代码
// const chickAccess = (loginUser: any, needAccess = accessEnum.NOT_LOGIN) => {
//   const loginUserAccess = loginUser?.userRole ?? accessEnum.NOT_LOGIN;
//   switch (needAccess) {
//     case accessEnum.NOT_LOGIN:
//       return true;
//     case accessEnum.USER:
//       return loginUserAccess !== accessEnum.NOT_LOGIN;
//     case accessEnum.ADMIN:
//       return loginUserAccess === accessEnum.ADMIN;
//     default:
//       return true; // 对于未知的权限，默认允许访问
//   }
// };

export default chickAccess;
